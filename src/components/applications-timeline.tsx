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
    <section id="gallery" className="py-28 bg-[hsl(150,8%,97%)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-sm font-semibold tracking-widest uppercase text-[hsl(43,74%,44%)] mb-3">
            Наши работы
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">До и после</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Смотрите, как мы превращаем обычные участки в пространства мечты
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? "reveal-right" : "reveal-left"}`}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img src={project.before} alt="До" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-black/55 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                      ДО
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img src={project.after} alt="После" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider"
                      style={{ background: "hsl(158,62%,24%)" }}
                    >
                      ПОСЛЕ
                    </div>
                  </div>
                </div>
              </div>

              <div className={`w-full md:w-1/2 px-0 md:px-10 ${index % 2 === 1 ? "reveal-left" : "reveal-right"}`}>
                <p className="text-sm font-semibold tracking-widest uppercase text-[hsl(43,74%,44%)] mb-3">
                  {project.tag}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-gray-900 mb-4 leading-snug">
                  {project.title}
                </h3>
                <div className="gold-line mb-5" />
                <p className="text-gray-500 leading-relaxed mb-7">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.stats.map((s, i) => (
                    <span
                      key={i}
                      className="border rounded-full px-4 py-1.5 text-sm font-medium"
                      style={{ borderColor: "hsl(158,62%,70%)", color: "hsl(158,62%,24%)", background: "hsl(150,30%,96%)" }}
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
