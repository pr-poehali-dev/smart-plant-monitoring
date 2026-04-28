import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section id="contacts" className="py-28 px-6 relative overflow-hidden" style={{ background: "#0d2b1a" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 50%, rgba(180,150,60,0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, rgba(20,100,55,0.35) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="reveal">
          <div className="gold-line mx-auto mb-7" />
          <p className="text-sm font-semibold tracking-widest uppercase text-[hsl(43,74%,60%)] mb-4">
            Начнём ваш проект
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Готовы преобразить ваш участок?
          </h2>
          <p className="text-green-200/80 text-lg mb-4 leading-relaxed max-w-2xl mx-auto">
            Оставьте заявку — наш специалист приедет на объект, сделает замеры и подготовит смету бесплатно.
          </p>
          <p className="text-green-400/70 text-sm mb-12">
            Санкт-Петербург и Ленинградская область
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 reveal delay-200">
          <Button
            size="lg"
            className="text-lg px-9 py-6 font-semibold shadow-2xl border-0 pulse-button"
            style={{ background: "linear-gradient(135deg, #c9a43a, #e8c96a)", color: "#1a1a0e" }}
            asChild
          >
            <a href="tel:+79919919169">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 991 991-91-69
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-9 py-6 bg-transparent border-white/25 text-white hover:bg-white/10 hover:border-white/50"
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal delay-300">
          {[
            { icon: "MapPin",       title: "Геолокация",         text: "Санкт-Петербург и Ленинградская область" },
            { icon: "Clock",        title: "Режим работы",        text: "Пн–Вс: 8:00 – 20:00, без выходных" },
            { icon: "CheckCircle",  title: "Выезд бесплатно",     text: "Замер и консультация специалиста — 0 ₽" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl p-5 text-left"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Icon name={item.icon} fallback="Info" size={22} className="flex-shrink-0 mt-0.5" style={{ color: "hsl(43,74%,65%)" }} />
              <div>
                <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                <div className="text-green-300/70 text-sm leading-snug">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
