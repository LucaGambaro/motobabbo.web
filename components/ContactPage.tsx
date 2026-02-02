
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">Mettiamoci in contatto</span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mt-4 tracking-tighter uppercase">Contatti</h1>
          <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-lg">
            Hai domande sulla manifestazione o vuoi maggiori informazioni? Ecco come puoi raggiungerci.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up [animation-delay:200ms]">
          {/* Email Card */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-red-200 hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Ufficiale</p>
            <a href="mailto:info@motobabbo.it" className="text-slate-900 font-display text-2xl font-black hover:text-red-600 transition-colors">info@motobabbo.it</a>
            <p className="mt-4 text-slate-500 text-sm">Rispondiamo solitamente entro 24 ore.</p>
          </div>

          {/* Phone Card */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-red-200 hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
              <Phone size={28} />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Telefono & Media</p>
            <p className="text-slate-900 font-display text-2xl font-black">+39 041 1234567</p>
            <p className="mt-4 text-slate-500 text-sm">Attivo Lun-Ven dalle 9:00 alle 18:00.</p>
          </div>

          {/* Location Card */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-red-200 hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
              <MapPin size={28} />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Punto di Ritrovo</p>
            <p className="text-slate-900 font-display text-2xl font-black leading-tight">Piazza Martiri della Libertà,<br/>Mirano (VE)</p>
            <button className="mt-6 flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs hover:underline">
              Vedi su Maps <ExternalLink size={12} />
            </button>
          </div>

          {/* Social Card */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-red-200 hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
              <Instagram size={28} />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Social Community</p>
            <div className="flex gap-4 mt-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 hover:text-red-600 hover:border-red-100 shadow-sm transition-all border border-slate-100">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-slate-500 text-sm">Seguici per news e foto dell'evento.</p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-[3rem] overflow-hidden border border-slate-100 h-96 grayscale hover:grayscale-0 transition-all duration-1000 shadow-lg relative animate-fade-up [animation-delay:400ms]">
           <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Mirano Location"
           />
           <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center p-6 text-center">
             <div className="bg-white/90 backdrop-blur p-8 rounded-[2rem] shadow-2xl max-w-sm">
               <MapPin className="text-red-600 mx-auto mb-4" size={32} />
               <h3 className="font-bold text-xl text-slate-900 mb-2 uppercase tracking-tight">Ci vediamo in Piazza!</h3>
               <p className="text-slate-500 text-sm font-medium">L'appuntamento è per tutti i Babbi Natale in sella a Mirano.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
