export default function UrgencyBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-medium))] py-2 text-center text-[13px] font-semibold text-white tracking-wide">
      <div className="urg-shimmer" />
      ⚡ Bugün sipariş ver, yarın kargoda — ücretsiz kargo
    </div>
  )
}
