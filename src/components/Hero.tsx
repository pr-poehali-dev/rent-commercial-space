
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Аренда коммерческой недвижимости для вашего бизнеса
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Офисные и торговые помещения в шаговой доступности от метро. Индивидуальный подход к каждому клиенту.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="/properties">Найти помещение</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contacts">Связаться с нами</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" style={{ zIndex: 1 }}></div>
        <img 
          src="/placeholder.svg" 
          alt="Коммерческая недвижимость"  
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
