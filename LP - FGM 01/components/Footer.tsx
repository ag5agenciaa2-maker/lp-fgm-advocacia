
import React from 'react';
import { Scale } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071927] text-slate-400 py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scale size={32} className="text-secondary" />
              <div className="flex flex-col">
                <span className="font-serif text-white text-xl font-bold leading-none">FGM</span>
                <span className="text-[9px] text-secondary uppercase tracking-widest font-bold">Sociedade de Advogados</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Referência em advocacia criminal especializada em Campo Grande, RJ. Plantão 24h para garantir sua liberdade e seus direitos fundamentais.
            </p>
          </div>

          <div>
            <p className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Áreas de Atendimento</p>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>• Campo Grande</li>
              <li>• Bangu</li>
              <li>• Santa Cruz</li>
              <li>• Recreio</li>
              <li>• Guaratiba</li>
              <li>• Nova Iguaçu</li>
              <li>• Itaguaí</li>
              <li>• Mangaratiba</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Nossa Unidade</p>
            <p className="text-sm mb-2">Estrada do Monteiro, n° 20 - sala 201</p>
            <p className="text-sm mb-4">Campo Grande, Rio de Janeiro - RJ, 23045-830</p>
            <p className="text-sm">OAB/RJ: Consultar no escritório</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} FGM Advocacia Criminal. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
          </div>
          <p>Perto da Estrada do Monteiro | Atendimento em todo o RJ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
