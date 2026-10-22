const news = [
  {
    id: 1,
    category: 'سوق العمل',
    categoryColor: 'var(--primary)',
    title: 'ارتفاع الطلب على مهندسي الطاقة المتجددة بنسبة 23% في الربع الثالث من 2026',
    excerpt: 'كشفت أحدث بيانات المرصد عن نمو لافت في الطلب على المهندسين المتخصصين في الطاقة الشمسية وطاقة الرياح، مدفوعاً بمشروعات الربط الكهربائي الإفريقي.',
    date: '18 اكتوبر 2026',
    // readTime: '4 دقائق',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=220&fit=crop&auto=format',
    featured: true,
  },
  {
    id: 2,
    category: 'تقارير',
    categoryColor: 'var(--secondary)',
    title: 'إطلاق التقرير السنوي لسوق العمل الهندسي 2026: فرص وتحديات',
    excerpt: 'أصدر مرصد سوق العمل الهندسي تقريره السنوي الشامل الذي يرصد واقع التوظيف عبر 27 تخصصاً هندسياً.',
    date: '12 اكتوبر 2026',
    // readTime: '6 دقائق',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop&auto=format',
    featured: false,
  },
  {
    id: 3,
    category: 'مبادرات',
    categoryColor: 'var(--chart-3)',
    title: 'تعاون استراتيجي بين المرصد ونقابة المهندسين لتطوير قاعدة البيانات الوطنية',
    excerpt: 'وقّع المرصد بروتوكول تعاون مع نقابة المهندسين المصريين لربط قاعدة البيانات ومضاعفة دقة مؤشرات التشغيل.',
    date: '5 اكتوبر 2026',
    // readTime: '3 دقائق',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=220&fit=crop&auto=format',
    featured: false,
  },
]

const infographics = [
  {
    id: 1,
    title: 'خريطة تخصصات المستقبل الهندسية 2030',
    views: '12,450',
    color: 'var(--primary)',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=180&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'توزيع الرواتب الهندسية حسب القطاع والخبرة',
    views: '9,820',
    color: 'var(--secondary)',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=180&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'مهندسات مصر: مسيرة 20 عاماً في سوق العمل',
    views: '7,140',
    color: 'var(--chart-4)',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=180&fit=crop&auto=format',
  },
]

export default function NewsSection() {
  return (
    <>
      {/* News */}
      <section id="news" className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-[var(--primary)] section-title">أحدث الأخبار</h2>
              <p className="text-[var(--muted-foreground)] text-sm mt-2">آخر تطورات سوق العمل الهندسي في مصر</p>
            </div>
            <button className="hidden sm:block text-sm font-semibold text-[var(--primary)] border border-[var(--primary)] px-4 py-2 rounded-xl hover:bg-[var(--primary)] hover:text-white transition-colors">
              جميع الأخبار
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {news.map((item, i) => (
              <article
                key={item.id}
                className={`bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden card-hover ${
                  i === 0 ? 'lg:row-span-1' : ''
                }`}
              >
                <div className="relative overflow-hidden bg-[var(--muted)]" style={{ height: 180 }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: item.categoryColor }}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--primary)] text-sm leading-snug mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {item.date}
                    </span>
                    {/* <span>{item.readTime} قراءة</span> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Infographics */}
      <section className="py-16 bg-white border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-[var(--primary)] section-title">أحدث الإنفوغرافيك</h2>
              <p className="text-[var(--muted-foreground)] text-sm mt-2">تصورات بيانية لأبرز مؤشرات سوق العمل الهندسي</p>
            </div>
            <button className="hidden sm:block text-sm font-semibold text-[var(--primary)] border border-[var(--primary)] px-4 py-2 rounded-xl hover:bg-[var(--primary)] hover:text-white transition-colors">
              مكتبة الإنفوغرافيك
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {infographics.map(item => (
              <div key={item.id} className="group bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden card-hover cursor-pointer">
                <div className="relative overflow-hidden bg-[var(--muted)]" style={{ height: 160 }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white text-xs bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    {item.views} مشاهدة
                  </div> */}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm text-[var(--primary)] leading-snug">{item.title}</p>
                  <button className="mt-3 flex items-center gap-1.5 text-xs font-semibold" style={{ color: item.color }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    تحميل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
