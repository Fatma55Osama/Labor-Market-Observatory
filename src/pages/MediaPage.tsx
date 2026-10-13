import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { CalendarDays, Landmark,  MapPinCheck } from 'lucide-react'

type MediaTab = 'news' | 'infographics' | 'events'

const news = [
  {
    id: 1, cat: 'سوق العمل', catColor: 'var(--primary)',
    title: 'ارتفاع الطلب على مهندسي الطاقة المتجددة بنسبة 23% في الربع الثالث من 2026',
    excerpt: 'كشفت أحدث بيانات المرصد عن نمو لافت في الطلب على المهندسين المتخصصين في الطاقة الشمسية وطاقة الرياح، مدفوعاً بمشروعات الربط الكهربائي الإفريقي.',
    date: '18 سبتمبر 2026',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=340&fit=crop&auto=format',
    featured: true,
  },
  {
    id: 2, cat: 'تقارير', catColor: 'var(--secondary)',
    title: 'إطلاق التقرير السنوي لسوق العمل الهندسي 2026: فرص وتحديات',
    excerpt: 'أصدر مرصد سوق العمل الهندسي تقريره السنوي الشامل الذي يرصد واقع التوظيف عبر 27 تخصصاً هندسياً في مصر.',
    date: '12 سبتمبر 2026', 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&auto=format',
  },
  {
    id: 3, cat: 'مبادرات', catColor: 'var(--chart-3)',
    title: 'تعاون استراتيجي بين المرصد ونقابة المهندسين لتطوير قاعدة البيانات الوطنية',
    excerpt: 'وقّع المرصد بروتوكول تعاون مع نقابة المهندسين المصريين لربط قاعدة البيانات ومضاعفة دقة مؤشرات التشغيل.',
    date: '5 سبتمبر 2026',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=340&fit=crop&auto=format',
  },
  {
    id: 4, cat: 'إحصاء', catColor: 'var(--chart-4)',
    title: 'مصر الأولى إفريقياً في معدل توظيف خريجي هندسة الحاسبات',
    excerpt: 'رصد المرصد تقدم مصر لتحتل المرتبة الأولى إفريقياً في توظيف مهندسي الحاسبات والبرمجيات، مع نمو 35% خلال 2026.',
    date: '28 أغسطس 2026',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=340&fit=crop&auto=format',
  },
  {
    id: 5, cat: 'تعليم', catColor: 'var(--warning)',
    title: 'برنامج تأهيل 10,000 مهندس في التقنيات الرقمية خلال 2027',
    excerpt: 'أعلنت وزارة التعليم العالي عن برنامج وطني لرفع الكفاءة الرقمية لـ10,000 مهندس في القطاعين الحكومي والخاص.',
    date: '20 أغسطس 2026', 
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=340&fit=crop&auto=format',
  },
  {
    id: 6, cat: 'سوق العمل', catColor: 'var(--primary)',
    title: 'تراجع معدل البطالة الهندسية إلى 8.2% في سبتمبر 2026',
    excerpt: 'تحقق هدف التراجع التدريجي لمعدل البطالة مع تحسن مؤشرات الطلب وزيادة مشروعات البنية التحتية الكبرى.',
    date: '15 سبتمبر 2026', 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop&auto=format',
  },
]

const infographics = [
  {
    id: 1, title: 'خريطة تخصصات المستقبل الهندسية 2030',
   
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=260&fit=crop&auto=format',
    tag: 'الأكثر تحميلاً', tagColor: 'var(--primary)',
  },
  {
    id: 2, title: 'توزيع الرواتب الهندسية حسب القطاع والخبرة',
    
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=260&fit=crop&auto=format',
    tag: null,
  },
  {
    id: 3, title: 'مهندسات مصر: مسيرة 20 عاماً في سوق العمل',
   
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=260&fit=crop&auto=format',
    tag: 'جديد', tagColor: 'var(--secondary)',
  },
  {
    id: 4, title: 'مؤشرات سوق العمل الهندسي في أرقام — 2026',
   
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=260&fit=crop&auto=format',
    tag: null,
  },
  {
    id: 5, title: 'الفجوة بين التعليم الهندسي ومتطلبات سوق العمل',
   
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=260&fit=crop&auto=format',
    tag: null,
  },
  {
    id: 6, title: 'أثر مشروعات العاصمة الإدارية على توظيف المهندسين',
    
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=260&fit=crop&auto=format',
    tag: null,
  },
]

const events = [
  {
    id: 1, title: 'المؤتمر الوطني الأول لسوق العمل الهندسي',
    type: 'مؤتمر', 
    // status: 'قادم',
    date: '15–16 نوفمبر 2026', location: 'فندق سميراميس انتركونتيننتال، القاهرة',
    attendees: 1200, org: 'المرصد الوطني + نقابة المهندسين',
    topics: 'المؤتمر الوطني الأول لسوق العمل الهندسي لمناقشة مستقبل التشغيل والذكاءالتشغيل الهندسي و الذكاء الاصتناعي في مصر والشرق الاوسط',
    tagColor: 'var(--primary)',
  },
{
  id: 2,
  title: 'ندوة: الفجوة المهارية في القطاع الهندسي — سبل المعالجة',
  type: 'ندوة',
  date: '8 أكتوبر 2026',
  location: 'أونلاين — Zoom',
  attendees: 500,
  org: 'مرصد سوق العمل الهندسي',
  topics: 'تناقش الندوة تقنيات تقليص الفجوة المهارية، واستعراض التجارب الدولية، وآليات التدريب لتطوير الكوادر الهندسية.',
  tagColor: 'var(--secondary)',
},
{
  id: 3,
  title: 'ورشة عمل: استخدام بيانات المرصد في صنع القرار',
  type: 'ورشة عمل',
  date: '22 أكتوبر 2026',
  location: 'مقر المرصد، القاهرة الجديدة',
  attendees: 80,
  org: 'مرصد سوق العمل الهندسي',
  topics: 'تستعرض الورشة قواعد البيانات المتاحة بالمرصد، وتحليل المؤشرات، وكيفية توظيف البيانات في بناء نماذج تدعم عملية صنع القرار.',
  tagColor: 'var(--chart-3)',
},
{
  id: 4,
  title: 'المنتدى العربي لتشغيل الكوادر الهندسية',
  type: 'منتدى',
  date: '5–6 سبتمبر 2026',
  location: 'القاهرة',
  attendees: 850,
  org: 'اتحاد المهندسين العرب',
  topics: 'يناقش المنتدى التنقل المهني بين الدول العربية، والاعتراف بالمؤهلات الهندسية، وتعزيز التعاون الإقليمي لدعم فرص تشغيل الكوادر الهندسية.',
  tagColor: 'var(--chart-4)',
},
]

const TABS: { id: MediaTab; label: string }[] = [
  { id: 'news', label: 'أخبار التشغيل الهندسي' },
  { id: 'infographics', label: 'الإنفوجراف' },
  { id: 'events', label: 'الندوات والمؤتمرات' },
]

export default function MediaPage() {
  const [tab, setTab] = useState<MediaTab>('news')
  const [catFilter, setCatFilter] = useState('الكل')

  const allCats = ['الكل', ...Array.from(new Set(news.map(n => n.cat)))]

  return (
    <>
      <PageHeader
        title="الركن الإعلامي"
        subtitle="آخر أخبار سوق العمل الهندسي، الإنفوجراف التحليلي، والفعاليات والمؤتمرات المتخصصة"
        crumbs={[{ label: 'الرئيسية', to: '/' }, { label: 'الركن الإعلامي' }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Tabs */}
        <div className="flex gap-2">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === t.id
                  ? 'bg-[var(--primary)] text-white shadow-sm'
                  : 'bg-white text-[var(--muted-foreground)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* News */}
        {tab === 'news' && (
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {allCats.map(c => (
                <button key={c} onClick={() => setCatFilter(c)} className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${catFilter === c ? 'bg-[var(--primary)] text-white' : 'bg-white text-[var(--muted-foreground)] border border-[var(--border)] hover:text-[var(--primary)]'}`}>{c}</button>
              ))}
            </div>
            {/* Featured */}
            {catFilter === 'الكل' && (
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden card-hover lg:row-span-2">
                  <div className="relative overflow-hidden bg-[var(--muted)]" style={{ height: 260 }}>
                    <img src={news[0].img} alt={news[0].title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/70 to-transparent" />
                    <div className="absolute bottom-4 right-4 left-4">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-2 inline-block" style={{ background: news[0].catColor }}>{news[0].cat}</span>
                      <h2 className="font-black text-white text-lg leading-snug">{news[0].title}</h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-3">{news[0].excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                      <span>{news[0].date}</span>
                    
                    </div>
                  </div>
                </div>
                {news.slice(1, 3).map(n => (
                  <div key={n.id} className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden card-hover flex">
                    <div className="w-28 shrink-0 overflow-hidden bg-[var(--muted)]">
                      <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-2 w-fit" style={{ background: n.catColor + '15', color: n.catColor }}>{n.cat}</span>
                      <h3 className="font-bold text-xs text-[var(--primary)] leading-snug line-clamp-2 mb-2">{n.title}</h3>
                      <span className="text-xs text-[var(--muted-foreground)]">{n.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {news.filter(n => catFilter === 'الكل' ? true : n.cat === catFilter).slice(catFilter === 'الكل' ? 3 : 0).map(n => (
                <div key={n.id} className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden card-hover">
                  <div className="relative overflow-hidden bg-[var(--muted)]" style={{ height: 160 }}>
                    <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: n.catColor }}>{n.cat}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-[var(--primary)] leading-snug mb-2 line-clamp-2">{n.title}</h3>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-3 line-clamp-2">{n.excerpt}</p>
                    <div className="flex justify-between text-xs text-[var(--muted-foreground)]">
                      <span>{n.date}</span>
                   
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Infographics */}
        {tab === 'infographics' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {infographics.map(inf => (
              <div key={inf.id} className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden card-hover">
                <div className="relative overflow-hidden bg-[var(--muted)]" style={{ height: 200 }}>
                  <img src={inf.img} alt={inf.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {inf.tag && (
                    <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: (inf as any).tagColor }}>{inf.tag}</span>
                  )}
                  {/* <div className="absolute bottom-3 right-3 flex items-center gap-3 text-white text-xs">
                    <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">👁 {inf.views}</span>
                    <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">⬇ {inf.downloads}</span>
                  </div> */}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm text-[var(--primary)] leading-snug mb-3">{inf.title}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      تحميل
                    </button>
                    <button className="px-3 py-2 rounded-xl border border-[var(--border)] text-xs text-[var(--muted-foreground)] hover:border-[var(--primary)] transition-colors">مشاركة</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events */}
        {tab === 'events' && (
          <div className="space-y-4">
            {events.map(ev => (
              <div key={ev.id} className="bg-white rounded-2xl border border-[var(--border)] p-5 card-hover">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-16 h-16 shrink-0 rounded-2xl flex flex-col items-center justify-center text-white" style={{ background: ev.tagColor }}>
                    <div className="text-xs font-bold leading-none">{ev.date.split(' ')[0]}</div>
                    <div className="text-lg font-black leading-none">{ev.date.split(' ')[1] ?? ''}</div>
                    <div className="text-xs opacity-70 leading-none">{ev.date.split(' ').slice(-1)[0]}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: ev.tagColor + '15', color: ev.tagColor }}>{ev.type}</span>
                          {/* <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${ev.status === 'قادم' ? 'bg-[var(--success-soft)] text-[var(--success-strong)]' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>{ev.status}</span> */}
                        </div>
                        <h3 className="font-bold text-[var(--primary)] text-base">{ev.title}</h3>
                      </div>
                      <span className="text-sm font-semibold text-[var(--muted-foreground)] shrink-0">{ev.attendees.toLocaleString('ar-EG')} حضور</span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--muted-foreground)] mb-3">
                      <span className="flex items-center gap-1"><CalendarDays size={16} strokeWidth={2} className='text-[var(--iconColor)]' /> {ev.date}</span>
                      <span className="flex items-center gap-1"><MapPinCheck size={16} strokeWidth={2} className='text-[var(--iconColor)]' /> {ev.location}</span>
                      <span className="flex items-center gap-1"><Landmark size={16} strokeWidth={2} className='text-[var(--iconColor)]' /> {ev.org}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                    
                        <span className="text-sm px-2.5 py-1  text-[var(--muted-foreground)]">{ev.topics}</span>
                    
                    </div>
                    {/* {ev.status === 'قادم' && (
                      <button className="px-5 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                        سجّل حضورك
                      </button>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
