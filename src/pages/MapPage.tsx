// @refresh reset
import { useState, useRef, useCallback, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import egyptMapImage from "@/assets/Green Governorates Map of Egypt.png";
import { MapPin } from "lucide-react";

const STORAGE_KEY = "map-page-pin-positions-v1";

const governorates = [
  {
    id: "cairo",
    name: "القاهرة",
    rate: 82,
    engineers: 640000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "عالٍ",
    top: "16.79%",
    left: "57.36%",
  },
  {
    id: "giza",
    name: "الجيزة",
    rate: 76,
    engineers: 420000,
    specialty: "كهرباء",
    sector: "خاص",
    demand: "عالٍ",
    top: "27.75%",
    left: "37.32%",
  },
  {
    id: "alex",
    name: "الإسكندرية",
    rate: 71,
    engineers: 310000,
    specialty: "ميكانيكا",
    sector: "خاص",
    demand: "متوسط",
    top: "10.37%",
    left: "41.84%",
  },
  // {
  //   id: "sharqia",
  //   name: "الشرقية",
  //   rate: 64,
  //   engineers: 180000,
  //   specialty: "زراعي",
  //   sector: "حكومي",
  //   demand: "متوسط",
  //   top: "12.5%",
  //   left: "57.0%",
  // },
  // {
  //   id: "gharbiya",
  //   name: "الغربية",
  //   rate: 59,
  //   engineers: 140000,
  //   specialty: "كيميائي",
  //   sector: "صناعي",
  //   demand: "منخفض",
  //   top: "9.5%",
  //   left: "51.5%",
  // },
  {
    id: "dakahlia",
    name: "الدقهلية",
    rate: 62,
    engineers: 160000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "متوسط",
    top: "8.14%",
    left: "56.17%",
  },
  // {
  //   id: "beheira",
  //   name: "البحيرة",
  //   rate: 52,
  //   engineers: 120000,
  //   specialty: "زراعي",
  //   sector: "حكومي",
  //   demand: "منخفض",
  //   top: "13.34%",
  //   left: "44.36%",
  // },
  {
    id: "qalyubia",
    name: "القليوبية",
    rate: 67,
    engineers: 155000,
    specialty: "مدني",
    sector: "خاص",
    demand: "متوسط",
    top: "14.62%",
    left: "53.93%",
  },
  // {
  //   id: "kafrSheikh",
  //   name: "كفر الشيخ",
  //   rate: 54,
  //   engineers: 68000,
  //   specialty: "زراعي",
  //   sector: "حكومي",
  //   demand: "منخفض",
  //   top: "6.50%",
  //   left: "50.82%",
  // },
  {
    id: "monufia",
    name: "المنوفية",
    rate: 58,
    engineers: 82000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "منخفض",
    top: "11.64%",
    left: "51.52%",
  },
  // {
  //   id: "damietta",
  //   name: "دمياط",
  //   rate: 61,
  //   engineers: 45000,
  //   specialty: "ميكانيكا",
  //   sector: "صناعي",
  //   demand: "متوسط",
  //   top: "4.90%",
  //   left: "57.69%",
  // },
  {
    id: "suez",
    name: "السويس",
    rate: 78,
    engineers: 95000,
    specialty: "بترول",
    sector: "صناعي",
    demand: "عالٍ",
    top: "20.40%",
    left: "61.09%",
  },
  // {
  //   id: "ismailia",
  //   name: "الإسماعيلية",
  //   rate: 73,
  //   engineers: 88000,
  //   specialty: "صناعي",
  //   sector: "صناعي",
  //   demand: "عالٍ",
  //   top: "11.89%",
  //   left: "63.75%",
  // },
  {
    id: "portSaid",
    name: "بورسعيد",
    rate: 68,
    engineers: 72000,
    specialty: "ميكانيكا",
    sector: "خاص",
    demand: "متوسط",
    top: "7.68%",
    left: "62.71%",
  },
  {
    id: "faiyum",
    name: "الفيوم",
    rate: 47,
    engineers: 65000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "منخفض",
    top: "24.91%",
    left: "44.97%",
  },
  {
    id: "beniSuef",
    name: "بني سويف",
    rate: 44,
    engineers: 58000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "منخفض",
    top: "30.91%",
    left: "54.16%",
  },
  {
    id: "minya",
    name: "المنيا",
    rate: 43,
    engineers: 72000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "منخفض",
    top: "35.42%",
    left: "47.61%",
  },
  {
    id: "assiut",
    name: "أسيوط",
    rate: 45,
    engineers: 68000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "منخفض",
    top: "42.00%",
    left: "57.61%",
  },
  {
    id: "sohag",
    name: "سوهاج",
    rate: 38,
    engineers: 55000,
    specialty: "كيميائي",
    sector: "حكومي",
    demand: "منخفض",
    top: "47.87%",
    left: "62.68%",
  },
  {
    id: "qena",
    name: "قنا",
    rate: 36,
    engineers: 48000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "منخفض",
    top: "53.35%",
    left: "67.03%",
  },
  // {
  //   id: "luxor",
  //   name: "الأقصر",
  //   rate: 41,
  //   engineers: 38000,
  //   specialty: "معماري",
  //   sector: "سياحي",
  //   demand: "متوسط",
  //   top: "61.93%",
  //   left: "65.34%",
  // },
  {
    id: "aswan",
    name: "أسوان",
    rate: 39,
    engineers: 35000,
    specialty: "كهرباء",
    sector: "حكومي",
    demand: "منخفض",
    top: "90.0%",
    left: "55.5%",
  },
  {
    id: "newValley",
    name: "الوادي الجديد",
    rate: 31,
    engineers: 18000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "منخفض",
    top: "63.34%",
    left: "31.71%",
  },
  {
    id: "matrouh",
    name: "مطروح",
    rate: 28,
    engineers: 22000,
    specialty: "مدني",
    sector: "حكومي",
    demand: "منخفض",
    top: "18.82%",
    left: "21.22%",
  },
  // {
  //   id: "northSinai",
  //   name: "شمال سيناء",
  //   rate: 55,
  //   engineers: 42000,
  //   specialty: "عسكري",
  //   sector: "حكومي",
  //   demand: "متوسط",
  //   top: "13.33%",
  //   left: "74.52%",
  // },
  // {
  //   id: "southSinai",
  //   name: "جنوب سيناء",
  //   rate: 62,
  //   engineers: 35000,
  //   specialty: "سياحي",
  //   sector: "خاص",
  //   demand: "عالٍ",
  //   top: "29.03%",
  //   left: "75.38%",
  // },
  {
    id: "redSea",
    name: "البحر الأحمر",
    rate: 66,
    engineers: 52000,
    specialty: "بترول",
    sector: "صناعي",
    demand: "عالٍ",
    top: "69.61%",
    left: "79.29%",
  },
];

type Gov = (typeof governorates)[0];
type PinPos = { top: string; left: string };
type FilterKey = "all" | "demand" | "employment" | "skills" | "specialty";

function rateColor(rate: number) {
  if (rate >= 75) return "var(--primary)";
  if (rate >= 60) return "var(--chart-3)";
  if (rate >= 50) return "var(--secondary)";
  if (rate >= 40) return "var(--chart-5)";
  return "var(--chart-6)";
}

function loadSavedPositions(): Record<string, PinPos> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function MapPage() {
  const [selected, setSelected] = useState<Gov | null>(null);
  // const [hovered, setHovered] = useState<Gov | null>(null);
  const [view, setView] = useState<FilterKey>("employment");
  const [filterSpecialty, setFilterSpecialty] = useState("الكل");
  const [filterSector, setFilterSector] = useState("الكل");
  const [filterDemand, setFilterDemand] = useState("الكل");
  const [positions, setPositions] =
    useState<Record<string, PinPos>>(loadSavedPositions);
  const [copied, setCopied] = useState(false);

  const dragRef = useRef<{
    id: string;
    startMouseX: number;
    startMouseY: number;
    startLeft: number;
    startTop: number;
    moved: boolean;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPinPos = useCallback(
    (gov: Gov): PinPos => positions[gov.id] ?? { top: gov.top, left: gov.left },
    [positions],
  );

  const handlePinMouseDown = useCallback(
    (e: React.MouseEvent, gov: Gov) => {
      e.preventDefault();
      e.stopPropagation();
      const pos = positions[gov.id] ?? { top: gov.top, left: gov.left };
      dragRef.current = {
        id: gov.id,
        startMouseX: e.clientX,
        startMouseY: e.clientY,
        startLeft: parseFloat(pos.left),
        startTop: parseFloat(pos.top),
        moved: false,
      };
    },
    [positions],
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const drag = dragRef.current;
      if (!drag || !containerRef.current) return;
      const dx = e.clientX - drag.startMouseX;
      const dy = e.clientY - drag.startMouseY;
      if (!drag.moved && Math.abs(dx) < 3 && Math.abs(dy) < 3) return;
      drag.moved = true;
      const rect = containerRef.current.getBoundingClientRect();
      const left = `${Math.max(0, Math.min(100, drag.startLeft + (dx / rect.width) * 100)).toFixed(2)}%`;
      const top = `${Math.max(0, Math.min(100, drag.startTop + (dy / rect.height) * 100)).toFixed(2)}%`;
      setPositions((prev) => ({ ...prev, [drag.id]: { top, left } }));
    };
    const onUp = (e: MouseEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      if (drag.moved) {
        setPositions((prev) => {
          const next = { ...prev };
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          } catch {}
          return next;
        });
      } else {
        const gov = governorates.find((g) => g.id === drag.id)!;
        setSelected((sel) => (sel?.id === gov.id ? null : gov));
      }
      dragRef.current = null;
      void e;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const copyPositions = () => {
    const lines = governorates
      .map((g) => {
        const pos = positions[g.id] ?? { top: g.top, left: g.left };
        return `  { id: '${g.id}', top: '${pos.top}', left: '${pos.left}' },`;
      })
      .join("\n");
    navigator.clipboard.writeText(`[\n${lines}\n]`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const filtered = governorates.filter((g) => {
    if (filterSpecialty !== "الكل" && g.specialty !== filterSpecialty)
      return false;
    if (filterSector !== "الكل" && g.sector !== filterSector) return false;
    if (filterDemand !== "الكل" && g.demand !== filterDemand) return false;
    return true;
  });

  const filteredIds = new Set(filtered.map((g) => g.id));
  const display = selected;

  const specialties = [
    "الكل",
    ...Array.from(new Set(governorates.map((g) => g.specialty))),
  ];
  const sectors = [
    "الكل",
    ...Array.from(new Set(governorates.map((g) => g.sector))),
  ];

  return (
    <>
      <PageHeader
        title="خريطة سوق العمل الهندسي"
        subtitle="استعراض تفاعلي لتوزيع القوى العاملة الهندسية ومؤشرات التشغيل على مستوى المحافظات"
        crumbs={[{ label: "الرئيسية", to: "/" }, { label: "خريطة سوق العمل" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-[var(--border)] p-4 mb-6 flex flex-wrap gap-3 items-center">
          <span className="text-sm font-semibold text-[var(--muted-foreground)]">
            تصفية:
          </span>
          {[
            {
              label: "التخصص",
              val: filterSpecialty,
              set: setFilterSpecialty,
              opts: specialties,
            },
            {
              label: "القطاع",
              val: filterSector,
              set: setFilterSector,
              opts: sectors,
            },
            {
              label: "مستوى الطلب",
              val: filterDemand,
              set: setFilterDemand,
              opts: ["الكل", "عالٍ", "متوسط", "منخفض"],
            },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-2">
              <span className="text-xs text-[var(--muted-foreground)]">
                {f.label}:
              </span>
              <select
                value={f.val}
                onChange={(e) => f.set(e.target.value)}
                className="text-sm px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--muted)] focus:outline-none focus:border-[var(--primary)] cursor-pointer"
              >
                {f.opts.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          ))}
          {/* <div className="mr-auto flex gap-1">
            {(["employment", "demand", "skills"] as FilterKey[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${view === v ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--primary)]"}`}
              >
                {v === "employment"
                  ? "التشغيل"
                  : v === "demand"
                    ? "الطلب"
                    : "الفجوة المهارية"}
              </button>
            ))}
          </div> */}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div
            ref={containerRef}
            className="lg:col-span-2 rounded-2xl border border-[var(--border)] overflow-hidden relative bg-[var(--map-surface)]"
            style={{ aspectRatio: "840/1000", userSelect: "none" }}
          >
            <img
              src={egyptMapImage}
              alt="خريطة مصر"
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: "fill", pointerEvents: "none" }}
            />

            {/* Pins */}

            {/* Pins */}
            {governorates.map((gov) => {
              const isSel = selected?.id === gov.id;
              const isFiltered = filteredIds.has(gov.id);
              const size = isSel ? 18 : 13;

              return (
                <div
                  key={gov.id}
                  onClick={() =>
                    isFiltered &&
                    setSelected((sel) => (sel?.id === gov.id ? null : gov))
                  }
                  style={{
                    position: "absolute",
                    top: gov.top,
                    left: gov.left,
                    transform: "translate(-50%, -50%)",
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    background: rateColor(gov.rate),
                    opacity: !isFiltered
                      ? 0.15
                      : selected && !isSel
                        ? 0.45
                        : 0.85,
                    border: isSel
                      ? "2.5px solid white"
                      : "1px solid rgba(255,255,255,0.5)",
                    boxShadow: isSel
                      ? `0 0 0 4px ${rateColor(gov.rate)}55`
                      : undefined,
                    cursor: isFiltered ? "pointer" : "default",
                    transition: "width 0.15s, height 0.15s, opacity 0.15s",
                    zIndex: isSel ? 10 : 1,
                  }}
                />
              );
            })}

            {/* High-demand badge */}
            {governorates
              .filter((g) => g.demand === "عالٍ" && filteredIds.has(g.id))
              .map((gov) => {
                const pos = getPinPos(gov);
                return (
                  <div
                    key={gov.id + "-badge"}
                    style={{
                      position: "absolute",
                      top: `calc(${pos.top} - 7px)`,
                      left: `calc(${pos.left} + 5px)`,
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--success)",
                      border: "1px solid white",
                      pointerEvents: "none",
                      zIndex: 5,
                    }}
                  />
                );
              })}

            {/* Tooltip */}
            {display && (
              <div
                className="absolute top-4 right-4 bg-[var(--primary)] text-white rounded-xl p-3 shadow-xl pointer-events-none"
                style={{ zIndex: 20 }}
              >
                <div className="font-bold text-sm">{display.name}</div>
                <div className="text-2xl font-black mt-1">{display.rate}%</div>
                <div className="text-xs opacity-60">معدل التشغيل</div>
                <div className="text-xs opacity-70 mt-1">
                  {display.engineers.toLocaleString("ar-EG")} مهندس
                </div>
              </div>
            )}

            {/* Legend */}
            {/* <div
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-[var(--border)] text-xs"
              style={{ zIndex: 20 }}
            >
              <div className="font-semibold text-[var(--muted-foreground)] mb-2">
                معدل التشغيل
              </div>
              {[
                ["var(--primary)", "75%+"],
                ["var(--chart-3)", "60–75%"],
                ["var(--secondary)", "50–60%"],
                ["var(--chart-5)", "40–50%"],
                ["var(--chart-6)", "أقل من 40%"],
              ].map(([c, l]) => (
                <div key={l} className="flex items-center gap-1.5 mb-1">
                  <span
                    className="w-3 h-3 rounded-sm"
                    style={{ background: c }}
                  />
                  <span>{l}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-[var(--border)]">
                <span className="w-3 h-3 rounded-full bg-[var(--success)]" />
                <span>طلب عالٍ</span>
              </div>
            </div> */}

            {/* Copy positions */}
            {/* <button
              onClick={copyPositions}
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-[var(--border)] text-xs font-semibold text-[var(--primary)] hover:bg-white transition-colors"
              style={{ zIndex: 20 }}
            >
              {copied ? "✓ تم النسخ" : "نسخ المواضع"}
            </button> */}
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            {display ? (
              <div className="bg-white rounded-2xl border border-[var(--border)] p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: rateColor(display.rate) + "20" }}
                  >
                    <MapPin size={28} className="text-[var(--iconColor)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--primary)] text-lg">
                      {display.name}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)]">
                      تفاصيل المحافظة
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      label: "معدل التشغيل",
                      value: `${display.rate}%`,
                      color: rateColor(display.rate),
                    },
                    {
                      label: "عدد المهندسين",
                      value: display.engineers.toLocaleString("ar-EG"),
                      color: "var(--primary)",
                    },
                    {
                      label: "التخصص الغالب",
                      value: display.specialty,
                      color: "var(--secondary)",
                    },
                    {
                      label: "القطاع السائد",
                      value: display.sector,
                      color: "var(--accent)",
                    },
                    {
                      label: "مستوى الطلب",
                      value: display.demand,
                      color:
                        display.demand === "عالٍ"
                          ? "var(--success)"
                          : display.demand === "متوسط"
                            ? "var(--warning-bright)"
                            : "var(--danger-bright)",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between items-center py-1.5 border-b border-[var(--border)] last:border-0"
                    >
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {row.label}
                      </span>
                      <span
                        className="font-bold text-sm"
                        style={{ color: row.color }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--muted-foreground)]">
                      نسبة التشغيل
                    </span>
                    <span className="font-semibold">{display.rate}%</span>
                  </div>
                  <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${display.rate}%`,
                        background: rateColor(display.rate),
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-[var(--border)] p-5 text-center">
                <svg
                  className="w-10 h-10 mx-auto mb-2 text-[var(--muted-foreground)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="text-sm text-[var(--muted-foreground)]">
                  انقر على محافظة لعرض تفاصيلها
                </div>
              </div>
            )}

            {/* Rankings */}
            <div className="bg-white rounded-2xl border border-[var(--border)] p-5">
              <div className="font-semibold text-sm text-[var(--primary)] mb-3">
                ترتيب المحافظات
              </div>
              <div className="space-y-2">
                {[...governorates]
                  .sort((a, b) => b.rate - a.rate)
                  .slice(0, 8)
                  .map((gov, i) => (
                    <button
                      key={gov.id}
                      onClick={() =>
                        setSelected(selected?.id === gov.id ? null : gov)
                      }
                      className="w-full flex items-center gap-2.5 py-1.5 hover:bg-[var(--muted)] rounded-lg px-2 transition-colors text-right"
                    >
                      <span className="text-xs font-black text-[var(--muted-foreground)] w-5">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-0.5">
                          <span className="font-medium">{gov.name}</span>
                          <span
                            className="font-bold"
                            style={{ color: rateColor(gov.rate) }}
                          >
                            {gov.rate}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-[var(--muted)] rounded-full">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${gov.rate}%`,
                              background: rateColor(gov.rate),
                            }}
                          />
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary table */}
        <div className="mt-6 bg-white rounded-2xl border border-[var(--border)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between">
            <span className="font-bold text-[var(--primary)]">
              جدول بيانات المحافظات
            </span>
            <button className="text-xs text-[var(--primary)] flex items-center gap-1.5 border border-[var(--primary)] px-3 py-1.5 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              تصدير Excel
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--muted)] text-xs text-[var(--muted-foreground)]">
                  <th className="text-right px-6 py-3 font-semibold">
                    المحافظة
                  </th>
                  <th className="text-center px-4 py-3 font-semibold">
                    المهندسون
                  </th>
                  <th className="text-center px-4 py-3 font-semibold">
                    التشغيل
                  </th>
                  <th className="text-center px-4 py-3 font-semibold">
                    التخصص
                  </th>
                  <th className="text-center px-4 py-3 font-semibold">
                    القطاع
                  </th>
                  <th className="text-center px-4 py-3 font-semibold">الطلب</th>
                </tr>
              </thead>
              <tbody>
                {filtered
                  .sort((a, b) => b.rate - a.rate)
                  .map((gov) => (
                    <tr
                      key={gov.id}
                      className={`border-t border-[var(--border)] hover:bg-[var(--muted)]/40 cursor-pointer ${selected?.id === gov.id ? "bg-[var(--info-soft)]" : ""}`}
                      onClick={() =>
                        setSelected(selected?.id === gov.id ? null : gov)
                      }
                    >
                      <td className="px-6 py-2.5 font-medium">{gov.name}</td>
                      <td className="px-4 py-2.5 text-center text-xs">
                        {(gov.engineers / 1000).toFixed(0)}K
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        <span
                          className="font-bold text-xs"
                          style={{ color: rateColor(gov.rate) }}
                        >
                          {gov.rate}%
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs text-[var(--muted-foreground)]">
                        {gov.specialty}
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs text-[var(--muted-foreground)]">
                        {gov.sector}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${gov.demand === "عالٍ" ? "bg-[var(--success-soft)] text-[var(--success-strong)]" : gov.demand === "متوسط" ? "bg-[var(--warning-soft)] text-[var(--warning)]" : "bg-[var(--muted)] text-[var(--muted-foreground)]"}`}
                        >
                          {gov.demand}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
