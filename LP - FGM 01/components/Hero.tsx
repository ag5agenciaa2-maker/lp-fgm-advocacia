
import React from 'react';
import { ShieldAlert, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
          alt="Judicial Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-4 py-2 rounded-full text-secondary text-sm font-semibold mb-6 animate-fade-in backdrop-blur-sm">
            <ShieldAlert size={16} />
            <span>Advocacia Criminal Especializada • Rio de Janeiro</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Defesa Criminal de <span className="text-secondary italic">Alto Impacto</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
            Atuação estratégica em Campo Grande e todo o RJ. Especialistas em custódia e liberdade com <span className="text-white font-semibold underline decoration-secondary">plantão 24 horas</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://wa.me/5521991756457"
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg animate-pulse-gold"
            >
              Falar com Advogado agora
              <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-white font-medium">Nota 5.0 no Google</span>
            </div>
          </div>

          <div className="flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-serif text-secondary font-bold">87+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Avaliações Reais</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-3xl font-serif text-secondary font-bold">24h</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Plantão Criminal</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-3xl font-serif text-secondary font-bold">RJ</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Presença Total</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-secondary/30 transform rotate-1">
            <img 
              src="https://lh3.googleusercontent.com/d/1rnC2CYcsHma-PCNuYCM3CEpzn4U1HTHh" 
              alt="Equipe FGM Advocacia Criminal"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
          {/* Badge 5.0 */}
          <div className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl z-20 flex flex-col items-center">
            <span className="text-primary font-black text-4xl leading-none">5.0</span>
            <div className="flex gap-0.5 text-secondary my-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-[9px] uppercase font-bold text-slate-400 tracking-tighter">Google Reviews</span>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
