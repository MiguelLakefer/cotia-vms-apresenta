
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Currículo", href: "#curriculum" },
    { name: "Professores", href: "#faculty" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <>
      <div className="bg-school-primary text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(11) 4703-2220</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>contato@viniciusdemoraes.edu.br</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 ml-auto md:ml-0">
            <MapPin size={14} />
            <span>Cotia, SP</span>
          </div>
        </div>
      </div>
      <header 
        className={cn(
          "sticky top-0 w-full transition-all duration-300 z-50",
          isScrolled ? "bg-white shadow-md" : "bg-white/90"
        )}
      >
        <div className="container flex justify-between items-center py-4">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-school-primary">
              Escola Municipal<br />
              <span className="text-school-secondary">Vinícius de Moraes</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-school-dark hover:text-school-secondary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-school-primary hover:bg-school-secondary text-white">Agende uma Visita</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-school-primary p-2"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            "md:hidden bg-white absolute top-full left-0 right-0 transition-all duration-300 border-t border-gray-200",
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-school-dark hover:text-school-secondary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-school-primary hover:bg-school-secondary text-white w-full">Agende uma Visita</Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
