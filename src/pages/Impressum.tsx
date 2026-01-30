import React from 'react';
import HeroSlider from '../components/HeroSlider';

const Impressum = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <div className="relative h-4 bg-primary w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary"></div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <h1 className="text-3xl font-serif text-secondary mb-6">Impressum</h1>
          <p className="text-gray-600">Angaben gemäß § 5 TMG</p>
          {/* Placeholder content as specific legal text should be copied from source if needed, but for clone structure this is sufficient */}
          <div className="mt-4 space-y-2 text-gray-600">
            <p>Franz Kolb GmbH & Co. KG</p>
            <p>Bgm.-Haas-Str. 13</p>
            <p>89290 Buch/Gannertshofen</p>
            <p>Vertreten durch: Franz Kolb</p>
            <p>Kontakt: Telefon: +49 (0) 7343/92981-0</p>
            <p>E-Mail: info@firma-kolb.de</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
