import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';

// Import images
import service1 from '../assets/box-abroller.jpg';
import service2 from '../assets/heu.jpg';
import service3 from '../assets/box-spedition.jpg';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />

      {/* Red Separator */}
      <div className="relative h-4 bg-primary w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary"></div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-white p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-full h-48 mb-6 overflow-hidden">
              <img src={service1} alt="Unser Fuhrpark" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-serif text-secondary mb-4">Unser Fuhrpark</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Wir verfügen über einen Fuhrpark mit unterschiedlichen Aufliegern und Aufbauten. Dieser und die Zusammenarbeit mit zertifizierten Partnern ermöglicht es uns gezielt auf Ihre Anforderungen und Räumlichkeiten einzugehen und Ihnen einen reibungslosen Ablauf zu garantieren.
            </p>
            <Link to="/fuhrpark" className="mt-auto inline-block px-4 py-1 border border-red-300 text-gray-500 hover:bg-primary hover:text-white transition-colors text-sm">
              Weiterlesen
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-full h-48 mb-6 overflow-hidden">
              <img src={service2} alt="Agrarprodukte" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-serif text-secondary mb-4">Agrarprodukte</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Produkt- und Dienstleitungsportfolio – Das bieten wir Ihnen! An- und Verkauf von Agrarprodukten und landwirtschaftlichen Erzeugnissen – die Franz Kolb GmbH & Co. KG hat für jede Anforderung das passende Produkt! Eine unserer Kernkompetenzen liegt im Handel mit Agrarprodukten...
            </p>
            <Link to="/agrarprodukte" className="mt-auto inline-block px-4 py-1 border border-red-300 text-gray-500 hover:bg-primary hover:text-white transition-colors text-sm">
              Weiterlesen
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-full h-48 mb-6 overflow-hidden">
              <img src={service3} alt="Spedition & Logistik" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-serif text-secondary mb-4">Spedition & Logistik</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Europaweite Transporte für Güter aller Art – Wir sind Ihr Partner für das Individuelle! Durch die zentrale und strategisch gut positionierte Lage in Buch/Gannertshofen im Landkreis Neu-Ulm (Bayern) und die enge Zusammenarbeit mit zertifizierten Partnern reagieren wir, die Franz Kolb GmbH & Co. KG...
            </p>
            <Link to="/spedition-logistik" className="mt-auto inline-block px-4 py-1 border border-red-300 text-gray-500 hover:bg-primary hover:text-white transition-colors text-sm">
              Weiterlesen
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-serif text-secondary mb-6">Über uns</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Seit über 40 Jahren überzeugen wir, die Franz Kolb GmbH & Co KG aus Gannertshofen, als inhabergeführtes und landwirtschaftlich geprägtes Familienunternehmen in den Bereichen Transport, Recycling und Agrarhandel.
            </p>
            <p>
              Franz Kolb, tätig im elterlichen Landwirtschaftsbetrieb, gründete 1977 mit nur einem LKW und begrenzten Lagermöglichkeiten das heutige Traditionsunternehmen in Buch/Gannertshofen im Landkreis Neu-Ulm (Bayern).
            </p>
            <p>
              Schon damals legte er die Grundsteine für die heutigen Leitlinien des Unternehmens: Qualität, Zuverlässigkeit, Flexibilität, Erfahrung und Ehrlichkeit.
            </p>
            <p>
              Heute liefern wir, mit über 20 geschulten und motivierten Mitarbeitern, gemäß dem Motto „Alles aus einer Hand“ für jede Kundenanforderung die passende Lösung.
            </p>
            <p>
              Hinreichende Zertifikate (u. a. GMP) sowie ein intakter Fuhrpark mit diversen Hilfsmitteln zur adäquaten Ladungssicherung sind für uns eine Selbstverständlichkeit.
            </p>
            <p>
              Dies macht die Franz Kolb GmbH & Co. KG zu Ihrem Partner in den Bereichen Beschaffung und Absatz von Landes- und Agrarprodukten, Recycling- und Entsorgungsdienstleistungen sowie im individuellen und anspruchsvollen Transportgewerbe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
