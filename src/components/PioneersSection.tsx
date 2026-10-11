import higherEducationLogo from '@/imports/WhatsApp_Image_2026-09-26_at_3.50.32_PM.jpeg'
import img1 from'@/imports/km.jpg'
import img2 from'@/imports/moh.jpg'
import img3 from'@/imports/داليا.jpeg'
import img4 from'@/imports/محرم.jpeg'
const pioneers = [
  {
    id: 1,
    name: 'م.حسن فتحي',
    role: 'رائد العمارة المحلية المستدامة',
    specialty: 'الهندسة المعمارية',
    achievement: 'اشتهر بتصميماته المعتمدة على مواد البناء المحلية، ومن أشهر مشروعاته قرية القرنة الجديدة بالأقصر، وارتبط اسمه بلقب «مهندس الفقراء».',
    color: 'var(--primary)',
    initials: 'م.إ',
    img: img2,
  },
  {
    id: 2,
    name: 'د.م. داليا السعدني',
    role: 'العمارة والتصميم الإبداعي',
    specialty: 'مهندسة معمارية ومصممة مصرية',
    achievement: 'تم اختيارها ضمن قائمة ابرز  100 مهندس معماري علي مستوي العالم .',
    color: 'var(--secondary)',
    initials: 'س.ش',
    img: img3,
  },
  {
    id: 3,
    name: 'م.محمد كمال إسماعيل',
    role: 'من أبرز المعماريين المصريين',
    specialty: 'الهندسة المعمارية',
    achievement: 'من أعماله دار القضاء العالي ومجمع التحرير، كما تولى أعمالًا معمارية مهمة في توسعات الحرمين الشريفين بالسعودية.',
    color: 'var(--chart-3)',
    initials: 'خ.م',
    img: img1,
  },
  {
    id: 4,
    name: 'م. عثمان محرم باشا',
    role: 'أحد رواد العمل الهندسي والنقابي في مصر',
    specialty:  'الهندسة المدنية',
    achievement: 'ارتبط اسمه بتاريخ نقابة المهندسين المصرية وتطور التنظيم المهني للمهندسين، في مرحلة شهدت انتقال العمل الهندسي من إطار الجمعيات المهنية إلى إطار نقابي أكثر تنظيمًا.' ,
    color: 'var(--chart-4)',
    initials: 'ن.س',
    img: img4,
  },
]

const partners = [
  {
    name: 'نقابة المهندسين المصريين',
    short: 'نقابة المهندسين المصريين',
    logo: '/logos/logo1.png',
    bg: 'var(--success-soft)',
  },
  {
    name: 'وزارة التعليم العالي والبحث العلمي',
    short: 'وزارة التعليم العالي',
    logo: higherEducationLogo,
    bg: 'var(--warning-soft)',
  },
  {
    name: 'وزارة العمل',
    short: 'وزارة العمل',
    logo: '/logos/logo3.png',
    bg: 'var(--warning-soft)',
  },
  {
    name: 'الجهاز المركزي للتعبئة العامة والإحصاء',
    short: 'الجهاز المركزي للإحصاء',
    logo: '/logos/logo4.png',
    bg: 'var(--info-soft)',
  },
  {
    name: 'مركز المعلومات ودعم اتخاذ القرار',
    short: 'مركز المعلومات ودعم القرار',
    logo: '/logos/logo5.png',
    bg: 'var(--danger-soft)',
  },
]

export default function PioneersSection() {
  return (
    <>
      {/* Pioneers */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-[var(--primary)] section-title">رواد الهندسة المصرية</h2>
            <p className="text-[var(--muted-foreground)] text-sm mt-2">نخبة من المهندسين المصريين الملهمين الذين أحدثوا فارقاً حقيقياً</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pioneers.map(p => (
              <div key={p.id} className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden card-hover">
                {/* Header bar */}
                <div className="h-2" style={{ background: p.color }} />
                <div className="p-5">
                  {/* Avatar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 bg-[var(--muted)]"
                      style={{ borderColor: p.color + '40' }}
                    >
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-[var(--primary)] text-sm leading-snug">{p.name}</div>
                      <div className="text-xs font-semibold mt-0.5" style={{ color: p.color }}>{p.specialty}</div>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-[var(--muted-foreground)] mb-2">{p.role}</div>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed bg-[var(--muted)] rounded-xl p-3">
                    {p.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 bg-white border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black text-[var(--primary)]">شركاء النجاح</h2>
            <p className="text-[var(--muted-foreground)] text-sm mt-2">الجهات الداعمة والشريكة في بناء مرصد سوق العمل الهندسي</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[var(--border)] p-5 flex flex-col items-center justify-center text-center gap-3 hover:border-[var(--primary)] hover:shadow-lg transition-all group cursor-pointer"
              >
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden shadow-sm border border-[var(--border)] group-hover:shadow-md transition-shadow"
                  style={{ background: partner.bg }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain p-1.5"
                  />
                </div>
                <div className="text-xs font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] leading-snug transition-colors">
                  {partner.short}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
