import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer style={{ background: "#07180f", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/bucket/5f99dc68-1f1f-4ebb-a4c0-07bbf3795255.jpg"
                alt="VashLandshaft"
                className="h-9 w-9 object-contain rounded-full opacity-90"
              />
              <span className="font-display text-xl font-bold text-white">
                Vash<span style={{ color: "hsl(43,74%,60%)" }}>Landshaft</span>
              </span>
            </div>
            <p className="text-green-300/55 text-sm leading-relaxed mb-5">
              Комплексное благоустройство и ландшафтный дизайн в Санкт-Петербурге и Ленинградской области.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://instagram.com", icon: "Instagram" },
                { href: "tel:+79919919169",      icon: "Phone" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "rgba(255,255,255,0.12)"
                    el.style.color = "hsl(43,74%,65%)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "rgba(255,255,255,0.07)"
                    el.style.color = "rgba(255,255,255,0.45)"
                  }}
                >
                  <Icon name={item.icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Услуги</h3>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(200,240,215,0.5)" }}>
              {["Частные территории и парки", "Мощение под ключ", "Озеленение и альпийские горки", "Автополив и водоёмы", "Ландшафтное освещение", "Деревянное зодчество"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-green-300 transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Контакты</h3>
            <ul className="space-y-3.5 text-sm" style={{ color: "rgba(200,240,215,0.5)" }}>
              {[
                { icon: "Phone",     href: "tel:+79919919169",   text: "+7 991 991-91-69" },
                { icon: "Instagram", href: "https://instagram.com", text: "Instagram" },
                { icon: "MapPin",    href: "#",                  text: "СПб и Ленинградская область" },
                { icon: "Clock",     href: "#",                  text: "Пн–Вс: 8:00 – 20:00" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Icon name={item.icon} size={14} style={{ color: "hsl(43,74%,55%)" }} className="flex-shrink-0" />
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-sm" style={{ color: "rgba(200,240,215,0.35)" }}>
            © 2025 VashLandshaft. Все права защищены.
          </p>
          <a href="#" className="text-sm transition-colors duration-200 hover:text-green-300" style={{ color: "rgba(200,240,215,0.35)" }}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
