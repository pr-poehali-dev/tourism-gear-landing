import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      icon: 'Tent',
      title: 'Палатки',
      description: 'Трёхсезонные, четырёхсезонные, экспедиционные палатки из высокотехнологичных материалов. Алюминиевые каркасы, ветроустойчивые конструкции, водостойкость от 3000 мм.'
    },
    {
      icon: 'Backpack',
      title: 'Рюкзаки',
      description: 'Треккинговые и экспедиционные рюкзаки объёмом от 40 до 120 литров. Анатомические спинки, регулируемые лямки, влагозащитные материалы, множество карманов.'
    },
    {
      icon: 'Wind',
      title: 'Спальные мешки',
      description: 'Пуховые и синтетические спальники для разных температурных режимов. Диапазон комфорта от +15°C до -30°C. Компрессионные мешки в комплекте.'
    },
    {
      icon: 'Flame',
      title: 'Костровое оборудование',
      description: 'Горелки газовые и мультитопливные, котелки титановые и алюминиевые, складные костровые системы, ветрозащитные экраны, розжиги.'
    },
    {
      icon: 'Utensils',
      title: 'Посуда',
      description: 'Наборы походной посуды из титана, нержавеющей стали, алюминия. Складные приборы, термокружки, фляги, системы водоочистки.'
    },
    {
      icon: 'Shirt',
      title: 'Одежда',
      description: 'Мембранные куртки и штаны, термобельё Polartec, флисовые кофты, пуховые жилеты, ветровки, дождевики. Технологии влагоотведения и терморегуляции.'
    },
    {
      icon: 'Footprints',
      title: 'Обувь',
      description: 'Треккинговые ботинки и кроссовки Vibram, альпинистские боты, сандалии для переходов через броды. Мембраны Gore-Tex, усиленные протекторы.'
    },
    {
      icon: 'Compass',
      title: 'Навигация',
      description: 'GPS-навигаторы, компасы жидкостные и электронные, карты топографические, высотомеры, планшеты для карт, чехлы водонепроницаемые.'
    },
    {
      icon: 'Flashlight',
      title: 'Освещение',
      description: 'Налобные фонари с яркостью до 1000 люмен, ручные фонари, кемпинговые фонари, аккумуляторы, солнечные батареи для зарядки.'
    },
    {
      icon: 'Heart',
      title: 'Аптечки',
      description: 'Походные аптечки с базовым набором медикаментов, перевязочные материалы, антисептики, обезболивающие, жгуты, термоодеяла.'
    },
    {
      icon: 'Mountain',
      title: 'Треккинговые палки',
      description: 'Телескопические и складные палки из алюминия и карбона. Антишоковая система, сменные наконечники для разных поверхностей, эргономичные рукоятки.'
    },
    {
      icon: 'Waves',
      title: 'Гидросистемы',
      description: 'Питьевые системы с резервуарами от 1.5 до 3 литров, фильтры для воды, таблетки для обеззараживания, складные канистры.'
    }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Проверенное качество',
      description: 'Работаем только с сертифицированными производителями туристического снаряжения. Каждая единица товара проходит контроль качества перед отправкой.'
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Отправка заказов в день обращения. Доставка по всей России транспортными компаниями. Возможность самовывоза из пунктов выдачи в крупных городах.'
    },
    {
      icon: 'Users',
      title: 'Экспертная консультация',
      description: 'Наши специалисты — практикующие туристы с многолетним опытом походов. Поможем подобрать снаряжение под ваши задачи и условия похода.'
    },
    {
      icon: 'Award',
      title: 'Гарантия',
      description: 'Предоставляем официальную гарантию производителя на всё снаряжение. Обмен и возврат товара в течение 14 дней с момента получения.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Mountain" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-gradient">TrekGear</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Ассортимент</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="gradient-primary hover:scale-105 transition-transform">
            Весь каталог
          </Button>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 gradient-primary opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-float">
            Снаряжение для настоящих путешественников
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Профессиональное туристическое оборудование для пешего туризма, альпинизма, кемпинга и экспедиций. 
            Более 1000 наименований от ведущих мировых производителей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-secondary text-lg px-8 py-6 hover:scale-105 transition-transform">
              Полный ассортимент
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white transition-all">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 relative">
        <div className="absolute inset-0 gradient-accent opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-4 text-gradient">Категории снаряжения</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Широкий выбор оборудования для любых видов туризма и условий эксплуатации. 
            Каждая категория включает десятки моделей от бюджетных до премиальных.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border hover:border-primary cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Icon name={category.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary hover:scale-105 transition-transform">
              Перейти к товарам
            </Button>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-gradient">Наши преимущества</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Работаем на рынке туристического снаряжения более 10 лет. 
            Тысячи довольных клиентов по всей стране доверяют нам подготовку к походам.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border hover:border-secondary animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 flex gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full gradient-secondary flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Icon name={benefit.icon} size={36} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Подготовка к походу начинается здесь</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите профессиональную консультацию от опытных туристов. 
            Мы поможем подобрать всё необходимое снаряжение для вашего маршрута с учётом сезона, сложности и продолжительности похода.
          </p>
          <Button size="lg" className="gradient-secondary text-lg px-10 py-6 hover:scale-105 transition-transform">
            Написать в поддержку
          </Button>
        </div>
      </section>

      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Пункты выдачи</h3>
                <p className="text-muted-foreground">Москва, Санкт-Петербург, Екатеринбург, Новосибирск, Казань</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-secondary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-secondary flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Время работы</h3>
                <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00 МСК. Консультации и приём заказов онлайн круглосуточно</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Связаться с нами</h3>
                <p className="text-muted-foreground">Задайте вопрос в мессенджере и получите ответ в течение 15 минут</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-background/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Mountain" size={28} className="text-primary" />
                <span className="text-xl font-bold text-gradient">TrekGear</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональное туристическое снаряжение для любых целей и маршрутов.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Категории</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Палатки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рюкзаки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Спальники</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Одежда</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Информация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Свяжитесь с нами</h4>
              <Button className="w-full gradient-primary mb-3 hover:scale-105 transition-transform">
                Связаться с нами
              </Button>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
                Полный каталог
              </Button>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>ТУТ МЕСТО ДЛЯ ИП</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
