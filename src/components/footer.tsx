import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/projects/7805d22d-24ea-4cdf-a547-7b2a521ffa88/bucket/5f99dc68-1f1f-4ebb-a4c0-07bbf3795255.jpg"
                alt="VashLandshaft"
                className="h-10 w-10 object-contain rounded-full"
              />
              <h2 className="font-display text-xl font-bold text-white">
                Vash<span className="text-green-400">Landshaft</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Комплексное благоустройство и ландшафтный дизайн в Санкт-Петербурге и Ленинградской области.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all"
              >
                <Icon name="Instagram" size={16} />
              </a>
              <a
                href="tel:+79919919169"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all"
              >
                <Icon name="Phone" size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Частные территории и парки",
                "Мощение под ключ",
                "Озеленение и альпийские горки",
                "Автополив и водоёмы",
                "Ландшафтное освещение",
                "Деревянное зодчество",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-green-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} className="text-green-400 flex-shrink-0" />
                <a href="tel:+79919919169" className="hover:text-green-400 transition-colors">
                  +7 991 991-91-69
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Instagram" size={14} className="text-green-400 flex-shrink-0" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Санкт-Петербург и Ленинградская область</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>Пн–Вс: 8:00 – 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 VashLandshaft. Все права защищены.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-green-400 transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
