import { useState } from 'react'
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'

const spark = (base: number, len = 8) =>
  Array.from({ length: len }, (_, i) => ({
    v: base + Math.sin(i * 0.8) * base * 0.12 + i * base * 0.01
  }))

const indicators = [
  {
    id: 'workforce',
    icon: '👷',
    label: 'حجم القوى العاملة الهندسية',
    value: '2,847,320',
    unit: 'مهندس',
    target: '3,000,000',
    achieved: '2,847,320',
    progress: 60.2,
    change: '+3.2%',
    positive: true,
    color: 'var(--primary)',
    spark: spark(2700000, 8),
    category: 'القوى العاملة',
  },
  {
    id: 'employment',
    icon: '📈',
    label: 'معدل التشغيل',
    value: '73.4',
    unit: '%',
    target: '80%',
    achieved: '73.4%',
    progress: 80.1,
    change: '+2.1%',
    positive: true,
    color: 'var(--secondary)',
    spark: spark(70, 8),
    category: 'التشغيل',
  },
  {
    id: 'unemployment',
    icon: '📉',
    label: 'معدل البطالة الهندسية',
    value: '8.2',
    unit: '%',
    target: '6%',
    achieved: '8.2%',
    progress: 38,
    change: '-0.8%',
    positive: true,
    color: 'var(--danger)',
    spark: spark(9, 8),
    category: 'البطالة',
    lower: true,
  },
  {
    id: 'demand',
    icon: '🔧',
    label: 'الطلب على المهندسين',
    value: '+12.5',
    unit: '%',
    target: '+15%',
    achieved: '+12.5%',
    progress: 83.3,
    change: '+1.7%',
    positive: true,
    color: 'var(--chart-3)',
    spark: spark(11, 8),
    category: 'الطلب',
  },
  {
    id: 'skill-gap',
    icon: '🎯',
    label: 'الفجوة المهارية',
    value: '23.7',
    unit: '%',
    target: '15%',
    achieved: '23.7%',
    progress: 37,
    change: '-2.3%',
    positive: true,
    color: 'var(--chart-4)',
    spark: spark(26, 8),
    category: 'المهارات',
    lower: true,
  },
]

function SparkLine({ data, color }: { data: { v: number }[]; color: string }) {
  return (
    <ResponsiveContainer width="100%" height={44}>
      <AreaChart data={data} margin={{ top: 4, bottom: 0, left: 0, right: 0 }}>
        <defs>
          <linearGradient id={`g-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.18} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="v"
          stroke={color}
          strokeWidth={2}
          fill={`url(#g-${color.replace('#', '')})`}
          dot={false}
          isAnimationActive={false}
        />
        <Tooltip
          contentStyle={{ display: 'none' }}
          cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: '3 3' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

function GaugeRing({ progress, color, lower }: { progress: number; color: string; lower?: boolean }) {
  const r = 28
  const circ = 2 * Math.PI * r
  const dash = (progress / 100) * circ
  const gap = circ - dash
  const hue = lower ? (progress < 60 ? 'var(--danger-bright)' : 'var(--success)') : (progress > 80 ? 'var(--success)' : progress > 60 ? 'var(--warning-bright)' : 'var(--danger-bright)')
  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r={r} fill="none" stroke="var(--muted)" strokeWidth="5" />
      <circle
        cx="36" cy="36" r={r} fill="none"
        stroke={hue} strokeWidth="5"
        strokeDasharray={`${dash} ${gap}`}
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
        style={{ transition: 'stroke-dasharray 1s ease' }}
      />
      <text x="36" y="40" textAnchor="middle" fontSize="13" fontWeight="700" fill={hue} fontFamily="Cairo">
        {Math.round(progress)}%
      </text>
    </svg>
  )
}

export default function KPISection() {
  const [mode, setMode] = useState<'achieved' | 'target'>('achieved')

  return (
    <section id="kpi" className="py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-black text-[var(--primary)] section-title">المؤشرات الرئيسية</h2>
            <p className="text-[var(--muted-foreground)] text-sm mt-2"> سبتمبر 2026</p>
          </div>
          <div className="flex items-center gap-1 bg-[var(--muted)] p-1 rounded-xl self-start sm:self-auto">
            {(['achieved', 'target'] as const).map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  mode === m ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                }`}
              >
                {m === 'achieved' ? 'متحقق' : 'مستهدف'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {indicators.map(ind => (
            <div
              key={ind.id}
              className="bg-[var(--card)] rounded-2xl p-5 border border-[var(--border)] card-hover cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  {/* <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] mb-2">
                    {ind.category}
                  </span> */}
                  <p className="text-xs text-[var(--muted-foreground)] leading-snug max-w-[120px]">{ind.label}</p>
                </div>
                <GaugeRing progress={ind.progress} color={ind.color} lower={ind.lower} />
              </div>

              <div className="my-3">
                <SparkLine data={ind.spark} color={ind.color} />
              </div>

              <div className="flex items-end justify-between mt-2">
                <div>
                  <div className="text-2xl font-black number-animate" style={{ color: ind.color }}>
                    {mode === 'achieved' ? ind.achieved : ind.target}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    {mode === 'achieved' ? 'قيمة متحققة' : 'مستهدف 2026'}
                  </div>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                  ind.positive
                    ? 'bg-[var(--success-soft)] text-[var(--success-strong)]'
                    : 'bg-[var(--danger-soft)] text-[var(--danger)]'
                }`}>
                  {ind.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Last updated */}
        {/* <div className="mt-5 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          آخر تحديث: 15 سبتمبر 2026 — المصدر: نقابة المهندسين المصريين + وزارة القوى العاملة
        </div> */}
      </div>
    </section>
  )
}
