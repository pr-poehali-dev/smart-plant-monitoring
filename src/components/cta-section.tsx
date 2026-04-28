import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const LOGO = "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/bucket/5f99dc68-1f1f-4ebb-a4c0-07bbf3795255.jpg"

export function CTASection() {
  return (
    <section
      id="contacts"
      className="py-32 px-6 relative overflow-hidden grain"
      style={{ background: "linear-gradient(180deg, hsl(158,30%,5%) 0%, #050f0a 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 50%, rgba(220,175,70,0.15) 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, rgba(30,120,70,0.18) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="reveal-scale mb-8">
          <img
            src={LOGO}
            alt="VashLandshaft"
            className="h-28 md:h-36 w-auto mx-auto"
            style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.6))" }}
          />
        </div>

        <div className="reveal">
          <div className="gold-line mx-auto mb-7" />
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(43,80%,60%)" }}>
            Начнём ваш проект
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Готовы преобразить <br />
            <span className="gold-text italic">ваш участок?</span>
          </h2>
          <p className="text-white/65 text-lg mb-4 leading-relaxed max-w-2xl mx-auto">
            Оставьте заявку — наш специалист приедет на объект, сделает замеры и подготовит смету бесплатно.
          </p>
          <p className="text-white/40 text-sm mb-12">Санкт-Петербург и Ленинградская область</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 reveal delay-200">
          <Button
            size="lg"
            className="text-lg px-10 py-7 font-semibold border-0 pulse-button"
            style={{ background: "linear-gradient(135deg, #c9a43a, #f0d878)", color: "#1a1200", boxShadow: "0 12px 40px rgba(218,175,90,0.35)" }}
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
            className="text-lg px-10 py-7 bg-transparent border-white/25 text-white hover:bg-white/10 hover:border-white/50"
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
            { icon: "MapPin",      title: "Геолокация",      text: "Санкт-Петербург и Ленинградская область" },
            { icon: "Clock",       title: "Режим работы",     text: "Пн–Вс: 8:00 – 20:00, без выходных" },
            { icon: "CheckCircle", title: "Выезд бесплатно",  text: "Замер и консультация специалиста — 0 ₽" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl p-6 text-left"
              style={{
                background: "linear-gradient(145deg, hsl(158,28%,9%), hsl(158,25%,7%))",
                border: "1px solid rgba(218,175,90,0.15)",
              }}
            >
              <Icon name={item.icon} fallback="Info" size={22} className="flex-shrink-0 mt-0.5" style={{ color: "hsl(43,80%,65%)" }} />
              <div>
                <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                <div className="text-white/55 text-sm leading-snug">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
