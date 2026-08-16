import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Campus Guide | มข. วิทยาเขตหนองคาย",
    template: "%s | Campus Guide",
  },
  description:
    "เว็บแนะนำสถานที่ภายในมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย จัดทำเพื่อการเรียนรู้ Routing และ Layout ด้วย Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className="h-full antialiased">
      <body className="flex h-full min-h-screen flex-col bg-stone-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
