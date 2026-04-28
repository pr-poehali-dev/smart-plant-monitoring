import Icon from "@/components/ui/icon"

const team = [
  {
    name: "Алексей Громов",
    role: "Главный ландшафтный архитектор",
    bio: "Более 18 лет в профессии. Автор проектов для частных владений и городских парков Санкт-Петербурга.",
    avatar: "АГ",
    color: "bg-green-700",
  },
  {
    name: "Марина Соколова",
    role: "Руководитель проектов",
    bio: "Координирует работу бригад, контролирует сроки и качество. Опыт управления проектами — 12 лет.",
    avatar: "МС",
    color: "bg-emerald-600",
  },
  {
    name: "Дмитрий Власов",
    role: "Прораб. Мощение и дренаж",
    bio: "Специалист по твёрдым покрытиям: плитка, брусчатка, дикий камень. Гарантирует точность укладки.",
    avatar: "ДВ",
    color: "bg-teal-700",
  },
  {
    name: "Ольга Петрова",
    role: "Дендролог и озеленитель",
    bio: "Подбирает растения с учётом климата Ленобласти. Создаёт живые изгороди и альпийские горки.",
    avatar: "ОП",
    color: "bg-green-600",
  },
  {
    name: "Сергей Иванов",
    role: "Инженер водных систем",
    bio: "Проектирует и монтирует системы автополива, водоёмы с фильтрацией, септики и дренаж.",
    avatar: "СИ",
    color: "bg-cyan-700",
  },
  {
    name: "Наталья Фёдорова",
    role: "Дизайнер освещения",
    bio: "Создаёт сценарии ландшафтного освещения: от акцентной подсветки до полного светового дизайна участка.",
    avatar: "НФ",
    color: "bg-amber-700",
  },
]

export function TestimonialsSection() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
            <Icon name="Users" size={14} className="text-green-600" />
            <span className="text-green-700 text-sm font-medium">Наша команда</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            42 профессионала
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Ключевые специалисты, которые воплощают ваш проект — от идеи до финального результата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                >
                  {member.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-green-600 text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-3xl bg-green-50 border border-green-100">
          <p className="text-green-800 font-semibold text-lg">
            + ещё 36 специалистов: монтажники, водители, сварщики, электрики и операторы спецтехники
          </p>
          <p className="text-green-600 mt-1 text-sm">Весь персонал официально трудоустроен, проходит регулярное обучение</p>
        </div>
      </div>
    </section>
  )
}
