import {
  ArrowRight,
  Bike,
  Calendar,
  ChevronDown,
  ExternalLink,
  Facebook,
  Heart,
  Info,
  Instagram,
  Mail,
  MapPin,
  Navigation,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Assistant from "./components/Assistant";
import ContactPage from "./components/ContactPage";
import { SCHEDULE } from "./constants";
import { images } from "./images";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<"home" | "contacts">("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (view: "home" | "contacts", hash?: string) => {
    setCurrentView(view);
    if (view === "contacts") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (hash) {
      setTimeout(
        () => {
          const element = document.getElementById(hash.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        },
        currentView === "contacts" ? 150 : 0,
      );
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      >
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-up">
            <Calendar className="text-red-500" size={16} />
            <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
              5 Dicembre 2026 • Mirano (VE)
            </span>
          </div>

          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl text-white font-black mb-8 leading-[0.9] tracking-tighter animate-fade-up [animation-delay:200ms]">
            UN CUORE <br />
            <span className="text-red-600 uppercase">IN MOTO</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance animate-fade-up [animation-delay:400ms]">
            Il moto-raduno solidale che accende il Natale veneziano. Un evento
            libero e gratuito per sostenere i bambini di Casa Nazareth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:600ms]">
            <button
              onClick={() => navigateTo("home", "#programma")}
              className="w-full sm:w-auto bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3"
            >
              Scopri il Percorso
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigateTo("home", "#gallery")}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest flex items-center justify-center"
            >
              Vedi Gallery
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Stats Bento Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
            <div>
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <Bike size={24} />
              </div>
              <h2 className="font-display text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                Accesso Libero, Passione Vera
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                Partecipare è semplice: basta indossare un vestito da Babbo
                Natale e accendere il motore. Non servono iscrizioni, solo
                voglia di fare del bene.
              </p>
            </div>
            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-4xl font-black text-slate-900">23+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Anni di Storia
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900">2.500+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Moto ogni anno
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="font-display text-3xl font-bold leading-tight">
                  Il Cuore pulsante: Mirano
                </h3>
                <p className="text-white/60 mt-2">
                  Ci ritroviamo tutti in Piazza Martiri della Libertà per
                  l'inizio della sfilata.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-xs">
                Sempre Gratuito{" "}
                <div className="w-1 h-1 bg-red-500 rounded-full"></div> Aperto a
                tutti
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="programma" className="py-24 px-4 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">
                Timeline Evento
              </span>
              <h2 className="font-display text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase">
                Il Programma della Giornata
              </h2>
            </div>
            <p className="text-slate-500 md:max-w-xs text-sm leading-relaxed">
              Unisciti a noi in qualsiasi momento della giornata. Ecco gli orari
              principali della manifestazione.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCHEDULE.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-red-200 transition-all group shadow-sm hover:shadow-md"
              >
                <span className="text-4xl font-black text-slate-100 group-hover:text-red-50 transition-colors">
                  {item.time}
                </span>
                <h3 className="font-bold text-xl text-slate-900 mt-4 mb-2 uppercase tracking-tight">
                  {item.activity}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">
              Momenti Indimenticabili
            </span>
            <h2 className="font-display text-4xl font-black text-slate-900 mt-2 uppercase tracking-tight">
              Gallery 2024
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px] md:max-h-[700px]">
            {/* Immagine 1: La folla oceanica (Main Focus) */}
            <div className="md:col-span-7 relative rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer h-[400px] md:h-full">
              <img
                src={images.img02}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Folla di Babbi Natale a Mirano"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 group-hover:opacity-90 transition-opacity flex items-end p-8">
                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <Navigation size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Piazza Martiri, Mirano
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                    Migliaia di cuori in sella
                  </h3>
                  <p className="text-white/70 text-sm font-medium">
                    L'incredibile serpentone rosso che invade le piazze del
                    Veneto.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-6 h-full md:max-h-[700px]">
              {/* Immagine 2: Il Babbo Natale (Ritratto) */}
              <div className="flex-1 relative rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer">
                <img
                  src={images.img01}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="Motociclista Babbo Natale col pollice in su"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-black uppercase">
                      L'energia dei Babbi
                    </h3>
                    <p className="text-white/80 text-xs font-bold">
                      In moto verso un unico obiettivo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Immagine 3: Mascotte e Bambina (Social/Emotion) */}
              <div className="flex-1 relative rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer">
                <img
                  src={images.img03}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="Mascotte Leone abbraccia bambina"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Heart size={14} className="fill-red-500 text-red-500" />
                      <span className="text-[10px] font-black uppercase">
                        Solidarietà
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase">
                      Un abbraccio vero
                    </h3>
                    <p className="text-white/80 text-xs font-bold">
                      Portiamo gioia e sorrisi a chi ne ha più bisogno.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solidarity Section */}
      <section id="solidarieta" className="py-24 px-4 scroll-mt-24">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          <div className="relative z-10 max-w-3xl">
            <Bike
              className="text-red-600 mx-auto mb-8 animate-pulse"
              size={48}
            />
            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
              Il nostro traguardo: Casa Nazareth
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Tutto quello che facciamo è per portare un sorriso ai bambini
              seguiti dall'Associazione Volontari del Fanciullo di Suor Licia.
              La tua presenza in moto è il regalo più bello.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://volontaridelfanciullo.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95 uppercase tracking-widest flex items-center gap-2"
              >
                Conosci l'Associazione
                <ExternalLink size={20} />
              </a>
              <button
                onClick={() => navigateTo("contacts")}
                className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95 uppercase tracking-widest flex items-center gap-2"
              >
                Chiedi Info
                <Info size={20} />
              </button>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen selection:bg-red-100 selection:text-red-600">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || currentView !== "home" ? "py-3" : "py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`glass mx-auto px-6 h-14 sm:h-16 rounded-2xl flex justify-between items-center transition-all duration-500 ${scrolled || currentView !== "home" ? "shadow-lg border border-white/20" : "bg-transparent border-transparent"}`}
          >
            <button
              onClick={() => navigateTo("home")}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                <Bike className="text-white" size={20} />
              </div>
              <span
                className={`font-display text-xl font-black tracking-tighter transition-colors ${scrolled || currentView !== "home" ? "text-slate-900" : "text-white"}`}
              >
                MOTOBABBO
              </span>
            </button>

            <div className="hidden lg:flex items-center space-x-10">
              <button
                onClick={() => navigateTo("home")}
                className={`text-sm font-semibold transition-all hover:text-red-600 ${currentView === "home" && !window.location.hash ? "text-red-600" : scrolled || currentView !== "home" ? "text-slate-600" : "text-white/80 hover:text-white"}`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("home", "#programma")}
                className={`text-sm font-semibold transition-all hover:text-red-600 ${scrolled || currentView !== "home" ? "text-slate-600" : "text-white/80 hover:text-white"}`}
              >
                Programma
              </button>
              <button
                onClick={() => navigateTo("home", "#solidarieta")}
                className={`text-sm font-semibold transition-all hover:text-red-600 ${scrolled || currentView !== "home" ? "text-slate-600" : "text-white/80 hover:text-white"}`}
              >
                Solidarietà
              </button>
              <button
                onClick={() => navigateTo("home", "#gallery")}
                className={`text-sm font-semibold transition-all hover:text-red-600 ${scrolled || currentView !== "home" ? "text-slate-600" : "text-white/80 hover:text-white"}`}
              >
                Gallery
              </button>
              <button
                onClick={() => navigateTo("contacts")}
                className={`text-sm font-semibold transition-all hover:text-red-600 ${currentView === "contacts" ? "text-red-600" : scrolled || currentView !== "home" ? "text-slate-600" : "text-white/80 hover:text-white"}`}
              >
                Contatti
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateTo("home", "#programma")}
                className={`hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${scrolled || currentView !== "home" ? "text-slate-900 hover:text-red-600" : "text-white hover:text-white/80"}`}
              >
                <Navigation size={14} className="text-red-600" />
                Percorso
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content View Switcher */}
      <main className="transition-all duration-500">
        {currentView === "home" ? renderHome() : <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-white py-24 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Bike className="text-white" size={20} />
                </div>
                <span className="font-display text-2xl font-black tracking-tighter text-slate-900 uppercase">
                  MOTOBABBO
                </span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
                Dal 2003, l'evento motociclistico solidale più amato del
                Miranese. Un serpentone rosso di gioia e speranza. Evento a
                partecipazione libera e gratuita.
              </p>
              <div className="flex gap-4 mt-8">
                {[Facebook, Instagram, Youtube, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-red-600 hover:border-red-100 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
                Esplora
              </h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => navigateTo("home")}
                    className="text-slate-500 hover:text-red-600 transition-colors text-sm font-medium"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("home", "#programma")}
                    className="text-slate-500 hover:text-red-600 transition-colors text-sm font-medium"
                  >
                    Programma
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("contacts")}
                    className="text-slate-500 hover:text-red-600 transition-colors text-sm font-medium"
                  >
                    Contatti
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
                Sede Evento
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Piazza Martiri della Libertà
                <br />
                30035 Mirano (VE)
                <br />
                Italia
              </p>
              <a
                href="mailto:info@motobabbo.it"
                className="text-red-600 font-bold text-sm hover:underline"
              >
                info@motobabbo.it
              </a>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <p>© 2026 MOTOBABBO - TUTTI I DIRITTI RISERVATI.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Cookies
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Credits
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant converted to direct Link */}
      <Assistant onNavigate={() => navigateTo("contacts")} />
    </div>
  );
};

export default App;
