import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Trees",
    title: "Частные территории и городские парки",
    description: "Полное благоустройство загородных участков, коттеджных посёлков и городских зелёных зон под ключ.",
    color: "green",
  },
  {
    icon: "Droplets",
    title: "Дренаж, отмостка и земляные работы",
    description: "Проектирование и укладка дренажных систем, отмостки, планировка рельефа и земляные работы любой сложности.",
    color: "blue",
  },
  {
    icon: "Square",
    title: "Мощение под ключ",
    description: "Укладка плитки, брусчатки, дикого камня, установка бордюров. Все виды твёрдых покрытий для дорожек и площадок.",
    color: "stone",
  },
  {
    icon: "Car",
    title: "Асфальтирование",
    description: "Асфальтирование дорог, парковок, въездных групп и площадок для любых объектов.",
    color: "gray",
  },
  {
    icon: "Waves",
    title: "Автополив, водоёмы и водопады",
    description: "Проектирование систем автоматического полива, строительство декоративных прудов, ручьёв и водопадов.",
    color: "cyan",
  },
  {
    icon: "Flower2",
    title: "Озеленение и альпийские горки",
    description: "Подбор и посадка растений, создание альпийских горок, рокариев, многолетних цветников и живых изгородей.",
    color: "emerald",
  },
  {
    icon: "Zap",
    title: "Автономные системы (НВК, септики)",
    description: "Монтаж систем наружного водоснабжения и канализации, установка септиков любой сложности.",
    color: "yellow",
  },
  {
    icon: "Home",
    title: "Деревянное зодчество",
    description: "Проектирование и строительство беседок, пергол, террас, навесов и малых архитектурных форм из дерева.",
    color: "amber",
  },
  {
    icon: "Lightbulb",
    title: "Ландшафтное освещение",
    description: "Дизайн и монтаж садово-паркового освещения: акцентная подсветка, дорожки, водоёмы, фасады.",
    color: "orange",
  },
]

const colorMap: Record<string, string> = {
  green: "bg-green-50 border-green-200 text-green-700",
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  stone: "bg-stone-50 border-stone-200 text-stone-700",
  gray: "bg-gray-50 border-gray-200 text-gray-700",
  cyan: "bg-cyan-50 border-cyan-200 text-cyan-700",
  emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
  yellow: "bg-yellow-50 border-yellow-200 text-yellow-700",
  amber: "bg-amber-50 border-amber-200 text-amber-700",
  orange: "bg-orange-50 border-orange-200 text-orange-700",
}

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
            <Icon name="Layers" size={14} className="text-green-600" />
            <span className="text-green-700 text-sm font-medium">Наши услуги</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Комплексное благоустройство
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Берёмся за проекты любой сложности — от небольших дорожек до масштабного озеленения парков
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${colorMap[service.color]}`}
              >
                <Icon name={service.icon} fallback="Leaf" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
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
