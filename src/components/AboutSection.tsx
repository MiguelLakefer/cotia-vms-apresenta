
import { GraduationCap, Users, Clock, Award, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureCard = ({ icon: Icon, title, description, className }: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  className?: string 
}) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105", className)}>
      <div className="bg-school-secondary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon size={24} className="text-school-secondary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-secondary font-semibold">NOSSA HISTÓRIA</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Educando com Excelência desde 1988</h2>
          <p className="text-gray-600 text-lg">
            A Escola Municipal Vinícius de Moraes tem se destacado como referência em educação na cidade de Cotia, 
            com um compromisso inabalável com a formação integral dos alunos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Oferecer uma educação de qualidade que estimule o desenvolvimento intelectual, social e cultural de nossos alunos, 
                preparando-os para serem cidadãos críticos, éticos e comprometidos com a transformação da sociedade.
              </p>
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-600 mb-6">
                Ser reconhecida como instituição educacional de referência por sua excelência acadêmica, formação humanística 
                e contribuição para o desenvolvimento da comunidade local.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-auto rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/5b75c853-cae5-4ce1-8ab8-4b6aa7ed65a6.png" 
              alt="Área externa da Escola Vinícius de Moraes" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sala do Futuro Section */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-school-primary mb-4">Sala do Futuro</h3>
            <p className="text-gray-600">
              Conheça a nossa moderna Sala do Futuro, um espaço inovador dedicado ao aprendizado tecnológico e digital.
            </p>
          </div>
          <div className="flex justify-center">
            <a 
              href="https://saladofuturo.educacao.sp.gov.br/escolha-de-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-school-primary text-white px-6 py-3 rounded-lg hover:bg-school-secondary transition-colors"
            >
              <span>Acesse a Sala do Futuro</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={GraduationCap}
            title="Educação de Qualidade" 
            description="Currículo abrangente que desenvolve competências essenciais para a vida."
          />
          <FeatureCard 
            icon={Users}
            title="Professores Qualificados" 
            description="Equipe de educadores experientes e dedicados ao desenvolvimento dos alunos."
          />
          <FeatureCard 
            icon={Clock}
            title="Horário Estendido" 
            description="Opções de atividades extracurriculares para desenvolvimento integral."
          />
          <FeatureCard 
            icon={Award}
            title="Excelência Reconhecida" 
            description="Reconhecida por altos índices de aprovação e desempenho educacional."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
