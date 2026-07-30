import React from 'react';

export default function Sobre() {
  const pilares = [
    {
      titulo: 'Simplicidade',
      descricao: 'Sistemas fáceis de usar, com telas claras e navegação sem enrolação.',
      corBorder: 'border-tear-blue',
      corBgIcon: 'bg-tear-blue/10 text-tear-blue',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      titulo: 'Estratégia',
      descricao: 'Desenvolvimento focado nas metas de vendas e na rotina da sua equipe.',
      corBorder: 'border-tear-orange',
      corBgIcon: 'bg-tear-orange/10 text-tear-orange',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      titulo: 'Resultados',
      descricao: 'Ferramentas estáveis, seguras e prontas para funcionar no dia a dia.',
      corBorder: 'border-tear-teal',
      corBgIcon: 'bg-tear-teal/10 text-tear-teal',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="sobre" className="bg-tear-white text-tear-black py-8 px-4 md:py-20 md:px-16 lg:px-24 border-t border-tear-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-tear-teal/10 border border-tear-teal/20 text-tear-teal px-2.5 py-1 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-3 md:mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-tear-teal"></span>
          Quem Somos
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-tear-black mb-6 md:mb-12 leading-tight max-w-4xl">
          Unimos código e estratégia para fazer a sua empresa crescer.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 text-xs sm:text-sm md:text-base text-tear-black/85 leading-relaxed">
            <p>
              Nascemos resolvendo problemas reais de comércios e empresas da região.
            </p>
            <p>
              Assim como um tear tradicional junta fios para criar uma estrutura forte, nós unimos estratégia e código para entregar ferramentas firmes e prontas para uso.
            </p>
            <div className="bg-tear-teal/10 border-l-4 border-tear-teal p-3.5 md:p-4 rounded-r-xl mt-4">
              <p className="font-semibold text-tear-black text-xs md:text-sm">
                Compromisso: Criamos soluções diretas que geram vendas e organização para o seu negócio, sem enrolação ou jargões.
              </p>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {pilares.map((pilar, index) => (
              <div
                key={index}
                className={`bg-tear-white border border-tear-black/15 border-l-4 ${pilar.corBorder} rounded-xl p-4 md:p-5 flex items-start gap-3.5 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
              >
                <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg ${pilar.corBgIcon} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  {pilar.icone}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-tear-black mb-1">
                    {pilar.titulo}
                  </h3>
                  <p className="text-xs md:text-sm text-tear-black/75 leading-relaxed">
                    {pilar.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
