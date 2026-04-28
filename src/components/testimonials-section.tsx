const team = [
  { name: "Алексей Громов",   role: "Главный ландшафтный архитектор", bio: "Более 18 лет в профессии. Автор проектов для частных владений и городских парков Санкт-Петербурга.", avatar: "АГ", color: "linear-gradient(135deg, #1a5c35, #2a8a55)" },
  { name: "Марина Соколова",  role: "Руководитель проектов",          bio: "Координирует работу бригад, контролирует сроки и качество. Опыт управления проектами — 12 лет.",        avatar: "МС", color: "linear-gradient(135deg, #1e7044, #38a065)" },
  { name: "Дмитрий Власов",   role: "Прораб. Мощение и дренаж",      bio: "Специалист по твёрдым покрытиям: плитка, брусчатка, дикий камень. Гарантирует точность укладки.",       avatar: "ДВ", color: "linear-gradient(135deg, #155e30, #258048)" },
  { name: "Ольга Петрова",    role: "Дендролог и озеленитель",        bio: "Подбирает растения с учётом климата Ленобласти. Создаёт живые изгороди и альпийские горки.",            avatar: "ОП", color: "linear-gradient(135deg, #1a5c35, #2a8a55)" },
  { name: "Сергей Иванов",    role: "Инженер водных систем",          bio: "Проектирует и монтирует системы автополива, водоёмы с фильтрацией, септики и дренаж.",                  avatar: "СИ", color: "linear-gradient(135deg, #0f5a4e, #1e8a76)" },
  { name: "Наталья Фёдорова", role: "Дизайнер освещения",             bio: "Создаёт сценарии ландшафтного освещения: от акцентной подсветки до полного светового дизайна участка.", avatar: "НФ", color: "linear-gradient(135deg, #c9a43a, #f0d878)" },
]

export function TestimonialsSection() {
  return (
    <section id="team" className="py-28 relative" style={{ background: "hsl(158,30%,5%)" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse at 20% 70%, rgba(220,175,70,0.08) 0%, transparent 50%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(43,80%,60%)" }}>
            Наша команда
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-5 leading-tight">
            42 <span className="gold-text italic">профессионала</span>
          </h2>
          <p className="text-lg text-white/55 max-w-xl mx-auto">
            Ключевые специалисты, которые воплощают ваш проект — от идеи до финального результата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className={`premium-card reveal delay-${Math.min((index % 3) * 100 + 100, 400)} rounded-2xl p-7`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: member.color, boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
                >
                  {member.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-white leading-tight">{member.name}</h3>
                  <p className="text-sm mt-1" style={{ color: "hsl(43,80%,65%)" }}>{member.role}</p>
                </div>
              </div>
              <div className="gold-line mb-4" />
              <p className="text-white/55 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-14 reveal rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(158,28%,9%), hsl(158,25%,7%))",
            border: "1px solid rgba(218,175,90,0.2)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(220,175,70,0.1) 0%, transparent 60%)" }} />
          <p className="font-display text-xl md:text-2xl text-white relative z-10">
            + ещё 36 специалистов: <span className="gold-text">монтажники, водители, сварщики, электрики</span> и операторы спецтехники
          </p>
          <p className="text-white/45 mt-3 text-sm relative z-10">
            Весь персонал официально трудоустроен, проходит регулярное обучение
          </p>
        </div>
      </div>
    </section>
  )
}
