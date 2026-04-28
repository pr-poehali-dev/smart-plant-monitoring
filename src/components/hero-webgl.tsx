import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/9e7efe61-10b5-425a-9d51-87b3730f3bca.jpg"
const LOGO =
  "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/bucket/5f99dc68-1f1f-4ebb-a4c0-07bbf3795255.jpg"

export const Hero3DWebGL = () => {
  const [phase, setPhase] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => setPhase(3), 1400)

    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  // Parallax значения
  const imgTransform = `scale(${phase >= 1 ? 1 + scrollY * 0.0003 : 1.08}) translateY(${scrollY * 0.4}px)`
  const contentTransform = `translateY(${scrollY * 0.2}px)`
  const contentOpacity = Math.max(0, 1 - scrollY / 600)

  return (
    <div className="relative h-screen min-h-[680px] overflow-hidden bg-[#040e08]">
      <img
        src={HERO_IMAGE}
        alt="Ландшафтный дизайн VashLandshaft"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ transform: imgTransform, transition: phase >= 1 ? "transform 0.1s linear" : "transform 8s ease-out" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, rgba(2,12,6,0.88) 0%, rgba(4,28,16,0.55) 50%, rgba(2,10,5,0.92) 100%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-2/3 h-1/2 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(220,175,70,0.12) 0%, transparent 60%)" }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10"
        style={{ transform: contentTransform, opacity: contentOpacity }}
      >
        {/* БОЛЬШОЙ ЛОГОТИП */}
        <div
          className="mb-8 transition-all duration-1000"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.8)",
          }}
        >
          <img
            src={LOGO}
            alt="VashLandshaft"
            className="h-32 md:h-40 lg:h-48 w-auto object-contain"
            style={{
              filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.6))",
            }}
          />
        </div>

        <div
          className="flex items-center gap-2 rounded-full px-5 py-2 mb-7 text-sm font-medium text-white/90 transition-all duration-700"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(218,175,90,0.25)",
            backdropFilter: "blur(10px)",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <Icon name="MapPin" size={13} style={{ color: "hsl(43,80%,65%)" }} />
          Санкт-Петербург и Ленинградская область
        </div>

        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.1] max-w-4xl transition-all duration-700"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Всё для вашего участка
          <br />
          <span className="gold-text">в одном месте</span>
        </h1>

        <p
          className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700"
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

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <Button
            size="lg"
            className="text-lg px-9 py-6 border-0 font-semibold pulse-button"
            style={{ background: "linear-gradient(135deg, #c9a43a, #f0d878)", color: "#1a1200" }}
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

      <button
        className="absolute bottom-10 left-0 right-0 flex justify-center z-10 text-white/50 hover:text-[hsl(43,80%,65%)] transition-colors"
        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        style={{ animation: "bounce 2s ease-in-out infinite" }}
      >
        <Icon name="ChevronDown" size={32} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1f12] to-transparent z-10" />
    </div>
  )
}

export default Hero3DWebGL
