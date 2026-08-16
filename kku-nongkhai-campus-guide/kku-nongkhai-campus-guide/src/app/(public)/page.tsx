import Link from "next/link";
import { ArrowRight, MapPin, Library, UtensilsCrossed } from "lucide-react";
import { places } from "@/data/places";

export default function HomePage() {
  const featured = places.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            Campus Guide · Nong Khai
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            สำรวจมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย ริมแม่น้ำโขง
          </h1>
          <p className="mt-5 max-w-xl text-brand-50/90">
            รวมข้อมูลอาคาร สถานที่สำคัญ และบริการภายในวิทยาเขต ให้นักศึกษาใหม่และผู้มาเยือน
            หาสถานที่ได้ง่ายขึ้นในคลิกเดียว
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/places"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-accent-400"
            >
              ดูสถานที่ทั้งหมด
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              เกี่ยวกับผู้จัดทำ
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats / categories */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <MapPin className="h-6 w-6 text-brand-600" aria-hidden="true" />
            <p className="font-display mt-4 text-2xl font-bold">{places.length} สถานที่</p>
            <p className="mt-1 text-sm text-slate-500">ครอบคลุมอาคารเรียน หอสมุด และจุดแลนด์มาร์ก</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Library className="h-6 w-6 text-brand-600" aria-hidden="true" />
            <p className="font-display mt-2 text-lg font-semibold">ค้นหาง่าย</p>
            <p className="mt-1 text-sm text-slate-500">ดูเวลาเปิด-ปิด สิ่งอำนวยความสะดวก และตำแหน่งอาคาร</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <UtensilsCrossed className="h-6 w-6 text-brand-600" aria-hidden="true" />
            <p className="font-display mt-2 text-lg font-semibold">อัปเดตต่อเนื่อง</p>
            <p className="mt-1 text-sm text-slate-500">ทีมงานฝั่ง Backoffice ดูแลและจะเปิดให้แก้ไขข้อมูลในระยะถัดไป</p>
          </div>
        </div>
      </section>

      {/* Featured places */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold">สถานที่แนะนำ</h2>
          <Link href="/places" className="text-sm font-medium text-brand-700 hover:underline">
            ดูทั้งหมด →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {featured.map((place) => (
            <Link
              key={place.slug}
              href={`/places/${place.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-28 bg-gradient-to-br ${place.coverColor}`} />
              <div className="p-5">
                <h3 className="font-display font-semibold text-slate-900 group-hover:text-brand-700">
                  {place.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-500">{place.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
