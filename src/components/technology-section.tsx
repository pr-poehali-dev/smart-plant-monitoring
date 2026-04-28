const stats = [
  { value: "42", label: "профессионала в команде" },
  { value: "15+", label: "лет на рынке" },
  { value: "500+", label: "завершённых проектов" },
  { value: "98%", label: "довольных клиентов" },
]

export function TechnologySection() {
  return (
    <section className="py-16 bg-green-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-display text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-green-200 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
