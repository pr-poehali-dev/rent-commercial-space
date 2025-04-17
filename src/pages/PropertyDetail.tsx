
import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, Clock, SquareIcon, Building, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { properties } from "@/lib/mockData";
import { useState, useEffect } from "react";
import { Property } from "@/lib/types";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  
  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id);
    
    if (foundProperty) {
      setProperty(foundProperty);
      setActiveImage(foundProperty.images[0] || "/placeholder.svg");
    }
  }, [id]);
  
  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-16 container">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Объект не найден</h1>
            <Button asChild>
              <Link to="/properties">Вернуться к списку объектов</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const typeLabel = {
    office: "Офисное помещение",
    retail: "Торговое помещение",
    other: "Помещение свободного назначения",
  };
  
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-6">
            <Button variant="ghost" className="mb-2" asChild>
              <Link to="/properties" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к списку объектов
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold">{property.title}</h1>
            
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Badge>{typeLabel[property.type]}</Badge>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.address}</span>
              </div>
              
              {property.metroStation && (
                <div className="flex items-center text-sm">
                  <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                  <span>{property.metroStation}</span>
                  {property.walkingDistance && (
                    <span className="flex items-center ml-2">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{property.walkingDistance} мин.</span>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border rounded-lg overflow-hidden mb-4">
                <img 
                  src={activeImage} 
                  alt={property.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {property.images.length > 1 && (
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {property.images.map((image, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveImage(image)}
                      className={`flex-shrink-0 border-2 rounded-md overflow-hidden ${activeImage === image ? 'border-primary' : 'border-transparent'}`}
                    >
                      <img 
                        src={image} 
                        alt={`${property.title} ${index + 1}`}
                        className="w-20 h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
              
              <Tabs defaultValue="description" className="mt-8">
                <TabsList>
                  <TabsTrigger value="description">Описание</TabsTrigger>
                  <TabsTrigger value="features">Характеристики</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-4">
                  <p className="text-muted-foreground">
                    {property.description}
                  </p>
                </TabsContent>
                <TabsContent value="features" className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                    <div className="flex items-center gap-2">
                      <SquareIcon className="text-primary h-5 w-5" />
                      <span>Площадь: {property.area} м²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="text-primary h-5 w-5" />
                      <span>Тип: {typeLabel[property.type]}</span>
                    </div>
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="text-primary h-5 w-5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg border sticky top-24">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Площадь</div>
                  <div className="text-xl font-bold">{property.area} м²</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Стоимость за м²</div>
                  <div className="text-xl font-bold">{formatPrice(property.price)} ₽</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Ежемесячная арендная плата</div>
                  <div className="text-2xl font-bold text-primary">{formatPrice(property.price * property.area)} ₽</div>
                </div>
                
                <div className="border-t pt-6 my-6">
                  <h3 className="text-xl font-medium mb-4">Оставить заявку</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
