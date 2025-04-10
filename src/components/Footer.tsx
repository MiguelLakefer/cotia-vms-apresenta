
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-school-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Escola Municipal<br />Vinícius de Moraes</h3>
            <p className="text-gray-300 mb-4">
              Educação de qualidade para transformar vidas e construir um futuro melhor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-school-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-school-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-school-accent transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-school-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-school-accent transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-school-accent transition-colors">Sobre</a></li>
              <li><a href="#curriculum" className="hover:text-school-accent transition-colors">Currículo</a></li>
              <li><a href="#faculty" className="hover:text-school-accent transition-colors">Professores</a></li>
              <li><a href="#testimonials" className="hover:text-school-accent transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-school-accent transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Informações</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-school-accent transition-colors">Calendário Escolar</a></li>
              <li><a href="#" className="hover:text-school-accent transition-colors">Processo de Matrícula</a></li>
              <li><a href="#" className="hover:text-school-accent transition-colors">Cardápio da Merenda</a></li>
              <li><a href="#" className="hover:text-school-accent transition-colors">Projetos Pedagógicos</a></li>
              <li><a href="#" className="hover:text-school-accent transition-colors">Normas de Convivência</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <address className="not-italic text-gray-300">
              <p>Rua Vinícius de Moraes, 123</p>
              <p>Centro - Cotia/SP</p>
              <p>CEP: 06700-000</p>
              <p className="mt-2">(11) 4703-2220</p>
              <p>contato@viniciusdemoraes.edu.br</p>
            </address>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Escola Municipal Vinícius de Moraes. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-300 hover:text-school-accent mr-4">Política de Privacidade</a>
            <a href="#" className="text-sm text-gray-300 hover:text-school-accent">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
