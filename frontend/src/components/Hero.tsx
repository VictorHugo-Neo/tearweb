import React from 'react';

export default function Hero() {
  return (
    <section className="relative py-8 px-4 md:min-h-[85vh] md:py-16 md:px-16 lg:px-24 bg-gradient-to-br from-tear-white via-tear-white to-tear-teal/15 text-tear-black flex flex-col justify-center items-start overflow-hidden">
      <div className="absolute top-1/4 right-10 w-48 h-48 md:w-72 md:h-72 bg-tear-teal/10 rounded-full blur-3xl pointer-events-none transition-all duration-700"></div>
      <div className="absolute bottom-10 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-tear-blue/5 rounded-full blur-3xl pointer-events-none transition-all duration-700"></div>

      <div className="relative z-10 max-w-3xl w-full">
        <div className="inline-flex items-center gap-1.5 bg-tear-teal/10 border border-tear-teal/20 text-tear-teal px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-3 md:mb-6">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-tear-teal animate-pulse"></span>
          Sistemas e Dados
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight text-tear-black mb-3 md:mb-6 leading-tight">
          Sistemas modulares para a sua empresa
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-tear-black/80 mb-6 md:mb-10 leading-relaxed max-w-2xl">
          Desenvolvimento de MVPs e automações para validar a sua ideia e evoluir o seu negócio sem complicações.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
          <a
            href="#orcamento"
            className="inline-flex items-center justify-center bg-tear-orange text-tear-white font-medium text-sm md:text-base px-6 py-2.5 md:px-8 md:py-3.5 rounded-lg shadow-md hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Solicitar Orçamento
          </a>

          <a
            href="#servicos"
            className="inline-flex items-center justify-center bg-tear-white text-tear-black border border-tear-black/20 font-medium text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3.5 rounded-lg hover:bg-tear-black/5 hover:border-tear-black/40 transition-all duration-300"
          >
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
