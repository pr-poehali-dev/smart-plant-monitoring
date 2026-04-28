import Icon from "@/components/ui/icon"

const techs = [
  {
    icon: "Cpu",
    title: "Нейрочип N1",
    description:
      "Имплантируемый чип размером с монету содержит 1024 электрода высокой точности, способных регистрировать активность отдельных нейронов в реальном времени.",
    stat: "1024",
    statLabel: "электродов",
  },
  {
    icon: "Wifi",
    title: "Беспроводная передача",
    description:
      "Данные передаются по зашифрованному каналу со скоростью до 1 Гбит/с. Никаких проводов — полная свобода движений.",
    stat: "1 Гбит/с",
    statLabel: "скорость",
  },
  {
    icon: "Brain",
    title: "ИИ-декодирование",
    description:
      "Нейронные сети на борту декодируют намерения пользователя менее чем за миллисекунду, трансформируя мысли в цифровые команды.",
    stat: "<1 мс",
    statLabel: "задержка",
  },
  {
    icon: "Shield",
    title: "Биосовместимость",
    description:
      "Корпус устройства изготовлен из титана и полимеров медицинского класса. Прошёл клинические испытания по стандартам ISO 10993.",
    stat: "ISO 10993",
    statLabel: "стандарт",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
            Технология <span className="text-red-500">изнутри</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Каждый компонент SynapseAI создан с нуля командой нейроинженеров, нейробиологов и специалистов по
            машинному обучению.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="border border-red-500/20 rounded-2xl p-8 bg-white/2 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                  <Icon name={tech.icon} fallback="Cpu" size={28} className="text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-3">{tech.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{tech.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-orbitron text-2xl font-bold text-red-500">{tech.stat}</span>
                    <span className="text-gray-500 text-sm">{tech.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
