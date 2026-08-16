import type { Metadata } from "next";
import { Mail, Phone, IdCard, GraduationCap, Sparkles, Trophy } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "เกี่ยวกับฉัน",
  description: "ข้อมูลผู้จัดทำเว็บไซต์ Campus Guide มข. วิทยาเขตหนองคาย",
};

// TODO: แก้ไขข้อมูลด้านล่างนี้ให้เป็นข้อมูลของตัวคุณเองก่อนส่งงาน
const profile = {
  name: "นาย ตัวอย่าง ใจดี",
  role: "นักศึกษาผู้จัดทำโปรเจกต์ Campus Guide",
  bio: "นักศึกษาสาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย สนใจการพัฒนาเว็บแอปพลิเคชันด้วย Next.js และการออกแบบประสบการณ์ผู้ใช้",
  email: "example.student@kku.ac.th",
  phone: "08x-xxx-xxxx",
  studentId: "6xxxxxxxx-x",
  education: "สาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์ประยุกต์และวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย",
  skills: [
    "Next.js / React",
    "Tailwind CSS",
    "TypeScript",
    "การออกแบบ UI/UX เบื้องต้น",
  ],
  achievement:
    "พัฒนาเว็บไซต์ Campus Guide สำหรับแนะนำสถานที่ในวิทยาเขต เป็นส่วนหนึ่งของรายวิชา Frontend Development",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "เกี่ยวกับฉัน" }]} className="mb-8" />

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="h-24 bg-gradient-to-r from-brand-700 via-brand-500 to-accent-500 sm:h-32" />

        <div className="px-6 pb-8 sm:px-10">
          <div className="-mt-12 flex flex-col items-start gap-4 sm:-mt-14 sm:flex-row sm:items-end">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-brand-100 font-display text-3xl font-bold text-brand-700 shadow-sm sm:h-28 sm:w-28">
              {profile.name.replace("นาย", "").replace("นางสาว", "").trim().charAt(0)}
            </div>
            <div className="pb-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Portfolio
              </p>
              <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                {profile.name}
              </h1>
              <p className="mt-1 text-slate-500">{profile.role}</p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-slate-600 leading-relaxed">{profile.bio}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="font-display flex items-center gap-2 text-sm font-semibold text-slate-800">
                <IdCard className="h-4 w-4 text-brand-600" aria-hidden="true" />
                ข้อมูลติดต่อ
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  {profile.email}
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  {profile.phone}
                </li>
                <li className="flex items-center gap-2">
                  <IdCard className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  รหัสนักศึกษา {profile.studentId}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display flex items-center gap-2 text-sm font-semibold text-slate-800">
                <GraduationCap className="h-4 w-4 text-brand-600" aria-hidden="true" />
                การศึกษา
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{profile.education}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-display flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Sparkles className="h-4 w-4 text-brand-600" aria-hidden="true" />
              ทักษะ
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-display flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Trophy className="h-4 w-4 text-brand-600" aria-hidden="true" />
              ผลงานเด่น
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{profile.achievement}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
