
import { Book, BookOpen, Palette, Calculator, Globe, FlaskConical, Clock, Users, Brain, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

const ProgramCard = ({ icon: Icon, title, description, className, iconClassName }: ProgramCardProps) => {
  return (
    <div className={cn(
      "group p-6 rounded-lg transition-all hover:shadow-lg flex flex-col items-center text-center", 
      className
    )}>
      <div className={cn(
        "mb-4 p-4 rounded-full transition-all group-hover:scale-110", 
        iconClassName || "bg-blue-100"
      )}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-secondary font-semibold">NOSSO CURRÍCULO</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Programas Educacionais</h2>
          <p className="text-gray-600 text-lg">
            Oferecemos um currículo abrangente que equilibra as disciplinas tradicionais com atividades 
            extracurriculares, proporcionando uma formação completa para nossos alunos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProgramCard 
            icon={Users} 
            title="Humanas" 
            description="Desenvolvimento do pensamento crítico através de História, Geografia, Filosofia e Sociologia."
            iconClassName="bg-purple-100 text-purple-600"
          />
          <ProgramCard 
            icon={Calculator} 
            title="Exatas" 
            description="Fortalecimento do raciocínio lógico com Matemática, Física e Química de forma aplicada."
            iconClassName="bg-red-100 text-red-600"
          />
          <ProgramCard 
            icon={Microscope} 
            title="Biológicas" 
            description="Compreensão da vida e dos processos naturais através da Biologia e Ciências da Natureza."
            iconClassName="bg-yellow-100 text-yellow-600"
          />
        </div>

        <div className="bg-school-primary text-white p-8 rounded-xl">
          <div className="text-center md:max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Educação de qualidade para transformar vidas</h3>
            <p className="mb-6">
              Venha conhecer nossa estrutura e metodologia de ensino. Agende uma visita e descubra como podemos 
              contribuir para o desenvolvimento educacional do seu filho.
            </p>
            <Button size="lg" className="bg-school-accent hover:bg-yellow-500 text-school-primary font-semibold">
              Agende uma Visita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
