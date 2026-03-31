
import React from 'react';
import { 
  Gavel, 
  ShieldCheck, 
  Scale, 
  UserPlus, 
  Globe, 
  Clock, 
  FileLock2, 
  Handshake, 
  Briefcase 
} from 'lucide-react';

const services = [
  {
    title: "Audiência de Custódia",
    description: "Intervenção técnica imediata para garantir a liberdade e os direitos fundamentais em prisões em flagrante.",
    icon: <Clock className="text-secondary" size={32} />
  },
  {
    title: "Habeas Corpus",
    description: "Ações urgentes para cessar coações ilegais à liberdade de locomoção em tribunais superiores.",
    icon: <Scale className="text-secondary" size={32} />
  },
  {
    title: "Violência Doméstica",
    description: "Defesa especializada em casos da Lei Maria da Penha com abordagem humanizada e técnica.",
    icon: <ShieldCheck className="text-secondary" size={32} />
  },
  {
    title: "Tráfico de Drogas",
    description: "Atuação estratégica em processos complexos de tráfico, focada em desclassificação e nulidades processuais.",
    icon: <Gavel className="text-secondary" size={32} />
  },
  {
    title: "Crimes Cibernéticos",
    description: "Defesa técnica em crimes de internet, invasão de dispositivo e crimes contra a honra digital.",
    icon: <Globe className="text-secondary" size={32} />
  },
  {
    title: "Dignidade Sexual",
    description: "Acompanhamento rigoroso em processos de crimes contra a dignidade sexual e stalking.",
    icon: <FileLock2 className="text-secondary" size={32} />
  },
  {
    title: "Acompanhamento em Delegacia",
    description: "Orientação jurídica presencial 24h para depoimentos e lavratura de flagrantes.",
    icon: <UserPlus className="text-secondary" size={32} />
  },
  {
    title: "Tribunal do Júri",
    description: "Representação em crimes contra a vida, com sustentação oral técnica e persuasiva.",
    icon: <Briefcase className="text-secondary" size={32} />
  },
  {
    title: "Execução Penal",
    description: "Revisão de penas, progressão de regime e pedidos de liberdade condicional.",
    icon: <Handshake className="text-secondary" size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-3">Especialidades</h2>
          <p className="text-3xl md:text-5xl font-serif text-primary mb-6">Excelência Jurídica em Cada Etapa do Processo</p>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-slate-600">Oferecemos representação especializada em Direito Penal, atuando com ética e transparência em todas as fases da defesa criminal.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-1"
            >
              <div className="mb-6 inline-block p-3 bg-accent rounded-lg group-hover:bg-primary transition-colors">
                <div className="group-hover:text-secondary">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
