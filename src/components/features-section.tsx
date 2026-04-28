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
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 reveal">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-sm font-semibold tracking-widest uppercase text-[hsl(43,74%,44%)] mb-3">
            Наши услуги
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">
            Комплексное благоустройство
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Берёмся за проекты любой сложности — от небольших дорожек до масштабного озеленения парков
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((service, index) => (
            <div
              key={index}
              className={`premium-card reveal delay-${Math.min((index % 3) * 100 + 100, 400)} rounded-2xl p-7 group cursor-default`}
            >
              <div className="w-11 h-11 rounded-xl bg-[hsl(150,30%,94%)] flex items-center justify-center mb-5 group-hover:bg-[hsl(158,62%,24%)] transition-colors duration-300">
                <Icon
                  name={service.icon}
                  fallback="Leaf"
                  size={20}
                  className="text-[hsl(158,62%,24%)] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[hsl(158,62%,24%)] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
