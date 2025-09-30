
import "./globals.css";
import Link from "next/link";
import StickyCTA from "@/components/StickyCTA";

export const metadata = {
  title: { default: "Wallpaper Removal Pro — GTA", template: "%s — Wallpaper Removal Pro" },
  description: "Wallpaper removal, popcorn ceiling removal, and interior painting across Toronto, Mississauga, Oakville, Burlington, and Hamilton. Fast quotes, clean jobs, 3‑year warranty.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container-x py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Wallpaper Removal Pro" className="w-auto h-[280px] sm:h-[100px] md:h-[200px]" />
          <span className="text-lg md:text-xl font-semibold leading-none">Wallpaper Removal Pro</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/services/wallpaper-removal/" className="hover:underline">Wallpaper Removal</Link>
          <Link href="/services/popcorn-ceiling-removal/" className="hover:underline">Popcorn Ceiling</Link>
          <Link href="/services/interior-painting/" className="hover:underline">Interior Painting</Link>
          <Link href="/quote/" className="btn-cta">Get Quote</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="container-x py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold">Wallpaper Removal Pro</div>
          <p className="mt-2 text-sm text-gray-600">Serving Toronto · Mississauga · Oakville · Burlington · Hamilton</p>
          <p className="mt-3 text-sm text-gray-600">3‑year Workmanship Warranty</p>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/contact/">Contact</Link></li>
            <li><Link className="hover:underline" href="/services/wallpaper-removal/">Wallpaper Removal</Link></li>
            <li><Link className="hover:underline" href="/services/popcorn-ceiling-removal/">Popcorn Ceiling Removal</Link></li>
            <li><Link className="hover:underline" href="/services/interior-painting/">Interior Painting</Link></li>
            <li><Link className="hover:underline" href="/quote/">Get Quote</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <p className="mt-3 text-sm text-gray-600">© 2025 Wallpaper Removal Pro</p>
        </div>
      </div>
    </footer>
  );
}
