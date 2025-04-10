
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactInfoItem = ({ icon: Icon, title, children }: { 
  icon: React.ElementType, 
  title: string, 
  children: React.ReactNode 
}) => {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className="bg-school-secondary/10 p-3 rounded-full">
        <Icon size={20} className="text-school-secondary" />
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Form submission simulation
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
    });
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-secondary font-semibold">CONTATO</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Entre em Contato</h2>
          <p className="text-gray-600 text-lg">
            Estamos à disposição para atender suas dúvidas e fornecer todas as informações necessárias sobre nossa escola.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-school-primary hover:bg-school-secondary">
                  <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <ContactInfoItem icon={Phone} title="Telefone">
              (11) 4703-2220
            </ContactInfoItem>
            
            <ContactInfoItem icon={Mail} title="Email">
              contato@viniciusdemoraes.edu.br
            </ContactInfoItem>
            
            <ContactInfoItem icon={MapPin} title="Endereço">
              <p>Rua Vinícius de Moraes, 123</p>
              <p>Centro - Cotia/SP</p>
              <p>CEP: 06700-000</p>
            </ContactInfoItem>
            
            <ContactInfoItem icon={Clock} title="Horário de Atendimento">
              <p>Segunda a Sexta: 7h às 18h</p>
              <p>Sábado: 8h às 12h (Secretaria)</p>
            </ContactInfoItem>
            
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.744499893496!2d-46.9195!3d-23.6024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzA4LjYiUyA0NsKwNTUnMTAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1649077543261!5m2!1spt-BR!2sbr" 
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa da localização da Escola Municipal Vinícius de Moraes"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
