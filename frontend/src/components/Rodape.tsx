import React from 'react';

export default function Rodape() {
  return (
    <footer className="bg-tear-black text-tear-white py-6 px-4 md:py-12 md:px-16 lg:px-24 border-t border-tear-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-lg md:text-xl font-bold text-tear-white tracking-tight flex items-center justify-center md:justify-start gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-tear-orange inline-block"></span>
            TearWeb
          </a>
          <p className="text-[11px] md:text-xs text-tear-white/70">
            Desenvolvimento de sistemas modulares e engenharia de dados.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm">
          <a href="#sobre" className="text-tear-white/80 hover:text-tear-blue transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-tear-white/80 hover:text-tear-blue transition-colors">
            Serviços
          </a>
          <a href="#portfolio" className="text-tear-white/80 hover:text-tear-blue transition-colors">
            Portfólio
          </a>
          <a href="#equipe" className="text-tear-white/80 hover:text-tear-blue transition-colors">
            Equipe
          </a>
          <a href="#parcerias" className="text-tear-white/80 hover:text-tear-blue transition-colors">
            Parcerias
          </a>
          <a href="#orcamento" className="text-tear-white/80 hover:text-tear-blue transition-colors">
            Contato
          </a>
        </div>

        <div className="text-[10px] md:text-xs text-tear-white/60 text-center md:text-right">
          <p>© {new Date().getFullYear()} TearWeb. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
