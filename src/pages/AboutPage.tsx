import { useState } from "react";
import PageHeader from "../components/PageHeader";
import mohamedAbdelGhaniImage from "@/assets/images__1_.jpg";
import ahmedElBadawyImage from "@/assets/images.jpg";
import higherEducationLogo from '@/assets/WhatsApp_Image_2026-09-26_at_3.50.32_PM.jpeg'
import engineerLogo from '@/assets/logos/logo1.png'
import worklogo from '@/assets/logos/logo3.png'
import Statistics from '@/assets/logos/logo4.png'
import DecisionSupport from '@/assets/logos/logo5.png'
import { ChartNoAxesColumnIncreasing, ChartNoAxesCombined,  Clock5, Globe, Landmark, Mail, MapPinCheck, Phone, Target, Telescope } from "lucide-react";

type AboutTab = "overview" | "goals" | "partners" | "structure" | "contact";

const goals = [
  {
    icon: ChartNoAxesCombined,
    title: "رصد سوق العمل الهندسي",
    desc: "تجميع وتحليل بيانات شاملة ودقيقة عن القوى العاملة الهندسية في مصر على المستوى الوطني والقطاعي والجغرافي.",
    color: "var(--secondary)",
  },
  {
    icon:Telescope,
    title: "استشراف المستقبل المهني",
    desc: "بناء نماذج تحليلية وتنبؤية لفهم توجهات سوق العمل الهندسي على المدى القصير والمتوسط والبعيد.",
    color: "var(--secondary)",
  },
  {
    icon: Target,
    title: "قياس الفجوات المهارية",
    desc: "تقييم الفجوة بين مخرجات التعليم الهندسي ومتطلبات سوق العمل، وتقديم توصيات لتقليصها.",
    color: "var(--secondary)",
  },
  {
    icon: Landmark,
    title: "دعم صنع القرار",
    desc: "توفير بيانات موثوقة ومحدثة لصانعي القرار في الجهات الحكومية والتعليمية والصناعية.",
    color: "var(--secondary)",
  },
  {
    icon: Globe,
    title: "التواصل الدولي",
    desc: "ربط الكوادر الهندسية المصرية بالفرص والمعايير الدولية وتعزيز التنافسية على المستوى العالمي.",
    color: "var(--secondary)",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "نشر ثقافة البيانات",
    desc: "تعزيز الوعي بأهمية البيانات في قرارات التعليم والتوظيف لدى المهندسين وأصحاب العمل.",
    color: "var(--secondary)",
  },
];

const partners = [
  {
    name: "نقابة المهندسين المصريين",
    role: "شريك استراتيجي رئيسي",
    img: engineerLogo,
    bg: "var(--success-soft)",
  },
   {
    name: "مركز المعلومات ودعم اتخاذ القرار",
    role: "شريك في نمذجة البيانات والتحليل",
    img: DecisionSupport,
    bg: "var(--danger-soft)",
  },
  {
    name: "وزارة التعليم العالي والبحث العلمي",
    role: "شريك في البيانات الأكاديمية",
    img: higherEducationLogo,
    bg: "var(--warning-soft)",
  },
  {
    name: "وزارة العمل",
    role: "جهة بيانات رسمية عن سوق العمل",
    img: worklogo,
    bg: "var(--warning-soft)",
  },
  {
    name: "الجهاز المركزي للتعبئة العامة والإحصاء",
    role: "مزود البيانات الإحصائية الوطنية",
    img: Statistics,
    bg: "var(--info-soft)",
  },
 
];

const orgUnits = [
  { title: "مجلس الإدارة", count: 9, color: "var(--primary)", level: 0 },
  { title: "الإدارة التنفيذية", count: 3, color: "var(--primary)", level: 1 },
  {
    title: "إدارة الإحصاء والبيانات",
    count: 12,
    color: "var(--secondary)",
    level: 2,
  },
  {
    title: "إدارة التحليل والاستشراف",
    count: 8,
    color: "var(--chart-3)",
    level: 2,
  },
  {
    title: "إدارة الشراكات والتواصل",
    count: 6,
    color: "var(--chart-4)",
    level: 2,
  },
  {
    title: "إدارة تقنية المعلومات",
    count: 5,
    color: "var(--warning)",
    level: 2,
  },
  {
    title: "الشؤون الإدارية والمالية",
    count: 4,
    color: "var(--muted-foreground)",
    level: 2,
  },
];

const TABS: { id: AboutTab; label: string }[] = [
  { id: "overview", label: "نبذة عن المرصد" },
  { id: "goals", label: "الأهداف والمهام" },
  { id: "partners", label: "شركاء النجاح" },
  { id: "structure", label: "الهيكل التنظيمي" },
  { id: "contact", label: "تواصل معنا" },
];

export default function AboutPage() {
  const [tab, setTab] = useState<AboutTab>("overview");
  const [formSent, setFormSent] = useState(false);

  return (
    <>
      <PageHeader
        title="عن المرصد"
        subtitle="مرصد سوق العمل الهندسي — منصة وطنية لرصد وتحليل سوق العمل الهندسي في مصر"
        crumbs={[{ label: "الرئيسية", to: "/" }, { label: "عن المرصد" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${tab === t.id ? "bg-[var(--primary)] text-white shadow-sm" : "bg-white text-[var(--muted-foreground)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2 bg-white rounded-2xl border border-[var(--border)] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow-lg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="1.5"
                        opacity="0.4"
                      />
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l2 4H10l2-4zm-6 9l3-5h2L9 14H6zm12 0h-3l-2-5h2l3 5z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[var(--primary)]">
                      مرصد سوق العمل الهندسي
                    </h2>
                    <div className="text-sm text-[var(--muted-foreground)]">
                      تأسس عام 2026 — القاهرة، مصر
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-[var(--foreground)] leading-relaxed">
                  <p>
                    يُعدّ مرصد سوق العمل الهندسي منصة بيانات وطنية متخصصة تُعنى
                    برصد وتحليل واقع ومستقبل سوق العمل الهندسي في جمهورية مصر
                    العربية. يعمل المرصد تحت إشراف نقابة المهندسين
                    المصريين&nbsp;&nbsp;بالتعاون مع وزارة القوى
                    العاملة&nbsp;&nbsp;وعدد من الجهات الشريكة الحكومية والدولية.
                  </p>
                  <p>
                    يهدف المرصد إلى توفير قاعدة بيانات شاملة وموثوقة تغطي أكثر
                    من 27 تخصصاً هندسياً، وتمتد لتشمل 27 محافظة مصرية، مع تحديث
                    دوري للمؤشرات الرئيسية لسوق العمل الهندسي.
                  </p>
                  <p>
                    ينتهج المرصد منهجية علمية دقيقة في جمع البيانات وتحليلها،
                    مستعيناً بأحدث أدوات الذكاء الاصطناعي والنمذجة التنبؤية
                    لاستشراف مستقبل التشغيل الهندسي في ضوء رؤية مصر 2030.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "تأسس في", value: "2026" },
                  { label: "التخصصات المرصودة", value: "27 تخصص" },
                  { label: "المحافظات المغطاة", value: "27 محافظة" },
                  { label: "المؤشرات الحية", value: "47 مؤشر" },
                  { label: "حجم قاعدة البيانات", value: "+2.8M مهندس" },
                  { label: "الشركاء المؤسسيون", value: "12 جهة" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-xl border border-[var(--border)] px-5 py-3 flex justify-between items-center"
                  >
                    <span className="text-sm text-[var(--muted-foreground)]">
                      {s.label}
                    </span>
                    <span className="font-bold text-[var(--primary)]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
              <h3 className="font-bold text-[var(--primary)] mb-5">
                القيادة والفريق التنفيذي
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[var(--border)]">
                    <img
                      src={mohamedAbdelGhaniImage}
                      alt="أ.د. محمد عبد الغني"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-sm text-[var(--primary)]">
                    أ.د. محمد عبد الغني&nbsp;&nbsp;&nbsp;
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    النقيب العام لمهندسي مصر
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] mt-1 inline-block">
                    الإدارة العليا
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[var(--border)]">
                    <img
                      src={ahmedElBadawyImage}
                      alt="م. احمد البدوي سيد عبدالمنعم"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-sm text-[var(--primary)]">
                    م. احمد البدوي سيد عبدالمنعم
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    وكيل النقابة
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] mt-1 inline-block">
                    الإدارة التنفيذية
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Goals */}
        {tab === "goals" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {goals.map((g) => (
              <div
                key={g.title}
                className="bg-white rounded-2xl border border-[var(--border)] p-6 card-hover"
              >
                <g.icon size={35} strokeWidth={1.8} className="text-[var(--iconColor)] mb-3" />
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: g.color }}
                >
                  {g.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Partners */}
        {tab === "partners" && (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl border border-[var(--border)] p-5 flex items-center gap-4 card-hover hover:border-[var(--primary)] hover:shadow-md transition-all group"
                >
                  <div
                    className="w-16 h-16 rounded-xl shrink-0 flex items-center justify-center overflow-hidden border border-[var(--border)] group-hover:shadow-sm transition-shadow"
                    style={{ background: p.bg }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-[var(--primary)] leading-snug">
                      {p.name}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1 leading-snug">
                      {p.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structure */}
        {tab === "structure" && (
          <div className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8">
            <div className="mb-8 text-center">
              <h3 className="font-bold text-xl text-[var(--primary)]">
                الهيكل التنظيمي للمرصد
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">
                الهيكل الإداري وتوزيع الإدارات والمسؤوليات
              </p>
            </div>

            <div className="flex flex-col items-center">
              {/* مجلس الإدارة */}
              <div className="w-full max-w-sm rounded-2xl bg-[var(--primary)] text-white p-5 text-center shadow-lg shadow-green-900/10">
                <div className="text-xs text-white/70 mb-2">المستوى الأول</div>
                <h4 className="font-bold text-lg">{orgUnits[0].title}</h4>
                <span className="inline-flex mt-3 rounded-full bg-white/15 px-4 py-1 text-xs">
                  {orgUnits[0].count} موظف
                </span>
              </div>

              {/* خط الربط */}
              <div className="w-px h-8 bg-[var(--border)]" />

              {/* الإدارة التنفيذية */}
              <div className="w-full max-w-sm rounded-2xl border-2 border-[var(--primary)] bg-[var(--primary)]/5 p-5 text-center">
                <div className="text-xs text-[var(--muted-foreground)] mb-2">
                  المستوى الثاني
                </div>
                <h4 className="font-bold text-[var(--primary)] text-lg">
                  {orgUnits[1].title}
                </h4>
                <span className="inline-flex mt-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1 text-xs font-semibold">
                  {orgUnits[1].count} موظف
                </span>
              </div>

              {/* خط الربط للإدارات */}
              <div className="w-px h-8 bg-[var(--border)]" />

              <div className="w-full border-t border-[var(--border)] max-w-5xl" />

              {/* الإدارات التابعة */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full pt-0">
                {orgUnits.slice(2).map((unit) => (
                  <div
                    key={unit.title}
                    className="relative rounded-xl border border-[var(--border)] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--primary)]/30"
                  >
                    {/* خط رأسي رابط */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-[var(--border)]" />

                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                      </svg>
                    </div>

                    <h4 className="font-bold text-sm leading-6 text-[var(--foreground)] min-h-12 flex items-center justify-center">
                      {unit.title}
                    </h4>

                    <div className="mt-4 pt-3 border-t border-[var(--border)]">
                      <span className="text-xs text-[var(--muted-foreground)]">
                        عدد الموظفين
                      </span>
                      <div className="text-xl font-bold text-[var(--primary)] mt-1">
                        {unit.count}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact */}
        {tab === "contact" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
                <h3 className="font-bold text-[var(--primary)] mb-4">
                  معلومات التواصل
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPinCheck,
                      label: "العنوان",
                      value:
                        "30 شارع رمسيس، محافظة القاهرة",
                    },
                    { icon: Phone , label: "هاتف مباشر", value: "25747479 - 25747480 - 25747481" },
                    {
                      icon: Mail,
                      label: "البريد الإلكتروني",
                      value: "info@eea.org.eg",
                    },
                    {
                      icon: Clock5 ,
                      label: "ساعات العمل",
                      value: "الأحد – الخميس، 9 ص – 4 م",
                    },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-3">
                      <c.icon size={20} strokeWidth={1.8} className="text-[var(--iconColor)]" />
                      <div>
                        <div className="text-xs font-semibold text-[var(--muted-foreground)]">
                          {c.label}
                        </div>
                        <div className="text-sm text-[var(--foreground)] mt-0.5">
                          {c.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--primary)] rounded-2xl p-6 text-white">
                <div className="font-bold mb-2">
                  للاستفسارات البحثية والشراكات
                </div>
                <div className="text-sm text-white/70 mb-4">
                  تواصل مع فريق الشراكات والتعاون لطلب البيانات أو بروتوكولات
                  التعاون المؤسسي.
                </div>
                <div className="text-sm font-medium">
               info@eea.org.eg

                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
              <h3 className="font-bold text-[var(--primary)] mb-5">
                أرسل لنا رسالة
              </h3>
              {formSent ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-3">✅</div>
                  <div className="font-bold text-[var(--secondary)] text-lg">
                    تم إرسال رسالتك بنجاح
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)] mt-2">
                    سيتواصل معك فريقنا خلال 2–3 أيام عمل
                  </div>
                  <button
                    className="mt-5 px-5 py-2 rounded-xl border border-[var(--border)] text-sm hover:bg-[var(--muted)] transition-colors"
                    onClick={() => setFormSent(false)}
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: "الاسم الكامل", ph: "أدخل اسمك" },
                      { label: "البريد الإلكتروني", ph: "example@email.com" },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 block">
                          {f.label}
                        </label>
                        <input
                          required
                          className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                          placeholder={f.ph}
                          dir="rtl"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 block">
                      الجهة / المؤسسة
                    </label>
                    <input
                      className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                      placeholder="اختياري"
                      dir="rtl"
                    />
                  </div>
                
                  <div>
                    <label className="text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 block">
                      نص الرسالة
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] text-sm focus:outline-none focus:border-[var(--primary)] resize-none transition-colors"
                      placeholder="اكتب رسالتك هنا..."
                      dir="rtl"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
