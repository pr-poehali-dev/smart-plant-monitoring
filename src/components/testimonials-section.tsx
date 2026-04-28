const team = [
  { name: "Алексей Громов",   role: "Главный ландшафтный архитектор", bio: "Более 18 лет в профессии. Автор проектов для частных владений и городских парков Санкт-Петербурга.", avatar: "АГ", color: "#1a5c35" },
  { name: "Марина Соколова",  role: "Руководитель проектов",          bio: "Координирует работу бригад, контролирует сроки и качество. Опыт управления проектами — 12 лет.",        avatar: "МС", color: "#1e7044" },
  { name: "Дмитрий Власов",   role: "Прораб. Мощение и дренаж",      bio: "Специалист по твёрдым покрытиям: плитка, брусчатка, дикий камень. Гарантирует точность укладки.",       avatar: "ДВ", color: "#155e30" },
  { name: "Ольга Петрова",    role: "Дендролог и озеленитель",        bio: "Подбирает растения с учётом климата Ленобласти. Создаёт живые изгороди и альпийские горки.",            avatar: "ОП", color: "#1a5c35" },
  { name: "Сергей Иванов",    role: "Инженер водных систем",          bio: "Проектирует и монтирует системы автополива, водоёмы с фильтрацией, септики и дренаж.",                  avatar: "СИ", color: "#0f5a4e" },
  { name: "Наталья Фёдорова", role: "Дизайнер освещения",             bio: "Создаёт сценарии ландшафтного освещения: от акцентной подсветки до полного светового дизайна участка.", avatar: "НФ", color: "#7c5a12" },
]

export function TestimonialsSection() {
  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-sm font-semibold tracking-widest uppercase text-[hsl(43,74%,44%)] mb-3">
            Наша команда
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">42 профессионала</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Ключевые специалисты, которые воплощают ваш проект — от идеи до финального результата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className={`premium-card reveal delay-${Math.min((index % 3) * 100 + 100, 400)} rounded-2xl p-7`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: member.color }}
                >
                  {member.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 leading-tight">{member.name}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "hsl(158,62%,28%)" }}>{member.role}</p>
                </div>
              </div>
              <div className="gold-line mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 reveal rounded-3xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, hsl(150,30%,95%), hsl(150,25%,97%))", border: "1px solid hsl(150,25%,88%)" }}
        >
          <p style={{ color: "hsl(158,62%,22%)" }} className="font-semibold text-lg">
            + ещё 36 специалистов: монтажники, водители, сварщики, электрики и операторы спецтехники
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Весь персонал официально трудоустроен, проходит регулярное обучение
          </p>
        </div>
      </div>
    </section>
  )
}
