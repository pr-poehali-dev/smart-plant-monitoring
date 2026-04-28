const BEFORE_IMG = "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/cbc7fb42-f7b9-4162-b98f-581bb61f34d7.jpg"
const AFTER_IMG  = "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/9e7efe61-10b5-425a-9d51-87b3730f3bca.jpg"
const WATER_IMG  = "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/30b0252d-ac6d-4833-a0af-76845f07923c.jpg"

const projects = [
  {
    tag: "Загородный участок · Ленобласть",
    title: "Комплексное благоустройство 25 соток",
    description: "Дренаж, мощение, газон, альпийская горка, автополив и ландшафтное освещение — полностью под ключ за 3 месяца.",
    before: BEFORE_IMG,
    after: AFTER_IMG,
    stats: ["25 соток", "3 месяца", "под ключ"],
  },
  {
    tag: "Декоративный водоём · Санкт-Петербург",
    title: "Пруд с водопадом и альпийской горкой",
    description: "Строительство декоративного пруда объёмом 12 м³ с водопадом, системой фильтрации и озеленением берегов.",
    before: WATER_IMG,
    after: AFTER_IMG,
    stats: ["12 м³ пруд", "водопад 2 м", "освещение"],
  },
]

export function ApplicationsTimeline() {
  return (
    <section id="gallery" className="py-28 relative" style={{ background: "#0a1f12" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(220,175,70,0.08) 0%, transparent 50%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(43,80%,60%)" }}>
            Наши работы
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-5 leading-tight">
            До и <span className="gold-text italic">после</span>
          </h2>
          <p className="text-lg text-white/55 max-w-xl mx-auto">
            Смотрите, как мы превращаем обычные участки в пространства мечты
          </p>
        </div>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? "reveal-right" : "reveal-left"}`}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden group" style={{ aspectRatio: "4/3", border: "1px solid rgba(218,175,90,0.15)" }}>
                    <img src={project.before} alt="До" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full tracking-[0.2em]">
                      ДО
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden group" style={{ aspectRatio: "4/3", border: "1px solid rgba(218,175,90,0.4)" }}>
                    <img src={project.after} alt="После" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                      className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full tracking-[0.2em]"
                      style={{ background: "linear-gradient(135deg, #c9a43a, #f0d878)", color: "#1a1200" }}
                    >
                      ПОСЛЕ
                    </div>
                  </div>
                </div>
              </div>

              <div className={`w-full md:w-1/2 px-0 md:px-10 ${index % 2 === 1 ? "reveal-left" : "reveal-right"}`}>
                <p className="text-sm font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "hsl(43,80%,60%)" }}>
                  {project.tag}
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-5 leading-snug">
                  {project.title}
                </h3>
                <div className="gold-line mb-6" />
                <p className="text-white/60 leading-relaxed mb-8 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.stats.map((s, i) => (
                    <span
                      key={i}
                      className="rounded-full px-5 py-2 text-sm font-medium"
                      style={{ border: "1px solid rgba(218,175,90,0.3)", color: "hsl(43,80%,70%)", background: "rgba(218,175,90,0.05)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
