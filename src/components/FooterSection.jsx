export default function FooterSection() {
  return (
    <footer className="bg-ki-navy text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-black mb-3">.ki</p>
            <p className="text-ki-violet/70 text-sm leading-relaxed">
              Kadın sağlığında bilim ve doğanın gücünü birleştiriyoruz.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="font-semibold text-sm mb-4 text-ki-violet/80 uppercase tracking-wider">Ürünler</p>
            <ul className="space-y-2.5">
              {['Döngü Takviyesi', 'PMS Desteği', 'Menopoz Desteği', 'İntim Bakım', 'Ped & Hijyen'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-sm mb-4 text-ki-violet/80 uppercase tracking-wider">Şirket</p>
            <ul className="space-y-2.5">
              {['Hakkımızda', 'Blog', 'Anlaşmalı Eczaneler', 'İletişim'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="font-semibold text-sm mb-4 text-ki-violet/80 uppercase tracking-wider">Destek</p>
            <ul className="space-y-2.5">
              {['SSS', 'Kargo & İade', 'Gizlilik Politikası', 'KVKK'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2025 Carewithki. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            {/* Social */}
            {['Instagram', 'TikTok', 'YouTube'].map((s) => (
              <a key={s} href="#" className="text-white/40 hover:text-white text-xs transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
