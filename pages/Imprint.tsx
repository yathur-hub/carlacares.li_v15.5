
import React from 'react';

const Imprint: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-white pt-16 md:pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
              Impressum
            </h1>
            <div className="w-20 h-1 bg-accentBrown rounded-full"></div>
            <p className="text-sm text-accentBrown font-black uppercase tracking-widest pt-2">
              Angaben gemäss §5 ECG sowie Offenlegung gemäss Mediengesetz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-accentGreen uppercase tracking-widest text-xs">Kontakt</h2>
              <div className="space-y-4 text-textDark/80 leading-relaxed font-medium">
                <p>
                  CarlaCares<br />
                  Einzelunternehmen<br />
                  Altenbach 8<br />
                  9490 Vaduz<br />
                  Liechtenstein
                </p>
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <p>Telefon: +41 79 194 07 18</p>
                  <p>E-Mail: <a href="mailto:carla@carlacares.li" className="text-accentBrown hover:underline">carla@carlacares.li</a></p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-accentGreen uppercase tracking-widest text-xs">Register & Verantwortung</h2>
              <div className="space-y-4 text-textDark/80 leading-relaxed font-medium">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accentBrown mb-1">Inhaberin</p>
                  <p>Carla Vanessa Carcaiso</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accentBrown mb-1">Verantwortlich für den Inhalt</p>
                  <p>Carla Vanessa Carcaiso</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accentBrown mb-1">UID-Nummer</p>
                  <p>CHE-230.718.296</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/30 p-8 rounded-[32px] border border-gray-100 mt-12">
            <p className="text-sm text-textDark/60 leading-relaxed italic">
              Hinweis: Diese Seite dient der Erfüllung der gesetzlichen Informationspflichten für das Unternehmen CarlaCares im Fürstentum Liechtenstein.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imprint;
