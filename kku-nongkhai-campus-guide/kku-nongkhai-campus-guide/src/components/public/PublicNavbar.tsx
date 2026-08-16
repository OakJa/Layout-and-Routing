import Link from "next/link";
import { Compass, ShieldCheck } from "lucide-react";

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/places", label: "สถานที่" },
  { href: "/about", label: "เกี่ยวกับฉัน" },
];

export default function PublicNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav
        aria-label="เมนูหลัก"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Compass className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display leading-tight">
            <span className="block text-sm font-semibold text-brand-700">
              Campus Guide
            </span>
            <span className="block text-xs text-slate-500">
              มข. วิทยาเขตหนองคาย
            </span>
          </span>
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-brand-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/admin/place-management"
          className="hidden items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:border-brand-300 hover:text-brand-700 sm:flex"
        >
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          Backoffice
        </Link>
      </nav>
    </header>
  );
}
