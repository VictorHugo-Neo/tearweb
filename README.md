# TearWeb

<p align="center">
  <b>Plataforma web institucional e portfólio para a TearWeb.</b><br>
  Desenvolvido com Astro, React, TailwindCSS v4, Node.js/Express em TypeScript, PostgreSQL e Docker.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5.x-ff5d01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/React-19.x-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Docker-Compose-2496ed?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

## Sobre o Projeto

O **TearWeb** é a aplicação web oficial da agência/estúdio TearWeb. Apresenta os serviços prestados, portfólio de projetos, planos de contratação, apresentação da equipe e parcerias, além de contar com um formulário interativo de contato e solicitação de orçamento integrado ao envio de e-mails via API.

## Tecnologias Utilizadas

### Frontend
- **[Astro v5](https://astro.build/)**: Framework moderno focado em alta performance para páginas institucionais.
- **[React 19](https://react.dev/)**: Utilizado para componentes interativos no frontend.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilização moderna e utilitária.

### Backend
- **[Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)**: API REST em TypeScript (`tsx` em desenvolvimento).
- **[Resend API](https://resend.com/)**: Integração para envio de e-mails transacionais e solicitações de orçamento.
- **CORS & Dotenv**: Configuração de segurança de origens e variáveis de ambiente.

### Banco de Dados & Infraestrutura
- **[PostgreSQL 16](https://www.postgresql.org/)**: Banco de dados relacional (executado via Docker).
- **[Docker & Docker Compose](https://www.docker.com/)**: Containerização completa de banco de dados, backend (Express) e frontend (Nginx).

## Estrutura do Repositório

```text
tearweb/
├── backend/                  # API Node.js / Express em TypeScript
│   ├── src/
│   │   └── server.ts         # Servidor Express, rotas (/health, /api/contato) e integração Resend
│   ├── Dockerfile            # Container da API backend
│   └── package.json
├── frontend/                 # Aplicação Astro + React
│   ├── src/
│   │   ├── components/       # Componentes React (Cabecalho, Hero, Servicos, Portfolio, Planos, Contato, etc.)
│   │   ├── pages/            # Páginas da aplicação (index.astro)
│   │   └── styles/           # Estilos globais
│   ├── nginx.conf            # Configuração do Nginx para produção
│   ├── Dockerfile            # Container do frontend
│   └── package.json
├── docker-compose.yml        # Orquestração dos containers (DB, API, Web)
├── .env.example              # Modelo de variáveis de ambiente
└── package.json              # Scripts raiz para execução simplificada
```

## Configuração e Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (ou dentro da pasta `backend/` para desenvolvimento local) baseado no `.env.example`:

```env
# Configurações de Envio de E-mail (Resend API)
RESEND_API_KEY=re_123456789_abcdefg
DESTINO_EMAIL=seuemail@dominio.com

# Permissões de CORS
ALLOWED_ORIGINS=*

# Banco de Dados PostgreSQL
POSTGRES_DB=tearweb_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=sua_senha_segura_aqui
```

## Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18+ recomendado)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (opcional, para ambiente containerizado)



### Instalação

1. **Instalar as dependências do Frontend e Backend:**
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   cd ..
   ```

2. **Iniciar o Backend:**
   ```bash
   npm run dev:backend
   ```
   A API ficará disponível em: `http://localhost:3001`

3. **Iniciar o Frontend em outro terminal:**
   ```bash
   npm run dev:frontend
   ```
   O frontend ficará disponível em: `http://localhost:4321`


## Endpoints da API (Backend)

| Método | Rota | Descrição | Corpo da Requisição (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Verificação de integridade da API | N/A |
| `POST` | `/api/contato` | Envio de formulário de contato / orçamento | `{ "nome": "string", "email": "string", "projeto": "string" }` |


## Scripts do Projeto (Raiz)

- `npm run dev:frontend`: Inicia o servidor de desenvolvimento do Astro.
- `npm run dev:backend`: Inicia o backend com live-reload (`tsx watch`).
- `npm run build:frontend`: Gera a build de produção do frontend.
- `npm run build:backend`: Compila o TypeScript do backend para JavaScript.



## Licença

Este projeto é de propriedade privada da **TearWeb**. Todos os direitos reservados.