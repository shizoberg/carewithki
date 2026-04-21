import { useState } from 'react'
import { ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react'

const categories = [
  { label: 'Döngü Takviyesi', href: '#' },
  { label: 'PMS Desteği', href: '#' },
  { label: 'Menopoz Desteği', href: '#' },
  { label: 'İntim Bakım', href: '#', badge: 'Yeni' },
  { label: 'Ped & Hijyen', href: '#', badge: 'Yeni' },
]

export default function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className="text-2xl font-black text-ki-navy tracking-tight">.ki</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="nav-link">Anlaşmalı Eczanelerimiz</a>
              <a href="#" className="nav-link">Blog</a>

              {/* Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-1 nav-link"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                >
                  Takviye Edici Gıdalarımız
                  <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {categories.map((cat) => (
                      <a
                        key={cat.label}
                        href={cat.href}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-ki-navy hover:bg-ki-light transition-colors"
                      >
                        {cat.label}
                        {cat.badge && (
                          <span className="text-xs bg-ki-violet/20 text-ki-purple font-semibold px-2 py-0.5 rounded-full">
                            {cat.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#"
                className="bg-ki-navy text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-ki-purple transition-colors"
              >
                .ki Ürünleri
              </a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-xl hover:bg-ki-light transition-colors hidden md:flex">
                <User size={20} className="text-ki-navy" />
              </button>
              <button className="relative p-2 rounded-xl hover:bg-ki-light transition-colors">
                <ShoppingCart size={20} className="text-ki-navy" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-ki-navy text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 rounded-xl hover:bg-ki-light transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={20} className="text-ki-navy" /> : <Menu size={20} className="text-ki-navy" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            <a href="#" className="block py-2.5 text-sm font-medium text-ki-navy">Anlaşmalı Eczanelerimiz</a>
            <a href="#" className="block py-2.5 text-sm font-medium text-ki-navy">Blog</a>
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-ki-navy/50 font-semibold uppercase tracking-wider pb-2">Ürünlerimiz</p>
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href={cat.href}
                  className="flex items-center justify-between py-2.5 text-sm text-ki-navy"
                >
                  {cat.label}
                  {cat.badge && (
                    <span className="text-xs bg-ki-violet/20 text-ki-purple font-semibold px-2 py-0.5 rounded-full">
                      {cat.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
