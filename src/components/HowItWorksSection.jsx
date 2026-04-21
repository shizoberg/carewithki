const steps = [
  {
    number: '01',
    icon: '🌙',
    title: 'Döngünü Tanı',
    description: 'Eczacımızla kısa bir görüşme yaparak döngün ve ihtiyaçların hakkında bilgi ver.',
  },
  {
    number: '02',
    icon: '💊',
    title: 'Rutinini Oluştur',
    description: 'Sana özel takviye rutini hazırlanır. Hangi saatte, nasıl alacağın netleşir.',
  },
  {
    number: '03',
    icon: '📦',
    title: 'Kapına Gelsin',
    description: 'Ürünlerin ücretsiz kargo ile hızlıca sana ulaşır. Abonelikte her ay otomatik gönderim.',
  },
  {
    number: '04',
    icon: '✨',
    title: 'Farkı Hisset',
    description: 'Düzenli kullanımla döngünde dengeyi, enerjini ve konforu geri kazan.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-ki-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-ki-violet text-sm font-semibold uppercase tracking-widest mb-2">Nasıl Çalışır?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Döngünde Kendine İyi Bak
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-ki-violet/20 z-0 -translate-x-1/2" />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-ki-purple/30 flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <span className="text-ki-violet/50 font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-ki-violet/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-block bg-white text-ki-navy font-bold px-8 py-4 rounded-2xl hover:bg-ki-light transition-colors"
          >
            Hemen Başla
          </a>
        </div>
      </div>
    </section>
  )
}
