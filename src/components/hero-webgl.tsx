import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/9e7efe61-10b5-425a-9d51-87b3730f3bca.jpg"

export const Hero3DWebGL = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden bg-green-950">
      <img
        src={HERO_IMAGE}
        alt="Ландшафтный дизайн VashLandshaft"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Icon name="MapPin" size={14} className="text-green-300" />
            <span className="text-white/90 text-sm font-medium">Санкт-Петербург и Ленинградская область</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Всё для вашего участка
            <br />
            <span className="text-green-300">в одном месте</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            От мечты до результата — проектируем, строим и озеленяем. Команда 42 профессионалов с опытом более 15 лет.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-500 text-white border-0 pulse-button text-lg px-8 py-6 shadow-xl shadow-green-900/40"
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent text-lg px-8 py-6"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Icon name="Images" size={18} className="mr-2" />
              Смотреть работы
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <button
          className="text-white/60 hover:text-white transition-colors animate-bounce"
          onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Icon name="ChevronDown" size={32} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  )
}

export default Hero3DWebGL
