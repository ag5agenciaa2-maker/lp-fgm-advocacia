import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links que possuem seções correspondentes na página (ID da seção)
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Fecha o menu mobile ao clicar em qualquer link
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#inicio" 
            className="flex flex-col group cursor-pointer" 
            onClick={(e) => handleLinkClick(e, '#inicio')}
          >
            <span className={`font-serif text-2xl font-bold leading-none transition-colors ${scrolled ? 'text-white' : 'text-primary'}`}>
              FGM
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-medium transition-colors ${scrolled ? 'text-secondary' : 'text-primary/70'}`}>
              Advocacia Criminal
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] lg:text-xs font-bold uppercase tracking-widest transition-colors hover:text-secondary ${
                scrolled ? 'text-white/90' : 'text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5521991756457"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary/90 text-primary font-bold py-2 px-4 lg:px-6 rounded-md flex items-center gap-2 transition-all shadow-lg text-xs lg:text-sm"
          >
            <PhoneCall size={16} />
            Plantão 24h
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-secondary p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-primary text-white overflow-hidden transition-all duration-300 shadow-2xl border-t border-white/5 ${
          isOpen ? 'max-h-screen py-8' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-lg font-bold uppercase tracking-widest hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5521991756457"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary font-bold py-4 px-10 rounded-full flex items-center gap-3 w-[80%] justify-center shadow-xl transform active:scale-95 transition-transform"
          >
            <PhoneCall size={20} />
            Plantão 24h
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;