import React, { useState } from 'react';

export default function Servicos() {
  const [abaAtiva, setAbaAtiva] = useState(0);

  const servicos = [
    {
      titulo: 'Sistemas Rápidos',
      descricao:
        'Criação de programas simples para automatizar tarefas do dia a dia da empresa.',
      detalhes: ['Controle de processos', 'Cadastros automáticos', 'Facilidade de uso'],
      icone: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tear-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      titulo: 'Sites para Vendas',
      descricao:
        'Páginas diretas para atrair clientes locais e apresentar seus produtos ou serviços.',
      detalhes: ['Apresentação de produtos', 'Localização da empresa', 'Botão direto para WhatsApp'],
      icone: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tear-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      titulo: 'Organização de Dados',
      descricao:
        'Estruturas para organizar informações da empresa e gerar relatórios claros.',
      detalhes: ['Organização de planilhas', 'Dados de vendas', 'Gráficos de fácil leitura'],
      icone: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tear-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      titulo: 'Sistemas para Equipamentos',
      descricao:
        'Desenvolvimento de programas para conectar dispositivos físicos, placas e equipamentos eletrônicos.',
      detalhes: ['Placas eletrônicas', 'Leitura de sensores', 'Automação de equipamentos'],
      icone: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tear-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicos" className="bg-tear-white text-tear-black py-8 px-4 md:py-20 md:px-16 lg:px-24 border-t border-tear-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-tear-black mb-2 md:mb-3">
            Serviços
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-tear-black/70 max-w-2xl leading-relaxed">
            Soluções práticas e diretas para melhorar a rotina, os equipamentos e as vendas do seu negócio.
          </p>
        </div>

        {/* Seleção por Abas no Mobile */}
        <div className="flex md:hidden gap-1.5 mb-4 overflow-x-auto pb-2 scrollbar-none">
          {servicos.map((item, index) => (
            <button
              key={index}
              onClick={() => setAbaAtiva(index)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                abaAtiva === index
                  ? 'bg-tear-teal text-tear-white shadow-sm'
                  : 'bg-tear-black/5 text-tear-black/70 hover:bg-tear-black/10'
              }`}
            >
              {item.titulo}
            </button>
          ))}
        </div>

        {/* Grid no Desktop / Card Ativo no Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {servicos.map((item, index) => (
            <div
              key={index}
              className={`group bg-tear-white border border-tear-black/15 rounded-xl p-4 sm:p-5 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-tear-blue ${
                abaAtiva === index ? 'block' : 'hidden md:flex'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="w-10 h-10 rounded-lg bg-tear-teal/10 flex items-center justify-center transition-colors group-hover:bg-tear-blue/10">
                    {item.icone}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-tear-black/40 group-hover:text-tear-blue transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-bold text-tear-black mb-2 md:mb-3 group-hover:text-tear-blue transition-colors leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-tear-black/80 leading-relaxed mb-4 md:mb-6">
                  {item.descricao}
                </p>
              </div>

              <ul className="space-y-1.5 md:space-y-2 border-t border-tear-black/10 pt-3 md:pt-4">
                {item.detalhes.map((detalhe, idx) => (
                  <li key={idx} className="text-[11px] md:text-xs font-medium text-tear-black/75 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tear-orange inline-block"></span>
                    {detalhe}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
