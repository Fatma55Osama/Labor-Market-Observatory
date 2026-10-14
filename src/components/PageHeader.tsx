import { Link } from 'react-router-dom'
import bgimge from '@/assets/12-2.jpg'

interface Crumb {
  label: string
  to?: string
}

interface Props {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  actions?: React.ReactNode
  bg?: string
}

export default function PageHeader({
  title,
  subtitle,
  crumbs,
  actions,
  bg,
}: Props) {
  return (
    <div
      className={`${bg ?? 'bg-[var(--primary)]'} text-white relative`}
      style={{
        backgroundImage: `url(${bgimge})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* طبقة شفافة فوق الصورة فقط */}
      <div className="absolute inset-0  bg-black opacity-40" />ّ

      {/* المحتوى فوق طبقة الخلفية */}
      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        {crumbs && (
          <div className="flex items-center gap-2 text-xs text-white mb-4">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {c.to ? (
                  <Link
                    to={c.to}
                    className="hover:text-white/80 transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-black">
              {title}
            </h1>

            {subtitle && (
              <p className="text-white text-sm mt-2 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      </div>
    </div>
  )
}