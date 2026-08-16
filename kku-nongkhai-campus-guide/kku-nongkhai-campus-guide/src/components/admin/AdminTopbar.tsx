import { ShieldCheck } from "lucide-react";

export default function AdminTopbar() {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <p className="font-display text-sm font-semibold text-slate-700">
        แผงควบคุมสำหรับผู้ดูแลระบบ
      </p>
      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
        Admin mode
      </span>
    </div>
  );
}
