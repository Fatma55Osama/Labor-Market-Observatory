import heroImage from '../imports/herosectin.jpeg';
export default function Hero() {
  return (
     <section
      className="relative overflow-hidden text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Grid dots overlay */}
      <div className="absolute inset-0 grid-dots opacity-40 pointer-events-none" />
      {/* Radial blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--secondary)] opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[var(--accent)] opacity-15 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--success-light)] relative pulse-dot" />
              البيانات محدثة — سبتمبر 2026
            </div>

            <h1 className="text-3xl lg:text-5xl font-black leading-tight mb-4">
              مرصد سوق العمل{' '}<br />
              <span className="text-[var(--brand-light)]">الهندسي</span>
            </h1>

            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              منصة وطنية لرصد وتحليل واقع ومستقبل سوق العمل الهندسي — بيانات موثوقة، مؤشرات دقيقة، وتحليلات متقدمة لدعم القرار الوطني.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#kpi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--primary)] font-bold text-sm hover:bg-white/90 transition-colors shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/></svg>
                المؤشرات
              </a>
              <a
                href="#map"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 border border-white/25 text-white font-bold text-sm hover:bg-white/25 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                خريطة سوق العمل
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-white/15">
              {[
                { value: '2.8M+', label: 'مهندس مسجل' },
                { value: '18', label: 'محافظة مغطاة' },
                { value: '47', label: 'مؤشر فعّال' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-[var(--brand-light)] number-animate">{stat.value}</div>
                  <div className="text-white/60 text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          {/* <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
             
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-white/90">نشاط سوق العمل</span>
                  <span className="text-xs text-white/50">2026</span>
                </div>
               
                <div className="flex items-end gap-2 h-24 mb-4">
                  {[45, 62, 58, 71, 55, 78, 69, 83, 72, 88, 76, 91].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{
                      height: `${h}%`,
                      background: i === 11
                        ? 'var(--brand-light)'
                        : `rgba(255,255,255,${0.15 + (i / 11) * 0.35})`
                    }} />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-white/40">
                  <span>يناير</span><span>مارس</span><span>يونيو</span><span>سبتمبر</span>
                </div>

                <div className="mt-5 flex items-center gap-3 bg-white/10 rounded-xl p-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--success-soft-on-dark)] border border-[var(--success-border-on-dark)] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success-light)" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">نمو الطلب على المهندسين</div>
                    <div className="font-bold text-white text-lg">+12.5%</div>
                  </div>
                </div>
              </div>

    
              <div className="absolute -bottom-4 -right-4 bg-[var(--secondary)] rounded-xl px-4 py-3 shadow-xl border border-white/10">
                <div className="text-xs text-white/70 mb-0.5">الفجوة المهارية</div>
                <div className="text-white font-bold text-xl">23.7%</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
