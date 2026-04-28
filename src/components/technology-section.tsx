const stats = [
  { value: "42", label: "профессионала в команде" },
  { value: "15+", label: "лет на рынке" },
  { value: "500+", label: "завершённых проектов" },
  { value: "98%", label: "довольных клиентов" },
]

export function TechnologySection() {
  return (
    <section className="py-24 relative overflow-hidden grain" style={{ background: "#0a1f12" }}>
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, rgba(220,175,70,0.18) 0%, transparent 50%), radial-gradient(circle at 85% 50%, rgba(30,120,70,0.25) 0%, transparent 55%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`reveal-scale delay-${i * 100 + 100}`}
            >
              <div className="font-display text-5xl md:text-7xl font-bold mb-3 gold-text">
                {stat.value}
              </div>
              <div className="text-white/55 text-sm md:text-base leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
