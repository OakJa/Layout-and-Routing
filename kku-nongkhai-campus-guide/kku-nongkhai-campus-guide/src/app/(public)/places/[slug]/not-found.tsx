import Link from "next/link";
import { Compass } from "lucide-react";

export default function PlaceNotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Compass className="h-8 w-8" aria-hidden="true" />
      </span>
      <h1 className="font-display mt-6 text-3xl font-bold">ไม่พบสถานที่นี้</h1>
      <p className="mt-3 text-slate-500">
        ลิงก์อาจไม่ถูกต้อง หรือสถานที่นี้ถูกย้าย/ลบออกจากระบบแล้ว
      </p>
      <Link
        href="/places"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        ดูสถานที่ทั้งหมด
      </Link>
    </main>
  );
}
