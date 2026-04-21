import { useState, useEffect, useRef } from 'react'
import { useReveal } from './hooks/useReveal'

import ScrollProgress       from './components/ScrollProgress'
import UrgencyBar           from './components/UrgencyBar'
import Header               from './components/Header'
import ProductGallery       from './components/ProductGallery'
import PricingSection       from './components/PricingSection'
import StatsBar             from './components/StatsBar'
import ReviewsSection       from './components/ReviewsSection'
import VideoTestimonials    from './components/VideoTestimonials'
import BeforeAfter          from './components/BeforeAfter'
import IngredientsSection   from './components/IngredientsSection'
import HowItWorksSection    from './components/HowItWorksSection'
import StickyCartBar        from './components/StickyCartBar'
import SocialProofToast     from './components/SocialProofToast'
import FooterSection        from './components/FooterSection'

export default function App() {
  useReveal()

  const [cartCount, setCartCount] = useState(0)
  const [stickyVisible, setStickyVisible] = useState(false)
  const pricingRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    if (pricingRef.current) observer.observe(pricingRef.current)
    return () => observer.disconnect()
  }, [])

  const handleAddToCart = () => setCartCount((c) => c + 1)

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <ScrollProgress />
      <UrgencyBar />
      <Header cartCount={cartCount} />

      {/* ── PRODUCT HERO (kept minimal — gallery + pricing) ── */}
      <section className="py-8 md:py-12">
        <div className="container">
          {/* Breadcrumb */}
          <p className="text-xs text-[hsl(var(--muted))] mb-6">
            Anasayfa › Takviye Edici Gıdalar ›{' '}
            <span className="text-[hsl(var(--foreground))]/70 font-medium">.ki Balance</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Gallery — sticky on desktop */}
            <div className="lg:sticky lg:top-20">
              <ProductGallery />
            </div>

            {/* Info + Pricing */}
            <div id="pricing" ref={pricingRef} className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))] font-semibold px-3 py-1 rounded-full">
                  Döngü Takviyesi
                </span>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                  ✓ Stokta — sadece 12 adet kaldı
                </span>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-black text-[hsl(var(--foreground))] leading-tight">
                  .ki Balance<br />
                  <span className="text-[hsl(var(--primary))]">Döngü Takviyesi</span>
                </h1>
                <p className="text-[hsl(var(--muted))] mt-2 text-base">
                  Eczacı ve doktorlar tarafından geliştirilmiş döngü takviyen.
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <a href="#reviews" className="text-sm font-semibold text-[hsl(var(--primary))] hover:underline">
                  5.0 · 90+ doğrulanmış değerlendirme
                </a>
              </div>

              {/* Key icons */}
              <div className="flex items-center gap-5 py-3 border-y border-gray-100 overflow-x-auto hide-scrollbar">
                {[
                  { icon: '🌿', label: 'Hayıt' },
                  { icon: '🫚', label: 'Zencefil' },
                  { icon: '💊', label: 'B12' },
                  { icon: '⚗️', label: 'Magnezyum' },
                  { icon: '⚙️', label: 'Demir' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-medium text-[hsl(var(--muted))]">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <PricingSection onAddToCart={handleAddToCart} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsBar />

      {/* ── REVIEWS (Q&A) ── */}
      <div id="reviews">
        <ReviewsSection />
      </div>

      {/* ── VIDEO TESTIMONIALS ── */}
      <VideoTestimonials />

      {/* ── BEFORE / AFTER ── */}
      <BeforeAfter />

      {/* ── INGREDIENTS ── */}
      <IngredientsSection />

      {/* ── HOW IT WORKS ── */}
      <HowItWorksSection />

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── FOOTER ── */}
      <FooterSection />

      {/* ── MOBILE STICKY CART ── */}
      <StickyCartBar
        visible={stickyVisible}
        price={3500}
        onAdd={handleAddToCart}
      />

      {/* ── SOCIAL PROOF TOAST ── */}
      <SocialProofToast />
    </div>
  )
}

/* ── Inline FAQ ── */
function FAQSection() {
  const [open, setOpen] = useState(null)

  const faqs = [
    {
      q: 'Ürünü nasıl kullanmalıyım?',
      a: 'Günde 1 sachet, tercihen sabah kahvaltıyla birlikte bir bardak suya karıştırarak tüketin. Eczacımız sana özel kullanım rutini oluşturabilir.',
    },
    {
      q: 'Kaç günde etki görülür?',
      a: 'Çoğu kullanıcı 2–4 hafta içinde döngüsel rahatsızlıklarda azalma bildirmektedir. Tam etki için 2–3 aylık düzenli kullanım önerilir.',
    },
    {
      q: 'Vegan mı?',
      a: 'Evet, tüm formülümüz %100 vegan sertifikalıdır. Hayvansal hiçbir ürün içermez.',
    },
    {
      q: 'İade politikası nedir?',
      a: '30 gün içinde iade talebinde bulunabilirsin. Ücretsiz kargo ile iade gönderilir, herhangi bir soru sorulmaz.',
    },
    {
      q: 'Aboneliği nasıl iptal ederim?',
      a: 'Aboneliğini istediğin zaman, herhangi bir ceza olmaksızın hesabından veya müşteri hizmetlerini arayarak iptal edebilirsin.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <p className="k5-reveal text-[13px] font-bold uppercase tracking-[1.5px] text-[hsl(var(--primary))] mb-2">SSS</p>
          <h2 className="k5-reveal d1 text-3xl font-black text-[hsl(var(--foreground))]">Sık Sorulan Sorular</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="k5-reveal border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-[hsl(var(--primary-light))] transition-colors"
              >
                <span className="font-semibold text-[hsl(var(--foreground))] text-sm">{faq.q}</span>
                <span className={`text-[hsl(var(--primary))]/50 text-xl font-light transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-[hsl(var(--foreground))]/70 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
