import { CookieJar } from "tough-cookie";

const jar = new CookieJar();

const response = await fetch("https://api-externe.com/login", {
  method: "POST",
  body: JSON.stringify({ email: "...", password: "..." }),
});

const setCookie = response.headers.get("set-cookie");
if (setCookie) {
  await jar.setCookie(setCookie, "https://api-externe.com");
}

const cookies = await jar.getCookieString("https://api-externe.com");

const data = await fetch("https://api-externe.com/donnees", {
  headers: { Cookie: cookies },
});