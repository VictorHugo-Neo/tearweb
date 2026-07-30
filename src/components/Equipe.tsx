import React from 'react';

export default function Equipe() {
  const membros = [
    {
      cargo: 'Especialista em Inteligência Artificial',
      descricao: 'Desenvolvimento e integração de rotinas automatizadas para análise de dados e atendimento.',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      cargo: 'Programadores',
      descricao: 'Construção de sistemas funcionais, organizados e integrados às necessidades da empresa.',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      cargo: 'Designer',
      descricao: 'Criação de telas claras, organizadas e com navegação simples para o usuário final.',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      cargo: 'Especialista em Tráfego Pago',
      descricao: 'Gestão de anúncios online para atrair clientes interessados diretamente para o seu negócio.',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
    {
      cargo: 'Especialista em Marketing Digital',
      descricao: 'Estratégias para divulgação de produtos e fortalecimento da presença da marca na internet.',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      cargo: 'Especialista em Programação Embarcada',
      descricao: 'Desenvolvimento de programas para dispositivos físicos, placas e equipamentos eletrônicos.',
      icone: (
        <svg className="w-4 h-4 md:w-5 md:h-5 text-tear-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="equipe" className="bg-tear-white text-tear-black py-8 px-4 md:py-20 md:px-16 lg:px-24 border-t border-tear-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-tear-black mb-2 md:mb-3">
            Nossa Equipe
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-tear-black/70 max-w-xl leading-relaxed">
            Profissionais especializados para atender cada etapa do seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {membros.map((membro, index) => (
            <div
              key={index}
              className="bg-tear-white border border-tear-black/15 rounded-xl p-3 sm:p-5 md:p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-tear-blue"
            >
              <div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-tear-teal/10 flex items-center justify-center mb-2 md:mb-4">
                  {membro.icone}
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-tear-black mb-1 md:mb-2 leading-snug">
                  {membro.cargo}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-tear-black/75 leading-relaxed">
                  {membro.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
