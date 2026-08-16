import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Pencil, Plus } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { categoryLabel, places } from "@/data/places";

export const metadata: Metadata = {
  title: "จัดการสถานที่ | Backoffice",
  description: "รายการสถานที่ทั้งหมดสำหรับผู้ดูแลระบบ",
};

export default function PlaceManagementPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <Breadcrumbs items={[{ label: "จัดการสถานที่" }]} className="mb-6" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">จัดการสถานที่</h1>
          <p className="mt-1 text-sm text-slate-500">
            รายการสถานที่ทั้งหมดในระบบ ทั้งหมด {places.length} รายการ
          </p>
        </div>
        <button
          type="button"
          disabled
          title="ยังไม่เปิดใช้งานในเวอร์ชันนี้"
          className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-500"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          เพิ่มสถานที่ใหม่
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-5 py-3 text-left font-semibold text-slate-600">
                สถานที่
              </th>
              <th scope="col" className="px-5 py-3 text-left font-semibold text-slate-600">
                หมวดหมู่
              </th>
              <th scope="col" className="px-5 py-3 text-left font-semibold text-slate-600">
                อาคาร / ที่ตั้ง
              </th>
              <th scope="col" className="px-5 py-3 text-left font-semibold text-slate-600">
                Slug
              </th>
              <th scope="col" className="px-5 py-3 text-right font-semibold text-slate-600">
                จัดการ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {places.map((place) => (
              <tr key={place.slug} className="transition hover:bg-slate-50">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br ${place.coverColor}`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-slate-800">{place.name}</p>
                      <p className="text-xs text-slate-400">{place.nameEn}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-slate-600">{categoryLabel[place.category]}</td>
                <td className="px-5 py-3.5 text-slate-600">{place.building}</td>
                <td className="px-5 py-3.5">
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
                    {place.slug}
                  </code>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/places/${place.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-brand-300 hover:text-brand-700"
                    >
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                      ดู
                    </Link>
                    <button
                      type="button"
                      disabled
                      title="ยังไม่เปิดใช้งานในเวอร์ชันนี้"
                      className="inline-flex cursor-not-allowed items-center gap-1 rounded-lg border border-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                    >
                      <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                      แก้ไข
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-slate-400">
        * หน้านี้แสดงข้อมูลสำหรับผู้ดูแลระบบเท่านั้น ยังไม่รองรับการแก้ไข/เพิ่ม/ลบข้อมูลจริงในเวอร์ชันนี้
      </p>
    </div>
  );
}
