export type PlaceCategory =
  | "academic"
  | "library"
  | "dining"
  | "sports"
  | "residence"
  | "landmark";

export type Place = {
  slug: string;
  name: string;
  nameEn: string;
  category: PlaceCategory;
  summary: string;
  description: string;
  building: string;
  openHours: string;
  facilities: string[];
  contact?: string;
  coverColor: string; // tailwind gradient classes used for the card/cover
};

export const categoryLabel: Record<PlaceCategory, string> = {
  academic: "อาคารเรียน/สำนักงาน",
  library: "หอสมุด",
  dining: "โรงอาหาร/ร้านค้า",
  sports: "กีฬา/นันทนาการ",
  residence: "หอพัก",
  landmark: "จุดแลนด์มาร์ก",
};

export const places: Place[] = [
  {
    slug: "library-nongkhai",
    name: "สำนักหอสมุด เขตหนองคาย",
    nameEn: "Nong Khai Campus Library",
    category: "library",
    summary: "แหล่งเรียนรู้กลางของวิทยาเขต พร้อมพื้นที่อ่านหนังสือและห้องประชุมกลุ่ม",
    description:
      "หอสมุดวิทยาเขตหนองคายเป็นศูนย์กลางการเรียนรู้ด้วยตนเองของนักศึกษาและบุคลากร มีทรัพยากรทั้งหนังสือ วารสาร และฐานข้อมูลออนไลน์ รวมถึงพื้นที่นั่งอ่านแบบเงียบและโซนทำงานกลุ่มที่สามารถจองล่วงหน้าได้ในช่วงสอบ",
    building: "อาคารวิทยบริการ ชั้น 1-2",
    openHours: "จันทร์-ศุกร์ 08:30-19:00 น. / เสาร์ 09:00-16:00 น.",
    facilities: ["Wi-Fi ความเร็วสูง", "ห้องประชุมกลุ่ม", "มุมหนังสือพิมพ์", "เครื่องพิมพ์เอกสาร"],
    contact: "042-411-xxx ต่อ 1201",
    coverColor: "from-sky-600 to-cyan-500",
  },
  {
    slug: "canteen-central",
    name: "โรงอาหารกลาง",
    nameEn: "Central Canteen",
    category: "dining",
    summary: "จุดรวมร้านอาหารและเครื่องดื่มหลักของวิทยาเขต วิวเปิดริมสนามหญ้า",
    description:
      "โรงอาหารกลางรวบรวมร้านอาหารหลากหลายทั้งอาหารตามสั่ง ก๋วยเตี๋ยว และเครื่องดื่ม ราคานักศึกษา เปิดให้บริการตลอดวันทำการ เป็นจุดนัดพบยอดนิยมของนักศึกษาในช่วงพักเที่ยง",
    building: "อาคารกิจกรรมนักศึกษา ชั้น 1",
    openHours: "ทุกวัน 07:00-18:00 น.",
    facilities: ["ที่นั่งกว่า 300 ที่", "จุดเติมน้ำดื่ม", "ทางลาดสำหรับรถเข็น", "ร้านค้ากว่า 15 ร้าน"],
    coverColor: "from-amber-500 to-orange-500",
  },
  {
    slug: "innovation-lab",
    name: "ห้องปฏิบัติการนวัตกรรม (Innovation Lab)",
    nameEn: "Innovation Lab",
    category: "academic",
    summary: "พื้นที่สร้างต้นแบบและทำเวิร์กช็อปสำหรับโครงงานนักศึกษาสายเทคโนโลยี",
    description:
      "พื้นที่เปิดสำหรับนักศึกษาที่ต้องการลงมือทำโครงงาน มีเครื่องมือพื้นฐานสำหรับการสร้างต้นแบบ พื้นที่ระดมความคิด และจัดกิจกรรมเวิร์กช็อปร่วมกับหน่วยงานภายนอกเป็นระยะ",
    building: "อาคารเรียนรวมและปฏิบัติการ ชั้น 4",
    openHours: "จันทร์-ศุกร์ 09:00-19:00 น.",
    facilities: ["เครื่องพิมพ์ 3 มิติ", "โปรเจกเตอร์", "อุปกรณ์เวิร์กช็อป", "ปลั๊กไฟรอบห้อง"],
    coverColor: "from-violet-600 to-fuchsia-500",
  },
  {
    slug: "sports-complex",
    name: "อาคารพลศึกษาและสนามกีฬา",
    nameEn: "Sports Complex",
    category: "sports",
    summary: "สนามกีฬาในร่มและกลางแจ้งสำหรับกิจกรรมออกกำลังกายและการแข่งขัน",
    description:
      "รวมสนามกีฬาในร่ม สนามฟุตบอล และลานกิจกรรมกลางแจ้ง ให้บริการนักศึกษาและบุคลากรสำหรับการออกกำลังกายส่วนตัวและกิจกรรมของชมรมกีฬาในมหาวิทยาลัย",
    building: "โซนกิจกรรมกีฬา ฝั่งตะวันออกของวิทยาเขต",
    openHours: "ทุกวัน 06:00-21:00 น.",
    facilities: ["สนามฟุตบอล", "โรงยิมอเนกประสงค์", "ลู่วิ่ง", "ห้องอาบน้ำ"],
    coverColor: "from-emerald-600 to-green-500",
  },
  {
    slug: "dormitory-a",
    name: "หอพักนักศึกษา อาคาร A",
    nameEn: "Student Dormitory A",
    category: "residence",
    summary: "หอพักในกำกับของมหาวิทยาลัยสำหรับนักศึกษาชั้นปีที่ 1",
    description:
      "หอพักนักศึกษาอาคาร A เป็นที่พักในกำกับของมหาวิทยาลัย เน้นความปลอดภัยและระบบดูแลนักศึกษาอย่างใกล้ชิด มีเจ้าหน้าที่ประจำหอตลอด 24 ชั่วโมง",
    building: "โซนหอพัก ฝั่งเหนือของวิทยาเขต",
    openHours: "เปิดให้บริการตลอด 24 ชั่วโมง (เข้า-ออก ตามระเบียบหอพัก)",
    facilities: ["ระบบคีย์การ์ด", "เจ้าหน้าที่ 24 ชม.", "เครื่องซักผ้าหยอดเหรียญ", "Wi-Fi ในห้องพัก"],
    coverColor: "from-rose-500 to-pink-500",
  },
  {
    slug: "mekong-riverside-park",
    name: "ลานกิจกรรมริมโขง",
    nameEn: "Mekong Riverside Park",
    category: "landmark",
    summary: "จุดพักผ่อนและจัดกิจกรรมกลางแจ้งที่มองเห็นวิวแม่น้ำโขง",
    description:
      "ลานกิจกรรมริมโขงเป็นแลนด์มาร์กของวิทยาเขตหนองคาย เหมาะสำหรับพักผ่อน ถ่ายภาพ และใช้จัดกิจกรรมของมหาวิทยาลัยในช่วงเย็น เนื่องจากมองเห็นวิวแม่น้ำโขงและฝั่งประเทศลาว",
    building: "ริมแม่น้ำโขง ฝั่งวิทยาเขต",
    openHours: "เปิดตลอดเวลา แนะนำช่วงเย็น 16:00-19:00 น.",
    facilities: ["ม้านั่งริมน้ำ", "ทางเดินออกกำลังกาย", "จุดถ่ายภาพวิวแม่น้ำโขง"],
    coverColor: "from-teal-600 to-blue-600",
  },
];

export function findPlace(slug: string): Place | undefined {
  return places.find((place) => place.slug === slug);
}

export function getAllSlugs(): string[] {
  return places.map((place) => place.slug);
}
