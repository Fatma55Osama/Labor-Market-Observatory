import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell, PieChart, Pie
} from 'recharts'

// ── shared palette ──────────────────────────────────────────────────────────
const C = { navy: 'var(--primary)', teal: 'var(--secondary)', blue: 'var(--chart-3)', purple: 'var(--chart-4)', amber: 'var(--warning)', red: 'var(--danger)' }

// ── data ────────────────────────────────────────────────────────────────────
const monthlyTrend = [
  { m: 'يناير', employed: 68.1, unemployed: 9.4, demand: 8.2 },
  { m: 'فبراير', employed: 69.3, unemployed: 9.1, demand: 9.0 },
  { m: 'مارس', employed: 70.0, unemployed: 8.9, demand: 9.8 },
  { m: 'أبريل', employed: 71.2, unemployed: 8.7, demand: 10.5 },
  { m: 'مايو', employed: 71.8, unemployed: 8.5, demand: 11.2 },
  { m: 'يونيو', employed: 72.4, unemployed: 8.3, demand: 11.8 },
  { m: 'يوليو', employed: 72.9, unemployed: 8.3, demand: 12.1 },
  { m: 'أغسطس', employed: 73.1, unemployed: 8.2, demand: 12.3 },
  { m: 'سبتمبر', employed: 73.4, unemployed: 8.2, demand: 12.5 },
]

const specialtyData = [
  { name: 'مدني وإنشائي', total: 820000, employed: 641000, unemployed: 179000 },
  { name: 'كهرباء وإلكترونيات', total: 490000, employed: 373000, unemployed: 117000 },
  { name: 'ميكانيكا', total: 380000, employed: 285000, unemployed: 95000 },
  { name: 'حاسبات وبرمجيات', total: 310000, employed: 263000, unemployed: 47000 },
  { name: 'بترول وغاز', total: 205000, employed: 172000, unemployed: 33000 },
  { name: 'كيميائية', total: 175000, employed: 126000, unemployed: 49000 },
  { name: 'معمارية', total: 160000, employed: 112000, unemployed: 48000 },
  { name: 'صناعية وإنتاج', total: 145000, employed: 98000, unemployed: 47000 },
]

const sectorDemand = [
  { sector: 'البناء والتشييد', demand: 185, color: C.navy },
  { sector: 'تقنية المعلومات', demand: 160, color: C.blue },
  { sector: 'الطاقة المتجددة', demand: 142, color: C.teal },
  { sector: 'البترول والغاز', demand: 98, color: C.purple },
  { sector: 'النقل والمواصلات', demand: 87, color: C.amber },
  { sector: 'المياه والصرف', demand: 62, color: 'var(--chart-2)' },
  { sector: 'الاتصالات', demand: 58, color: 'var(--info)' },
  { sector: 'المدن الذكية', demand: 45, color: 'var(--chart-4)' },
]

const unemploymentByExp = [
  { exp: 'خريجون جدد', rate: 22.4 },
  { exp: '1–3 سنوات', rate: 12.8 },
  { exp: '3–5 سنوات', rate: 7.3 },
  { exp: '5–10 سنوات', rate: 4.1 },
  { exp: 'أكثر من 10', rate: 2.6 },
]

const futureProjections = [
  { year: '2026', workforce: 2847, demand: 312, gap: 180 },
  { year: '2027', workforce: 2950, demand: 368, gap: 162 },
  { year: '2028', workforce: 3055, demand: 430, gap: 140 },
  { year: '2029', workforce: 3162, demand: 498, gap: 115 },
  { year: '2030', workforce: 3270, demand: 572, gap: 88 },
]

const skillsRadar = [
  { skill: 'مهارات تقنية', current: 65, target: 85 },
  { skill: 'مهارات رقمية', current: 42, target: 78 },
  { skill: 'برامج هندسية', current: 58, target: 80 },
  { skill: 'إدارة مشاريع', current: 47, target: 75 },
  { skill: 'لغات أجنبية', current: 38, target: 65 },
  { skill: 'ريادة وابتكار', current: 31, target: 60 },
  { skill: 'تطبيقات الذكاء الاصطناعي', current: 22, target: 55 },
]

const skillGaps = [
  { skill: 'تطبيقات الذكاء الاصطناعي', gap: 33, current: 22, target: 55 },
  { skill: 'ريادة وابتكار', gap: 29, current: 31, target: 60 },
  { skill: 'لغات أجنبية', gap: 27, current: 38, target: 65 },
  { skill: 'مهارات رقمية', gap: 36, current: 42, target: 78 },
  { skill: 'إدارة المشاريع', gap: 28, current: 47, target: 75 },
  { skill: 'برامج هندسية', gap: 22, current: 58, target: 80 },
  { skill: 'مهارات تقنية أساسية', gap: 20, current: 65, target: 85 },
]

const graduatesData = [
  { year: '2022', graduates: 92000, absorbed: 64000 },
  { year: '2023', graduates: 98000, absorbed: 71000 },
  { year: '2024', graduates: 103000, absorbed: 79000 },
  { year: '2025', graduates: 109000, absorbed: 87000 },
  { year: '2026', graduates: 115000, absorbed: 94000 },
]

// ── sub-tabs ─────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'overview', label: 'مستهدف / متحقق' },
  { id: 'market', label: 'تحليل سوق العمل' },
  { id: 'unemployment', label: 'تحليل البطالة' },
  { id: 'demand', label: 'تحليل الطلب' },
  { id: 'skills', label: 'الفجوات المهارية' },
  { id: 'future', label: 'استشراف المستقبل' },
]

// ── tooltip ───────────────────────────────────────────────────────────────────
const CT = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[var(--primary)] text-white rounded-xl p-3 shadow-xl text-xs min-w-32">
      <div className="font-bold mb-1.5 opacity-80">{label}</div>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex justify-between gap-3">
          <span style={{ color: p.color ?? '#fff' }}>{p.name}</span>
          <span className="font-bold">{typeof p.value === 'number' ? p.value.toLocaleString('ar-EG') : p.value}</span>
        </div>
      ))}
    </div>
  )
}

function KCard({ label, value, unit, target, progress, color, change }: {
  label: string; value: string; unit: string; target: string; progress: number; color: string; change: string
}) {
  return (
    <div className="bg-white rounded-2xl border border-[var(--border)] p-5">
      <div className="flex justify-between items-start mb-3">
        <p className="text-xs text-[var(--muted-foreground)] leading-snug max-w-28">{label}</p>
        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: color + '15', color }}>{change}</span>
      </div>
      <div className="text-2xl font-black number-animate mb-1" style={{ color }}>{value}</div>
      <div className="text-xs text-[var(--muted-foreground)] mb-3">{unit}</div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-[var(--muted-foreground)]">مستهدف {target}</span>
          <span className="font-semibold" style={{ color }}>{progress}%</span>
        </div>
        <div className="h-1.5 bg-[var(--muted)] rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${progress}%`, background: color }} />
        </div>
      </div>
    </div>
  )
}

function FilterBar({ year, setYear, specialty, setSpecialty, sector, setSector }: any) {
  return (
    <div className="bg-white border border-[var(--border)] rounded-2xl p-4 flex flex-wrap gap-3 items-center">
      <span className="text-sm font-semibold text-[var(--muted-foreground)]">تصفية:</span>
      {[
        { label: 'السنة', val: year, set: setYear, opts: ['2026', '2025', '2024', '2023'] },
        { label: 'التخصص', val: specialty, set: setSpecialty, opts: ['الكل', 'مدني', 'كهرباء', 'ميكانيكا', 'حاسبات', 'بترول'] },
        { label: 'القطاع', val: sector, set: setSector, opts: ['الكل', 'حكومي', 'خاص', 'أجنبي'] },
      ].map(f => (
        <select
          key={f.label}
          value={f.val}
          onChange={e => f.set(e.target.value)}
          className="text-sm px-3 py-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] cursor-pointer"
        >
          {f.opts.map(o => <option key={o}>{o}</option>)}
        </select>
      ))}
      <button className="mr-auto text-xs font-semibold text-[var(--primary)] flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        تصدير البيانات
      </button>
    </div>
  )
}

// ── sections ──────────────────────────────────────────────────────────────────
function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KCard label="حجم القوى العاملة الهندسية" value="2,847,320" unit="مهندس مسجل" target="3,000,000" progress={94.9} color={C.navy} change="+3.2%" />
        <KCard label="معدل التشغيل" value="73.4%" unit="من إجمالي القوى العاملة" target="80%" progress={91.75} color={C.teal} change="+2.1%" />
        <KCard label="معدل البطالة" value="8.2%" unit="أقل من المستهدف" target="6%" progress={58} color={C.red} change="-0.8%" />
        <KCard label="معدل الطلب الجديد" value="+12.5%" unit="نمو في الطلب السنوي" target="15%" progress={83.3} color={C.blue} change="+1.7%" />
        <KCard label="الفجوة المهارية" value="23.7%" unit="من القوى العاملة" target="15%" progress={37} color={C.purple} change="-2.3%" />
        <KCard label="خريجون ممتصون" value="94,000" unit="من 115,000 خريج سنوياً" target="100,000" progress={94} color={C.teal} change="+8.0%" />
        <KCard label="متوسط الراتب" value="14,800" unit="جنيه شهرياً" target="18,000" progress={82.2} color={C.amber} change="+5.4%" />
        <KCard label="المهندسون بالخارج" value="312,000" unit="مهندس مصري في الخارج" target="280,000" progress={100} color={C.navy} change="+4.1%" />
      </div>

      <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
        <div className="font-bold text-[var(--primary)] mb-4">اتجاه مؤشرات التشغيل — 2026</div>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={monthlyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="m" tick={{ fontSize: 11, fontFamily: 'Cairo' }} />
            <YAxis tick={{ fontSize: 11, fontFamily: 'Cairo' }} />
            <Tooltip content={<CT />} />
            <Legend wrapperStyle={{ fontFamily: 'Cairo', fontSize: 12 }} />
            <Line type="monotone" dataKey="employed" name="معدل التشغيل %" stroke={C.teal} strokeWidth={2.5} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="unemployed" name="معدل البطالة %" stroke={C.red} strokeWidth={2} dot={{ r: 3 }} strokeDasharray="4 2" />
            <Line type="monotone" dataKey="demand" name="نمو الطلب %" stroke={C.blue} strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function MarketTab() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
          <div className="font-bold text-[var(--primary)] mb-1">توزيع القوى العاملة بالتخصص</div>
          <div className="text-xs text-[var(--muted-foreground)] mb-4">موظف وغير موظف (بالآلاف)</div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={specialtyData} layout="vertical" barSize={10}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fontFamily: 'Cairo' }} tickFormatter={v => (v / 1000).toFixed(0) + 'K'} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 10, fontFamily: 'Cairo' }} width={100} />
              <Tooltip content={<CT />} formatter={(v: any) => [v.toLocaleString('ar-EG'), '']} />
              <Legend wrapperStyle={{ fontFamily: 'Cairo', fontSize: 11 }} />
              <Bar dataKey="employed" name="موظف" fill={C.teal} radius={[0, 4, 4, 0]} stackId="a" />
              <Bar dataKey="unemployed" name="غير موظف" fill={C.red + '80'} radius={[0, 4, 4, 0]} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
          <div className="font-bold text-[var(--primary)] mb-1"> الخريجين الجدد</div>
          <div className="text-xs text-[var(--muted-foreground)] mb-4">الخريجون  مقابل الانخراط  في سوق العمل (بالآلاف)</div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={graduatesData}>
              <defs>
                <linearGradient id="gGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.navy} stopOpacity={0.15} />
                  <stop offset="95%" stopColor={C.navy} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="aGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={C.teal} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={C.teal} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'Cairo' }} />
              <YAxis tickFormatter={v => v + 'K'} tick={{ fontSize: 11, fontFamily: 'Cairo' }} />
              <Tooltip content={<CT />} formatter={(v: any) => [v.toLocaleString('ar-EG') + 'K', '']} />
              <Legend wrapperStyle={{ fontFamily: 'Cairo', fontSize: 12 }} />
              <Area type="monotone" dataKey="graduates" name="الخريجون" stroke={C.navy} fill="url(#gGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="absorbed" name="الخريجون العاملون" stroke={C.teal} fill="url(#aGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Specialty table */}
      <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--border)] font-bold text-[var(--primary)]">جدول التخصصات التفصيلي</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--muted)] text-[var(--muted-foreground)] text-xs">
                <th className="text-right px-6 py-3 font-semibold">التخصص</th>
                <th className="text-center px-4 py-3 font-semibold">إجمالي</th>
                <th className="text-center px-4 py-3 font-semibold">موظف</th>
                <th className="text-center px-4 py-3 font-semibold">بدون عمل</th>
                <th className="text-center px-4 py-3 font-semibold">معدل التشغيل</th>
                <th className="text-center px-4 py-3 font-semibold">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {specialtyData.map((row, i) => {
                const rate = ((row.employed / row.total) * 100).toFixed(1)
                const pct = parseFloat(rate)
                return (
                  <tr key={i} className="border-t border-[var(--border)] hover:bg-[var(--muted)]/40 transition-colors">
                    <td className="px-6 py-3 font-medium text-[var(--foreground)]">{row.name}</td>
                    <td className="px-4 py-3 text-center number-animate">{(row.total / 1000).toFixed(0)}K</td>
                    <td className="px-4 py-3 text-center number-animate text-[var(--secondary)]">{(row.employed / 1000).toFixed(0)}K</td>
                    <td className="px-4 py-3 text-center number-animate text-[var(--danger)]">{(row.unemployed / 1000).toFixed(0)}K</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-[var(--muted)] rounded-full">
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct > 75 ? C.teal : pct > 60 ? C.amber : C.red }} />
                        </div>
                        <span className="text-xs font-bold w-10 text-left">{rate}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${pct > 80 ? 'bg-[var(--success-soft)] text-[var(--success-strong)]' : pct > 65 ? 'bg-[var(--warning-soft)] text-[var(--warning)]' : 'bg-[var(--danger-soft)] text-[var(--danger)]'}`}>
                        {pct > 80 ? 'ممتاز' : pct > 65 ? 'جيد' : 'يحتاج متابعة'}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function UnemploymentTab() {
  const bySpecialty = specialtyData.map(s => ({
    name: s.name,
    rate: +((s.unemployed / s.total) * 100).toFixed(1)
  })).sort((a, b) => b.rate - a.rate)

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
          <div className="font-bold text-[var(--primary)] mb-1">معدل البطالة حسب سنوات الخبرة</div>
          <div className="text-xs text-[var(--muted-foreground)] mb-4">يتناقص بشكل حاد مع تزايد سنوات الخبرة</div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={unemploymentByExp} barSize={36}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="exp" tick={{ fontSize: 10, fontFamily: 'Cairo' }} />
              <YAxis tickFormatter={v => v + '%'} tick={{ fontSize: 11, fontFamily: 'Cairo' }} />
              <Tooltip content={<CT />} formatter={(v: any) => [v + '%', 'معدل البطالة']} />
              <Bar dataKey="rate" name="معدل البطالة" radius={[6, 6, 0, 0]}>
                {unemploymentByExp.map((d, i) => (
                  <Cell key={i} fill={d.rate > 15 ? C.red : d.rate > 8 ? C.amber : C.teal} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
          <div className="font-bold text-[var(--primary)] mb-1">معدل البطالة حسب التخصص</div>
          <div className="text-xs text-[var(--muted-foreground)] mb-4">نسبة البطالة من إجمالي كل تخصص</div>
          <div className="space-y-3 mt-2">
            {bySpecialty.map(row => (
              <div key={row.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[var(--foreground)]">{row.name}</span>
                  <span className="font-bold" style={{ color: row.rate > 20 ? C.red : row.rate > 12 ? C.amber : C.teal }}>
                    {row.rate}%
                  </span>
                </div>
                <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(row.rate / 30) * 100}%`,
                      background: row.rate > 20 ? C.red : row.rate > 12 ? C.amber : C.teal
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3ب gap-4">
        {[
          { label: 'معدل البطالة الكلي', value: '8.2%', note: 'سبتمبر 2026', color: C.red },
          { label: 'بطالة الخريجين الجدد', value: '22.4%', note: 'أول سنتين من التخرج', color: C.amber },
          // { label: 'متوسط فترة البحث', value: '8.4 شهر', note: 'للمهندسين بدون خبرة', color: C.navy },
          { label: 'الملتحقون بالتدريب', value: '34%', note: 'من العاطلين نشطون في التدريب', color: C.teal },
        ].map(c => (
          <div key={c.label} className="bg-white rounded-2xl border border-[var(--border)] p-5 text-center">
            <div className="text-2xl font-black number-animate mb-1" style={{ color: c.color }}>{c.value}</div>
            <div className="text-sm font-semibold text-[var(--foreground)]">{c.label}</div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">{c.note}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DemandTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
        <div className="font-bold text-[var(--primary)] mb-1">حجم الطلب على المهندسين بالقطاع (بالألف وظيفة سنوياً)</div>
        <div className="text-xs text-[var(--muted-foreground)] mb-4">بيانات 2026 — مرتبة تنازلياً</div>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={sectorDemand} barSize={32}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="sector" tick={{ fontSize: 10, fontFamily: 'Cairo' }} interval={0} angle={-15} textAnchor="end" height={50} />
            <YAxis tick={{ fontSize: 11, fontFamily: 'Cairo' }} />
            <Tooltip content={<CT />} formatter={(v: any) => [v + ' ألف', 'الطلب']} />
            <Bar dataKey="demand" name="الطلب (ألف وظيفة)" radius={[6, 6, 0, 0]}>
              {sectorDemand.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sectorDemand.map(s => (
          <div key={s.sector} className="bg-white rounded-2xl border border-[var(--border)] p-4 card-hover">
            <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center" style={{ background: s.color + '15' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
            </div>
            <div className="text-2xl font-black number-animate mb-0.5" style={{ color: s.color }}>{s.demand}K</div>
            <div className="text-xs font-semibold text-[var(--foreground)]">{s.sector}</div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">وظيفة جديدة سنوياً</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillsTab() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
          <div className="font-bold text-[var(--primary)] mb-1">مستوى المهارات الحالي مقابل المستهدف</div>
          <div className="text-xs text-[var(--muted-foreground)] mb-4">على مقياس من 0 إلى 100</div>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={skillsRadar}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10, fontFamily: 'Cairo' }} />
              <Radar name="الحالي" dataKey="current" stroke={C.red} fill={C.red} fillOpacity={0.15} strokeWidth={2} />
              <Radar name="المستهدف" dataKey="target" stroke={C.teal} fill={C.teal} fillOpacity={0.12} strokeWidth={2} strokeDasharray="4 2" />
              <Legend wrapperStyle={{ fontFamily: 'Cairo', fontSize: 12 }} />
              <Tooltip content={<CT />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
          <div className="font-bold text-[var(--primary)] mb-1">الفجوات المهارية مرتبة بالأكبر</div>
          <div className="text-xs text-[var(--muted-foreground)] mb-5">الفجوة = الفرق بين الهدف والواقع</div>
          <div className="space-y-4">
            {skillGaps.sort((a, b) => b.gap - a.gap).map((s, i) => (
              <div key={s.skill}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium">{s.skill}</span>
                  <span className="font-bold text-[var(--danger)]">فجوة {s.gap} نقطة</span>
                </div>
                <div className="relative h-4 bg-[var(--muted)] rounded-full overflow-hidden">
                  <div className="absolute h-full rounded-full bg-[var(--primary)]/20" style={{ width: `${s.target}%` }} />
                  <div className="absolute h-full rounded-full" style={{ width: `${s.current}%`, background: C.teal }} />
                </div>
                <div className="flex justify-between text-xs mt-1 text-[var(--muted-foreground)]">
                  <span>الحالي: {s.current}%</span>
                  <span>المستهدف: {s.target}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills matrix table */}
      <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
          <span className="font-bold text-[var(--primary)]">مصفوفة الفجوات المهارية</span>
          <span className="text-xs text-[var(--muted-foreground)]">مرتبة حسب الأولوية</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--muted)] text-xs text-[var(--muted-foreground)]">
              <th className="text-right px-6 py-3 font-semibold">المهارة</th>
              <th className="text-center px-4 py-3 font-semibold">المستوى الحالي</th>
              <th className="text-center px-4 py-3 font-semibold">المستهدف</th>
              <th className="text-center px-4 py-3 font-semibold">الفجوة</th>
              <th className="text-center px-4 py-3 font-semibold">الأولوية</th>
              <th className="text-center px-4 py-3 font-semibold">التوصية</th>
            </tr>
          </thead>
          <tbody>
            {skillGaps.sort((a, b) => b.gap - a.gap).map((s, i) => (
              <tr key={i} className="border-t border-[var(--border)] hover:bg-[var(--muted)]/40">
                <td className="px-6 py-3 font-medium">{s.skill}</td>
                <td className="px-4 py-3 text-center number-animate">{s.current}%</td>
                <td className="px-4 py-3 text-center number-animate">{s.target}%</td>
                <td className="px-4 py-3 text-center font-bold text-[var(--danger)]">{s.gap} نقطة</td>
                <td className="px-4 py-3 text-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.gap > 30 ? 'bg-[var(--danger-soft)] text-[var(--danger)]' : s.gap > 22 ? 'bg-[var(--warning-soft)] text-[var(--warning)]' : 'bg-[var(--info-soft)] text-[var(--info)]'}`}>
                    {s.gap > 30 ? 'عالية جداً' : s.gap > 22 ? 'عالية' : 'متوسطة'}
                  </span>
                </td>
                <td className="px-4 py-3 text-center text-xs text-[var(--muted-foreground)]">
                  {s.gap > 30 ? 'تدخل فوري' : s.gap > 22 ? 'برنامج تدريبي' : 'متابعة مستمرة'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FutureTab() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="font-bold text-[var(--primary)]">توقعات سوق العمل الهندسي 2026–2030</div>
            <div className="text-xs text-[var(--muted-foreground)] mt-1">نمذجة باستخدام الذكاء الاصطناعي — تحديث سبتمبر 2026</div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-[var(--info-soft)] text-[var(--info)] font-medium border border-[var(--info-border)]">نموذج توقعي</span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={futureProjections}>
            <defs>
              <linearGradient id="wGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.navy} stopOpacity={0.15} />
                <stop offset="95%" stopColor={C.navy} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="dGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.teal} stopOpacity={0.2} />
                <stop offset="95%" stopColor={C.teal} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Cairo' }} />
            <YAxis yAxisId="w" tickFormatter={v => v + 'K'} tick={{ fontSize: 11, fontFamily: 'Cairo' }} />
            <YAxis yAxisId="d" orientation="left" tickFormatter={v => v + 'K'} tick={{ fontSize: 11, fontFamily: 'Cairo' }} hide />
            <Tooltip content={<CT />} formatter={(v: any) => [v + 'K', '']} />
            <Legend wrapperStyle={{ fontFamily: 'Cairo', fontSize: 12 }} />
            <Area yAxisId="w" type="monotone" dataKey="workforce" name="إجمالي القوى العاملة" stroke={C.navy} fill="url(#wGrad)" strokeWidth={2.5} />
            <Area yAxisId="d" type="monotone" dataKey="demand" name="الطلب الجديد" stroke={C.teal} fill="url(#dGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {[
          { title: 'أعلى التخصصات طلباً 2030', items: ['هندسة الذكاء الاصطناعي', 'هندسة الطاقة المتجددة', 'هندسة المدن الذكية', 'الأمن السيبراني', 'هندسة البيانات'], color: C.navy },
          { title: 'القطاعات الأسرع نمواً', items: ['المدن الذكية +85%', 'الطاقة المتجددة +72%', 'تقنية المعلومات +65%', 'النقل الذكي +48%', 'الصحة الرقمية +41%'], color: C.teal },
          { title: 'المهارات الأكثر ندرة', items: ['هندسة اللحظة الطاقية', 'نمذجة المناخ الهندسي', 'تصميم شبكات 6G', 'هندسة الهيدروجين', 'إدارة الكربون'], color: C.purple },
        ].map(col => (
          <div key={col.title} className="bg-white rounded-2xl border border-[var(--border)] p-5">
            <div className="font-bold text-sm mb-3" style={{ color: col.color }}>{col.title}</div>
            <ul className="space-y-2">
              {col.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                  <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center text-white font-bold shrink-0" style={{ background: col.color }}>
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function IndicatorsPage() {
  const [tab, setTab] = useState('overview')
  const [year, setYear] = useState('2026')
  const [specialty, setSpecialty] = useState('الكل')
  const [sector, setSector] = useState('الكل')

  const content: Record<string, React.ReactNode> = {
    overview: <OverviewTab />,
    market: <MarketTab />,
    unemployment: <UnemploymentTab />,
    demand: <DemandTab />,
    skills: <SkillsTab />,
    future: <FutureTab />,
  }

  return (
    <>
      <PageHeader
        title="المؤشرات والتحليلات"
        subtitle="لوحة بيانات شاملة لمتابعة مؤشرات سوق العمل الهندسي في مصر"
        crumbs={[{ label: 'الرئيسية', to: '/' }, { label: 'المؤشرات والتحليلات' }]}
      
      />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <FilterBar year={year} setYear={setYear} specialty={specialty} setSpecialty={setSpecialty} sector={sector} setSector={setSector} />

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                tab === t.id
                  ? 'bg-[var(--primary)] text-white shadow-sm'
                  : 'bg-white text-[var(--muted-foreground)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {content[tab]}
      </div>
    </>
  )
}
