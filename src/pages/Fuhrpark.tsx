import React from 'react';
import HeroSlider from '../components/HeroSlider';
import mainImage from '../assets/fuhrpark-main.jpg';

const Fuhrpark = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      
      {/* Red Separator */}
      <div className="relative h-4 bg-primary w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-primary"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <img src={mainImage} alt="Fuhrpark Firma Kolb GmbH" className="w-full h-auto shadow-md" />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wir verfügen über einen Fuhrpark mit unterschiedlichen Aufliegern und Aufbauten. Dieser und die Zusammenarbeit mit zertifizierten Partnern ermöglicht es uns gezielt auf Ihre Anforderungen und Räumlichkeiten einzugehen und Ihnen einen reibungslosen Ablauf zu garantieren.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-secondary mb-3">Zugmaschinen</h3>
              <p className="text-gray-600 leading-relaxed">
                Unsere Zugmaschinen entsprechen der Abgasnorm EUR 5 Norm und werden in der hauseigenen Werkstatt oder in entsprechenden Vertragswerkstätten regelmäßig gewartet. Alle Fahrzeuge sind mit Mobilfunk, Navigation, Mauterfassungsgeräten und Telematik ausgestattet und sind gemäß GüKG § 7 Güterschaden-Haftpflicht versichert.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Auch bei der Auswahl unserer Partner und Subunternehmer setzen wir auf Ökologie und Nachhaltigkeit.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-secondary mb-3">Walking-Floor-Auflieger (Schubboden)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Der Boden des Aufliegers besteht aus beweglichen Lamellen, die durch einen hydraulischen Antrieb bewegt werden (Walking-Floor). So kann das jeweilige Ladegut selbständig vor oder zurück bewegt werden. Durch die Schubbodentechnik kann selbst in Lagerhallen mit nur 4,20 m Höhe oder auf weichen Untergründen problemlos entladen werden. Die Be-/Entladung kann sowohl durch das Heck des Aufliegers als auch durch die Kran- bzw. Radladerladung erfolgen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gerade bei Lagerhallen, die nicht über die nötige Kipphöhe verfügen oder bei Produkten mit geringem Schüttgewicht macht sich der Einsatz der Walking-Floor-Technik aufgrund des hohen Transportvolumens von 90 m3 bezahlt.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Walking-Floor-Auflieger sind universell einsetzbar und erfreuen sich sowohl beim Transport von Palettenware, als auch bei losen Waren oder Gütern mit Kran Be- oder Entladung von großer Beliebtheit.
              </p>
              <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-primary">
                <h4 className="font-bold text-secondary mb-2">Walking-Floor-Fahrzeuge im Detail</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nutzlast bis zu 24,0 t</li>
                  <li>Ladevolumen bis 90 cbm</li>
                  <li>Rampenhöhe</li>
                  <li>Innenhöhe ca. 2,65 m</li>
                  <li>Verladehöhe ca. 4,00 m</li>
                  <li>33 Palettenstellplätze</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-secondary mb-3">Muldenfahrzeug/Kipper</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Muldenfahrzeuge kommen vor allem zum Transport von Massengütern zum Einsatz, da sich diese durch eine hohe Transportkapazität auszeichnen. Daher können zusätzliche Fahrten und somit Kosten eingespart werden. Gerade bei Muldenfahrzeugen verläuft das Be- und Entladen rasch und problemlos.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Charakteristische Ladungen für Muldenfahrzeuge sind daher häufig: Getreide, Sand, Ölsaaten, Dünger uvm.
              </p>
              <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-primary">
                <h4 className="font-bold text-secondary mb-2">Muldenfahrzeuge im Detail</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nutzlast bis zu 27 t</li>
                  <li>Ladevolumen zwischen ca. 30 – 50 m3</li>
                  <li>Starke Zugmaschinen mit extrem leichten Aufliegern (ca. 13 t) für höchste Zuladung</li>
                  <li>Schnelles Entladen über die Heckklappe</li>
                  <li>Zielgerichtete Dosierung über Schüttgutschieber</li>
                  <li>Rollplane oder Netz zum Abdecken der Mulde</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-secondary mb-3">Abrollcontainer</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Der Einsatz eines Abrollcontainers ist vielfältig, praktisch und kostensparend. Denn Container sind sicher und langlebig. Sie dienen nicht nur als Transport-, sondern auch als Lagerbehälter. Daher kann der Container auch als Außenlager des Absenders oder in die Produktion des Empfängers einbezogen werden. Die Größe unserer Container ermöglicht auch bei voluminösen Schrotten und Metallen (bspw. Spänen, Stanzabfällen) eine volle gewichtsmäßige Auslastung. Damit nässeempfindliche Güter während des Transportes vor Feuchtigkeit geschützt sind, sind alle unsere Container mit Rollplanen ausgerüstet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unsere Abrollcontainer finden besonders beim Thema Entsorgung und Recycling großen Anklang. Sie werden gerne bei Erd- und Abbrucharbeiten, bei Bauschuttrecycling, bei der Entsorgung von Altreifen, bei der Silage von Mais und Gras sowie bei der Forst- und Altholzzerkleinerung umv. eingesetzt.
              </p>
              <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-primary">
                <h4 className="font-bold text-secondary mb-2">Abrollcontainer im Detail</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nutzlast ca. 20 t</li>
                  <li>Behältertyp und Ladevolumen: 2 x 40 m3</li>
                  <li>Kipphydraulik zum Be- und schnellem Entladen</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-secondary mb-3">Planenfahrzeuge/Tautliner</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Planenfahrzeuge können zum Transport für die unterschiedlichsten Güter verwendet werden. Die Schiebeplane rechts und links sowie das verschiebbare Dach macht das Be- und Entladen flexibel und einfach. Die vorhandene Luftfederung dient sowohl zur Regulierung der Ladehöhe als auch zur Schonung Ihrer Waren.
              </p>
              <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-primary">
                <h4 className="font-bold text-secondary mb-2">Planenfahrzeuge im Detail (13,60 m Planen-Sattel)</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nutzlast bis zu 25 t</li>
                  <li>Ladevolumen ca. 90 m3</li>
                  <li>Rampenhöhe</li>
                  <li>Innenhöhe ca. 2,70 m</li>
                  <li>Verladehöhe ca. 4,00 m</li>
                  <li>34 Palettenstellplätze</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-secondary mb-3">Offene Fahrzeuge und Spezialaufbauten</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                So individuell wie Ihre Ansprüche gestaltet sich der Einsatz unserer Fahrzeuge. Offene Fahrzeuge werden überwiegend für den Agrarbereich zum Transport von Heu, Stroh und anderen Ballen verwendet. Aber auch für Palettenware ist dieser Stil geeignet. Im Baubereich transportieren wir damit überwiegend Schalungen, Betonteile oder Betonträger. Damit nässeempfindliche Güter während des Transportes vor Feuchtigkeit geschützt sind, sind alle Fahrzeuge mit Planen ausgestattet.
              </p>
              <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-primary">
                <h4 className="font-bold text-secondary mb-2">Offene Fahrzeuge im Detail</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nutzlast bis zu 25 t</li>
                  <li>Ladevolumen ca. 90 m3</li>
                  <li>Rampenhöhe</li>
                  <li>Innenhöhe ca. 2,70 m</li>
                  <li>Verladehöhe ca. 4,00 m</li>
                  <li>mind. 34 Palettenstellplätze</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fuhrpark;
