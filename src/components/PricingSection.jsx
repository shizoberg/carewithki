import { useState } from 'react'
import { Check, RefreshCw, Package } from 'lucide-react'

const packages = [
  {
    id: 'single',
    label: 'Tekli Paket',
    price: 1400,
    originalPrice: null,
    badge: null,
    perUnit: null,
    features: [
      'FDA ve GMP Standartlarına Uygun Üretildi.',
      '%100 Vegan Formülasyon.',
      'Hayıt & Bitkisel Ekstreler.',
      'Magnezyum + B6 + B12.',
      '13+ Aktif İçerik.',
    ],
    subscription: false,
  },
  {
    id: 'triple',
    label: '3\'lü Paket',
    price: 3500,
    originalPrice: 4200,
    badge: 'EN POPÜLER',
    perUnit: 1167,
    features: [
      '13+ Aktif İçerik & Hayıt & Bitkisel Ekstreler.',
      'Magnezyum + B6 + B12.',
      'Matara ve Ayna Hediye.',
      '3 Adet Balance Your Cycle Gönderilir.',
      'Eczacımız ile Sana Özel Takviye Rutini Oluştur.',
    ],
    subscription: true,
  },
]

export default function PricingSection({ onAddToCart }) {
  const [selected, setSelected] = useState('triple')
  const [subscriptionMode, setSubscriptionMode] = useState(false)
  const [added, setAdded] = useState(false)

  const selectedPkg = packages.find((p) => p.id === selected)

  const handleAdd = () => {
    setAdded(true)
    onAddToCart?.()
    setTimeout(() => setAdded(false), 2000)
  }

  const finalPrice = subscriptionMode
    ? Math.round(selectedPkg.price * 0.9)
    : selectedPkg.price

  return (
    <div className="space-y-4">
      {/* Package selector */}
      <div className="space-y-3">
        {packages.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => setSelected(pkg.id)}
            className={`package-card w-full text-left ${
              selected === pkg.id ? 'package-card-selected' : 'package-card-unselected'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {/* Radio */}
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    selected === pkg.id ? 'border-ki-navy' : 'border-gray-300'
                  }`}
                >
                  {selected === pkg.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-ki-navy" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-ki-navy text-base">{pkg.label}</span>
                    {pkg.badge && (
                      <span className="badge-popular text-[10px]">{pkg.badge}</span>
                    )}
                  </div>
                  {pkg.perUnit && (
                    <p className="text-xs text-ki-navy/50 mt-0.5">
                      Adet başına ~{pkg.perUnit.toLocaleString('tr-TR')}₺
                    </p>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                {pkg.originalPrice && (
                  <p className="text-xs text-ki-navy/40 line-through">
                    {pkg.originalPrice.toLocaleString('tr-TR')}₺
                  </p>
                )}
                <p className="text-xl font-bold text-ki-navy">
                  {pkg.price.toLocaleString('tr-TR')}₺
                </p>
              </div>
            </div>

            {/* Features - show when selected */}
            {selected === pkg.id && (
              <div className="mt-4 space-y-2 border-t border-ki-navy/10 pt-4">
                {pkg.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={15} className="text-ki-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-ki-navy/80">{f}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Subscription note */}
            {selected === pkg.id && pkg.subscription && (
              <p className="text-xs text-ki-purple font-medium mt-3">
                Eczacımız ile Sana Özel Takviye Rutini Oluştur.
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Subscription toggle */}
      <div className="bg-ki-light rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RefreshCw size={18} className="text-ki-purple" />
            <div>
              <p className="text-sm font-semibold text-ki-navy">Abonelik ile %10 İndirim</p>
              <p className="text-xs text-ki-navy/60 mt-0.5">Her ay otomatik gönderim, istediğin zaman iptal</p>
            </div>
          </div>
          <button
            onClick={() => setSubscriptionMode(!subscriptionMode)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${
              subscriptionMode ? 'bg-ki-navy' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                subscriptionMode ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        {subscriptionMode && (
          <div className="mt-3 flex items-center justify-between bg-white rounded-xl px-4 py-2.5">
            <span className="text-sm text-ki-navy/70">Abonelik fiyatı</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-ki-navy/40 line-through">
                {selectedPkg.price.toLocaleString('tr-TR')}₺
              </span>
              <span className="text-base font-bold text-ki-navy">
                {finalPrice.toLocaleString('tr-TR')}₺
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAdd}
        className={`btn-primary text-lg flex items-center justify-center gap-2 ${
          added ? 'bg-ki-green hover:bg-ki-green' : ''
        }`}
      >
        {added ? (
          <>
            <Check size={20} />
            Sepete Eklendi!
          </>
        ) : (
          <>
            <Package size={20} />
            Sepete Ekle — {finalPrice.toLocaleString('tr-TR')}₺
          </>
        )}
      </button>

      {/* Doctor badge */}
      <button className="w-full border border-ki-navy/20 rounded-2xl py-3 text-sm font-medium text-ki-navy/70 hover:bg-ki-light transition-colors">
        Uzman Doktor &amp; Eczacılar Tarafından Geliştirildi.
      </button>

      {/* Trust row */}
      <div className="flex items-center justify-between pt-1">
        <TrustItem icon="🔒" label="Güvenli Ödeme" />
        <TrustItem icon="↩️" label="30 Gün İade" />
        <TrustItem icon="🌿" label="%100 Doğal" />
      </div>

      {/* Shipping note */}
      <p className="text-center text-xs text-ki-navy/50 flex items-center justify-center gap-1.5">
        <span>🚚</span>
        Ücretsiz Kargo &amp; Hızlı Teslimat
      </p>

      {/* Certification logos */}
      <div className="flex items-center justify-center gap-6 pt-2">
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-ki-light flex items-center justify-center mx-auto">
            <span className="text-xs font-bold text-ki-navy">FDA</span>
          </div>
        </div>
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-ki-light flex items-center justify-center mx-auto">
            <span className="text-xs font-bold text-ki-navy">V</span>
          </div>
          <p className="text-[10px] text-ki-navy/50 mt-1">Vegan</p>
        </div>
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-ki-light flex items-center justify-center mx-auto">
            <span className="text-xs font-bold text-ki-navy">GMP</span>
          </div>
        </div>
      </div>

      {/* Legal footnote */}
      <p className="text-center text-[11px] text-ki-navy/40 leading-relaxed">
        .Ki Magnezyum ve Hayıt İçeren Takviye Edici Gıda<br />
        Takviye Edici Gıda Onay Numarası: 024990-06.11.2025
      </p>
    </div>
  )
}

function TrustItem({ icon, label }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-ki-navy/70">
      <span className="text-base">{icon}</span>
      {label}
    </div>
  )
}
