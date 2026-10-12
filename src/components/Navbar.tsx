import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import siteLogo from '@/assets/________________________-2.png'

const navItems = [
  { label: 'الرئيسية', to: '/' },
  { label: 'عن المرصد', to: '/about' },
  { label: 'المؤشرات والتحليلات', to: '/indicators' },
  { label: 'التقارير والبحوث', to: '/reports' },
  { label: 'خريطة سوق العمل', to: '/map' },
  { label: 'الخدمات', to: '/services' },
  { label: 'الركن الإعلامي', to: '/media' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[var(--border)] shadow-sm">
      {/* Top bar */}
      <div className="bg-[var(--primary)] text-white text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-80">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              19588
            </span>
            <span className="opacity-40">|</span>
            <span className="opacity-80">الإثنين، 22 سبتمبر 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="opacity-80 hover:opacity-100 transition-opacity">العربية</button>
            <span className="opacity-40">|</span>
            <button className="opacity-80 hover:opacity-100 transition-opacity">English</button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-20 h-16 rounded-xl bg-white border border-[var(--border)] overflow-hidden flex items-center justify-center shadow-sm">
            <img src={siteLogo} alt="شعار مرصد سوق العمل الهندسي" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="font-bold text-[var(--primary)] text-sm leading-tight">مرصد سوق العمل</div>
            <div className="text-xs text-[var(--muted-foreground)] leading-tight">الهندسي</div>
          </div>
        </Link>

        {/* Nav links desktop */}
        <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--primary)] text-[var(--primary)] text-sm font-medium hover:bg-[var(--primary)] hover:text-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            بحث
          </button>
          <button className="px-4 py-2 rounded-lg bg-[var(--secondary)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
            تسجيل الدخول
          </button>
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-[var(--muted)]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M18 6L6 18M6 6l12 12"/>
                : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-[var(--border)] bg-white px-4 py-3 flex flex-col gap-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
