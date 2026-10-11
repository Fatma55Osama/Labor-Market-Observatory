import { useState } from 'react'
import PageHeader from '../components/PageHeader'

type ServiceTab = 'forecast' | 'training' | 'jobs' | 'grants'

const forecastSpecialties = [
  { name: 'هندسة الذكاء الاصطناعي', demand2030: 92, growth: '+85%', color: 'var(--primary)' },
  { name: 'هندسة الطاقة المتجددة', demand2030: 88, growth: '+72%', color: 'var(--secondary)' },
  { name: 'هندسة المدن الذكية', demand2030: 76, growth: '+65%', color: 'var(--chart-3)' },
  { name: 'الأمن السيبراني', demand2030: 72, growth: '+58%', color: 'var(--chart-4)' },
  { name: 'هندسة البيانات', demand2030: 68, growth: '+52%', color: 'var(--warning)' },
  { name: 'هندسة البناء المستدام', demand2030: 62, growth: '+40%', color: 'var(--chart-2)' },
]

const courses = [
  {
    id: 1, title: 'دبلوم هندسة البيانات والذكاء الاصطناعي',
    provider: 'الجامعة المصرية اليابانية', duration: '6 أشهر',
    level: 'متقدم', spots: 48, price: 'مجاني', tag: 'مميز',
    tagColor: 'var(--secondary)', specialty: 'ذكاء اصطناعي',
  },
  {
    id: 2, title: 'شهادة BIM المحترف — المستوى الثالث',
    provider: 'نقابة المهندسين', duration: '3 أشهر',
    level: 'متقدم', spots: 30, price: '1,500 ج.م', tag: null,
    specialty: 'بناء رقمي',
  },
  {
    id: 3, title: 'إدارة المشاريع الهندسية — PMP Prep',
    provider: 'المركز القومي للبحوث', duration: '2 شهر',
    level: 'متوسط', spots: 60, price: '800 ج.م', tag: 'رائج',
    tagColor: 'var(--chart-3)', specialty: 'إدارة مشاريع',
  },
  {
    id: 4, title: 'هندسة الطاقة الشمسية وتصميم المنظومات',
    provider: 'وزارة الكهرباء', duration: '4 أشهر',
    level: 'متوسط', spots: 80, price: 'مجاني', tag: 'مجاني',
    tagColor: 'var(--secondary)', specialty: 'طاقة متجددة',
  },
  {
    id: 5, title: 'الأمن السيبراني للبنية التحتية الحرجة',
    provider: 'وزارة الاتصالات', duration: '3 أشهر',
    level: 'متقدم', spots: 40, price: 'مجاني', tag: 'جديد',
    tagColor: 'var(--chart-4)', specialty: 'أمن سيبراني',
  },
  {
    id: 6, title: 'هندسة مياه الشرب والمعالجة',
    provider: 'شركة المياه والصرف الصحي', duration: '2 شهر',
    level: 'مبتدئ', spots: 100, price: 'مجاني', tag: null,
    specialty: 'مياه وبيئة',
  },
]

const jobs = [
  {
    id: 1, title: 'مهندس طاقة متجددة', company: 'شركة سكاتيك مصر', location: 'أسوان',
    type: 'دوام كامل', salary: '18,000–25,000 ج.م', posted: 'منذ يومين', tag: 'عاجل', tagColor: 'var(--danger)',
  },
  {
    id: 2, title: 'مهندس بيانات أول', company: 'مصر للطيران للصيانة', location: 'القاهرة',
    type: 'دوام كامل', salary: '22,000–32,000 ج.م', posted: 'منذ 3 أيام', tag: null,
  },
  {
    id: 3, title: 'مهندس إنشاءات — مشروع العاصمة', company: 'شركة أوراسكوم للتشييد', location: 'العاصمة الإدارية',
    type: 'دوام كامل', salary: '14,000–20,000 ج.م', posted: 'منذ أسبوع', tag: 'مميز', tagColor: 'var(--secondary)',
  },
  {
    id: 4, title: 'مهندس برمجيات — فريق AI', company: 'Valeo مصر', location: 'القاهرة',
    type: 'دوام كامل', salary: '28,000–40,000 ج.م', posted: 'منذ يوم', tag: 'عاجل', tagColor: 'var(--danger)',
  },
  {
    id: 5, title: 'مهندس بترول — الحفر الأفقي', company: 'BP Egypt', location: 'البحر الأحمر',
    type: 'دوام كامل', salary: '30,000–45,000 ج.م', posted: 'منذ 5 أيام', tag: null,
  },
  {
    id: 6, title: 'مهندس مدني — محطات معالجة مياه', company: 'جهاز تعمير الصحراء', location: 'الوادي الجديد',
    type: 'دوام كامل', salary: '12,000–16,000 ج.م', posted: 'منذ أسبوعين', tag: null,
  },
]

const grants = [
  {
    id: 1, title: 'منحة فولبرايت للدراسات العليا الهندسية', country: 'الولايات المتحدة',
    org: 'الحكومة الأمريكية', deadline: '1 نوفمبر 2026', level: 'ماجستير / دكتوراه',
    coverage: 'كاملة', tag: 'مفتوح', tagColor: 'var(--secondary)',
  },
  {
    id: 2, title: 'منحة الحكومة اليابانية MEXT', country: 'اليابان',
    org: 'وزارة التعليم اليابانية', deadline: '15 أكتوبر 2026', level: 'ماجستير / دكتوراه',
    coverage: 'كاملة', tag: 'ينتهي قريباً', tagColor: 'var(--danger)',
  },
  {
    id: 3, title: 'منح الاتحاد الأوروبي Erasmus+ هندسة', country: 'أوروبا',
    org: 'Erasmus+ Programme', deadline: '31 يناير 2027', level: 'ماجستير',
    coverage: 'جزئية', tag: 'مفتوح', tagColor: 'var(--secondary)',
  },
  {
    id: 4, title: 'برنامج المهندسين الشباب — نقابة المهندسين', country: 'مصر',
    org: 'نقابة المهندسين المصريين', deadline: '30 ديسمبر 2026', level: 'دورات مهنية',
    coverage: 'كاملة', tag: 'محلي', tagColor: 'var(--chart-3)',
  },
]

const SERVICES: { id: ServiceTab; label: string; icon: any }[] = [
  { id: 'forecast', label: 'توقع الطلب والمهارات',icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )},
  { id: 'training', label: 'الدورات التدريبية',  icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ) },
  { id: 'jobs', label: 'فرص العمل', icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ), },
  { id: 'grants', label: 'المنح المجانية',  icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ), },
]

export default function ServicesPage() {
  const [tab, setTab] = useState<ServiceTab>('forecast')

  return (
    <>
      <PageHeader
        title="خدمات المرصد"
        subtitle="أدوات ومنصات متكاملة لدعم المهندسين المصريين في مسيرتهم المهنية"
        crumbs={[{ label: 'الرئيسية', to: '/' }, { label: 'الخدمات' }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Service tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SERVICES.map(s => (
            <button
              key={s.id}
              onClick={() => setTab(s.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border text-sm font-semibold transition-all ${
                tab === s.id
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md'
                  : 'bg-white text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
              }`}
            >
              <span className="text-2xl">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Forecast */}
        {tab === 'forecast' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="font-bold text-[var(--primary)] text-lg">نموذج توقع الطلب على التخصصات 2030</h2>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">مدعوم بالذكاء الاصطناعي — آخر تحديث سبتمبر 2026</p>
                </div>
                <span className="text-xs px-3 py-1.5 rounded-full bg-[var(--info-soft)] text-[var(--info)] font-medium border border-[var(--info-border)]">AI Model v2.4</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {forecastSpecialties.map(sp => (
                  <div key={sp.name} className="bg-[var(--muted)] rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-semibold text-[var(--foreground)]">{sp.name}</span>
                      <span className="text-sm font-black" style={{ color: sp.color }}>{sp.growth}</span>
                    </div>
                    <div className="mb-1.5 text-xs text-[var(--muted-foreground)]">مستوى الطلب المتوقع 2030</div>
                    <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${sp.demand2030}%`, background: sp.color }} />
                    </div>
                    <div className="text-right text-xs font-bold mt-1" style={{ color: sp.color }}>{sp.demand2030}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
              <h3 className="font-bold text-[var(--primary)] mb-4">استعلام مخصص عن التخصص</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {[
                  { label: 'التخصص الهندسي', opts: ['مدني وإنشائي', 'كهرباء', 'ميكانيكا', 'حاسبات', 'بترول'] },
                  { label: 'المحافظة', opts: ['القاهرة', 'الجيزة', 'الإسكندرية', 'أسوان', 'الكل'] },
                  { label: 'القطاع', opts: ['حكومي', 'خاص', 'دولي', 'جميع القطاعات'] },
                ].map(f => (
                  <div key={f.label}>
                    <label className="text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 block">{f.label}</label>
                    <select className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] text-sm focus:outline-none focus:border-[var(--primary)]">
                      {f.opts.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
              </div>
              <button className="px-6 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                احسب التوقع
              </button>
            </div>
          </div>
        )}

        {/* Training */}
        {tab === 'training' && (
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2 bg-white rounded-2xl border border-[var(--border)] p-4">
              <span className="text-sm font-semibold text-[var(--muted-foreground)]">تصفية:</span>
              {[
                { label: 'المستوى', opts: ['الكل', 'مبتدئ', 'متوسط', 'متقدم'] },
                { label: 'المدة', opts: ['الكل', 'شهر', 'شهران', '3 أشهر', '6 أشهر'] },
                { label: 'التكلفة', opts: ['الكل', 'مجاني', 'مدفوع'] },
              ].map(f => (
                <select key={f.label} className="text-sm px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] focus:outline-none cursor-pointer">
                  {f.opts.map(o => <option key={o}>{f.label}: {o}</option>)}
                </select>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses.map(c => (
                <div key={c.id} className="bg-white rounded-2xl border border-[var(--border)] p-5 card-hover flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] font-medium">{c.specialty}</span>
                    {c.tag && <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: (c as any).tagColor + '15', color: (c as any).tagColor }}>{c.tag}</span>}
                  </div>
                  <h3 className="font-bold text-sm text-[var(--primary)] leading-snug mb-2 flex-1">{c.title}</h3>
                  <div className="text-xs text-[var(--muted-foreground)] mb-4">
                    <div className="flex items-center gap-1.5 mb-1"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>{c.provider}</div>
                    <div className="flex items-center gap-1.5 mb-1"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{c.duration}</div>
                    <div className="flex justify-between">
                      <span>المستوى: {c.level}</span>
                      <span className="font-semibold text-[var(--foreground)]">{c.price}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[var(--muted-foreground)]">مقاعد متاحة</span>
                    <span className="text-xs font-bold text-[var(--warning)]">{c.spots} مقعد</span>
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                    سجّل الآن
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Jobs */}
        {tab === 'jobs' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 bg-white rounded-2xl border border-[var(--border)] p-4">
              <div className="relative flex-1 min-w-48">
                <svg className="absolute top-1/2 -translate-y-1/2 right-3 text-[var(--muted-foreground)]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <input className="w-full pr-9 pl-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] text-sm focus:outline-none focus:border-[var(--primary)]" placeholder="ابحث عن وظيفة..." dir="rtl" />
              </div>
              {[{ opts: ['الكل', 'القاهرة', 'الجيزة', 'الإسكندرية', 'أسوان'] }, { opts: ['الكل', 'دوام كامل', 'عن بُعد', 'مؤقت'] }].map((f, i) => (
                <select key={i} className="text-sm px-3 py-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] focus:outline-none cursor-pointer">
                  {f.opts.map(o => <option key={o}>{o}</option>)}
                </select>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
              <div className="px-5 py-3 bg-[var(--muted)] border-b border-[var(--border)] text-xs text-[var(--muted-foreground)]">
                {jobs.length} وظيفة متاحة
              </div>
              {jobs.map((job, i) => (
                <div key={job.id} className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 py-4 hover:bg-[var(--muted)]/40 transition-colors ${i > 0 ? 'border-t border-[var(--border)]' : ''}`}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-bold text-[var(--primary)] text-sm">{job.title}</span>
                      {job.tag && <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: (job as any).tagColor + '15', color: (job as any).tagColor }}>{job.tag}</span>}
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted-foreground)]">
                      <span>{job.company}</span>
                      <span>📍 {job.location}</span>
                      <span>⏱ {job.type}</span>
                      <span className="font-medium text-[var(--foreground)]">💰 {job.salary}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-[var(--muted-foreground)]">{job.posted}</span>
                    <button className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold hover:opacity-90 transition-opacity">
                      تقدّم الآن
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grants */}
        {tab === 'grants' && (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {grants.map(g => (
                <div key={g.id} className="bg-white rounded-2xl border border-[var(--border)] p-5 card-hover">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center text-xl">{g.country === 'مصر' ? '🇪🇬' : g.country === 'اليابان' ? '🇯🇵' : g.country === 'أوروبا' ? '🇪🇺' : '🇺🇸'}</div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: (g as any).tagColor + '15', color: (g as any).tagColor }}>{g.tag}</span>
                  </div>
                  <h3 className="font-bold text-[var(--primary)] text-sm mb-2">{g.title}</h3>
                  <div className="space-y-1.5 text-xs text-[var(--muted-foreground)] mb-4">
                    <div className="flex justify-between"><span>الجهة المانحة</span><span className="font-medium text-[var(--foreground)]">{g.org}</span></div>
                    <div className="flex justify-between"><span>الدرجة العلمية</span><span className="font-medium text-[var(--foreground)]">{g.level}</span></div>
                    <div className="flex justify-between"><span>التغطية</span><span className={`font-bold ${g.coverage === 'كاملة' ? 'text-[var(--success)]' : 'text-[var(--warning)]'}`}>{g.coverage}</span></div>
                    <div className="flex justify-between"><span>آخر موعد</span><span className="font-bold text-[var(--danger)]">{g.deadline}</span></div>
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-[var(--secondary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                    التقدم للمنحة
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
