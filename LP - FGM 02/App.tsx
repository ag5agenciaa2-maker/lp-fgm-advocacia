
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactInfo from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  useEffect(() => {
    // Schema JSON-LD injection for Local SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Attorney",
      "name": "FGM Advocacia Criminal",
      "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
      "url": "https://www.fgmadvocacia.ag5agencia.site/inicio",
      "telephone": "+5521991756457",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Estrada do Monteiro, n° 20 - sala 201",
        "addressLocality": "Campo Grande",
        "addressRegion": "RJ",
        "postalCode": "23045-830",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -22.9037,
        "longitude": -43.5592
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [
        "Campo Grande", "Bangu", "Santa Cruz", "Recreio dos Bandeirantes", "Guaratiba", "Nova Iguaçu", "Itaguaí", "Paciência", "Cosmos", "Senador Vasconcelos"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "87"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <ContactInfo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
