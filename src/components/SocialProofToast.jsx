import { useEffect, useState } from 'react'

const toastData = [
  { initials: 'SK', name: 'Selin K.',  city: 'İstanbul',  time: '2 dakika önce' },
  { initials: 'MA', name: 'Merve A.', city: 'Ankara',     time: '7 dakika önce' },
  { initials: 'ZT', name: 'Zeynep T.', city: 'İzmir',    time: '12 dakika önce' },
  { initials: 'DÖ', name: 'Deniz Ö.', city: 'Bursa',      time: '18 dakika önce' },
  { initials: 'BK', name: 'Büşra K.',  city: 'Antalya',   time: '24 dakika önce' },
  { initials: 'EA', name: 'Ece A.',    city: 'Eskişehir', time: '31 dakika önce' },
  { initials: 'NC', name: 'Nisan C.',  city: 'Konya',     time: '38 dakika önce' },
  { initials: 'HY', name: 'Hande Y.',  city: 'Trabzon',   time: '45 dakika önce' },
]

export default function SocialProofToast() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const initial = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(initial)
  }, [])

  useEffect(() => {
    if (!visible) return
    const hide = setTimeout(() => setVisible(false), 4500)
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % toastData.length)
      setVisible(true)
    }, 12000)
    return () => { clearTimeout(hide); clearTimeout(next) }
  }, [visible, index])

  const t = toastData[index]

  return (
    <div
      className={`fixed bottom-24 md:bottom-6 left-4 z-50 transition-transform duration-500 ${
        visible ? 'translate-x-0' : '-translate-x-[150%]'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex items-center gap-3 max-w-[260px]">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-medium))] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">{t.initials}</span>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-[hsl(var(--foreground))] truncate">
            {t.name} — {t.city}
          </p>
          <p className="text-[11px] text-[hsl(var(--muted))]">Satın aldı · {t.time}</p>
        </div>
        <span className="text-lg flex-shrink-0">📦</span>
      </div>
    </div>
  )
}
