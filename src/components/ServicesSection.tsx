const services = [
  {
    id: 'forecast',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'توقع الطلب والمهارات',
    desc: 'نماذج ذكاء اصطناعي لتوقع احتياجات سوق العمل الهندسي خلال السنوات الخمس القادمة بدقة عالية.',
    tags: ['AI', 'تحليل بيانات', 'تخطيط'],
    cta: 'استكشف التوقعات',
    color: 'var(--primary)',
    badge: 'الأكثر استخداماً',
  },
  {
    id: 'training',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    title: 'الدورات التدريبية',
    desc: 'برامج تدريبية معتمدة في أحدث التخصصات الهندسية بالتعاون مع كبرى الجامعات والجهات المعنية.',
    tags: ['تدريب', 'شهادات', 'مهارات'],
    cta: 'تصفح الدورات',
    color: 'var(--secondary)',
    badge: null,
  },
  {
    id: 'jobs',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: 'فرص العمل',
    desc: 'منصة توظيف متخصصة للمهندسين تربط بين الباحثين عن عمل وأبرز الشركات والجهات الحكومية.',
    tags: ['توظيف', 'شركات', 'حكومي'],
    cta: 'ابحث عن فرصة',
    color: 'var(--chart-3)',
    badge: '1,240 وظيفة',
  },
  {
    id: 'grants',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'المنح الدراسية المجانية',
    desc: 'قاعدة بيانات شاملة للمنح الدراسية المحلية والدولية المتاحة للمهندسين المصريين للتطوير المهني.',
    tags: ['منح', 'مجاني', 'دراسة'],
    cta: 'تصفح المنح',
    color: 'var(--chart-4)',
    badge: 'مجاناً',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-[var(--primary)] section-title">خدمات المرصد</h2>
            <p className="text-[var(--muted-foreground)] text-sm mt-2"> دورات تدريبية، منح، وفرص عمل لدعم المهندسين وصناع القرار</p>
          </div>
          <button className="text-sm font-semibold text-[var(--primary)] border border-[var(--primary)] px-4 py-2 rounded-xl hover:bg-[var(--primary)] hover:text-white transition-colors">
            جميع الخدمات
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(svc => (
            <div
              key={svc.id}
              className="group bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6 card-hover flex flex-col"
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: svc.color + '12', color: svc.color }}
                >
                  {svc.icon}
                </div>
                {svc.badge && (
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: svc.color + '14', color: svc.color }}
                  >
                    {svc.badge}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-[var(--primary)] text-base mb-2">{svc.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 flex-1">{svc.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {svc.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: svc.color + '12',
                  color: svc.color,
                  border: `1px solid ${svc.color}22`,
                }}
                onMouseEnter={e => {
                  (e.target as HTMLButtonElement).style.background = svc.color
                  ;(e.target as HTMLButtonElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLButtonElement).style.background = svc.color + '12'
                  ;(e.target as HTMLButtonElement).style.color = svc.color
                }}
              >
                {svc.cta} ←
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
