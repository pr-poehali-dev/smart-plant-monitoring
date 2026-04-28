const BEFORE_IMG = "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/cbc7fb42-f7b9-4162-b98f-581bb61f34d7.jpg"
const AFTER_IMG = "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/9e7efe61-10b5-425a-9d51-87b3730f3bca.jpg"
const WATER_IMG = "https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/files/30b0252d-ac6d-4833-a0af-76845f07923c.jpg"

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
    stats: ["12 м³ пруд", "водопад 2м", "освещение"],
  },
]

export function ApplicationsTimeline() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green-700 text-sm font-medium">Наши работы</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            До и после
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Смотрите, как мы превращаем обычные участки в пространства мечты
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <img src={project.before} alt="До" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      ДО
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <img src={project.after} alt="После" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-green-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      ПОСЛЕ
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-0 md:px-8">
                <span className="text-green-600 text-sm font-medium">{project.tag}</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">{project.description}</p>
                <div className="flex gap-4">
                  {project.stats.map((s, i) => (
                    <div key={i} className="bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-center">
                      <div className="text-green-700 font-semibold text-sm">{s}</div>
                    </div>
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
