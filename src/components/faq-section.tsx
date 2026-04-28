import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"

export function FAQSection() {
  const faqs = [
    {
      question: "В каких районах вы работаете?",
      answer:
        "Мы работаем в Санкт-Петербурге и по всей Ленинградской области. Выезд специалиста для замера и консультации бесплатный в радиусе 100 км от КАД.",
    },
    {
      question: "Сколько стоит разработка проекта?",
      answer:
        "Стоимость проектирования зависит от площади и сложности объекта. Первичная консультация и выезд на участок — бесплатно. Эскизный проект — от 30 000 ₽. При заказе реализации стоимость проекта вычитается из общей суммы.",
    },
    {
      question: "Как долго выполняются работы?",
      answer:
        "Сроки зависят от объёма проекта. Мощение небольшой дорожки — 1-2 дня. Комплексное благоустройство участка 10-15 соток — 4-8 недель. Мы фиксируем сроки в договоре и выплачиваем неустойку при нарушении.",
    },
    {
      question: "Даёте ли вы гарантию на работы?",
      answer:
        "Да, мы предоставляем письменную гарантию: 3 года на мощение и земляные работы, 2 года на озеленение (при соблюдении рекомендаций по уходу), 5 лет на дренажные системы.",
    },
    {
      question: "Можно ли заказать только часть работ?",
      answer:
        "Конечно. Вы можете заказать любую отдельную услугу: только посадку растений, только укладку плитки, только монтаж автополива. Мы гибко подходим к каждому проекту.",
    },
    {
      question: "Как оформить заказ?",
      answer:
        "Позвоните по номеру +7 991 991-91-69 или напишите нам в Instagram. Мы договоримся об удобном времени выезда специалиста, обсудим проект и подготовим смету в течение 3 рабочих дней.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
            <Icon name="HelpCircle" size={14} className="text-green-600" />
            <span className="text-green-700 text-sm font-medium">Частые вопросы</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Отвечаем на вопросы</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Всё, что нужно знать перед началом работы с нами
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-2xl px-6 overflow-hidden data-[state=open]:border-green-300 transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:text-green-700 py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
