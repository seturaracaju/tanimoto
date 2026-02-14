
import React, { useState } from 'react';
import { supabase } from '../supabase';

interface LeadFormProps {
  onComplete: (name: string) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Enviando para o Supabase
      // Importante: A coluna está como 'whasapp' conforme o print do banco de dados
      const { error } = await supabase
        .from('lead')
        .insert([
          { 
            nome_completo: formData.name, 
            whasapp: formData.whatsapp, 
            email: formData.email 
          }
        ]);

      if (error) {
        console.error('Erro Supabase:', error);
        throw new Error('Falha ao salvar seus dados. Por favor, tente novamente.');
      }

      // Sucesso
      onComplete(formData.name);
    } catch (err: any) {
      setErrorMessage(err.message || 'Ocorreu um erro inesperado.');
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 px-8 py-6 rounded-3xl text-white outline-none focus:border-[#F5C518] transition-all duration-500 glow-border text-lg font-medium placeholder:text-white/10";
  const labelClasses = "block text-[10px] font-black uppercase tracking-[0.4em] text-[#F5C518]/60 mb-4 ml-4 group-focus-within:text-[#F5C518] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="group">
        <label htmlFor="name" className={labelClasses}>Nome Completo</label>
        <input
          required
          type="text"
          id="name"
          placeholder="COMO DEVEMOS TE CHAMAR?"
          className={inputClasses}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="group">
          <label htmlFor="whatsapp" className={labelClasses}>WhatsApp</label>
          <input
            required
            type="tel"
            id="whatsapp"
            placeholder="(00) 00000-0000"
            className={inputClasses}
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          />
        </div>
        <div className="group">
          <label htmlFor="email" className={labelClasses}>E-mail Profissional</label>
          <input
            required
            type="email"
            id="email"
            placeholder="SEU@EMAIL.COM"
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      {errorMessage && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-2xl text-center text-sm font-bold animate-pulse">
          {errorMessage}
        </div>
      )}
      
      <div className="pt-6 space-y-6">
        <div className="flex items-center justify-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
           <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full animate-pulse"></span>
           Conexão direta com Alfredo Tanimoto | Encriptação Ativa
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full relative group overflow-hidden bg-[#F5C518] hover:bg-white text-[#050505] font-black py-8 rounded-3xl text-2xl tracking-[0.2em] shadow-[0_20px_60px_rgba(245,197,24,0.15)] transition-all flex items-center justify-center gap-6 disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center gap-4">
              <svg className="animate-spin h-8 w-8 text-[#050505]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              SALVANDO LEAD NO PORTAL...
            </span>
          ) : (
            <>
              DESTRAVAR MEU ACESSO
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default LeadForm;
