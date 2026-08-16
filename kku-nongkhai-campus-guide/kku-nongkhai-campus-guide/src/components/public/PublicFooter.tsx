export default function PublicFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Campus Guide — โปรเจกต์ตัวอย่างเพื่อการเรียนรู้
            Next.js Routing และ Layout
          </p>
          <p>มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย</p>
        </div>
      </div>
    </footer>
  );
}
