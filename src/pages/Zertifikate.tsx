import React from 'react';
import HeroSlider from '../components/HeroSlider';
import certBio1 from '../assets/zertifikat-bio-1.png';
import certBio2 from '../assets/zertifikat-bio-2.png';
import certGmp from '../assets/zertifikat-gmp.png';
import certVlog from '../assets/zertifikat-vlog.png';

const Zertifikate = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      
      {/* Red Separator */}
      <div className="relative h-4 bg-primary w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-secondary mb-8">Wichtige Zertifikate zum Download:</h2>

          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold text-secondary mb-4 border-b pb-2">Bio Zertifikat DE-Öko-001</h3>
              <a href="#" className="text-primary hover:underline mb-4 inline-block">Hier Zertifikat herunterladen</a>
              <div className="grid md:grid-cols-2 gap-4">
                <img src={certBio1} alt="Bio Zertifikat Seite 1" className="w-full h-auto shadow-md border" />
                <img src={certBio2} alt="Bio Zertifikat Seite 2" className="w-full h-auto shadow-md border" />
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-secondary mb-4 border-b pb-2">GMP Zertifikat</h3>
              <a href="#" className="text-primary hover:underline mb-4 inline-block">Hier GMP Zertifkat herunterladen</a>
              <div className="max-w-2xl">
                <img src={certGmp} alt="GMP Zertifikat" className="w-full h-auto shadow-md border" />
                <p className="mt-2 text-gray-600">Wir sind GMP zertifiziert</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-secondary mb-4 border-b pb-2">VLOG Zertifkat</h3>
              <a href="#" className="text-primary hover:underline mb-4 inline-block">Hier herunterladen</a>
              <div className="max-w-2xl">
                <img src={certVlog} alt="VLOG Zertifikat" className="w-full h-auto shadow-md border" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zertifikate;
