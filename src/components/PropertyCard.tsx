
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, SquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@/lib/types";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { id, title, type, area, price, address, metroStation, walkingDistance, images } = property;
  
  const typeLabel = {
    office: "Офис",
    retail: "Торговое помещение",
    other: "Другое",
  };

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={images[0] || "/placeholder.svg"} 
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 right-2">
          {typeLabel[type]}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <Link to={`/properties/${id}`}>
          <h3 className="text-lg font-medium hover:text-primary transition-colors line-clamp-2 mb-2">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{address}</span>
        </div>
        
        {metroStation && (
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
            <span>{metroStation}</span>
            {walkingDistance && (
              <span className="flex items-center ml-2">
                <Clock className="w-3 h-3 mr-1" />
                <span>{walkingDistance} мин.</span>
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center gap-2 mt-3">
          <Badge variant="outline" className="flex items-center">
            <SquareIcon className="w-3 h-3 mr-1" />
            {area} м²
          </Badge>
          <Badge variant="secondary" className="font-medium">
            {formatPrice(price)} ₽/м²
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" asChild>
          <Link to={`/properties/${id}`}>Подробнее</Link>
        </Button>
        <span className="text-lg font-bold">
          {formatPrice(price * area)} ₽/мес
        </span>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
