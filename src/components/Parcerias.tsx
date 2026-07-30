import React from 'react';

export default function Parcerias() {
  const diferenciais = [
    {
      titulo: 'Preço Justo e Acessível',
      descricao:
        'Valores adaptados para o orçamento de pequenos comércios e empresas locais, sem taxas escondidas.',
      icone: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tear-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      titulo: 'Avaliação Individual',
      descricao:
        'Cada projeto é analisado de forma única para definir um orçamento sob medida que atenda à sua necessidade real.',
      icone: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tear-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      titulo: 'Parcerias Locais',
      descricao:
        'Estamos abertos a parcerias estratégicas e projetos experimentais com novos clientes e empresas da região.',
      icone: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tear-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      titulo: 'Fotos do Estabelecimento',
      descricao:
        'Em parcerias locais, incluímos o serviço prático de captura de fotos do seu espaço para usar no site.',
      icone: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tear-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="parcerias" className="bg-tear-white text-tear-black py-8 px-4 md:py-20 md:px-16 lg:px-24 border-t border-tear-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-tear-orange/10 border border-tear-orange/20 text-tear-orange px-2.5 py-1 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-2">
            Investimento Acessível
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-tear-black mb-2 md:mb-3">
            Orçamentos Justos e Parcerias
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-tear-black/70 max-w-2xl leading-relaxed">
            Desenvolvemos soluções que cabem no bolso do seu negócio, sem cobranças abusivas ou complicações.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-10">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="bg-tear-white border border-tear-black/15 rounded-xl p-4 sm:p-5 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-tear-blue"
            >
              <div>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-tear-teal/10 flex items-center justify-center mb-3 md:mb-4">
                  {item.icone}
                </div>
                <h3 className="text-sm md:text-base font-bold text-tear-black mb-1.5 md:mb-2 leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-xs md:text-sm text-tear-black/80 leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-tear-teal/10 border border-tear-teal/20 rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base md:text-xl font-bold text-tear-black mb-1">
              Quer um orçamento transparente que cabe no seu bolso?
            </h3>
            <p className="text-xs md:text-sm text-tear-black/70">
              Fale conosco no WhatsApp para analisar o seu projeto sem compromisso e sem custo.
            </p>
          </div>

          <a
            href="https://wa.me/+5533998453545"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-tear-orange text-tear-white font-medium text-xs md:text-base px-6 py-3 md:px-8 md:py-3.5 rounded-lg md:rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Avaliação Gratuita no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
