import Btn from "../components/ui/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/404-arte.mp4"
            />
            <h1 className="text-5xl text-center font-bold text-sapin">404</h1>
            <h2 className="text-2xl text-center font-bold text-sapin">Page Not Found</h2>
            <p className="text-sapin text-center">The page you are looking for does not exist.</p>
            <div className="flex justify-center mt-4">
                <Btn label="Retour à l'accueil" href="/" variant="sapin" size="sm" showArrow={false} />
            </div>
        </div>
    );
}
