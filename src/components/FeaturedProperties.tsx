
import { Property } from "@/lib/types";
import PropertyCard from "./PropertyCard";

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Популярные предложения</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ознакомьтесь с нашими лучшими предложениями для вашего бизнеса – офисные и торговые помещения с отличным расположением
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {properties.length > 3 && (
          <div className="text-center mt-8">
            <a 
              href="/properties" 
              className="inline-flex items-center text-primary hover:underline"
            >
              Смотреть все предложения
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
