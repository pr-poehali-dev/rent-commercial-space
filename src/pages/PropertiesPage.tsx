
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilter from "@/components/PropertyFilter";
import { properties } from "@/lib/mockData";
import { Property, FilterOptions } from "@/lib/types";

const PropertiesPage = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  const handleFilter = (filters: FilterOptions) => {
    let filtered = [...properties];
    
    // Фильтрация по типу помещения
    if (filters.type) {
      filtered = filtered.filter(property => property.type === filters.type);
    }
    
    // Фильтрация по площади
    if (filters.minArea !== undefined) {
      filtered = filtered.filter(property => property.area >= filters.minArea!);
    }
    if (filters.maxArea !== undefined) {
      filtered = filtered.filter(property => property.area <= filters.maxArea!);
    }
    
    // Фильтрация по цене
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(property => property.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(property => property.price <= filters.maxPrice!);
    }
    
    // Фильтрация по станции метро
    if (filters.metroStation) {
      filtered = filtered.filter(property => 
        property.metroStation?.toLowerCase().includes(filters.metroStation!.toLowerCase())
      );
    }
    
    setFilteredProperties(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Аренда коммерческой недвижимости</h1>
            <p className="text-muted-foreground">
              Офисные и торговые помещения в разных районах города
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1">
              <PropertyFilter onFilter={handleFilter} />
            </aside>
            
            <div className="lg:col-span-3">
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 bg-muted rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Объекты не найдены</h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить параметры поиска
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertiesPage;
