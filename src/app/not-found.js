import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 font-sans px-4 py-12">
      <div className="bg-white/80 rounded-xl shadow-lg p-10 flex flex-col items-center">
        <div className="text-6xl mb-4">🎶</div>
        <h1 className="text-4xl font-bold text-primary mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-center mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
          <br />
          Let the music guide you back home.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-indigo-700 text-white rounded-lg font-semibold shadow hover:bg-indigo-900 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
