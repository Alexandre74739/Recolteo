import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

const MAX_LOGIN_ATTEMPTS = 10;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const MAX_CONTACT_ATTEMPTS = 5;
const CONTACT_WINDOW_MS = 60 * 60 * 1000;

function getIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

async function checkRateLimit(key: string, maxAttempts: number, windowMs: number): Promise<boolean> {
  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
  const { data } = await admin.rpc("check_rate_limit", {
    p_key: key,
    p_max_attempts: maxAttempts,
    p_window_ms: windowMs,
  });
  return data === true;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname.startsWith("/login");
  const isPublicPage =
    pathname === "/" ||
    pathname === "/decouvrir-recolteo" ||
    pathname === "/contact" ||
    pathname === "/mentions-legales" ||
    pathname === "/politique-de-confidentialite" ||
    pathname === "/cookies";

  if (request.method === "POST" && request.headers.has("next-action")) {
    const ip = getIp(request);

    if (isLoginPage) {
      const blocked = await checkRateLimit(ip, MAX_LOGIN_ATTEMPTS, LOGIN_WINDOW_MS).catch(() => false);
      if (blocked) {
        return new NextResponse("Trop de tentatives. Réessayez dans 15 minutes.", {
          status: 429,
          headers: { "Retry-After": "900", "Content-Type": "text/plain; charset=utf-8" },
        });
      }
    }

    if (pathname.startsWith("/contact")) {
      const blocked = await checkRateLimit(`contact:${ip}`, MAX_CONTACT_ATTEMPTS, CONTACT_WINDOW_MS).catch(() => false);
      if (blocked) {
        return new NextResponse("Trop de messages. Réessayez dans une heure.", {
          status: 429,
          headers: { "Retry-After": "3600", "Content-Type": "text/plain; charset=utf-8" },
        });
      }
    }
  }

  if (isPublicPage) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }));

  if (!user && !isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (user && isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
