import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import heuImage from '../assets/agrar-heu.jpg';
import strohImage from '../assets/agrar-stroh.jpg';
import calvesImage from '../assets/agrar-calves.jpg';
import fohlenImage from '../assets/agrar-fohlen.jpg';

const Agrarprodukte = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      
      {/* Red Separator */}
      <div className="relative h-4 bg-primary w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-secondary mb-6">Produkt- und Dienstleitungsportfolio – Das bieten wir Ihnen!</h2>
          
          <h3 className="text-xl font-bold text-secondary mb-4">An- und Verkauf von Agrarprodukten und landwirtschaftlichen Erzeugnissen – die Franz Kolb GmbH & Co. KG hat für jede Anforderung das passende Produkt!</h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            Eine unserer Kernkompetenzen liegt im Handel mit Agrarprodukten und landwirtschaftlichen Erzeugnissen. Die Qualität der Agrarprodukte steht dabei an oberster Stelle. Langjährig vom landwirtschaftlichen Betrieb geprägt, liegt die wichtige Aufgabe der Qualitätskontrolle in Händen des Geschäftsführers.
          </p>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Bei der Auswahl der Waren zur Angebotserstellung können wir auf Grund unserer vielen Lieferanten individuell auf Ihre Wünsche eingehen. Wählen Sie zwischen Schnittzeitpunkten, Ballenmaßen, Strohlängen, Druschverfahren usw.
          </p>

          <div className="mb-8">
            <h4 className="font-bold text-secondary mb-2">Unser derzeitiges Produktportfolio (An- und Verkauf) umfasst u.a. folgende Erzeugnisse:</h4>
            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-600">
              <li>Heu</li>
              <li>Stroh und Häckselstroh</li>
              <li>Silage und Heulage</li>
              <li>Luzerne und Luzernepellets</li>
              <li>Wisanraps</li>
              <li>Leinschrot</li>
              <li>Silomais</li>
              <li>Maispellets</li>
              <li>Grünmehlpellets</li>
              <li>Soja, Sojabohnen</li>
              <li>Sonnenblumenkerne</li>
              <li>Zuckerrüben</li>
              <li>Zuckerrübenpellets</li>
              <li>Zuckerrübenschnitzel</li>
              <li>Streusalz</li>
              <li>Dünger</li>
              <li>Holzhackschnitzel</li>
            </ul>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Gemäß dem Motto "Alles aus einer Hand" bieten wir Ihnen ein Portfolio an Dienstleistungen an, das einen reibungslosen Ablauf gewährleistet. So können Sie beispielsweise mit Hilfe unseres Fuhrparks Ihre Produkte abholen oder liefern, die Maisernte direkt vom Acker in einen Container häckseln oder Heuballen frisch gepresst von der Wiese in Ihre Lagerhallen liefern lassen.
          </p>

          <div className="bg-gray-50 p-6 border-l-4 border-primary mb-12">
            <p className="font-bold text-secondary mb-2">Sie haben kein Produkt in unserem laufenden Sortiment gefunden?</p>
            <p className="font-bold text-secondary mb-2">Sie möchten Ware zum Verkauf anbieten?</p>
            <p className="font-bold text-primary mb-2">Rufen Sie uns unter 07343/6129 an oder nutzen Sie einfach unser Kontaktformular!</p>
            <p className="text-gray-600">Wir, die Franz Kolb GmbH & Co. KG freuen uns auf Ihre Nachricht!</p>
          </div>

          <h2 className="text-2xl font-serif text-secondary mb-8 border-b pb-2">Unsere Leistungen im Detail</h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img src={heuImage} alt="Heu kaufen" className="w-full h-auto shadow-md" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-secondary mb-3">Heu kaufen? Oder Heu zum verkaufen?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Heu ist eines der wichtigsten Grundfuttermittel in der Tierernährung. Pferde benötigen beispielsweise täglich ca. 1,5 bis 2,0 % Ihres Körpergewichtes an Heu. Dies entspricht bei einem 500 kg schweren Pferd ca. 7,5 bis 10,0 kg Heu pro Tag.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sie haben Heu zu verkaufen oder möchten Heu ankaufen? Sie suchen spezielles Pferdeheu, Bioheu, kleine Heuballen, Quaderballen, Rundballen oder ältere Ware? Dann sind wir Ihr Ansprechpartner! Wir liefern Ihnen Heu deutschland- und europaweit. Sie möchten Heu verkaufen? Wir holen Ihre Ware gerne ab.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img src={strohImage} alt="Strohballen" className="w-full h-auto shadow-md" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-secondary mb-3">Stroh und Häckselstroh – für jeden das passende Agrarprodukt</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rapsstroh, Weizenstroh, Gerstenstroh, Triticalenstroh, Dinkelstroh, Haferstroh, Stroh geschnitten, Quader Ballen Stroh, Häckselstroh verpackt, Häckselstroh gepresst oder Häckseltroh gewickelt. Wir freuen uns auf Ihren Anruf!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img src={calvesImage} alt="Kälbchen" className="w-full h-auto shadow-md" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-secondary mb-3">Silage oder Heulage – ideal bei Heustauballergikern</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sie haben ein auf Heustaub allergisches Pferd (COB) und keine Möglichkeit Ihr Heu zu wässern? Gerade im Winter bietet Heulage/Heusilage eine gute Alternative. Dabei ist besonders auf eine gute Qualität zu achten, damit Stoffwechselprobleme vermieden werden.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Silage bildet häufig eine Grundlage der täglichen Fütterung in vielen landwirtschaftlichen Betrieben. Dabei handeln wir überwiegend mit Mais Silage, Heu Silage, Grassilage und Biomasse. Kaufen oder verkaufen Sie Silage direkt mit und bei uns!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img src={fohlenImage} alt="Fohlen" className="w-full h-auto shadow-md" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-secondary mb-3">Luzerne / Alfalfa – die Königin der Futterpflanzen</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Luzerne wird häufig als die Königin der Futterpflanzen bezeichnet. Sie zeichnet sich besonders durch eine hohe Eiweißqualität aus und enthält von Natur aus besonders viel Calcium und B-Carotin. Daher findet Luzerne vor allem in der Zucht Anwendung.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Luzernepellets oder Luzernecobs werden gerne als Ergänzung zu Getreide oder der Rauhfutterration eingesetzt. Sie suchen Luzerne in Ballen oder Bioluzerne? Sie erhalten bei uns von Rumiplus bis Rumiluz alles direkt frei Haus geliefert!
                </p>
                <p className="font-bold text-primary">
                  Rufen Sie uns unter 07343/92981-0 an oder nutzen Sie einfach unser <Link to="/kontakt" className="underline hover:text-red-700">Kontaktformular</Link>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrarprodukte;
