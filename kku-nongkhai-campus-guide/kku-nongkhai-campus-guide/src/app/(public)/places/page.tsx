import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { categoryLabel, places } from "@/data/places";

export const metadata: Metadata = {
  title: "สถานที่ทั้งหมด",
  description: "รายการสถานที่ภายในมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย",
};

export default function PlacesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "สถานที่" }]} className="mb-8" />

      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        Explore campus
      </p>
      <h1 className="font-display mt-2 text-3xl font-bold sm:text-4xl">สถานที่ทั้งหมด</h1>
      <p className="mt-3 max-w-2xl text-slate-500">
        รวมอาคารเรียน หอสมุด โรงอาหาร และจุดสำคัญต่าง ๆ ภายในวิทยาเขตหนองคาย ทั้งหมด{" "}
        {places.length} แห่ง
      </p>

      <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place) => (
          <li key={place.slug}>
            <Link
              href={`/places/${place.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-28 bg-gradient-to-br ${place.coverColor}`} />
              <div className="flex flex-1 flex-col p-5">
                <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                  {categoryLabel[place.category]}
                </span>
                <h2 className="font-display mt-3 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                  {place.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-500">{place.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                  ดูรายละเอียด
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
