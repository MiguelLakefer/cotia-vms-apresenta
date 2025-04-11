
import { cn } from "@/lib/utils";

const FacultySection = () => {
  return <section id="faculty" className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-secondary font-semibold">NOSSO TIME</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Educadores Dedicados</h2>
          <p className="text-gray-600 text-lg">
            Nossa equipe de profissionais altamente qualificados está comprometida com a excelência 
            educacional e o desenvolvimento integral dos alunos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-school-primary">Nossa Metodologia</h3>
            <p className="text-gray-600">
              Utilizamos metodologias ativas de aprendizagem e desenvolvimento curricular, 
              com foco na formação integral dos estudantes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-school-primary">Qualificação</h3>
            <p className="text-gray-600">
              Contamos com uma equipe de professores e coordenadores com ampla formação 
              acadêmica e experiência em educação.
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default FacultySection;
