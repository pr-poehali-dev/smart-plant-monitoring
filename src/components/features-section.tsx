import Icon from "@/components/ui/icon"

const services = [
  { icon: "Trees",     title: "Частные территории и городские парки",   description: "Полное благоустройство загородных участков, коттеджных посёлков и городских зелёных зон под ключ." },
  { icon: "Droplets",  title: "Дренаж, отмостка и земляные работы",      description: "Проектирование и укладка дренажных систем, отмостки, планировка рельефа и земляные работы любой сложности." },
  { icon: "Square",    title: "Мощение под ключ",                        description: "Укладка плитки, брусчатки, дикого камня, установка бордюров. Все виды твёрдых покрытий для дорожек и площадок." },
  { icon: "Car",       title: "Асфальтирование",                         description: "Асфальтирование дорог, парковок, въездных групп и площадок для любых объектов." },
  { icon: "Waves",     title: "Автополив, водоёмы и водопады",           description: "Проектирование систем автоматического полива, строительство декоративных прудов, ручьёв и водопадов." },
  { icon: "Flower2",   title: "Озеленение и альпийские горки",           description: "Подбор и посадка растений, создание альпийских горок, рокариев, многолетних цветников и живых изгородей." },
  { icon: "Zap",       title: "Автономные системы (НВК, септики)",       description: "Монтаж систем наружного водоснабжения и канализации, установка септиков любой сложности." },
  { icon: "Home",      title: "Деревянное зодчество",                    description: "Проектирование и строительство беседок, пергол, террас, навесов и малых архитектурных форм из дерева." },
  { icon: "Lightbulb", title: "Ландшафтное освещение",                   description: "Дизайн и монтаж садово-паркового освещения: акцентная подсветка, дорожки, водоёмы, фасады." },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-28 px-6 relative" style={{ background: "hsl(158,30%,5%)" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(220,175,70,0.06) 0%, transparent 50%)" }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(43,80%,60%)" }}>
            Наши услуги
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-5 leading-tight">
            Комплексное <span className="gold-text italic">благоустройство</span>
          </h2>
          <p className="text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
            Берёмся за проекты любой сложности — от небольших дорожек до масштабного озеленения парков
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((service, index) => (
            <div
              key={index}
              className={`premium-card reveal delay-${Math.min((index % 3) * 100 + 100, 400)} rounded-2xl p-7 group cursor-default`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-400"
                style={{ background: "rgba(218,175,90,0.08)", border: "1px solid rgba(218,175,90,0.2)" }}
              >
                <Icon name={service.icon} fallback="Leaf" size={22} style={{ color: "hsl(43,80%,65%)" }} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[hsl(43,80%,70%)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
