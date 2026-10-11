import siteLogo from '@/imports/________________________-2.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--foreground)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-12 rounded-xl bg-white overflow-hidden flex items-center justify-center">
                <img src={siteLogo} alt="شعار مرصد سوق العمل الهندسي" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">مرصد سوق العمل</div>
                <div className="text-xs text-white/50 leading-tight"> الهندسي</div>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              منصة وطنية لرصد وتحليل واقع ومستقبل سوق العمل الهندسي في جمهورية مصر العربية.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { icon: 'T', label: 'تويتر' },
                { icon: 'in', label: 'لينكد إن' },
                { icon: 'f', label: 'فيسبوك' },
                { icon: '▶', label: 'يوتيوب' },
              ].map(s => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/16 text-xs font-bold transition-colors flex items-center justify-center"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-black text-white/40 uppercase tracking-widest mb-4">روابط سريعة</div>
            <ul className="space-y-2.5">
              {['الرئيسية', 'عن المرصد', 'المؤشرات والتحليلات', 'التقارير والبحوث', 'خريطة سوق العمل', 'الخدمات', 'الركن الإعلامي'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/25" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-black text-white/40 uppercase tracking-widest mb-4">الخدمات</div>
            <ul className="space-y-2.5">
              {['توقع الطلب والمهارات', 'الدورات التدريبية', 'فرص العمل', 'المنح الدراسية', 'بيانات المرصد', 'التقارير الفنية', 'API المطورين'].map(s => (
                <li key={s}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/25" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-black text-white/40 uppercase tracking-widest mb-4">تواصل معنا</div>
            <div className="space-y-4">
              {[
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  text: '30 شارع رمسيس، محافظة القاهرة',
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  text: '25747479 - 25747480 - 25747481',
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  text: 'info@eea.org.eg',
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-white/60"
                  style={i === 1 ? {
                    borderTopLeftRadius: '200px',
                    borderTopRightRadius: '600px',
                    borderBottomLeftRadius: '200px',
                    borderBottomRightRadius: '600px',
                    // backgroundColor: 'rgb(255, 255, 255)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'rgb(255, 255, 255)',
                    boxShadow: 'none',
                    backdropFilter: 'blur(4px)',
                  } : undefined}
                >
                  <span className="mt-0.5 opacity-60 shrink-0">{c.icon}</span>
                  {c.text}
                </div>
              ))}

              {/* Newsletter */}
              {/* <div className="mt-2">
                <div className="text-xs font-semibold text-white/40 mb-2">اشترك في النشرة الأسبوعية</div>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="flex-1 bg-white/8 border border-white/12 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 min-w-0"
                    dir="rtl"
                  />
                  <button className="bg-[var(--secondary)] text-white px-3 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0">
                    اشترك
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>© {year} مرصد سوق العمل الهندسي — جميع الحقوق محفوظة</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white/60 transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-white/60 transition-colors">إمكانية الوصول</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
