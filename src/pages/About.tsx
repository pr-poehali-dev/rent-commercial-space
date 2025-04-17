
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Clock, ShieldCheck, Users } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">О компании НедвижимостьПро</h1>
              <p className="text-lg text-muted-foreground">
                Мы специализируемся на аренде коммерческой недвижимости и предлагаем широкий выбор офисных и торговых помещений в Москве.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
                <p className="text-muted-foreground mb-4">
                  Наша миссия — помогать бизнесу находить идеальные помещения для развития и процветания. Мы стремимся создавать долгосрочные партнерские отношения с нашими клиентами, предоставляя качественные объекты и профессиональное обслуживание.
                </p>
                <p className="text-muted-foreground">
                  Компания НедвижимостьПро основана в 2010 году и за это время завоевала репутацию надежного партнера, которому доверяют сотни компаний различного масштаба — от индивидуальных предпринимателей до крупных корпораций.
                </p>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="О компании НедвижимостьПро"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-muted/20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Building2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Собственные объекты</h3>
                <p className="text-muted-foreground">
                  Мы владеем всеми объектами в нашем портфолио, что гарантирует стабильность условий аренды и отсутствие непредвиденных изменений.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Многолетний опыт</h3>
                <p className="text-muted-foreground">
                  Более 12 лет работы на рынке коммерческой недвижимости позволяют нам предлагать лучшие решения для бизнеса любого масштаба.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Мы учитываем все потребности и особенности вашего бизнеса при подборе помещения, чтобы предложить оптимальный вариант.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Юридическая поддержка</h3>
                <p className="text-muted-foreground">
                  Наши юристы помогут вам на всех этапах оформления аренды и обеспечат защиту ваших интересов.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6 text-center">Наша команда</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              В нашей компании работают опытные специалисты по недвижимости, которые помогут вам найти идеальное помещение для вашего бизнеса
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="aspect-square overflow-hidden rounded-full w-48 mx-auto mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Иван Петров"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-medium">Иван Петров</h3>
                <p className="text-primary">Генеральный директор</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square overflow-hidden rounded-full w-48 mx-auto mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Мария Сидорова"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-medium">Мария Сидорова</h3>
                <p className="text-primary">Руководитель отдела аренды</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square overflow-hidden rounded-full w-48 mx-auto mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Алексей Иванов"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-medium">Алексей Иванов</h3>
                <p className="text-primary">Главный юрист</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
