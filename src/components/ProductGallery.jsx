import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Placeholder gradient images simulating product photos
const slides = [
  { id: 1, bg: 'from-ki-navy via-ki-purple to-ki-violet', label: 'Ürün - Ön' },
  { id: 2, bg: 'from-ki-violet via-purple-400 to-pink-300', label: 'Kullanım' },
  { id: 3, bg: 'from-indigo-900 via-ki-navy to-ki-purple', label: 'İçerik' },
  { id: 4, bg: 'from-ki-purple via-violet-500 to-ki-violet', label: 'Detay' },
]

export default function ProductGallery() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + slides.length) % slides.length)
  const next = () => setActive((a) => (a + 1) % slides.length)

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative rounded-3xl overflow-hidden aspect-square bg-ki-light">
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[active].bg} flex items-center justify-center`}>
          {/* Product box simulation */}
          <div className="relative">
            <div className="w-40 h-52 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center justify-center p-4 shadow-2xl">
              <p className="text-white font-black text-3xl tracking-tight">.ki</p>
              <p className="text-white/80 text-xs text-center mt-1 leading-tight">Balance Your Cycle</p>
              <div className="mt-3 space-y-0.5">
                <p className="text-white/60 text-[10px] text-center">Dong Quai · Magnesium</p>
                <p className="text-white/60 text-[10px] text-center">Vitex Agnus Castus</p>
              </div>
              <div className="mt-3 bg-white/20 rounded-lg px-3 py-1">
                <p className="text-white text-[10px] font-semibold">x10 Sachet · 20g</p>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.1)]" />
          </div>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
        >
          <ChevronLeft size={18} className="text-ki-navy" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
        >
          <ChevronRight size={18} className="text-ki-navy" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-200 ${
                i === active ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setActive(i)}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              i === active ? 'border-ki-navy' : 'border-transparent opacity-60 hover:opacity-80'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${slide.bg} flex items-center justify-center`}>
              <span className="text-white font-bold text-xs">.ki</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
