
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import FeaturedProperties from "@/components/FeaturedProperties";
import ContactForm from "@/components/ContactForm";
import { properties } from "@/lib/mockData";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <Advantages />
        
        <FeaturedProperties properties={properties} />
        
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Нужна помощь в выборе помещения?</h2>
                <p className="text-muted-foreground mb-6">
                  Оставьте заявку, и наш специалист свяжется с вами для консультации и подбора оптимального варианта под ваши задачи.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Бесплатная консультация</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Индивидуальный подбор помещения</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Организация просмотра в удобное время</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Юридическое сопровождение сделки</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="text-xl font-medium mb-4">Оставить заявку</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
