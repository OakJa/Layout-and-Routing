# Campus Guide — มข. วิทยาเขตหนองคาย

เว็บแอปแสดงข้อมูลสถานที่ภายในมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย พัฒนาด้วย **Next.js (App Router)** +
**TypeScript** + **Tailwind CSS** ต่อยอดจากงานแล็บเรื่อง Routing และ Layout โดยแบ่งหน้าเว็บออกเป็น
2 โซนใหญ่ ที่ใช้ **Layout แยกกันคนละชุด**:

- **Public** — หน้าเว็บสำหรับผู้เยี่ยมชมทั่วไป (`About`, `Places`, `Place/[slug]`)
- **Backoffice** — หน้าเว็บสำหรับผู้ดูแลระบบ (`PlaceManagement`)

## ฟีเจอร์หลัก

| หน้า | Route | คำอธิบาย |
| --- | --- | --- |
| Home | `/` | หน้าแนะนำเว็บไซต์ พร้อมลิงก์ไปหน้าอื่น ๆ |
| About | `/about` | ข้อมูลของผู้จัดทำ (ตนเอง) |
| Places | `/places` | รายการสถานที่ทั้งหมดในมหาวิทยาลัย |
| Place detail | `/places/[slug]` | รายละเอียดของสถานที่แต่ละแห่ง (dynamic route) พร้อมหน้า `not-found` เมื่อไม่พบ slug |
| Place Management | `/admin/place-management` | หน้าแสดงสถานที่ทั้งหมดสำหรับแอดมิน (ยังดูอย่างเดียว ยังแก้ไข/เพิ่ม/ลบไม่ได้) |

ทุกหน้าใช้คอมโพเนนต์ **`Breadcrumbs`** ร่วมกัน (แต่คนละตำแหน่งใน layout ของแต่ละโซน) เพื่อบอกตำแหน่ง
ปัจจุบันของผู้ใช้ในเว็บไซต์ อ้างอิงรูปแบบจาก Tailwind Plus Breadcrumbs block
(`Simple with chevrons`): https://tailwindcss.com/plus/ui-blocks/application-ui/navigation/breadcrumbs

## โครงสร้าง Route และ Layout

โปรเจกต์ใช้ **Route Groups** ของ Next.js (`(public)` และ `(backoffice)`) เพื่อจัดกลุ่มหน้าและให้แต่ละ
กลุ่มมี `layout.tsx` เป็นของตัวเอง โดยชื่อกลุ่มในวงเล็บจะไม่ปรากฏใน URL จริง

```
/                         → (public) layout  → Home
/about                    → (public) layout  → About
/places                   → (public) layout  → Places (list)
/places/[slug]            → (public) layout  → Place detail
/admin/place-management   → (backoffice) layout → Place Management (admin)
```

- **`(public)/layout.tsx`** — ใช้ `PublicNavbar` (เมนูบนสุด) + `PublicFooter` (ท้ายเว็บ) ครอบทุกหน้าในโซนนี้
- **`(backoffice)/layout.tsx`** — ใช้ `AdminSidebar` (เมนูด้านข้างสไตล์แดชบอร์ด) + `AdminTopbar` ครอบทุก
  หน้าในโซนแอดมิน แยกหน้าตาออกจากฝั่ง public โดยสิ้นเชิง

## โครงสร้างไฟล์ในโปรเจกต์

```
kku-nongkhai-campus-guide/
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── public/                              # static assets (favicon ฯลฯ)
└── src/
    ├── app/
    │   ├── layout.tsx                   # Root layout (html/body, metadata, font)
    │   ├── globals.css                  # Tailwind + design tokens (สี/ฟอนต์)
    │   │
    │   ├── (public)/                    # 🌐 Route group: โซนสาธารณะ
    │   │   ├── layout.tsx               #   Layout: Navbar + Footer
    │   │   ├── page.tsx                 #   "/"        → Home
    │   │   ├── about/
    │   │   │   └── page.tsx             #   "/about"   → About (ข้อมูลผู้จัดทำ)
    │   │   └── places/
    │   │       ├── page.tsx             #   "/places"  → รายการสถานที่ทั้งหมด
    │   │       └── [slug]/
    │   │           ├── page.tsx         #   "/places/[slug]" → รายละเอียดสถานที่
    │   │           └── not-found.tsx    #   หน้าแสดงเมื่อไม่พบสถานที่ตาม slug
    │   │
    │   └── (backoffice)/                # 🛠️ Route group: โซนผู้ดูแลระบบ
    │       ├── layout.tsx               #   Layout: Sidebar + Topbar (คนละชุดกับ public)
    │       └── admin/
    │           └── place-management/
    │               └── page.tsx         #   "/admin/place-management" → ตารางจัดการสถานที่
    │
    ├── components/
    │   ├── Breadcrumbs.tsx              # Breadcrumb component ใช้ร่วมกันทั้ง 2 โซน
    │   ├── public/
    │   │   ├── PublicNavbar.tsx         # เมนูบนของโซน public
    │   │   └── PublicFooter.tsx         # ท้ายเว็บของโซน public
    │   └── admin/
    │       ├── AdminSidebar.tsx         # เมนูข้างของโซน backoffice
    │       └── AdminTopbar.tsx          # แถบบนของโซน backoffice
    │
    └── data/
        └── places.ts                    # ข้อมูลสถานที่ (mock data) + type Place, helper functions
```

## การจัดการข้อมูล

ข้อมูลสถานที่ทั้งหมดอยู่ที่ `src/data/places.ts` เป็น mock data ในไฟล์ TypeScript (ยังไม่ต่อฐานข้อมูล
จริง) แต่ละสถานที่มีโครงสร้างตาม type `Place` ได้แก่ `slug`, `name`, `category`, `summary`,
`description`, `building`, `openHours`, `facilities` ฯลฯ และมีฟังก์ชันช่วยเหลือ:

- `findPlace(slug)` — ค้นหาสถานที่จาก slug (ใช้ในหน้า detail)
- `getAllSlugs()` — คืนค่า slug ทั้งหมด (ใช้กับ `generateStaticParams` เพื่อทำ static generation)

หน้า `/admin/place-management` ดึงข้อมูลจากไฟล์เดียวกันมาแสดงเป็นตาราง โดยปุ่ม "เพิ่มสถานที่ใหม่" และ
"แก้ไข" ถูก disable ไว้ก่อน (ตามโจทย์ที่ยังไม่ต้องทำให้แก้ไขได้จริง)

## การรันโปรเจกต์

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:3000`

> หมายเหตุ: โปรเจกต์นี้ตั้งค่าฟอนต์เป็น system font stack (รองรับภาษาไทย) เพื่อให้ build ได้แม้ไม่มี
> อินเทอร์เน็ตเชื่อมต่อ Google Fonts หากต้องการใช้ `next/font/google` (เช่น Noto Sans Thai / Sarabun)
> สามารถเพิ่มกลับเข้าไปใน `src/app/layout.tsx` ได้เมื่อ deploy บนเครื่อง/บริการที่เข้าถึงอินเทอร์เน็ตได้

## สิ่งที่ควรแก้ไขก่อนส่งงาน

- แก้ไขข้อมูลส่วนตัวในหน้า `src/app/(public)/about/page.tsx` (ตัวแปร `profile`) ให้เป็นข้อมูลของตนเอง
- ปรับ/เพิ่มข้อมูลสถานที่จริงของมหาวิทยาลัยใน `src/data/places.ts` ตามที่ต้องการนำเสนอ

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Route Groups, Dynamic Routes, `generateStaticParams`,
  `generateMetadata`, `notFound()`)
- TypeScript
- Tailwind CSS v4
- [lucide-react](https://lucide.dev/) สำหรับไอคอน
