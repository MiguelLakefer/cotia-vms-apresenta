
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return <section id="home" className="relative bg-school-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742')] bg-cover bg-center opacity-15"></div>
      <div className="container relative min-h-[calc(100vh-160px)] flex flex-col justify-center py-20">
        <div className="max-w-3xl animate-fade-in">
          <span className="bg-school-accent text-school-primary px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
            Educação de Qualidade
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Formando o Futuro com Excelência e Dedicação
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl">
            Há mais de 30 anos transformando vidas através da educação de 
            qualidade na cidade de Cotia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-school-accent hover:bg-yellow-500 text-school-primary font-semibold">
              Venha conhecer!
            </Button>
            
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};

export default HeroSection;
