
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  Quote, 
  Globe, 
  Mic, 
  BookOpen, 
  ShieldCheck,
  Zap,
  Sunrise,
  Flame,
  RefreshCcw,
  Target,
  Award,
  Play,
  Lock,
  ChevronDown
} from 'lucide-react';
import LeadForm from './LeadForm';

interface LandingPageProps {
  onComplete: (name: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onComplete }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('portal-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col bg-[#050505]">
      {/* HEADER PREMIUM */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white group cursor-default">
            ALFREDO <span className="text-[#F5C518] group-hover:glow-text transition-all">TANIMOTO</span>
          </div>
          <button 
            onClick={scrollToForm}
            className="hidden md:flex items-center gap-2 text-[10px] font-black tracking-[0.4em] uppercase text-white/70 hover:text-[#F5C518] transition-all"
          >
            <Lock className="w-3 h-3" /> Acesso Privado
          </button>
        </div>
      </nav>

      {/* HERO MASTERCLASS EXPERIENCE */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Specialized Radial Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-872633efa2d545638be12ea86363c2ca.r2.dev/tanimoto.jpeg" 
            alt="Alfredo Tanimoto" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 hero-overlay"></div>
          {/* Subtle light hit on the face area to ensure visibility */}
          <div className="hidden md:block absolute top-[25%] right-[15%] w-[400px] h-[400px] bg-[#F5C518]/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 pt-20">
          <div className="max-w-4xl space-y-12 animate-reveal">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
              <span className="w-2 h-2 bg-[#F5C518] rounded-full animate-pulse shadow-[0_0_10px_#F5C518]"></span>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/80">Experiência Pós-Evento</span>
            </div>
            
            <h1 className="text-6xl md:text-[7rem] font-black leading-[0.85] text-white tracking-tight">
              A DECISÃO QUE <br/>
              <span className="text-[#F5C518] italic">MUDOU TUDO.</span>
            </h1>
            
            <p className="text-xl md:text-3xl font-light text-white/60 max-w-2xl leading-relaxed">
              Você viveu a palestra. Agora, receba as ferramentas práticas para <span className="text-white font-medium">reconstruir sua realidade</span>, independente das chances.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-6">
              <button 
                onClick={scrollToForm}
                className="group relative flex items-center gap-6 bg-[#F5C518] text-[#050505] px-12 py-6 rounded-2xl font-black text-xl transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(245,197,24,0.4)]"
              >
                ACESSAR CONTEÚDO EXCLUSIVO
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
              
              <div className="space-y-3">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-12 h-12 rounded-full border-4 border-[#050505] grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Impactado" />
                  ))}
                </div>
                <div className="text-xs font-black tracking-widest text-white/40 uppercase">
                   <span className="text-white">35.000+</span> VIDAS TRANSFORMADAS
                </div>
              </div>
            </div>

            {/* Social Proof Logos Bar (Authority) */}
            <div className="pt-16 border-t border-white/5 space-y-6 max-w-2xl">
              <p className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase text-center md:text-left">Empresas & Mídia</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 opacity-40 grayscale hover:grayscale-0 transition-all">
                {['XEROX', 'ACCOR', 'RECORD TV', 'BAND', 'CBN'].map(logo => (
                  <span key={logo} className="text-white font-black tracking-widest text-lg md:text-xl italic">{logo}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Anchor */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer opacity-30 hover:opacity-100 transition-all" onClick={scrollToForm}>
           <span className="text-[10px] font-black tracking-[0.5em] uppercase vertical-lr">Scroll</span>
           <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* SMOOTH TRANSITION SECTION */}
      <div className="relative h-48 bg-gradient-to-b from-[#050505] to-white z-20 flex items-center justify-center overflow-hidden">
         <div className="text-center">
            <p className="text-[10px] font-black tracking-[0.6em] text-black/20 uppercase">Tudo começa com uma decisão</p>
         </div>
      </div>

      {/* IMPACTO EMOCIONAL (THE QUOTE) */}
      <section className="py-40 bg-white text-[#050505] relative overflow-hidden z-20">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Quote className="w-[800px] h-[800px] -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="container mx-auto px-8 text-center max-w-5xl space-y-16">
          <h2 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
            "Para quem tem fé a <br/>
            <span className="text-blue-900/10 italic">vida nunca tem fim."</span>
          </h2>
          <div className="h-1.5 w-32 bg-[#F5C518] mx-auto shadow-[0_0_20px_rgba(245,197,24,0.5)]"></div>
          <p className="text-2xl md:text-4xl text-slate-500 leading-tight font-light max-w-4xl mx-auto">
            Alfredo Tanimoto não é apenas um sobrevivente. Ele é o exemplo de que <span className="font-bold text-[#050505]">a reconstrução é um método</span>, não um milagre.
          </p>
        </div>
      </section>

      {/* JORNADA DA SUPERAÇÃO (LINHA DO TEMPO) */}
      <section className="py-40 bg-[#050505] relative seigaiha-pattern">
        <div className="container mx-auto px-8">
          <div className="text-center mb-28 space-y-4">
            <h2 className="text-4xl md:text-7xl font-black text-white">2% <span className="text-[#F5C518]">BASTA.</span></h2>
            <p className="text-white/30 uppercase tracking-[0.4em] text-xs font-black">A trajetória do impossível ao real</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-white/10 z-0"></div>
            
            {[
              { icon: Sunrise, label: "Executivo", year: "O Início", desc: "Sucesso internacional no Japão." },
              { icon: Flame, label: "Acidente", year: "O Choque", desc: "Tetraplegia. 2% de chances." },
              { icon: RefreshCcw, label: "Milímetros", year: "A Luta", desc: "Reaprendendo a viver cada dia." },
              { icon: Target, label: "Propósito", year: "A Missão", desc: "Transformando dor em livro." },
              { icon: Globe, label: "Global", year: "O Impacto", desc: "Dubai, Paris e o mundo." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-32 h-32 glass rounded-full flex items-center justify-center mb-10 border border-white/5 group-hover:border-[#F5C518]/50 transition-all duration-700 group-hover:scale-110 gold-glow">
                  <step.icon className="w-12 h-12 text-[#F5C518]" />
                </div>
                <div className="text-[10px] font-black text-[#F5C518] mb-3 tracking-[0.3em] uppercase">{step.year}</div>
                <h3 className="text-2xl font-black text-white mb-3">{step.label}</h3>
                <p className="text-sm text-white/40 px-6 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI DESTRAVAR (EXPERIENCE CARDS) */}
      <section className="py-40 bg-slate-50 relative overflow-hidden z-30">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-20 items-start">
            <div className="lg:col-span-1 space-y-10 sticky top-40">
              <h2 className="text-5xl md:text-7xl font-black text-[#050505] leading-[0.85] tracking-tighter">
                O QUE VOCÊ <br/> <span className="text-blue-900">DESTRAVA</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed">
                Este conteúdo é uma masterclass sobre resiliência prática. Sem filtros. Direto ao ponto.
              </p>
              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-100 group cursor-pointer hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-[#F5C518] rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                  <Play className="w-8 h-8 text-[#050505] fill-current" />
                </div>
                <div>
                  <div className="font-black text-[#050505] text-lg tracking-tight">VÍDEO EXCLUSIVO</div>
                  <div className="text-[10px] text-slate-400 tracking-[0.3em] uppercase font-black">Acesso Imediato</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { title: "Gestão do Caos", desc: "O que realmente acontece depois que a vida muda drasticamente" },
                { title: "Força Mental", desc: "Como desenvolver resiliência inabalável em momentos extremos" },
                { title: "Propósito", desc: "O método prático para reconstruir sua missão pessoal" },
                { title: "Método 2%", desc: "O princípio prático aplicado à produtividade e vida real" },
                { title: "Crescimento", desc: "Como transformar cada milímetro de dor em triunfo real" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 gold-glow-hover transition-all duration-500 group">
                  <Zap className="w-10 h-10 text-[#F5C518] mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-4">{item.title}</h4>
                  <p className="font-black text-[#050505] text-2xl leading-tight tracking-tight">{item.desc}</p>
                </div>
              ))}
              <div className="bg-[#0B1F3A] p-12 rounded-[40px] flex flex-col justify-center items-center text-center text-white space-y-4">
                <p className="text-2xl font-black tracking-widest text-[#F5C518]">CONTEÚDO RARO</p>
                <p className="text-sm opacity-50 font-medium uppercase tracking-[0.2em]">Exclusivo para Palestras</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAL DE ACESSO (O PORTAL) */}
      <section id="portal-access" className="py-40 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 seigaiha-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[150px]"></div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <h2 className="text-5xl md:text-[6rem] font-black text-white tracking-tighter leading-none">DESTRAVE O <br/> <span className="text-[#F5C518]">CONTEÚDO.</span></h2>
              <p className="text-white/40 text-xl font-light uppercase tracking-[0.2em]">Somente para quem deseja dar o próximo passo</p>
            </div>
            
            <div className="glass p-10 md:p-24 rounded-[60px] shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 group">
              <div className="mb-12 flex items-center justify-center gap-4">
                 <div className="h-px w-12 bg-white/10"></div>
                 <Lock className="w-6 h-6 text-[#F5C518]" />
                 <div className="h-px w-12 bg-white/10"></div>
              </div>
              
              <LeadForm onComplete={onComplete} />
              
              <div className="mt-12 flex flex-col items-center gap-6">
                 <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
                    <ShieldCheck className="w-4 h-4 text-[#F5C518]" />
                    Portal Seguro | LGPD Compliance
                 </div>
                 <p className="text-white/20 text-xs text-center max-w-md font-medium uppercase tracking-widest italic">
                    "Ao acessar, você concorda com a jornada de superação de Alfredo Tanimoto."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8">
            <div className="text-4xl font-black text-white tracking-tighter">
              ALFREDO <span className="text-[#F5C518]">TANIMOTO</span>
            </div>
            <p className="text-white/40 max-w-sm text-lg font-light leading-relaxed italic">
              "Para quem tem fé, a vida nunca tem fim. Desperte o potencial que já habita em você."
            </p>
            <div className="flex gap-10">
              {['Instagram', 'Linkedin', 'Youtube'].map(social => (
                <button key={social} className="text-white/30 hover:text-[#F5C518] transition-all font-black uppercase tracking-[0.3em] text-[10px]">{social}</button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <p className="text-[10px] font-black tracking-widest uppercase text-white/20 mb-6">Foco</p>
              <ul className="space-y-4 text-white/60 font-bold text-xs uppercase tracking-widest">
                <li>Palestras</li>
                <li>Mentoria</li>
                <li>Workshops</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest uppercase text-white/20 mb-6">Autoridade</p>
              <ul className="space-y-4 text-white/60 font-bold text-xs uppercase tracking-widest">
                <li>Livro 2%</li>
                <li>Masterclass</li>
                <li>Mídia</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8 mt-32 pt-12 border-t border-white/5 text-center text-white/10 text-[9px] uppercase font-black tracking-[0.8em]">
          ALFREDO TANIMOTO © {new Date().getFullYear()} | THE SUPERATION EXPERIENCE
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
