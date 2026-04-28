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
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 1px 0 rgba(0,0,0,0.07), 0 4px 24px rgba(0,0,0,0.06)",
            }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/bucket/5f99dc68-1f1f-4ebb-a4c0-07bbf3795255.jpg"
              alt="VashLandshaft"
              className="h-9 w-9 object-contain rounded-full"
            />
            <span
              className="font-display text-xl font-bold transition-colors duration-400"
              style={{ color: scrolled ? "hsl(158,62%,20%)" : "white" }}
            >
              Vash
              <span style={{ color: scrolled ? "hsl(43,74%,44%)" : "hsl(43,80%,65%)" }}>Landshaft</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: scrolled ? "#444" : "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "hsl(158,62%,30%)" }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = scrolled ? "#444" : "rgba(255,255,255,0.85)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79919919169"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: scrolled ? "#444" : "rgba(255,255,255,0.85)" }}
            >
              +7 991 991-91-69
            </a>
            <Button
              className="text-sm px-5 py-2 border-0 font-semibold"
              style={{
                background: "linear-gradient(135deg, hsl(158,62%,22%), hsl(158,55%,32%))",
                color: "white",
                boxShadow: "0 2px 12px rgba(15,70,40,0.25)",
              }}
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Связаться
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden transition-colors duration-200"
            style={{ color: scrolled ? "#333" : "white" }}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t" style={{ borderColor: "hsl(150,15%,90%)" }}>
            <div className="px-4 pt-3 pb-5 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-green-50 transition-colors"
                  style={{ color: "hsl(158,30%,18%)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t space-y-2" style={{ borderColor: "hsl(150,15%,90%)" }}>
                <a
                  href="tel:+79919919169"
                  className="block px-3 py-2 font-semibold text-sm"
                  style={{ color: "hsl(158,62%,22%)" }}
                >
                  +7 991 991-91-69
                </a>
                <Button
                  className="w-full border-0 font-semibold"
                  style={{ background: "linear-gradient(135deg, hsl(158,62%,22%), hsl(158,55%,32%))", color: "white" }}
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
