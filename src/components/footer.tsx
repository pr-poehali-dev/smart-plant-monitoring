import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer style={{ background: "#040c07", borderTop: "1px solid rgba(218,175,90,0.15)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src="https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/bucket/5f99dc68-1f1f-4ebb-a4c0-07bbf3795255.jpg"
                alt="VashLandshaft"
                className="h-16 w-16 object-contain rounded-full"
                style={{ boxShadow: "0 0 0 2px rgba(218,175,90,0.25)" }}
              />
              <span className="font-display text-2xl font-bold text-white">
                Vash<span className="gold-text">Landshaft</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
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
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: "rgba(218,175,90,0.08)", border: "1px solid rgba(218,175,90,0.2)", color: "hsl(43,80%,65%)" }}
                >
                  <Icon name={item.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-[0.2em] uppercase">Услуги</h3>
            <ul className="space-y-3 text-sm text-white/55">
              {["Частные территории и парки", "Мощение под ключ", "Озеленение и альпийские горки", "Автополив и водоёмы", "Ландшафтное освещение", "Деревянное зодчество"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-[hsl(43,80%,65%)] transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-[0.2em] uppercase">Контакты</h3>
            <ul className="space-y-3.5 text-sm text-white/55">
              {[
                { icon: "Phone",     href: "tel:+79919919169",      text: "+7 991 991-91-69" },
                { icon: "Instagram", href: "https://instagram.com", text: "Instagram" },
                { icon: "MapPin",    href: "#",                     text: "СПб и Ленинградская область" },
                { icon: "Clock",     href: "#",                     text: "Пн–Вс: 8:00 – 20:00" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Icon name={item.icon} size={14} style={{ color: "hsl(43,80%,60%)" }} className="flex-shrink-0" />
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-[hsl(43,80%,65%)] transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-7 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(218,175,90,0.1)" }}
        >
          <p className="text-sm text-white/35">© 2025 VashLandshaft. Все права защищены.</p>
          <a href="#" className="text-sm text-white/35 hover:text-[hsl(43,80%,65%)] transition-colors duration-200">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
