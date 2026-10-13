import { Award, BookOpen, Package, BriefcaseBusiness } from "lucide-react";


const services = [
  {
    id: 'forecast',
    icon: Package,
    title: 'توقع الطلب والمهارات',
    desc: 'نماذج ذكاء اصطناعي لتوقع احتياجات سوق العمل الهندسي خلال السنوات الخمس القادمة بدقة عالية.',
    // tags: ['AI', 'تحليل بيانات', 'تخطيط'],
    cta: 'استكشف التوقعات',
    color: 'var(--primary)',
    badge: 'الأكثر استخداماً',
  },
  {
    id: 'training',
    icon:BookOpen,
    title: 'الدورات التدريبية',
    desc: 'برامج تدريبية معتمدة في أحدث التخصصات الهندسية بالتعاون مع كبرى الجامعات والجهات المعنية.',
    // tags: ['تدريب', 'شهادات', 'مهارات'],
    cta: 'تصفح الدورات',
    color: 'var(--secondary)',
    badge: null,
  },
  {
    id: 'jobs',
    icon: BriefcaseBusiness,
    title: 'فرص العمل',
    desc: 'منصة توظيف متخصصة للمهندسين تربط بين الباحثين عن عمل وأبرز الشركات والجهات الحكومية.',
    // tags: ['توظيف', 'شركات', 'حكومي'],
    cta: 'ابحث عن فرصة',
    color: 'var(--chart-3)',
    badge: '1,240 وظيفة',
  },
  {
    id: 'grants',
    icon: Award,
    title: 'المنح الدراسية المجانية',
    desc: 'قاعدة بيانات شاملة للمنح الدراسية المحلية والدولية المتاحة للمهندسين المصريين للتطوير المهني.',
    // tags: ['منح', 'مجاني', 'دراسة'],
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
                <svc.icon
                  size={33}
                className="text-[var(--iconColor)]"
                />
                
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
              {/* <div className="flex flex-wrap gap-1.5 mb-5">
                {svc.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                    {tag}
                  </span>
                ))}
              </div> */}

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
