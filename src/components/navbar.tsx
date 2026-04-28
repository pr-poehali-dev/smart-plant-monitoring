import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#services", label: "Услуги" },
    { href: "#gallery",  label: "Галерея" },
    { href: "#team",     label: "Команда" },
    { href: "#contacts", label: "Контакты" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(10, 28, 18, 0.85)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(218, 175, 90, 0.15)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-20" : "h-24"}`}>
          <a href="#" className="flex items-center gap-4 flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/bucket/5f99dc68-1f1f-4ebb-a4c0-07bbf3795255.jpg"
              alt="VashLandshaft"
              className={`object-contain rounded-full transition-all duration-500 ${scrolled ? "h-14 w-14" : "h-16 w-16"}`}
              style={{
                boxShadow: "0 0 0 2px rgba(218,175,90,0.3), 0 8px 24px rgba(0,0,0,0.5)",
              }}
            />
            <span
              className={`font-display font-bold transition-all duration-500 text-white ${scrolled ? "text-2xl" : "text-3xl"}`}
            >
              Vash<span className="gold-text">Landshaft</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[hsl(43,80%,65%)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+79919919169" className="text-sm font-medium text-white/80 hover:text-[hsl(43,80%,65%)] transition-colors duration-300">
              +7 991 991-91-69
            </a>
            <Button
              className="text-sm px-6 py-2.5 border-0 font-semibold text-[#1a1200]"
              style={{
                background: "linear-gradient(135deg, #c9a43a, #f0d878)",
                boxShadow: "0 4px 20px rgba(218,175,90,0.3)",
              }}
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Связаться
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white transition-colors duration-200"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={26} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden" style={{ background: "rgba(10,28,18,0.97)", borderTop: "1px solid rgba(218,175,90,0.15)" }}>
            <div className="px-4 pt-4 pb-6 space-y-1.5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-white/85 hover:text-[hsl(43,80%,65%)] font-medium rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 space-y-3" style={{ borderTop: "1px solid rgba(218,175,90,0.15)" }}>
                <a href="tel:+79919919169" className="block px-3 py-2 font-semibold text-sm" style={{ color: "hsl(43,80%,65%)" }}>
                  +7 991 991-91-69
                </a>
                <Button
                  className="w-full border-0 font-semibold text-[#1a1200]"
                  style={{ background: "linear-gradient(135deg, #c9a43a, #f0d878)" }}
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
