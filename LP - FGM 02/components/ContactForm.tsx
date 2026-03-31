
import React from 'react';
import { MapPin, Phone, Instagram, ShieldCheck, MessageCircle } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Contato & Plantão</h2>
          <h3 className="text-3xl md:text-6xl font-serif mb-6">Atendimento Criminal Imediato</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não tome nenhuma decisão sem antes falar com um especialista. Estamos disponíveis agora para proteger sua liberdade e seus direitos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm flex gap-6 items-start hover:bg-white/10 transition-colors">
              <div className="bg-secondary p-4 rounded-2xl text-primary">
                <MapPin size={32} />
              </div>
              <div>
                <p className="font-bold text-xl mb-2">Unidade Campo Grande</p>
                <p className="text-slate-400 leading-relaxed">
                  Estrada do Monteiro, n° 20 - sala 201<br />
                  Centro Empresarial - Rio de Janeiro, RJ<br />
                  CEP: 23045-830
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm flex gap-6 items-start hover:bg-white/10 transition-colors">
              <div className="bg-secondary p-4 rounded-2xl text-primary">
                <Phone size={32} />
              </div>
              <div>
                <p className="font-bold text-xl mb-2">Plantão 24 Horas</p>
                <p className="text-slate-400 mb-1">WhatsApp Principal: <span className="text-white font-bold">(21) 99175-6457</span></p>
                <p className="text-slate-400">Atendimento 24h, inclusive feriados.</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-12 rounded-3xl flex flex-col justify-center items-center text-center shadow-2xl">
            <div className="mb-6 bg-primary/10 p-6 rounded-full inline-block animate-bounce">
              <MessageCircle size={48} className="text-primary" />
            </div>
            <h4 className="text-primary text-3xl font-serif font-bold mb-6 italic">Precisa de Ajuda Agora?</h4>
            <p className="text-primary/80 mb-10 text-lg font-medium">
              Clique no botão abaixo para iniciar um atendimento prioritário via WhatsApp diretamente com um de nossos advogados.
            </p>
            <a 
              href="https://wa.me/5521991756457"
              className="w-full bg-primary hover:bg-[#071927] text-white font-bold py-6 px-8 rounded-2xl text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] shadow-xl group"
            >
              Falar pelo WhatsApp Agora
              <ShieldCheck className="group-hover:rotate-12 transition-transform" />
            </a>
            <div className="mt-8 flex gap-4 text-primary font-bold items-center">
              <Instagram size={24} />
              <a href="https://www.instagram.com/ferreira.garcia.moura_adv/" target="_blank" className="hover:underline">@fgm_advocacia_criminal</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default ContactInfo;
