
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Контакты</h1>
              <p className="text-lg text-muted-foreground">
                Связаться с нами можно любым удобным для вас способом. Мы всегда рады помочь в выборе идеального помещения для вашего бизнеса.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Телефон</h3>
                      <p className="text-muted-foreground mb-1">Для консультаций и записи на просмотр:</p>
                      <a href="tel:+71234567890" className="text-xl font-medium hover:text-primary">
                        +7 (123) 456-78-90
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground mb-1">Для запросов и предложений:</p>
                      <a href="mailto:info@nedvizhimost-pro.ru" className="hover:text-primary">
                        info@nedvizhimost-pro.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Адрес офиса</h3>
                      <p className="text-muted-foreground mb-1">Москва, ул. Примерная, д. 123, офис 456</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="inline-flex items-center">
                          <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                          м. Площадь Революции, 7 минут пешком
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Часы работы</h3>
                      <p className="text-muted-foreground">Понедельник – пятница: 9:00 – 20:00</p>
                      <p className="text-muted-foreground">Суббота: 10:00 – 18:00</p>
                      <p className="text-muted-foreground">Воскресенье: выходной</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-medium mb-4">Карта проезда</h3>
                  <div className="aspect-video rounded-lg overflow-hidden border bg-muted">
                    {/* Здесь будет карта, а пока плейсхолдер */}
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-muted-foreground">Карта проезда к офису</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-card p-8 rounded-lg border shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Отправить заявку</h2>
                  <p className="text-muted-foreground mb-6">
                    Заполните форму, и наш менеджер свяжется с вами в ближайшее время для консультации и подбора помещения
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
