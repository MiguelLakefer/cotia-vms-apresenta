import { cn } from "@/lib/utils";
interface TeacherCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}
const teachers = [{
  name: "Profa. Maria Silva",
  role: "Diretora",
  image: "https://randomuser.me/api/portraits/women/65.jpg",
  description: "Mestre em Educação com mais de 25 anos de experiência na gestão escolar."
}, {
  name: "Prof. José Oliveira",
  role: "Coordenador Pedagógico",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
  description: "Especialista em metodologias ativas de aprendizagem e desenvolvimento curricular."
}, {
  name: "Profa. Ana Santos",
  role: "Português",
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  description: "Formada em Letras com especialização em literatura infantojuvenil."
}, {
  name: "Prof. Carlos Pereira",
  role: "Matemática",
  image: "https://randomuser.me/api/portraits/men/86.jpg",
  description: "Doutor em educação matemática com abordagem prática e envolvente."
}];
const TeacherCard = ({
  name,
  role,
  image,
  description
}: TeacherCardProps) => {
  return <div className="group">
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform group-hover:-translate-y-2 group-hover:shadow-xl">
        
        
      </div>
    </div>;
};
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => <TeacherCard key={index} name={teacher.name} role={teacher.role} image={teacher.image} description={teacher.description} />)}
        </div>
      </div>
    </section>;
};
export default FacultySection;