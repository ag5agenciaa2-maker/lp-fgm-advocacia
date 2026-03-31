
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Fui preso em flagrante, o que devo fazer agora?",
    answer: "O primeiro passo é manter o silêncio constitucional e exigir a presença de seu advogado. A Audiência de Custódia ocorrerá em até 24h, onde lutaremos para que você responda ao processo em liberdade."
  },
  {
    question: "Como funciona o acompanhamento em delegacia?",
    answer: "Nossa equipe se desloca imediatamente até a delegacia para acompanhar o depoimento, garantir que não haja abusos e orientar tecnicamente o cliente desde o primeiro minuto da abordagem policial."
  },
  {
    question: "O escritório atende aos domingos e madrugadas?",
    answer: "Sim. Mantemos um plantão 24 horas real, com advogados criminalistas prontos para intervir em casos de urgência, prisões, buscas e apreensões a qualquer hora do dia ou da noite."
  },
  {
    question: "Quais as áreas de cobertura no Rio de Janeiro?",
    answer: "Atendemos presencialmente em Campo Grande, Bangu, Santa Cruz, Recreio, Guaratiba, Barra da Tijuca, Nova Iguaçu, Itaguaí e demais regiões do Rio de Janeiro."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle size={40} className="text-secondary/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4 italic">Perguntas Frequentes</h2>
          <p className="text-slate-600">Orientações essenciais para sua segurança jurídica.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-md">
              <button
                className="w-full flex items-center justify-between p-7 text-left bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-bold text-primary pr-8">{faq.question}</span>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? (
                    <Minus className="text-secondary" size={24} />
                  ) : (
                    <Plus className="text-secondary" size={24} />
                  )}
                </div>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-7 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 bg-accent/20">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
