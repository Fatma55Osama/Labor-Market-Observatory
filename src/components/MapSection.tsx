// @refresh reset
import { useState, useRef, useCallback, useEffect } from 'react'
// import egyptMapImage from '@/imports/map-attachment.jpg'
import egyptMapImage from '@/imports/Green Governorates Map of Egypt.png'
// ─── PIN POSITIONS ────────────────────────────────────────────────────────────
// Edit `top` and `left` (as % of the map container) to reposition any pin.
// `label` is the display name shown in the tooltip.
// `value` is the employment rate (%) used to color the pin.
// ─────────────────────────────────────────────────────────────────────────────
const PINS = [
  { id: 'cairo',      top: '16.79%', left: '57.36%', label: 'القاهرة',       value: 82 },
  { id: 'giza',       top: '27.75%', left: '37.32%', label: 'الجيزة',         value: 76 },
  { id: 'alex',       top: '10.37%', left: '41.84%', label: 'الإسكندرية',    value: 71 },
  { id: 'sharqia',    top: '26.5%',  left: '66.0%',  label: 'الشرقية',        value: 64 },
  { id: 'gharbiya',   top: '23.5%',  left: '48.5%',  label: 'الغربية',        value: 59 },
  { id: 'dakahlia',   top: '8.14%',  left: '56.17%', label: 'الدقهلية',       value: 62 },
  { id: 'beheira',    top: '13.34%', left: '44.36%', label: 'البحيرة',        value: 52 },
  { id: 'qalyubia',   top: '14.62%', left: '53.93%', label: 'القليوبية',      value: 67 },
  { id: 'kafrSheikh', top: '6.50%',  left: '50.82%', label: 'كفر الشيخ',     value: 54 },
  { id: 'monufia',    top: '11.64%', left: '51.52%', label: 'المنوفية',      value: 58 },
  { id: 'damietta',   top: '4.90%',  left: '57.69%', label: 'دمياط',         value: 61 },
  { id: 'suez',       top: '20.40%', left: '61.09%', label: 'السويس',         value: 78 },
  { id: 'ismailia',   top: '11.89%', left: '63.75%', label: 'الإسماعيلية',   value: 73 },
  { id: 'portSaid',   top: '7.68%',  left: '62.71%', label: 'بورسعيد',       value: 68 },
  { id: 'faiyum',     top: '24.91%', left: '44.97%', label: 'الفيوم',         value: 47 },
  { id: 'beniSuef',   top: '30.91%', left: '54.16%', label: 'بني سويف',      value: 44 },
  { id: 'minya',      top: '35.42%', left: '47.61%', label: 'المنيا',         value: 43 },
  { id: 'assiut',     top: '42.00%', left: '57.61%', label: 'أسيوط',         value: 45 },
  { id: 'sohag',      top: '47.87%', left: '62.68%', label: 'سوهاج',         value: 38 },
  { id: 'qena',       top: '53.35%', left: '67.03%', label: 'قنا',            value: 36 },
  { id: 'luxor',      top: '61.93%', left: '65.34%', label: 'الأقصر',        value: 41 },
  { id: 'aswan',      top: '90.0%',  left: '55.5%',  label: 'أسوان',         value: 39 },
  { id: 'newValley',  top: '63.34%', left: '31.71%', label: 'الوادي الجديد', value: 31 },
  { id: 'matrouh',    top: '18.82%', left: '21.22%', label: 'مطروح',         value: 28 },
  { id: 'northSinai', top: '13.33%', left: '74.52%', label: 'شمال سيناء',    value: 55 },
  { id: 'southSinai', top: '29.03%', left: '75.38%', label: 'جنوب سيناء',    value: 62 },
  { id: 'redSea',     top: '69.61%', left: '79.29%', label: 'البحر الأحمر',  value: 66 },
]

// ─── GOVERNORATE DATA (stats) ─────────────────────────────────────────────────
const DATA: Record<string, { rate: number; engineers: number }> = {
  cairo:      { rate: 82, engineers: 640000 },
  giza:       { rate: 76, engineers: 420000 },
  alex:       { rate: 71, engineers: 310000 },
  sharqia:    { rate: 64, engineers: 180000 },
  gharbiya:   { rate: 59, engineers: 140000 },
  dakahlia:   { rate: 62, engineers: 160000 },
  beheira:    { rate: 52, engineers: 120000 },
  qalyubia:   { rate: 67, engineers: 155000 },
  kafrSheikh: { rate: 54, engineers:  68000 },
  monufia:    { rate: 58, engineers:  82000 },
  damietta:   { rate: 61, engineers:  45000 },
  suez:       { rate: 78, engineers:  95000 },
  ismailia:   { rate: 73, engineers:  88000 },
  portSaid:   { rate: 68, engineers:  72000 },
  faiyum:     { rate: 47, engineers:  65000 },
  beniSuef:   { rate: 44, engineers:  58000 },
  minya:      { rate: 43, engineers:  72000 },
  assiut:     { rate: 45, engineers:  68000 },
  sohag:      { rate: 38, engineers:  55000 },
  qena:       { rate: 36, engineers:  48000 },
  luxor:      { rate: 41, engineers:  38000 },
  aswan:      { rate: 39, engineers:  35000 },
  newValley:  { rate: 31, engineers:  18000 },
  matrouh:    { rate: 28, engineers:  22000 },
  northSinai: { rate: 55, engineers:  42000 },
  southSinai: { rate: 62, engineers:  35000 },
  redSea:     { rate: 66, engineers:  52000 },
}

const governorates = PINS.map(p => ({ id: p.id, name: p.label, ...DATA[p.id] }))

function rateColor(rate: number) {
  if (rate >= 75) return 'var(--primary)'
  if (rate >= 60) return 'var(--chart-3)'
  if (rate >= 50) return 'var(--secondary)'
  if (rate >= 40) return 'var(--chart-5)'
  return 'var(--chart-6)'
}

type PinPos = { top: string; left: string }
type Pin = typeof PINS[0]

const STORAGE_KEY = 'map-pin-positions-v3'

function loadSavedPositions(): Record<string, PinPos> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export default function MapSection() {
  const [hovered, setHovered] = useState<Pin | null>(null)
  const [selected, setSelected] = useState<Pin | null>(PINS[0])

  // Per-pin position overrides (populated by drag, persisted to localStorage)
  const [positions, setPositions] = useState<Record<string, PinPos>>(loadSavedPositions)

  // Active drag state
  const dragRef = useRef<{
    id: string
    startMouseX: number
    startMouseY: number
    startLeft: number
    startTop: number
    moved: boolean
  } | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)

  // Resolve the effective position for a pin (override > PINS default)
  const getPinPos = (pin: Pin): PinPos =>
    positions[pin.id] ?? { top: pin.top, left: pin.left }

  const handlePinMouseDown = useCallback((e: React.MouseEvent, pin: Pin) => {
    e.preventDefault()
    e.stopPropagation()
    dragRef.current = {
      id: pin.id,
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startLeft: parseFloat(getPinPos(pin).left),
      startTop: parseFloat(getPinPos(pin).top),
      moved: false,
    }
  }, [positions])

  // Attach mousemove / mouseup to window so dragging outside the container works
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const drag = dragRef.current
      if (!drag || !containerRef.current) return

      const dx = e.clientX - drag.startMouseX
      const dy = e.clientY - drag.startMouseY
      if (!drag.moved && Math.abs(dx) < 3 && Math.abs(dy) < 3) return
      drag.moved = true

      const rect = containerRef.current.getBoundingClientRect()
      const left = `${Math.max(0, Math.min(100, drag.startLeft + (dx / rect.width) * 100)).toFixed(2)}%`
      const top = `${Math.max(0, Math.min(100, drag.startTop + (dy / rect.height) * 100)).toFixed(2)}%`

      setPositions(prev => ({ ...prev, [drag.id]: { top, left } }))
    }

    const onUp = (e: MouseEvent) => {
      const drag = dragRef.current
      if (!drag) return

      if (drag.moved) {
        // Persist final position
        setPositions(prev => {
          const next = { ...prev }
          try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {}
          return next
        })
      } else {
        // Treat as a click: toggle selection
        const pin = PINS.find(p => p.id === drag.id)!
        setSelected(sel => sel?.id === pin.id ? null : pin)
      }

      dragRef.current = null
      void e
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  const active = hovered ?? selected

  const [copied, setCopied] = useState(false)
  const copyPositions = () => {
    const merged = PINS.map(p => {
      const pos = positions[p.id] ?? { top: p.top, left: p.left }
      return `  { id: '${p.id}', top: '${pos.top}', left: '${pos.left}', label: '${p.label}', value: ${p.value} },`
    }).join('\n')
    navigator.clipboard.writeText(`const PINS = [\n${merged}\n]`).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="map" className="py-16 bg-white border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-[var(--primary)] section-title">خريطة سوق العمل الهندسي</h2>
          <p className="text-[var(--muted-foreground)] text-sm mt-2">توزيع القوى العاملة الهندسية ومعدلات التشغيل على مستوى المحافظات</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div
            ref={containerRef}
            className="lg:col-span-2 rounded-2xl border border-[var(--border)] overflow-hidden relative bg-[var(--map-surface)]"
            style={{ aspectRatio: '840/1000', userSelect: 'none' }}
          >
            <img
              src={egyptMapImage}
              alt="خريطة مصر"
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: 'fill', pointerEvents: 'none' }}
            />

            {/* Pins */}
            {PINS.map(pin => {
              const isSel = selected?.id === pin.id
              const isHov = hovered?.id === pin.id
              const isDragging = dragRef.current?.id === pin.id
              const size = isSel ? 18 : 13
              const pos = getPinPos(pin)
              return (
                <div
                  key={pin.id}
                  onMouseEnter={() => setHovered(pin)}
                  onMouseLeave={() => setHovered(null)}
                  onMouseDown={e => handlePinMouseDown(e, pin)}
                  style={{
                    position: 'absolute',
                    top: pos.top,
                    left: pos.left,
                    transform: 'translate(-50%, -50%)',
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    background: rateColor(pin.value),
                    opacity: selected && !isSel && !isDragging ? 0.45 : 0.85,
                    border: isSel
                      ? '2.5px solid white'
                      : isHov || isDragging
                      ? '1.5px solid white'
                      : '1px solid rgba(255,255,255,0.5)',
                    boxShadow: isSel || isDragging ? `0 0 0 4px ${rateColor(pin.value)}55` : undefined,
                    cursor: isDragging ? 'grabbing' : 'grab',
                    transition: isDragging ? 'none' : 'width 0.15s, height 0.15s, opacity 0.15s',
                    zIndex: isSel || isDragging ? 10 : 1,
                  }}
                />
              )
            })}

            {/* Tooltip */}
            {active && (
              <div
                className="absolute top-4 right-4 bg-[var(--primary)] text-white rounded-xl p-3 shadow-xl min-w-36 pointer-events-none"
                style={{ zIndex: 20 }}
              >
                <div className="font-bold text-sm">{active.label}</div>
                <div className="text-xs opacity-70 mt-0.5">معدل التشغيل</div>
                <div className="text-2xl font-black">{active.value}%</div>
                <div className="text-xs opacity-70 mt-1">{DATA[active.id].engineers.toLocaleString('ar-EG')} مهندس</div>
              </div>
            )}

            {/* Copy positions button */}
            <button
              onClick={copyPositions}
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-[var(--border)] text-xs font-semibold text-[var(--primary)] hover:bg-white transition-colors"
              style={{ zIndex: 20 }}
            >
              {copied ? '✓ تم النسخ' : 'نسخ المواضع'}
            </button>

            {/* Legend */}
            <div
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-[var(--border)]"
              style={{ zIndex: 20 }}
            >
              <div className="text-xs font-semibold text-[var(--muted-foreground)] mb-2">معدل التشغيل</div>
              {[
                { label: '75%+',        color: 'var(--primary)' },
                { label: '60–75%',      color: 'var(--chart-3)' },
                { label: '50–60%',      color: 'var(--secondary)' },
                { label: '40–50%',      color: 'var(--chart-5)' },
                { label: 'أقل من 40%', color: 'var(--chart-6)' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-2 text-xs text-[var(--foreground)] mb-1">
                  <span className="w-3 h-3 rounded-sm inline-block" style={{ background: l.color }} />
                  {l.label}
                </div>
              ))}
            </div>
          </div>

          {/* Side panel */}
          <div className="flex flex-col gap-4">
            {active && (() => {
              const d = DATA[active.id]
              return (
                <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: rateColor(d.rate) + '22' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={rateColor(d.rate)} strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <div className="font-bold text-[var(--primary)]">{active.label}</div>
                      <div className="text-xs text-[var(--muted-foreground)]">تفاصيل المحافظة</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'معدل التشغيل',   value: `${d.rate}%`,                        color: rateColor(d.rate) },
                      { label: 'عدد المهندسين',  value: d.engineers.toLocaleString('ar-EG'), color: 'var(--primary)' },
                      { label: 'التصنيف الوطني', value: '#' + ([...governorates].sort((a, b) => b.rate - a.rate).findIndex(g => g.id === active.id) + 1), color: 'var(--secondary)' },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-center">
                        <span className="text-sm text-[var(--muted-foreground)]">{row.label}</span>
                        <span className="font-bold text-sm" style={{ color: row.color }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[var(--muted-foreground)]">نسبة التشغيل</span>
                      <span className="font-semibold">{d.rate}%</span>
                    </div>
                    <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${d.rate}%`, background: rateColor(d.rate) }} />
                    </div>
                  </div>
                </div>
              )
            })()}

            {/* Top 5 */}
            <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-5">
              <div className="font-semibold text-sm text-[var(--primary)] mb-3">أعلى المحافظات تشغيلاً</div>
              <div className="space-y-2.5">
                {[...governorates].sort((a, b) => b.rate - a.rate).slice(0, 5).map((gov, i) => (
                  <div key={gov.id} className="flex items-center gap-3">
                    <span className="text-xs font-black text-[var(--muted-foreground)] w-4">{i + 1}</span>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{gov.name}</span>
                        <span className="font-bold" style={{ color: rateColor(gov.rate) }}>{gov.rate}%</span>
                      </div>
                      <div className="h-1.5 bg-[var(--muted)] rounded-full">
                        <div className="h-full rounded-full" style={{ width: `${gov.rate}%`, background: rateColor(gov.rate) }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
