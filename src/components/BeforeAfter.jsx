const before = [
  'Kramp ve şiddetli ağrı',
  'Şişkinlik ve mide rahatsızlığı',
  'Ruh hali dalgalanmaları',
  'Yorgunluk ve enerji düşüklüğü',
  'Uyku bozukluğu',
]

const after = [
  'Dengeli ve rahat döngü',
  'Hafiflik ve sindirim konforu',
  'Sakin ve dengeli ruh hali',
  'Yüksek enerji ve odaklanma',
  'Derin ve kaliteli uyku',
]

export default function BeforeAfter() {
  return (
    <section className="py-16 bg-[hsl(var(--primary))]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="k5-reveal text-[13px] font-bold uppercase tracking-[1.5px] text-white/60 mb-2">
            Fark Yarat
          </p>
          <h2 className="k5-reveal d1 text-3xl md:text-4xl font-black text-white">
            Öncesi &amp; Sonrası
          </h2>
        </div>

        {/* Comparison */}
        <div className="k5-reveal d2 flex flex-col md:flex-row items-stretch gap-4 md:gap-0 max-w-2xl mx-auto">
          {/* Before */}
          <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-r-none md:rounded-l-2xl p-6 border border-white/20">
            <p className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">Önce</p>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-rose-500/30 flex items-center justify-center flex-shrink-0 text-rose-300 text-xs font-bold">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center md:px-4 rotate-90 md:rotate-0">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </div>
          </div>

          {/* After */}
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-2xl md:rounded-l-none md:rounded-r-2xl p-6 border border-white/30">
            <p className="text-sm font-bold uppercase tracking-wider text-white/70 mb-4">Sonra</p>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white font-medium">
                  <span className="w-5 h-5 rounded-full bg-green-400/30 flex items-center justify-center flex-shrink-0 text-green-300 text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
