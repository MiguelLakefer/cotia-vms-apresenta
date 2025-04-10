import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
const testimonials = [{
  id: 1,
  content: "Minha filha estuda na Vinícius de Moraes há 3 anos e o desenvolvimento dela tem sido incrível. Os professores são muito dedicados e a escola tem uma abordagem que realmente estimula o aprendizado.",
  author: "Ana Oliveira",
  role: "Mãe de aluna do 5º ano"
}, {
  id: 2,
  content: "Como pedagogo, posso dizer que a metodologia aplicada na escola é exemplar. Meu filho desenvolveu não apenas conhecimentos acadêmicos, mas valores importantes para a formação do caráter.",
  author: "Carlos Santos",
  role: "Pai de aluno do 3º ano"
}, {
  id: 3,
  content: "Estudei na Vinícius de Moraes por todo o ensino fundamental e a base que recebi foi essencial para meu sucesso acadêmico posterior. Tenho orgulho de ter sido aluno desta instituição.",
  author: "Pedro Mendes",
  role: "Ex-aluno"
}, {
  id: 4,
  content: "A escola oferece um ambiente acolhedor onde meu filho se sente seguro para aprender e explorar. O apoio individualizado aos estudantes faz toda a diferença.",
  author: "Mariana Costa",
  role: "Mãe de aluno do 2º ano"
}];
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const goToNext = () => {
    setActiveIndex(current => (current + 1) % testimonials.length);
  };
  const goToPrev = () => {
    setActiveIndex(current => (current - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-school-secondary font-semibold">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">O que dizem sobre nós</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}>
              {testimonials.map(testimonial => <div key={testimonial.id} className="min-w-full px-4">
                  
                </div>)}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => <button key={index} className={cn("w-3 h-3 rounded-full transition-all", activeIndex === index ? "bg-school-secondary w-6" : "bg-gray-300")} onClick={() => setActiveIndex(index)} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>

          <button onClick={goToPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="h-6 w-6 text-school-primary" />
          </button>
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors" aria-label="Next testimonial">
            <ChevronRight className="h-6 w-6 text-school-primary" />
          </button>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;