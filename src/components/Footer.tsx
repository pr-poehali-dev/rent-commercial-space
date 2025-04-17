
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6" />
              <h3 className="text-xl font-bold">НедвижимостьПро</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Профессиональное управление коммерческой недвижимостью: офисы и торговые помещения в шаговой доступности от метро.
            </p>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+71234567890" className="text-sm">+7 (123) 456-78-90</a>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@realestatepro.ru" className="text-sm">info@nedvizhimost-pro.ru</a>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="h-4 w-4" />
              <p className="text-sm">г. Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">Главная</Link>
              </li>
              <li>
                <Link to="/properties" className="text-sm hover:underline">Объекты недвижимости</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:underline">О компании</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm hover:underline">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Типы недвижимости</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=office" className="text-sm hover:underline">Офисные помещения</Link>
              </li>
              <li>
                <Link to="/properties?type=retail" className="text-sm hover:underline">Торговые помещения</Link>
              </li>
              <li>
                <Link to="/properties?type=other" className="text-sm hover:underline">Другие типы помещений</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <p className="text-sm text-primary-foreground/70 text-center">
            © {new Date().getFullYear()} НедвижимостьПро. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
