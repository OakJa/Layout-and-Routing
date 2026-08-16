import Link from "next/link";
import { LayoutDashboard, MapPinned, ArrowLeftCircle } from "lucide-react";

const navItems = [
  { href: "/admin/place-management", label: "จัดการสถานที่", icon: MapPinned },
];

export default function AdminSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-800 bg-slate-900 text-slate-200 lg:flex">
      <div className="flex items-center gap-2 px-6 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500 text-slate-900">
          <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold text-white">Backoffice</p>
          <p className="text-xs text-slate-400">Campus Guide Admin</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-800 px-3 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <ArrowLeftCircle className="h-4 w-4" aria-hidden="true" />
          กลับหน้าเว็บหลัก
        </Link>
      </div>
    </aside>
  );
}
