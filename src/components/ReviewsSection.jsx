import { useState } from 'react'

const reviews = [
  {
    user: { initials: 'SK', name: 'Selin K.', city: 'İstanbul', time: '2 hafta önce' },
    question: 'PMS döneminde kramp ve gerginlik çok şiddetliydi, bu ürün gerçekten işe yarıyor mu?',
    answer: 'Vitex (Hayıt) ve Magnezyum kombinasyonu, döngüsel gerginliği desteklemek için özellikle seçildi. Çoğu kullanıcımız 2–4 hafta içinde fark hissediyor. Düzenli kullanım çok önemli.',
  },
  {
    user: { initials: 'MA', name: 'Merve A.', city: 'Ankara', time: '1 ay önce' },
    question: '3\'lü paketi aldım, eczacı danışmanı da çok yardımcı oldu. Ruh hali değişimleri için özellikle etkili mi?',
    answer: 'B6 Vitamini ve Vitex kombinasyonu tam olarak bu amaçla formülde yer alıyor. Hormonal dalgalanmaların sinir sistemi üzerindeki etkisini desteklemeye odaklandık.',
  },
  {
    user: { initials: 'ZT', name: 'Zeynep T.', city: 'İzmir', time: '3 hafta önce' },
    question: 'Şişkinlik ve sindirim rahatsızlığı döngümde büyük sorun. Bu içerikler buna da yardımcı olur mu?',
    answer: 'Zencefil (Zingiber Officinale) formülümüzün tam bu nedenden ötürü içinde bulunuyor. Mide rahatsızlığı ve şişkinliğin azaltılmasına katkısı klinik olarak belgelenmiş.',
  },
  {
    user: { initials: 'DÖ', name: 'Deniz Ö.', city: 'Bursa', time: '1 ay önce' },
    question: 'Uyku sorunlarım döngümle bağlantılı, Magnezyum buna yardımcı olabilir mi?',
    answer: 'Magnezyum Bisglisinat biyoyararlanımı yüksek bir form. Sinir sistemi fonksiyonlarını destekler ve pek çok kullanıcımız uyku kalitesinde iyileşme bildiriyor.',
  },
  {
    user: { initials: 'BK', name: 'Büşra K.', city: 'Antalya', time: '3 hafta önce' },
    question: 'Tamamen doğal bir formül mü? İçeriklerin hepsini güvenli bulabilirim mi?',
    answer: 'Evet, %100 vegan ve doğal kaynaklı. FDA ve GMP standartlarında üretiliyor. 13+ aktif içerik klinik dozajda, yapay katkı maddesi içermiyor.',
  },
  {
    user: { initials: 'EA', name: 'Ece A.', city: 'Eskişehir', time: '2 ay önce' },
    question: 'Odaklanma güçlüğü çekiyorum döngü boyunca, bu konuda etkisi var mı?',
    answer: 'B12 ve B6 vitamini kombinasyonu sinir sistemi ve bilişsel fonksiyonları destekler. Enerji metabolizmasına katkısı da bilişsel netliği dolaylı olarak olumlu etkiler.',
  },
]

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? reviews : reviews.slice(0, 2)

  return (
    <section className="py-16 bg-[hsl(var(--primary-light))]">
      <div className="container">
        {/* Header */}
        <div className="k5-reveal mb-2 text-[13px] font-bold uppercase tracking-[1.5px] text-[hsl(var(--primary))]">
          Soru &amp; Cevap
        </div>
        <div className="k5-reveal d1 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-[hsl(var(--foreground))] leading-tight">
            Eczacımızın Yanıtladığı<br className="hidden md:block" /> Sorular
          </h2>
          <p className="text-[hsl(var(--muted))] mt-2 text-sm">
            Ecz. Arin Alan — Klinik eczacı &amp; formül danışmanı
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visible.map((r, i) => (
            <div
              key={i}
              className={`k5-reveal d${(i % 3) + 1} bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow`}
            >
              {/* User question */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-medium))] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{r.user.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{r.user.name}</p>
                    <p className="text-xs text-[hsl(var(--muted))]">{r.user.city} · {r.user.time}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-sm">★</span>)}
                  </div>
                </div>
                <p className="text-sm text-[hsl(var(--foreground))] leading-relaxed font-medium">
                  "{r.question}"
                </p>
              </div>

              {/* Pharmacist answer */}
              <div className="bg-[hsl(var(--sage-light))] px-5 py-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--sage))] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[10px] font-bold">EA</span>
                  </div>
                  <span className="text-xs font-semibold text-[hsl(var(--sage))]">Ecz. Arin Alan</span>
                </div>
                <p className="text-sm text-[hsl(var(--foreground))]/80 leading-relaxed">
                  {r.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="border-2 border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] font-semibold px-6 py-3 rounded-xl hover:bg-[hsl(var(--primary-light))] transition-colors text-sm"
            >
              Daha fazlasını gör ({reviews.length - 2} soru daha)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
