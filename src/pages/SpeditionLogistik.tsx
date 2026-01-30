import React from 'react';
import HeroSlider from '../components/HeroSlider';
import spedition1 from '../assets/spedition-1.jpg';
import spedition2 from '../assets/spedition-2.jpg';

const SpeditionLogistik = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      
      {/* Red Separator */}
      <div className="relative h-4 bg-primary w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img src={spedition1} alt="Spedition" className="w-full h-auto shadow-md" />
            <img src={spedition2} alt="Maisernte" className="w-full h-auto shadow-md" />
          </div>

          <h2 className="text-2xl font-bold text-secondary mb-6">Europaweite Transporte für Güter aller Art – Wir sind Ihr Partner für das Individuelle!</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Durch die zentrale und strategisch gut positionierte Lage in Buch/Gannertshofen im Landkreis Neu-Ulm (Bayern) und die enge Zusammenarbeit mit zertifizierten Partnern reagieren wir, die Franz Kolb GmbH & Co. KG bereits seit 1977 flexibel auf Kundenwünsche im süddeutschen Raum, aber auch im gesamten Bundesgebiet sowie in unseren Nachbarländern (Österreich, Schweiz, Niederland, Belgien, Italien und Ungarn).
          </p>

          <div className="mb-8">
            <h4 className="font-bold text-secondary mb-2">Dabei transportieren wir überwiegende folgende Warenarten:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Lose Waren und Schüttgüter mit zielgerichteter Be- und Entladung (z. B. Futtermitteltransporte, Hackschnitzel, Sägemehl, Dünger usw.)</li>
              <li>Ballen-/Papierware</li>
              <li>Big Bags</li>
              <li>Palettenware</li>
              <li>Betonteile/ -Träger und Schalungen</li>
              <li>Heu/Stroh und sonstige landwirtschaftliche Erzeugnisse</li>
              <li>Maschinenteile</li>
            </ul>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Durch die gezielte Auswahl des <strong>Fahrzeugtyps</strong> – entsprechend Ihren Anforderungen – wird eine effiziente und rasche Durchführungsowohl administrativ als auch operativ garantiert. Geschulte und motivierte Mitarbeiter sowie ein intakter Fuhrpark mit diversen Hilfsmitteln zur adäquaten Ladungssicherung sind für uns eine Selbstverständlichkeit.
          </p>

          <h3 className="text-xl font-bold text-secondary mb-4">Recycling und Entsorgung – mit Kolb-Transporte schnell und einfach!</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Wir verfügen über eine Abfalltransportgenehmigung und sorgen für eine korrekte ZKS Abwicklung. Daher sind wir Ihr Partner zur Entsorgung von Abfällen aller Art wie beispielsweise Baumaterialien, Altreifen, Schrott und Metall, landwirtschaftliche Abfallprodukte usw.
          </p>

          <div className="bg-gray-50 p-6 border-l-4 border-primary">
            <p className="font-bold text-xl text-secondary">
              Containergestellung – ein Anruf genügt! Wir, die Franz Kolb GmbH & Co. KG freuen uns auf Ihre Nachricht!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeditionLogistik;
