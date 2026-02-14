
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-white pt-16 md:pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-accentGreen tracking-tight">
              Datenschutzerklärung
            </h1>
            <div className="w-20 h-1 bg-accentBrown rounded-full"></div>
          </div>

          <div className="space-y-12 text-textDark/80 leading-relaxed">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentGreen">1. Allgemeine Hinweise</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie darüber, welche personenbezogenen Daten beim Besuch dieser Website erhoben werden und zu welchem Zweck diese verwendet werden.
              </p>
              <p>
                Die Verarbeitung personenbezogener Daten erfolgt in Übereinstimmung mit den geltenden datenschutzrechtlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) sowie den anwendbaren Datenschutzbestimmungen des Fürstentums Liechtenstein.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-accentBrown">Verantwortliche Stelle</p>
                <p className="font-bold">
                  CarlaCares | Einzelunternehmen<br />
                  Altenbach 8, 9490 Vaduz, Liechtenstein<br />
                  E-Mail: carla@carlacares.li<br />
                  Telefon: +41 79 194 07 18<br />
                  Verantwortlich: Carla Vanessa Carcaiso
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentGreen">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Beim Aufrufen dieser Website werden automatisch Informationen durch den Webserver erfasst. Diese Informationen werden temporär in sogenannten Logfiles gespeichert.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm font-medium">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt</li>
                <li>verwendeter Browser und Betriebssystem</li>
              </ul>
              <p className="pt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und stabilem Betrieb der Website).
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentGreen">3. Hosting</h2>
              <p>
                Diese Website wird über <strong>Vercel Inc.</strong> gehostet. Der Domainbetrieb erfolgt über <strong>Hostpoint AG</strong> (Schweiz).
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="bg-secondary/30 p-5 rounded-2xl border border-gray-100 text-xs">
                  <p className="font-bold mb-2">Vercel Inc.</p>
                  440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
                  Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accentBrown underline">Privacy Policy</a>
                </div>
                <div className="bg-secondary/30 p-5 rounded-2xl border border-gray-100 text-xs">
                  <p className="font-bold mb-2">Hostpoint AG</p>
                  Neue Jonastrasse 60, 8640 Rapperswil-Jona, Schweiz<br />
                  Weitere Informationen: <a href="https://www.hostpoint.ch/hostpoint/kontakt-agb.html#datenschutz" target="_blank" rel="noopener noreferrer" className="text-accentBrown underline">Datenschutz</a>
                </div>
              </div>
            </div>

            {/* Section 4 & 5 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentGreen">4. Google Tag Manager & Google Analytics 4</h2>
              <p>
                Diese Website verwendet den <strong>Google Tag Manager</strong> sowie <strong>Google Analytics 4</strong> der Google Ireland Limited.
              </p>
              <p>
                Google Analytics 4 ermöglicht eine Analyse der Nutzung der Website. Die IP-Adresse wird standardmässig anonymisiert. Die Verarbeitung erfolgt zum Zweck der Analyse des Nutzerverhaltens und der Optimierung der Website.
              </p>
              <p className="text-xs font-bold bg-accentGreen/5 p-4 rounded-xl border border-accentGreen/10">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Analyse und Optimierung).
              </p>
            </div>

            {/* Section 6 & 7 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentGreen">6. Kontaktaufnahme</h2>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden die von Ihnen übermittelten personenbezogenen Daten gespeichert, um Ihre Anfrage zu bearbeiten. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentGreen">8. Ihre Rechte</h2>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
              </p>
              <p>
                Zur Ausübung Ihrer Rechte genügt eine E-Mail an: <a href="mailto:carla@carlacares.li" className="text-accentBrown font-bold">carla@carlacares.li</a>
              </p>
            </div>

            {/* Final Section */}
            <div className="pt-10 border-t border-gray-100">
              <p className="text-xs text-textDark/50 italic">
                Stand: {new Date().toLocaleDateString('de-DE')} | Änderungen vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
