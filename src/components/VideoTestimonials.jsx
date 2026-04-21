import { useRef, useState, useCallback } from 'react'

const videos = [
  { name: 'Ulyana',  age: '21 yaş', bg: 'from-[#3a1f7a] to-[#5a3ca0]' },
  { name: 'Simge',   age: '25 yaş', bg: 'from-[#3a1f7a] to-[#5a3ca0]' },
  { name: 'Ecem',    age: '23 yaş', bg: 'from-[#1e1250] to-[#3a2080]' },
  { name: 'Aylin',   age: '28 yaş', bg: 'from-[#2a1560] to-[#4a3290]' },
  { name: 'İpek',    age: '32 yaş', bg: 'from-[#321a70] to-[#5540a0]' },
  { name: 'Gizem',   age: '31 yaş', bg: 'from-[#251460] to-[#3d2880]' },
]

export default function VideoTestimonials() {
  const trackRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const scrollL = useRef(0)

  const onMouseDown = useCallback((e) => {
    setDragging(true)
    startX.current = e.pageX - (trackRef.current?.offsetLeft || 0)
    scrollL.current = trackRef.current?.scrollLeft || 0
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!dragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollL.current - (x - startX.current) * 1.5
  }, [dragging])

  const onEnd = useCallback(() => setDragging(false), [])

  return (
    <section className="py-14 bg-white">
      <div className="container">
        <div className="k5-reveal text-[13px] font-bold uppercase tracking-[1.5px] text-[hsl(var(--primary))] mb-6 flex items-center gap-2">
          Video Yorumlar
          <span className="text-[11px] text-[hsl(var(--muted))] font-medium normal-case tracking-normal">— kaydır</span>
        </div>
        <div
          ref={trackRef}
          className={`flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory grab-cursor ${dragging ? 'dragging' : ''}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onEnd}
          onMouseLeave={onEnd}
        >
          {videos.map((v) => (
            <div
              key={v.name}
              className={`flex-none w-[180px] snap-start rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br ${v.bg}`}
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-white text-center p-4">
                {/* Play button */}
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-transform hover:scale-110 cursor-pointer">
                  <svg className="w-5 h-5 fill-white ml-0.5" viewBox="0 0 24 24">
                    <polygon points="8,5 20,12 8,19" />
                  </svg>
                </div>
                <div className="text-sm font-bold">{v.name}</div>
                <div className="text-xs opacity-70">{v.age}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
