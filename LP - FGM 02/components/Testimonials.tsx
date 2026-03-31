
import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const realReviews = [
  {
    name: "Rafaela Campelo",
    text: "Gostaria de deixar registrado meus agradecimentos à equipe do escritório FGM advocacia criminal. A estrutura organizada, ambiente acolhedor, bem como o profissionalismo foram as marcas registradas. Dr. Rodrigo Garcia foi solícito em todos os meus questionamentos.",
    rating: 5
  },
  {
    name: "Camila dos Santos Pinto",
    text: "Quero aqui deixar registrado toda nossa gratidão aos advogados. Dr. Thiago com quem tivemos o primeiro contato, Dr. Rodrigo, Dr. Wagner, Dr. Anderson... muito obrigada por toda paciência, sempre muito educados, buscando a melhor forma de nos ajudar.",
    rating: 5
  },
  {
    name: "Lais Dos Santos",
    text: "Extremamente profissionais, cuidadosos e muito atenciosos. Super recomendo, que Deus continue abençoando a vida de vocês (Srs Anderson Augusto Ferreira, Carlos Rodrigo Garcia, Wagner Santos de Moura, Thiago S. Silva e Edson), gratidão por tudo.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6 bg-white px-6 py-2 rounded-full shadow-sm border border-slate-100">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 mr-2" />
            <div className="flex gap-1 text-secondary">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-primary font-bold text-sm">Nota 5.0 baseada em 87+ avaliações</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">A Confiança de Quem <span className="text-secondary">Conhece o Nosso Trabalho</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Somos o escritório de advocacia criminal mais bem avaliado de Campo Grande, RJ. O compromisso com a liberdade de nossos clientes é nossa prioridade absoluta.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {realReviews.map((r, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-xl shadow-primary/5 border border-slate-50 relative group hover:-translate-y-2 transition-all duration-300">
              <Quote className="absolute top-8 right-8 text-secondary/10 group-hover:text-secondary/20 transition-colors" size={50} />
              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(5)].map((_, star) => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed text-sm">"{r.text}"</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-primary font-bold text-base leading-none mb-1">{r.name}</p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.google.com/search?q=FGM+advocacia+criminal+reviews" 
            target="_blank" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors underline decoration-secondary decoration-2 underline-offset-8"
          >
            Ver todas as avaliações no Google
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
