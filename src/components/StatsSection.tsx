import {
  Building2,
  GraduationCap,
  Wallet,
  Users,
  BriefcaseBusiness,
  ChartNoAxesCombined,
} from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const stats = [
  {
    value: 68.4,
    label: "في القطاع الخاص",
    sublabel: "68.4% من المهندسين",
    color: "var(--primary)",
    icon: Building2,
    type: "pct",
  },
  {
    value: 24.7,
    label: "حاصلون على دراسات عليا",
    sublabel: "24.7% دراسات عليا أو دكتوراه",
    color: "var(--secondary)",
    icon: GraduationCap,
    type: "pct",
  },
  {
    value: 14800,
    label: "متوسط الراتب الشهري",
    sublabel: "بالجنيه المصري",
    color: "var(--chart-3)",
    icon: Wallet,
    type: "num",
  },
  {
    value: 19.3,
    label: "نسبة المهندسات",
    sublabel: "19.3% من إجمالي المهندسين",
    color: "var(--chart-4)",
    icon: Users,
    type: "pct",
  },
  {
    value: 4.2,
    label: " متوسط سنوات الخبرة",
    sublabel: "للخريجين الجدد عند التوظيف",
    color: "var(--warning)",
    icon: BriefcaseBusiness,
    type: "num",
  },
  {
    value: 92,
    label: "نسبة التوظيف خلال عام",
    sublabel: "92% يجدون عملاً خلال سنة من التخرج",
    color: "var(--chart-2)",
    icon: ChartNoAxesCombined,
    type: "pct",
  },
];

const ageData = [
  { name: "أقل من 30", value: 32, color: "var(--primary)" },
  { name: "30–40", value: 38, color: "var(--chart-3)" },
  { name: "40–50", value: 20, color: "var(--secondary)" },
  { name: "فوق 50", value: 10, color: "var(--chart-5)" },
];

export default function StatsSection() {
  return (
    <section className="py-16   bg-gradient-to-br from-[var(--primary)] via-[#166348] to-yellow-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-white">
              المهندسون في أرقام
            </h2>
            <div className="w-12 h-0.5 bg-[var(--brand-light)] mt-2.5 rounded-full" />
            <p className="text-white/60 text-sm mt-2">
              إحصاءات شاملة عن القوى العاملة الهندسية المصرية
            </p>
          </div>
          <span className="text-xs text-white/40 border border-white/15 px-3 py-1.5 rounded-full">
            بيانات 2026
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="bg-background backdrop-blur-sm border border-white/12 rounded-2xl p-4 text-center hover:bg-gray-300 transition-colors"
              >
                <div className="text-3xl mb-2 flex  justify-center text-center">
                  <Icon size={35} strokeWidth={1.8} className="text-[var(--iconColor)]" />
                </div>

                <div
                  className="text-2xl font-black number-animate mb-1 text-[var(--gen)]"
                
                >
                  {stat.type === "num"
                    ? stat.value >= 1000
                      ? (stat.value / 1000).toFixed(1) + "K"
                      : stat.value
                    : stat.value + "%"}
                </div>

                <div
                  className="text-xs leading-snug text-[var(--gen)]"
                
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Age distribution */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-background border border-white/12 rounded-2xl p-5 sm:col-span-1">
            <div
              className=" font-semibold text-sm mb-4 text-[var(--gen)]"
             
            >
              التوزيع العمري
            </div>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width={100} height={100}>
                <PieChart>
                  <Pie
                    data={ageData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={28}
                    outerRadius={46}
                    strokeWidth={0}
                  >
                    {ageData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-2">
                {ageData.map((d) => (
                  <div key={d.name} className="flex items-center gap-2 text-xs">
                    <span
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ background: d.color }}
                    />
                    <span className="text-[var(--gen)]">
                      {d.name}
                    </span>
                    <span
                      className="font-bold  mr-auto text-[var(--gen)]"
                   
                    >
                      {d.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-background border border-white/12 rounded-2xl p-5">
            <div
              className=" font-semibold text-sm mb-4 text-[var(--gen)]"
            
            >
              التوزيع القطاعي
            </div>
            <div className="space-y-3">
              {[
                { label: "البناء والتشييد", pct: 35, color: "var(--primary)" },
                { label: "الطاقة", pct: 22, color: "var(--secondary)" },
                { label: "تقنية المعلومات", pct: 18, color: "var(--chart-3)" },
                { label: "البترول والغاز", pct: 14, color: "var(--chart-4)" },
                { label: "أخرى", pct: 11, color: "var(--chart-5)" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-xs text-[var(--gen)] mb-1">
                    <span>{row.label}</span>
                    <span className="font-bold text-[var(--gen)]">{row.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${row.pct}%`, background: row.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-white/12 rounded-2xl p-5">
            <div
              className=" font-semibold text-sm mb-4 text-[var(--gen)]"
            >
              مؤشرات النوعية
            </div>
            <div className="space-y-3">
              {[
                { label: "الرضا عن بيئة العمل", value: 62 },
                { label: "مهندس بدرجة استشاري", value: 37 },
                { label: " مهارات الذكاء الاصطناعي", value: 44 },
                { label: "مهارات القيادة", value: 38 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-xs text-[var(--gen)] mb-1">
                    <span>{row.label}</span>
                    <span
                      className="font-bold text-[var(--gen)]"

                    >
                      {row.value}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div
                      className="h-full rounded-full text-[var(--gen)]"
                      style={{
                        width: `${row.value}%`,
                    
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
