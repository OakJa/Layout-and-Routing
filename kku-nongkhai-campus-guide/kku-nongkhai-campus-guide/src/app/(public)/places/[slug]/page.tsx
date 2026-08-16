import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Building2, Clock, Phone, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { categoryLabel, findPlace, getAllSlugs } from "@/data/places";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = findPlace(slug);

  if (!place) {
    return { title: "ไม่พบสถานที่" };
  }

  return {
    title: place.name,
    description: place.summary,
  };
}

export default async function PlaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = findPlace(slug);

  if (!place) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: "สถานที่", href: "/places" },
          { label: place.name },
        ]}
        className="mb-8"
      />

      <div className={`h-40 rounded-3xl bg-gradient-to-br ${place.coverColor} sm:h-56`} />

      <article className="mt-8">
        <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
          {categoryLabel[place.category]}
        </span>
        <h1 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{place.name}</h1>
        <p className="mt-1 text-sm text-slate-400">{place.nameEn}</p>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{place.summary}</p>

        <p className="mt-6 max-w-2xl leading-relaxed text-slate-600">{place.description}</p>

        <dl className="mt-8 grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            <div>
              <dt className="text-sm font-semibold text-slate-800">อาคาร / ที่ตั้ง</dt>
              <dd className="mt-1 text-sm text-slate-600">{place.building}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            <div>
              <dt className="text-sm font-semibold text-slate-800">เวลาเปิด-ปิด</dt>
              <dd className="mt-1 text-sm text-slate-600">{place.openHours}</dd>
            </div>
          </div>
          {place.contact && (
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <dt className="text-sm font-semibold text-slate-800">ติดต่อ</dt>
                <dd className="mt-1 text-sm text-slate-600">{place.contact}</dd>
              </div>
            </div>
          )}
        </dl>

        <h2 className="font-display mt-10 text-xl font-semibold">สิ่งอำนวยความสะดวก</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {place.facilities.map((facility) => (
            <li key={facility} className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
              {facility}
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
