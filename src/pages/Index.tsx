import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

const doctors = [
  {
    id: 1,
    name: "Иванова Анна Сергеевна",
    specialty: "Терапевт",
    experience: "15 лет",
    image: "https://cdn.poehali.dev/projects/b32feb6d-2122-43b4-89c6-c6ddc6ff5d7d/files/5e09cf16-c363-4bbe-b1dd-15a1dd3e9ef8.jpg"
  },
  {
    id: 2,
    name: "Петров Дмитрий Викторович",
    specialty: "Кардиолог",
    experience: "12 лет",
    image: "https://cdn.poehali.dev/projects/b32feb6d-2122-43b4-89c6-c6ddc6ff5d7d/files/29e1e8aa-af44-4320-9719-c1a48b0248e3.jpg"
  },
  {
    id: 3,
    name: "Смирнова Елена Павловна",
    specialty: "Гинеколог",
    experience: "18 лет",
    image: "https://cdn.poehali.dev/projects/b32feb6d-2122-43b4-89c6-c6ddc6ff5d7d/files/5e09cf16-c363-4bbe-b1dd-15a1dd3e9ef8.jpg"
  },
  {
    id: 4,
    name: "Козлов Алексей Михайлович",
    specialty: "Невролог",
    experience: "10 лет",
    image: "https://cdn.poehali.dev/projects/b32feb6d-2122-43b4-89c6-c6ddc6ff5d7d/files/29e1e8aa-af44-4320-9719-c1a48b0248e3.jpg"
  }
];

const advantages = [
  {
    icon: "FileCheck",
    title: "Назначаем только необходимые обследования"
  },
  {
    icon: "MessageCircle",
    title: "Объясняем всё простым языком"
  },
  {
    icon: "Search",
    title: "Стремимся разобраться с причиной жалоб"
  },
  {
    icon: "Heart",
    title: "Деликатное, спокойное общение"
  },
  {
    icon: "Mail",
    title: "Можно задать вопросы врачу после приёма"
  },
  {
    icon: "MapPin",
    title: "Удобное расположение"
  }
];

const services = [
  { icon: "Stethoscope", name: "Терапия" },
  { icon: "Baby", name: "Гинекология" },
  { icon: "Radio", name: "УЗИ" },
  { icon: "TestTube", name: "Анализы" },
  { icon: "HeartPulse", name: "Кардиология" },
  { icon: "Activity", name: "Эндокринология" },
  { icon: "Brain", name: "Неврология" },
  { icon: "Droplet", name: "Капельницы" }
];

const approach = [
  {
    icon: "ClipboardCheck",
    title: "Назначаем исследования строго по клиническим рекомендациям"
  },
  {
    icon: "MessageSquare",
    title: "Объясняем, зачем нужен каждый анализ"
  },
  {
    icon: "Target",
    title: "Стремимся установить причину жалоб"
  },
  {
    icon: "Wallet",
    title: "Учитываем бюджет и даём альтернативы"
  }
];

const infusionPrograms = [
  { name: "Энергия", icon: "Zap" },
  { name: "Иммунитет", icon: "Shield" },
  { name: "Anti-age", icon: "Sparkles" },
  { name: "Восстановление после болезни", icon: "HeartPulse" },
  { name: "Детокс", icon: "Droplets" }
];

const promotions = [
  {
    title: "Первичная консультация терапевта",
    description: "Комплексный осмотр со скидкой 20%",
    price: "2 400 ₽"
  },
  {
    title: "Программа Check-up",
    description: "Полное обследование организма",
    price: "от 15 000 ₽"
  },
  {
    title: "УЗИ-диагностика",
    description: "При записи на два исследования — скидка 15%",
    price: "от 1 800 ₽"
  }
];

const reviews = [
  {
    name: "Елена М.",
    text: "Очень довольна приёмом у терапевта. Врач внимательно выслушала, всё подробно объяснила и назначила только необходимые анализы. Чувствуется профессионализм и забота."
  },
  {
    name: "Дмитрий К.",
    text: "Обращался к кардиологу. Прошёл полное обследование. Всё объяснили понятно, без лишних назначений. Очень ценю честный подход!"
  },
  {
    name: "Анна С.",
    text: "Прекрасная клиника! Чистота, вежливый персонал, современное оборудование. Врачи действительно заботятся о пациентах, а не о своём кошельке."
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2f4050] mb-6 leading-tight">
            Честный подход к медицине: без лишних анализов и назначений
          </h1>
          <p className="text-xl md:text-2xl text-[#2f4050]/70 mb-10 max-w-4xl mx-auto">
            Мы придерживаемся клинических рекомендаций и всегда объясняем, зачем нужен каждый анализ и шаг лечения.
          </p>
          <Button 
            size="lg" 
            className="bg-[#1ab394] hover:bg-[#17a085] text-white text-lg px-10 py-6 rounded-full mb-12"
          >
            Записаться к врачу
          </Button>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Icon name="DollarSign" className="text-[#1ab394]" size={32} />
              <p className="text-sm font-medium text-[#2f4050]">Прозрачные цены</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="FileCheck" className="text-[#1ab394]" size={32} />
              <p className="text-sm font-medium text-[#2f4050]">Только необходимые исследования</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="Heart" className="text-[#1ab394]" size={32} />
              <p className="text-sm font-medium text-[#2f4050]">Заботливое отношение</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="Clock" className="text-[#1ab394]" size={32} />
              <p className="text-sm font-medium text-[#2f4050]">Быстрая запись</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f3f3f4]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] text-center mb-16">
            Наши врачи с заботой о вас
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {doctors.map((doctor) => (
                <CarouselItem key={doctor.id} className="md:basis-1/2 lg:basis-1/4">
                  <Card className="overflow-hidden hover-scale border-none shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <h3 className="font-semibold text-lg text-[#2f4050] mb-2">{doctor.name}</h3>
                        <p className="text-[#1ab394] font-medium mb-1">{doctor.specialty}</p>
                        <p className="text-sm text-[#2f4050]/60 mb-4">Стаж: {doctor.experience}</p>
                        <Button variant="outline" className="border-[#1ab394] text-[#1ab394] hover:bg-[#1ab394] hover:text-white">
                          Подробнее
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 border-[#1ab394] text-[#1ab394] hover:bg-[#1ab394] hover:text-white" />
            <CarouselNext className="-right-12 border-[#1ab394] text-[#1ab394] hover:bg-[#1ab394] hover:text-white" />
          </Carousel>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] text-center mb-16">
            Почему пациенты выбирают ЦМД
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-6">
                <div className="bg-[#1ab394]/10 p-4 rounded-full">
                  <Icon name={advantage.icon} className="text-[#1ab394]" size={32} />
                </div>
                <p className="font-medium text-lg text-[#2f4050]">{advantage.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f3f3f4]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] text-center mb-16">
            Направления клиники
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale cursor-pointer border-none shadow-md">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <Icon name={service.icon} className="text-[#1ab394]" size={40} />
                  <p className="font-semibold text-[#2f4050]">{service.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f3f3f4]">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] mb-16">
            Наш подход к медицине
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-10 flex flex-col items-center text-center gap-4">
                  <div className="bg-[#1ab394]/10 p-6 rounded-full">
                    <Icon name={item.icon} className="text-[#1ab394]" size={48} />
                  </div>
                  <p className="font-semibold text-xl text-[#2f4050]">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] text-center mb-16">
            Путь пациента
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-10 text-center">
                <div className="text-6xl font-bold text-[#1ab394] mb-6">1</div>
                <h3 className="text-xl font-semibold text-[#2f4050] mb-3">Запись онлайн или по телефону</h3>
                <p className="text-[#2f4050]/70">Удобная онлайн-запись или звонок администратору</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-10 text-center">
                <div className="text-6xl font-bold text-[#1ab394] mb-6">2</div>
                <h3 className="text-xl font-semibold text-[#2f4050] mb-3">Приём + необходимые обследования</h3>
                <p className="text-[#2f4050]/70">Врач осматривает и назначает только нужные анализы</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-10 text-center">
                <div className="text-6xl font-bold text-[#1ab394] mb-6">3</div>
                <h3 className="text-xl font-semibold text-[#2f4050] mb-3">Рекомендации и план действий</h3>
                <p className="text-[#2f4050]/70">Получаете понятный план лечения с объяснениями</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f3f3f4]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] text-center mb-16">
            Отзывы пациентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-[#1ab394] fill-[#1ab394]" size={20} />
                    ))}
                  </div>
                  <p className="text-[#2f4050]/80 mb-4">{review.text}</p>
                  <p className="font-semibold text-[#2f4050]">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] mb-4">
            Инфузионные программы для восстановления
          </h2>
          <p className="text-xl text-[#2f4050]/70 mb-12">
            Составлено специалистами по клинической фармакологии
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {infusionPrograms.map((program, index) => (
              <Card key={index} className="hover-scale cursor-pointer border-none shadow-md">
                <CardContent className="p-8 flex flex-col items-center text-center gap-3">
                  <Icon name={program.icon} className="text-[#1ab394]" size={40} />
                  <p className="font-semibold text-[#2f4050]">{program.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f3f3f4]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] text-center mb-16">
            Акции и предложения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card key={index} className="border-none shadow-md hover-scale">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#2f4050] mb-3">{promo.title}</h3>
                  <p className="text-[#2f4050]/70 mb-4">{promo.description}</p>
                  <p className="text-2xl font-bold text-[#1ab394] mb-4">{promo.price}</p>
                  <Button className="w-full bg-[#1ab394] hover:bg-[#17a085] text-white">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] text-center mb-16">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-[#2f4050] hover:text-[#1ab394]">
                Почему вы не назначаете лишних анализов?
              </AccordionTrigger>
              <AccordionContent className="text-[#2f4050]/70">
                Мы следуем клиническим рекомендациям и назначаем только те исследования, которые действительно необходимы для постановки диагноза и подбора лечения. Это экономит ваше время и деньги.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-[#2f4050] hover:text-[#1ab394]">
                Можно ли написать врачу после приёма?
              </AccordionTrigger>
              <AccordionContent className="text-[#2f4050]/70">
                Да, конечно! Вы можете задать вопросы врачу после приёма по телефону клиники или через онлайн-чат. Мы ценим ваше спокойствие и готовы помочь.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-[#2f4050] hover:text-[#1ab394]">
                Как понять, какие обследования нужны?
              </AccordionTrigger>
              <AccordionContent className="text-[#2f4050]/70">
                Врач подробно объяснит, какие исследования необходимы в вашем случае и почему. Мы всегда обосновываем свои назначения и готовы ответить на любые вопросы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-[#2f4050] hover:text-[#1ab394]">
                Есть ли лицензии?
              </AccordionTrigger>
              <AccordionContent className="text-[#2f4050]/70">
                Да, у клиники ЦМД есть все необходимые лицензии на осуществление медицинской деятельности. Мы работаем в строгом соответствии с законодательством РФ.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f3f3f4]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4050] text-center mb-16">
            Контакты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-[#1ab394] mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-[#2f4050] mb-1">Адрес</p>
                      <p className="text-[#2f4050]/70">Санкт-Петербург</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-[#1ab394] mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-[#2f4050] mb-1">Телефон</p>
                      <p className="text-[#2f4050]/70">+7 (812) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-[#1ab394] mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-[#2f4050] mb-1">Часы работы</p>
                      <p className="text-[#2f4050]/70">Пн-Пт: 8:00 - 20:00</p>
                      <p className="text-[#2f4050]/70">Сб-Вс: 9:00 - 18:00</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[#1ab394] hover:bg-[#17a085] text-white">
                    Открыть маршрут
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-2xl overflow-hidden h-full min-h-[400px]">
              <img 
                src="https://cdn.poehali.dev/projects/b32feb6d-2122-43b4-89c6-c6ddc6ff5d7d/files/63b1f9dc-4fec-46b9-a865-bd00b1bdc240.jpg" 
                alt="Клиника ЦМД"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#2f4050]">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-white/80 mb-4">© 2024 Центр Медицинской Диагностики ЦМД</p>
          <p className="text-white/60 text-sm">Лицензия на осуществление медицинской деятельности</p>
        </div>
      </footer>
    </div>
  );
}