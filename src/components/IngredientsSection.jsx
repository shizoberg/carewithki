const ingredients = [
  {
    icon: '🌿',
    name: 'Vitex (Hayıt)',
    description: 'Hormonal denge için geleneksel bitkisel destek. Döngüde sık görülen ruh hali dalgalanmalarını destekler.',
  },
  {
    icon: '⚗️',
    name: 'Magnezyum Bisglisinat',
    description: 'Biyoyararlanımı yüksek form. Gerginlik ve yorgunluk hissinin azalmasına, kas sisteminin desteklenmesine yardımcı olur.',
  },
  {
    icon: '💊',
    name: 'B6 Vitamini',
    description: 'Ruh hali düzenlemesi ve sinir sistemi desteği. Hormonal dalgalanmaların etkilerini hafifletmeye katkıda bulunur.',
  },
  {
    icon: '🔬',
    name: 'Çinko',
    description: 'Cilt sağlığını ve bağışıklık sistemini destekler. Döngüsel süreçlerde önemli rol oynar.',
  },
  {
    icon: '🫚',
    name: 'Zencefil (Zingiber Officinale)',
    description: 'Şişkinlik ve mide rahatsızlığının azaltılmasına yardımcı olur. Antioksidan özellikleri ile destekler.',
  },
  {
    icon: '⚙️',
    name: 'Demir',
    description: 'Kan hücrelerinin normal oluşumuna katkıda bulunur, yorgunluğu azaltmaya yardımcı olur.',
  },
]

const badges = [
  { icon: '🏅', label: 'GMP sertifikalı' },
  { icon: '🌱', label: 'Vegan formül' },
  { icon: '🧪', label: 'Klinik dozaj' },
  { icon: '📅', label: '30 günlük kullanım' },
]

export default function IngredientsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Header */}
        <div className="k5-reveal text-[13px] font-bold uppercase tracking-[1.5px] text-[hsl(var(--primary))] mb-2">
          Formül
        </div>
        <div className="k5-reveal d1 flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[hsl(var(--foreground))] leading-tight">
            İçindekiler
          </h2>
          <p className="text-[hsl(var(--muted))] text-sm max-w-xs">
            Uzman eczacı ekibimiz tarafından klinik dozajda formüle edildi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              className={`k5-reveal d${(i % 3) + 1} bg-[hsl(var(--primary-light))] rounded-2xl p-5 flex gap-4 hover:shadow-md transition-shadow`}
            >
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 text-2xl">
                {ing.icon}
              </div>
              <div>
                <h3 className="font-bold text-[hsl(var(--primary))] text-base mb-1">{ing.name}</h3>
                <p className="text-sm text-[hsl(var(--foreground))]/70 leading-relaxed">{ing.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="k5-reveal d2 flex flex-wrap gap-3 justify-center">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-[hsl(var(--primary-light))] border border-[hsl(var(--primary))]/20 rounded-full px-4 py-2 text-sm font-semibold text-[hsl(var(--primary))]"
            >
              <span>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
