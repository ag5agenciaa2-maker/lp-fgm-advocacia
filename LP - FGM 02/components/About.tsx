
import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const lawyers = [
  { 
    name: "Dr. Rodrigo Garcia", 
    role: "Sócio Criminalista", 
    img: "https://lh3.googleusercontent.com/d/1vj9vSzcs3SJFcgqN7HOt7zpWY31JPCtT" 
  },
  { 
    name: "Dr. Anderson Ferreira", 
    role: "Sócio Fundador", 
    img: "https://lh3.googleusercontent.com/d/11q8dDx_Y0QTLwQO4hQWDHJIBxImoNsnx" 
  },
  { 
    name: "Dr. Wagner Moura", 
    role: "Sócio Criminalista", 
    img: "https://lh3.googleusercontent.com/d/1CGMrC_2WfFkUJ32c-M10Y6hcOoof0SRC" 
  }
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-accent">
              <img 
                src="https://lh3.googleusercontent.com/d/1KP2jTOb8L1Az6fZLyM-GledP4eFyLLUb" 
                alt="Escritório FGM Interno"
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-xl border-r-8 border-secondary shadow-2xl z-10 max-w-xs">
              <ShieldCheck className="text-secondary mb-4" size={40} />
              <p className="text-white font-serif text-lg leading-tight font-medium italic">
                "Estrutura completa e acolhedora em Campo Grande para garantir sua blindagem jurídica."
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">Sobre o Escritório</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-primary mb-8">FGM Sociedade de Advogados</h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Comandada pelos doutores <span className="font-bold text-primary">Anderson Ferreira, Rodrigo Garcia e Wagner Moura</span>, a FGM é referência em advocacia humanizada e técnica no Rio de Janeiro.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Nosso escritório nasceu com a premissa de que o Direito Criminal exige mais do que conhecimento técnico; exige coragem, agilidade e empatia. Atuamos com foco total no cliente, garantindo sigilo absoluto e estratégias personalizadas para cada caso, desde a delegacia até os tribunais superiores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Atendimento Humanizado",
                "Foco na Liberdade",
                "Estratégia Processual",
                "Transparência Total",
                "Combate a Abusos",
                "Excelência Técnica"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-primary font-bold">
                  <CheckCircle className="text-secondary" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-serif font-bold text-primary">Nossa Equipe de Especialistas</h4>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {lawyers.map((lawyer, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative mb-6 inline-block">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-accent shadow-lg group-hover:border-secondary transition-all mx-auto">
                    <img 
                      src={lawyer.img} 
                      alt={lawyer.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
                      }}
                    />
                  </div>
                </div>
                <h5 className="text-xl font-bold text-primary">{lawyer.name}</h5>
                <p className="text-secondary font-medium text-sm uppercase tracking-widest">{lawyer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
