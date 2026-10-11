import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts'

const sectors = [
  {
    id: 'construction',
    title: 'البناء والتشييد',
    icon: '🏗️',
    color: 'var(--primary)',
    demand: '+18%',
    engineers: 520000,
    topSpec: 'الإنشاءات',
    trend: 'صاعد',
    skills: ['BIM', 'إدارة المشاريع', 'الاستدامة'],
    data: [
      { month: 'يناير', v: 42 }, { month: 'فبراير', v: 48 }, { month: 'مارس', v: 44 },
      { month: 'أبريل', v: 52 }, { month: 'مايو', v: 58 }, { month: 'يونيو', v: 62 },
    ],
  },
  {
    id: 'energy',
    title: 'الطاقة والكهرباء',
    icon: '⚡',
    color: 'var(--secondary)',
    demand: '+23%',
    engineers: 310000,
    topSpec: 'الطاقة المتجددة',
    trend: 'صاعد بقوة',
    skills: ['الطاقة الشمسية', 'الشبكات الذكية', 'الكفاءة الطاقية'],
    data: [
      { month: 'يناير', v: 38 }, { month: 'فبراير', v: 44 }, { month: 'مارس', v: 50 },
      { month: 'أبريل', v: 56 }, { month: 'مايو', v: 61 }, { month: 'يونيو', v: 70 },
    ],
  },
  {
    id: 'it',
    title: 'تقنية المعلومات',
    icon: '💻',
    color: 'var(--chart-3)',
    demand: '+35%',
    engineers: 245000,
    topSpec: 'هندسة البرمجيات',
    trend: 'نمو متسارع',
    skills: ['الذكاء الاصطناعي', 'Cloud Computing', 'الأمن السيبراني'],
    data: [
      { month: 'يناير', v: 55 }, { month: 'فبراير', v: 60 }, { month: 'مارس', v: 68 },
      { month: 'أبريل', v: 72 }, { month: 'مايو', v: 80 }, { month: 'يونيو', v: 91 },
    ],
  },
  {
    id: 'oil',
    title: 'البترول والغاز',
    icon: '🛢️',
    color: 'var(--chart-4)',
    demand: '+9%',
    engineers: 185000,
    topSpec: 'هندسة البترول',
    trend: 'مستقر',
    skills: ['الحفر الأفقي', 'معالجة الغاز', 'FEED'],
    data: [
      { month: 'يناير', v: 48 }, { month: 'فبراير', v: 50 }, { month: 'مارس', v: 49 },
      { month: 'أبريل', v: 52 }, { month: 'مايو', v: 54 }, { month: 'يونيو', v: 56 },
    ],
  },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[var(--primary)] text-white text-xs px-2.5 py-1.5 rounded-lg shadow-xl">
        <span className="font-bold">{payload[0].value}</span> شاغر
      </div>
    )
  }
  return null
}

export default function AnalysisSection() {
  const [active, setActive] = useState(sectors[0].id)
  const current = sectors.find(s => s.id === active)!

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-[var(--primary)] section-title">تحليل سوق العمل القطاعي</h2>
          <p className="text-[var(--primary)] text-sm mt-2">أداء التشغيل والطلب عبر القطاعات الهندسية الرئيسية</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {sectors.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                active === s.id
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'bg-[var(--card)] text-[var(--primary)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
              }`}
            >
              <span>{s.icon}</span>
              {s.title}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Chart */}
          <div className="lg:col-span-2 bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{current.icon}</span>
                  <h3 className="text-lg font-black text-[var(--primary)]">قطاع {current.title}</h3>
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">الطلب على الوظائف — آخر 6 أشهر (بالآلاف)</div>
              </div>
              <span className="text-sm font-bold px-3 py-1 rounded-xl bg-[var(--success-soft)] text-[var(--success-strong)] border border-[var(--success-border)]">
                {current.demand} نمو
              </span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={current.data} barSize={32}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontFamily: 'Cairo', fill: 'var(--primary)' }} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(36,95,12,0.04)' }} />
               <Bar dataKey="v" radius={[6, 6, 0, 0]} fill="var(--primary)" >
                  {current.data.map((_, i) => (
                    <Cell
                      key={i}
                      fill={i === current.data.length - 1 ? current.color : current.color }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5">
              <div className="text-sm text-[var(--muted-foreground)] mb-1">إجمالي المهندسين في القطاع</div>
              <div className="text-3xl font-black number-animate" style={{ color: current.color }}>
                {(current.engineers / 1000).toFixed(0)}K
              </div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">التخصص الأكثر طلباً: <span className="font-semibold text-[var(--foreground)]">{current.topSpec}</span></div>
            </div>

            <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5">
              <div className="text-sm font-semibold text-[var(--primary)] mb-3">أبرز المهارات المطلوبة</div>
              <div className="flex flex-wrap gap-2">
                {current.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: current.color + '14', color: current.color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: current.color + '14' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={current.color} strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div>
                <div className="text-xs text-[var(--muted-foreground)]">اتجاه القطاع</div>
                <div className="font-bold text-sm" style={{ color: current.color }}>{current.trend}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
