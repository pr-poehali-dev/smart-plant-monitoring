import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section id="contacts" className="py-24 px-6 bg-green-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_white_0%,_transparent_60%)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Icon name="Leaf" size={48} className="text-green-300 mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Готовы преобразить ваш участок?
        </h2>
        <p className="text-green-100 text-xl mb-4 leading-relaxed max-w-2xl mx-auto">
          Оставьте заявку — наш специалист приедет на объект, сделает замеры и подготовит смету бесплатно.
        </p>
        <p className="text-green-300 text-sm mb-10">
          Работаем в Санкт-Петербурге и Ленинградской области
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-green-800 hover:bg-green-50 border-0 pulse-button text-lg px-8 py-6 font-semibold shadow-xl"
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
            className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent text-lg px-8 py-6"
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "MapPin", title: "Геолокация", text: "Санкт-Петербург и Ленинградская область" },
            { icon: "Clock", title: "Режим работы", text: "Пн–Вс: 8:00 – 20:00, без выходных" },
            { icon: "CheckCircle", title: "Выезд бесплатно", text: "Замер и консультация специалиста — 0 ₽" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/10 rounded-2xl p-5">
              <Icon name={item.icon} fallback="Info" size={22} className="text-green-300 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                <div className="text-green-200 text-sm">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
