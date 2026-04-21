import { ShoppingCart } from 'lucide-react'

export default function StickyCartBar({ visible, price = 3500, loading = false, onAdd }) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t border-gray-100 px-4 pt-3 pb-6 shadow-2xl max-w-[360px] mx-auto md:mx-0 md:right-auto md:left-4 md:bottom-4 md:rounded-2xl md:border md:border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[hsl(var(--muted))]">3'lü Paket · 3 aylık kullanım</p>
            <p className="text-lg font-black text-[hsl(var(--foreground))]">
              {price.toLocaleString('tr-TR')}₺
            </p>
          </div>
          <button
            onClick={onAdd}
            disabled={loading}
            className="flex items-center gap-2 bg-[hsl(var(--primary))] text-white font-bold px-5 py-3.5 rounded-2xl hover:opacity-90 transition-opacity active:scale-[.98] disabled:opacity-60 flex-1 justify-center text-sm"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <ShoppingCart size={16} />
            )}
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  )
}
