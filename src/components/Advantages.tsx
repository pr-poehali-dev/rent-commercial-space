
import { Building, MapPin, Clock, ShieldCheck } from "lucide-react";

const advantages = [
  {
    icon: <Building className="h-10 w-10" />,
    title: "Разнообразие помещений",
    description: "Офисные и торговые помещения различной площади и конфигурации для любых бизнес-задач"
  },
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Удобное расположение",
    description: "Все объекты находятся на первых линиях жилых домов в оживленных районах города"
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Близость к метро",
    description: "Помещения в пешей доступности от станций метро, удобно для клиентов и сотрудников"
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Собственные объекты",
    description: "Мы управляем собственной недвижимостью, что гарантирует стабильность и надежность"
  }
];

const Advantages = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Наши преимущества</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Почему клиенты выбирают нашу компанию для аренды коммерческой недвижимости
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="text-primary mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
