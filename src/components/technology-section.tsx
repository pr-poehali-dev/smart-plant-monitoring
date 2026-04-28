const stats = [
  { value: "42", label: "профессионала в команде" },
  { value: "15+", label: "лет на рынке" },
  { value: "500+", label: "завершённых проектов" },
  { value: "98%", label: "довольных клиентов" },
]

export function TechnologySection() {
  return (
    <section className="py-20 bg-[#0d2b1a] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(180,150,60,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 50%, rgba(20,90,50,0.5) 0%, transparent 55%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className={`reveal delay-${i * 100 + 100}`}>
              <div
                className="font-display text-5xl md:text-6xl font-bold mb-3"
                style={{
                  background: "linear-gradient(135deg, #e8c96a, #f5e0a0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div className="text-green-300/80 text-sm md:text-base leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
