import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 2400, suffix: '+', label: 'Mutlu kullanıcı' },
  { value: 5.0, suffix: '', label: 'Ortalama puan', decimal: true },
  { value: 90,  suffix: '+', label: 'Doğrulanmış yorum' },
  { value: 92,  suffix: '%', label: 'Tekrar satın alma' },
]

function useAnimatedCounter(target, duration = 1800, decimal = false) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          setCount(decimal ? +(target * ease).toFixed(1) : Math.floor(target * ease))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, decimal])

  return { count, ref }
}

function StatItem({ value, suffix, label, decimal }) {
  const { count, ref } = useAnimatedCounter(value, 1800, decimal)
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 py-4">
      <span className="text-3xl font-black text-[hsl(var(--primary))]">
        {decimal ? count.toFixed(1) : count.toLocaleString('tr-TR')}{suffix}
      </span>
      <span className="text-xs text-[hsl(var(--muted))] font-medium">{label}</span>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
