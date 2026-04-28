import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#services", label: "Услуги" },
    { href: "#gallery", label: "Галерея" },
    { href: "#team", label: "Команда" },
    { href: "#contacts", label: "Контакты" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled ? "bg-white/97 backdrop-blur-md shadow-md border-b border-green-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/bucket/5f99dc68-1f1f-4ebb-a4c0-07bbf3795255.jpg"
              alt="VashLandshaft"
              className="h-10 w-10 object-contain rounded-full"
            />
            <span
              className={`font-display text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-green-800" : "text-white"
              }`}
            >
              Vash<span className="text-green-400">Landshaft</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 hover:text-green-500 ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+79919919169"
              className={`font-medium text-sm transition-colors duration-200 hover:text-green-500 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              +7 991 991-91-69
            </a>
            <Button
              className="bg-green-700 hover:bg-green-600 text-white border-0 shadow-sm"
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Связаться
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-200 hover:text-green-500 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-green-100 shadow-lg">
            <div className="px-4 pt-3 pb-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-green-700 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-green-100 space-y-2">
                <a href="tel:+79919919169" className="block px-3 py-2 text-green-800 font-semibold">
                  +7 991 991-91-69
                </a>
                <Button
                  className="w-full bg-green-700 hover:bg-green-600 text-white border-0"
                  onClick={() => {
                    setIsOpen(false)
                    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
