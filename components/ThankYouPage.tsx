
import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ThankYouPageProps {
  userName: string;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ userName }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* HEADER DE SUCESSO */}
      <section className="bg-[#0B1F3A] py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 seigaiha-subtle"></div>
        <div className="container mx-auto px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold text-[#050505] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> ACESSO LIBERADO
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            PRONTO, <span className="text-gold">{userName.split(' ')[0].toUpperCase()}!</span>
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto italic">
            "Sua jornada de superação começa no momento em que você decide que o impossível é apenas uma opinião."
          </p>
        </div>
      </section>

      {/* PLAYER DE VÍDEO CINEMATOGRÁFICO */}
      <section className="flex-grow py-20 -mt-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="glass p-4 md:p-12 rounded-[40px] shadow-2xl space-y-12">
            <div className="space-y-8 text-center">
              <div className="aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5 relative group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Alfredo Tanimoto Conteúdo Exclusivo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="text-center space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-black">CONTINUE A JORNADA</h3>
                <p className="text-slate-400">Acompanhe Alfredo nas redes sociais para conteúdos diários sobre resiliência.</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Instagram, label: "Instagram", link: "#" },
                  { icon: Linkedin, label: "LinkedIn", link: "#" },
                  { icon: Youtube, label: "YouTube", link: "#" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.link}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-[#050505] transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </a>
                ))}
              </div>

              <div className="pt-12 border-t border-white/5">
                <div className="font-signature text-4xl text-gold opacity-50">Alfredo Tanimoto</div>
                <p className="mt-4 text-[10px] text-slate-700 font-bold uppercase tracking-[0.6em]">2% BASTA. NUNCA DESISTA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-center text-slate-800 text-[10px] font-bold uppercase tracking-[0.5em]">
        © {new Date().getFullYear()} Alfredo Tanimoto | Edição Limitada
      </footer>
    </div>
  );
};

export default ThankYouPage;
