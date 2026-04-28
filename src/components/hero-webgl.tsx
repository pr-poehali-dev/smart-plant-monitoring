import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/9e7efe61-10b5-425a-9d51-87b3730f3bca.jpg"

export const Hero3DWebGL = () => {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => setPhase(3), 1400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <div className="relative h-screen min-h-[640px] overflow-hidden bg-[#071a0e]">
      <img
        src={HERO_IMAGE}
        alt="Ландшафтный дизайн VashLandshaft"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out"
        style={{ transform: phase >= 1 ? "scale(1)" : "scale(1.08)" }}
      />

      {/* Премиальное наложение с тёмным лесным тоном */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(4,20,10,0.85) 0%, rgba(8,40,22,0.62) 50%, rgba(4,16,8,0.82) 100%)",
        }}
      />

      {/* Золотой блик снизу слева */}
      <div
        className="absolute bottom-0 left-0 w-2/3 h-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 100%, rgba(180,140,40,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
        {/* Бейдж */}
        <div
          className="flex items-center gap-2 rounded-full px-5 py-2 mb-8 text-sm font-medium text-white/90 transition-all duration-700"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <Icon name="MapPin" size={13} style={{ color: "hsl(43,80%,65%)" }} />
          Санкт-Петербург и Ленинградская область
        </div>

        {/* Заголовок */}
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight max-w-4xl transition-all duration-700"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Всё для вашего участка
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #c8a43a, #f0d878, #c8a43a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            в одном месте
          </span>
        </h1>

        {/* Подзаголовок */}
        <p
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "0.15s",
          }}
        >
          От мечты до результата — проектируем, строим и озеленяем.
          <br />
          Команда 42 профессионалов с опытом более 15 лет.
        </p>

        {/* Кнопки */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <Button
            size="lg"
            className="text-lg px-9 py-6 border-0 font-semibold shadow-2xl pulse-button"
            style={{ background: "linear-gradient(135deg, #b8902e, #e8c96a)", color: "#1a1200" }}
            onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Icon name="Phone" size={18} className="mr-2" />
            Получить консультацию
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-9 py-6 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/55"
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Icon name="Images" size={18} className="mr-2" />
            Смотреть работы
          </Button>
        </div>
      </div>

      {/* Стрелка скролла */}
      <button
        className="absolute bottom-10 left-0 right-0 flex justify-center z-10 text-white/50 hover:text-white/80 transition-colors"
        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        style={{ animation: "bounce 2s ease-in-out infinite" }}
      >
        <Icon name="ChevronDown" size={32} />
      </button>

      {/* Градиент в секцию статистики */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0d2b1a] to-transparent z-10" />
    </div>
  )
}

export default Hero3DWebGL
