
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <Link to="/" className="text-xl font-bold">
            НедвижимостьПро
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Главная
          </Link>
          <Link to="/properties" className="text-sm font-medium hover:text-primary">
            Объекты
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            О компании
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-primary">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <a href="tel:+71234567890">+7 (123) 456-78-90</a>
          </Button>
          <Button>
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
