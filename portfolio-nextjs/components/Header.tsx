import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-10 py-8">
        <Link href="/" className="text-xs tracking-wide">
          MIGUEL VALINHO
        </Link>
        <nav className="flex items-center gap-6 text-xs tracking-wide">
          <Link href="/sobre" className="link-underline">
            SOBRE
          </Link>
          <Link href="/contato" className="link-underline">
            CONTATO
          </Link>
        </nav>
      </div>
    </header>
  );
}
