import Icon from "@/components/ui/icon"

const safetyPoints = [
  {
    icon: "FlaskConical",
    title: "Клинические испытания",
    description: "Более 5 лет клинических исследований с участием 2000+ пациентов подтверждают безопасность и эффективность имплантата.",
  },
  {
    icon: "FileCheck",
    title: "Регуляторное одобрение",
    description: "Устройство прошло сертификацию по FDA Breakthrough Device Program и соответствует требованиям CE Mark для европейского рынка.",
  },
  {
    icon: "Lock",
    title: "Защита нейроданных",
    description: "256-битное шифрование AES защищает все нейронные данные. Вы единственный, кто контролирует доступ к вашим данным мозга.",
  },
  {
    icon: "RotateCcw",
    title: "Полная обратимость",
    description: "Процедура имплантации обратима — устройство можно безопасно извлечь в любой момент без повреждения нейронной ткани.",
  },
  {
    icon: "Stethoscope",
    title: "Непрерывный мониторинг",
    description: "Встроенные датчики отслеживают здоровье тканей 24/7 и автоматически уведомляют врача при любых отклонениях.",
  },
  {
    icon: "Users",
    title: "Поддержка 24/7",
    description: "Выделенная команда нейрохирургов и инженеров сопровождает каждого пациента на всём протяжении использования.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
            Безопасность — <span className="text-red-500">наш приоритет</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Мы установили стандарты безопасности, которым следует вся индустрия нейроинтерфейсов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-red-500/15 bg-black/50 hover:border-red-500/40 hover:bg-black/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/25 flex items-center justify-center mb-4">
                <Icon name={point.icon} fallback="Shield" size={22} className="text-red-400" />
              </div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-2">{point.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/20 to-black text-center">
          <p className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">
            99.97% <span className="text-red-500">безопасных имплантаций</span>
          </p>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ни одного серьёзного нежелательного события за всё время клинических испытаний и коммерческого применения.
          </p>
        </div>
      </div>
    </section>
  )
}
