import React from 'react';
import HeroSlider from '../components/HeroSlider';

const Kontakt = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      
      {/* Red Separator */}
      <div className="relative h-4 bg-primary w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-secondary mb-6">Wir freuen uns auf Ihre Nachricht!</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Franz Kolb GmbH & Co. KG</h3>
              <p className="text-gray-600 mb-1">Kolb Transporte</p>
              <p className="text-gray-600 mb-1">Bgm.-Haas-Str. 13</p>
              <p className="text-gray-600 mb-6">89290 Buch/Gannertshofen</p>
              
              <p className="text-gray-600 mb-1">Tel.: +49 (0) 7343/92981-0</p>
              <p className="text-gray-600 mb-1">Fax: +49 (0) 7343/92981-20</p>
              <p className="text-gray-600 mb-1">
                E-Mail: <a href="mailto:info@firma-kolb.de" className="text-primary hover:underline">info@firma-kolb.de</a>
              </p>
              <p className="text-gray-600">
                Internet: <a href="https://firma-kolb.de" className="text-primary hover:underline">www.firma-kolb.de</a>
              </p>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded-sm focus:ring-primary focus:border-primary" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                  <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded-sm focus:ring-primary focus:border-primary" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                  <input type="text" id="subject" className="w-full border border-gray-300 p-2 rounded-sm focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                  <textarea id="message" rows={5} className="w-full border border-gray-300 p-2 rounded-sm focus:ring-primary focus:border-primary"></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-6 py-2 rounded-sm hover:bg-red-700 transition-colors">
                  Senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
