import React from 'react';
import HeroSlider from '../components/HeroSlider';

const Datenschutz = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <div className="relative h-4 bg-primary w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary"></div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <h1 className="text-3xl font-serif text-secondary mb-6">Datenschutzerklärung</h1>
          <p className="text-gray-600">
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
          </p>
          {/* Placeholder for full legal text */}
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
