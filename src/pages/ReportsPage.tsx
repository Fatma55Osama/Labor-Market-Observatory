import { useState } from 'react'
import PageHeader from '../components/PageHeader'

type Category = 'all' | 'workforce' | 'international' | 'strategy' | 'demand' | 'wef' | 'ilo'

const reports = [
  {
    id: 1, cat: 'workforce',
    title: 'التقرير السنوي لسوق العمل الهندسي في مصر 2026',
    desc: 'تقرير شامل يغطي 27 تخصصاً هندسياً عبر كافة القطاعات والمحافظات، مع تحليل مقارن للأعوام 2022–2026.',
    org: 'مرصد سوق العمل الهندسي',
    date: 'سبتمبر 2026', pages: 184, lang: 'عربي/إنجليزي', tag: 'جديد',
    tagColor: 'var(--secondary)',
  },
  {
    id: 2, cat: 'workforce',
    title: 'دراسة القوى العاملة الهندسية — الصعيد ودلتا النيل',
    desc: 'تحليل مقارن لأوضاع التشغيل الهندسي في محافظات الصعيد ودلتا النيل مع توصيات بسياسات التشغيل.',
    org: 'وزارة القوى العاملة', date: 'يوليو 2026', pages: 96, lang: 'عربي', tag: null,
  },
  {
    id: 3, cat: 'international',
    title: 'Engineering Talent 2026 — Middle East & Africa',
    desc: 'Global benchmark report covering engineering talent supply, demand, and skills gaps across MEA region including Egypt.',
    org: 'McKinsey Global Institute', date: 'August 2026', pages: 112, lang: 'إنجليزي', tag: 'دولي',
    tagColor: 'var(--chart-3)',
  },
  {
    id: 4, cat: 'strategy',
    title: 'استراتيجية تطوير سوق العمل الهندسي 2030',
    desc: 'الاستراتيجية الوطنية لتطوير سوق العمل الهندسي المصري بالتنسيق مع رؤية مصر 2030 ومستهدفاتها.',
    org: 'وزارة التخطيط والتنمية الاقتصادية', date: 'يناير 2026', pages: 68, lang: 'عربي', tag: 'استراتيجي',
    tagColor: 'var(--primary)',
  },
  {
    id: 5, cat: 'demand',
    title: 'دراسة الطلب على مهندسي الطاقة المتجددة 2026–2030',
    desc: 'تقييم شامل لحجم الطلب المتوقع على التخصصات الهندسية في قطاع الطاقة الشمسية وطاقة الرياح.',
    org: 'الجهاز المركزي للتعبئة والإحصاء', date: 'يونيو 2026', pages: 52, lang: 'عربي', tag: null,
  },
  {
    id: 6, cat: 'wef',
    title: 'Future of Jobs Report 2025 — Engineering & Technology',
    desc: 'World Economic Forum analysis of engineering job disruption, automation risk, and emerging roles through 2030.',
    org: 'World Economic Forum', date: 'January 2025', pages: 298, lang: 'إنجليزي', tag: 'WEF',
    tagColor: 'var(--chart-4)',
  },
  {
    id: 7, cat: 'ilo',
    title: 'Skills for the Green Transition — ILO Guide 2025',
    desc: 'ILO comprehensive guide on green economy skills for engineers, including renewable energy, sustainable construction and circular design.',
    org: 'International Labour Organization', date: 'March 2025', pages: 134, lang: 'إنجليزي', tag: 'ILO',
    tagColor: 'var(--info)',
  },
  {
    id: 8, cat: 'workforce',
    title: 'تقرير مؤشر الكفاءة الهندسية — نتائج 2026',
    desc: 'قياس مستوى الكفاءة المهنية لأكثر من 15,000 مهندس عبر 9 قطاعات رئيسية في إطار البرنامج الوطني.',
    org: 'نقابة المهندسين المصريين', date: 'أغسطس 2026', pages: 78, lang: 'عربي', tag: null,
  },
  {
    id: 9, cat: 'demand',
    title: 'دراسة احتياجات القطاع الصناعي من الكوادر الهندسية',
    desc: 'مسح ميداني لأكثر من 1,200 منشأة صناعية لتقدير حجم ونوعية الكوادر الهندسية المطلوبة.',
    org: 'اتحاد الصناعات المصرية', date: 'مايو 2026', pages: 88, lang: 'عربي', tag: null,
  },
]

const CATS: { id: Category; label: string }[] = [
  { id: 'all', label: 'جميع التقارير' },
  { id: 'workforce', label: 'دراسات القوى العاملة' },
  { id: 'international', label: 'التقارير الدولية' },
  { id: 'strategy', label: 'الاستراتيجيات' },
  { id: 'demand', label: 'دراسات الطلب' },
  { id: 'wef', label: 'موارد WEF' },
  { id: 'ilo', label: 'أدلة ILO' },
]

function DocIcon({ lang }: { lang: string }) {
  return (
    <div className="w-12 h-14 rounded-xl bg-[var(--muted)] flex flex-col items-center justify-center gap-1 shrink-0">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted-foreground)" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
      <span className="text-[9px] font-bold text-[var(--muted-foreground)]">{lang.split('/')[0]}</span>
    </div>
  )
}

export default function ReportsPage() {
  const [cat, setCat] = useState<Category>('all')
  const [search, setSearch] = useState('')

  const visible = reports.filter(r => {
    if (cat !== 'all' && r.cat !== cat) return false
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.org.includes(search)) return false
    return true
  })

  return (
    <>
      <PageHeader
        title="التقارير والبحوث"
        subtitle="مكتبة شاملة من التقارير والدراسات المتخصصة في سوق العمل الهندسي المصري والدولي"
        crumbs={[{ label: 'الرئيسية', to: '/' }, { label: 'التقارير والبحوث' }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Stats bar */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {[
            { label: 'إجمالي التقارير', value: '147', color: 'var(--primary)' },
            { label: 'تقارير 2026', value: '38', color: 'var(--secondary)' },
            { label: 'مصادر دولية', value: '24', color: 'var(--chart-3)' },
            { label: 'باحثون مساهمون', value: '89', color: 'var(--chart-4)' },
            { label: 'تحميلات هذا الشهر', value: '12.4K', color: 'var(--warning)' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-[var(--border)] p-4 text-center">
              <div className="text-2xl font-black number-animate mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-[var(--muted-foreground)]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Search + filters */}
        <div className="bg-white rounded-2xl border border-[var(--border)] p-4 space-y-3">
          <div className="relative">
            <svg className="absolute top-1/2 -translate-y-1/2 right-3 text-[var(--muted-foreground)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input
              type="text"
              placeholder="ابحث في التقارير..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] text-sm focus:outline-none focus:border-[var(--primary)]"
              dir="rtl"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${cat === c.id ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--primary)]'}`}
              >
                {c.label}
                {c.id === 'all' ? ` (${reports.length})` : ` (${reports.filter(r => r.cat === c.id).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Reports grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map(rep => (
            <div key={rep.id} className="bg-white rounded-2xl border border-[var(--border)] p-5 card-hover flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <DocIcon lang={rep.lang} />
                <div className="flex-1 min-w-0">
                  {rep.tag && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-1.5" style={{ background: (rep as any).tagColor ? (rep as any).tagColor + '15' : 'var(--secondary-soft)', color: (rep as any).tagColor ?? 'var(--secondary)' }}>
                      {rep.tag}
                    </span>
                  )}
                  <h3 className="font-bold text-sm text-[var(--primary)] leading-snug line-clamp-2">{rep.title}</h3>
                </div>
              </div>

              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4 flex-1 line-clamp-3">{rep.desc}</p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted-foreground)] mb-4 border-t border-[var(--border)] pt-3">
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  {rep.org}
                </span>
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {rep.date}
                </span>
                <span>{rep.pages} صفحة</span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-xl text-xs font-semibold bg-[var(--primary)] text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  تحميل PDF
                </button>
                <button className="px-3 py-2 rounded-xl text-xs font-semibold border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                  معاينة
                </button>
              </div>
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-16 text-[var(--muted-foreground)]">
            <svg className="w-12 h-12 mx-auto mb-3 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <div>لا توجد تقارير مطابقة للبحث</div>
          </div>
        )}
      </div>
    </>
  )
}
