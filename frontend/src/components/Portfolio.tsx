import React, { useState } from 'react';

export default function Portfolio() {
  const [abaAtiva, setAbaAtiva] = useState(0);

  const projetos = [
    {
      titulo: 'Estúdio Equilíbrio',
      categoria: 'Site Comercial',
      descricao:
        'Página de apresentação para academia com tabela de horários de aulas, fotos da estrutura e botão direto para agendamento via WhatsApp.',
      tags: ['Academia', 'WhatsApp', 'Horários'],
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h1m-1-4h.01M9 16h.01M15 16h.01M9 12h.01M15 12h.01M9 8h.01M15 8h.01" />
        </svg>
      ),
    },
    {
      titulo: 'TicketSale',
      categoria: 'Sistema de Vendas',
      descricao:
        'Sistema para cadastro de eventos e compra rápida de ingressos para festas e shows locais.',
      tags: ['Ingressos', 'Vendas', 'Eventos'],
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
    },
    {
      titulo: 'Sistema de Doação Pix',
      categoria: 'Página Interativa',
      descricao:
        'Página para arrecadação de doações com chave Pix visível e gerador automático de QR Code para pagamento.',
      tags: ['Pix', 'Doações', 'QR Code'],
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="portfolio" className="bg-tear-white text-tear-black py-8 px-4 md:py-20 md:px-16 lg:px-24 border-t border-tear-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-tear-black mb-2 md:mb-3">
            Portfólio de Projetos
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-tear-black/70 max-w-xl leading-relaxed">
            Exemplos práticos de sistemas e páginas criadas para empresas e serviços.
          </p>
        </div>

        <div className="flex md:hidden gap-1.5 mb-4 overflow-x-auto pb-2 scrollbar-none">
          {projetos.map((projeto, index) => (
            <button
              key={index}
              onClick={() => setAbaAtiva(index)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                abaAtiva === index
                  ? 'bg-tear-blue text-tear-white shadow-sm'
                  : 'bg-tear-black/5 text-tear-black/70 hover:bg-tear-black/10'
              }`}
            >
              {projeto.titulo}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className={`group bg-tear-white border border-tear-black/15 rounded-xl p-4 sm:p-6 md:p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-tear-blue ${
                abaAtiva === index ? 'block' : 'hidden md:flex'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-tear-blue/10 flex items-center justify-center group-hover:bg-tear-teal/10 transition-colors">
                    {projeto.icone}
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-tear-blue bg-tear-blue/10 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-tear-blue/20">
                    {projeto.categoria}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-tear-black mb-2 md:mb-3 group-hover:text-tear-teal transition-colors">
                  {projeto.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-tear-black/80 leading-relaxed mb-4 md:mb-6">
                  {projeto.descricao}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2 pt-3 md:pt-5 border-t border-tear-black/10">
                {projeto.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[10px] md:text-xs bg-tear-black/5 text-tear-black/80 px-2 py-0.5 md:px-2.5 md:py-1 rounded-md border border-tear-black/10 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
