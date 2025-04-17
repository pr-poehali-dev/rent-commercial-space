
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { FilterOptions } from "@/lib/types";

interface PropertyFilterProps {
  onFilter: (filters: FilterOptions) => void;
}

const PropertyFilter = ({ onFilter }: PropertyFilterProps) => {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [areaRange, setAreaRange] = useState([0, 500]);

  const handleTypeChange = (value: string) => {
    if (value === "all") {
      const { type, ...rest } = filters;
      setFilters(rest);
    } else {
      setFilters({ ...filters, type: value as "office" | "retail" | "other" });
    }
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    setFilters({
      ...filters,
      minPrice: values[0],
      maxPrice: values[1],
    });
  };

  const handleAreaChange = (values: number[]) => {
    setAreaRange(values);
    setFilters({
      ...filters,
      minArea: values[0],
      maxArea: values[1],
    });
  };

  const handleMetroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setFilters({ ...filters, metroStation: e.target.value });
    } else {
      const { metroStation, ...rest } = filters;
      setFilters(rest);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({});
    setPriceRange([0, 10000]);
    setAreaRange([0, 500]);
    onFilter({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-card rounded-lg border shadow-sm">
      <h3 className="text-lg font-medium">Поиск помещений</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="type">Тип помещения</Label>
          <Select
            value={filters.type || "all"}
            onValueChange={handleTypeChange}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="Все типы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="office">Офисные помещения</SelectItem>
              <SelectItem value="retail">Торговые помещения</SelectItem>
              <SelectItem value="other">Другие типы</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label>Площадь, м²</Label>
          <div className="pt-6 pb-2">
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={5}
              value={areaRange}
              onValueChange={handleAreaChange}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span>от {areaRange[0]} м²</span>
            <span>до {areaRange[1]} м²</span>
          </div>
        </div>
        
        <div>
          <Label>Цена, ₽/м²</Label>
          <div className="pt-6 pb-2">
            <Slider
              defaultValue={[0, 10000]}
              max={10000}
              step={100}
              value={priceRange}
              onValueChange={handlePriceChange}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span>от {priceRange[0]} ₽</span>
            <span>до {priceRange[1]} ₽</span>
          </div>
        </div>
        
        <div>
          <Label htmlFor="metro">Метро</Label>
          <Input
            id="metro"
            value={filters.metroStation || ""}
            onChange={handleMetroChange}
            placeholder="Название станции"
          />
        </div>
      </div>
      
      <div className="flex gap-4">
        <Button type="submit" className="flex-1">Найти</Button>
        <Button type="button" variant="outline" onClick={handleReset}>Сбросить</Button>
      </div>
    </form>
  );
};

export default PropertyFilter;
