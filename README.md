# 🎬 NicFlix – Plataforma de Streaming (Projeto Educacional)

## 📖 Sobre o Projeto

**NicFlix** é um projeto educacional inspirado em plataformas de streaming, desenvolvido com o objetivo de aprender conceitos completos de desenvolvimento web **full stack**.

A aplicação permite que usuários se cadastrem, façam login, visualizem um catálogo de filmes e assistam aos vídeos disponíveis na plataforma.

O projeto foi desenvolvido para praticar conceitos importantes como:

* criação de APIs
* autenticação de usuários
* integração frontend e backend
* manipulação de banco de dados
* armazenamento e reprodução de vídeos
* deploy de aplicações web

Este projeto não tem fins comerciais e é utilizado apenas para fins de **aprendizado e portfólio**.

---

# 🚀 Tecnologias Utilizadas

## Backend

* Node.js
* Express.js
* PostgreSQL
* JSON Web Token (JWT)

## Frontend

* React
* HTML
* CSS
* JavaScript

## Infraestrutura / Deploy

* Vercel (Frontend)
* Render (Backend)
* PostgreSQL na nuvem

---

# 🏗️ Arquitetura do Projeto

A aplicação segue uma arquitetura separada entre **frontend, backend e banco de dados**.

```
Usuário
   ↓
Frontend (React)
   ↓
Backend API (Node.js + Express)
   ↓
Banco de Dados (PostgreSQL)
   ↓
Armazenamento de Vídeos
```

O frontend se comunica com o backend através de **requisições HTTP** para obter dados dos filmes e autenticar usuários.

---

# 🎯 Funcionalidades

## Sistema de Usuários

* Cadastro de usuário
* Login de usuário
* Autenticação utilizando token
* Proteção de rotas privadas

## Catálogo de Filmes

* Listagem de filmes
* Exibição de capas
* Exibição de descrição e categoria
* Navegação entre filmes

## Reprodução de Vídeo

* Player de vídeo integrado
* Controle de play e pause
* Controle de tempo
* Tela cheia

## API Backend

* Listar filmes
* Buscar filme específico
* Criar usuário
* Login de usuário

---

# 🗄️ Estrutura do Banco de Dados

## Tabela de Usuários

Campos principais:

* id
* nome
* email
* senha

## Tabela de Filmes

Campos principais:

* id
* título
* descrição
* categoria
* capa
* url do vídeo

---

# 📂 Estrutura de Pastas

```
nicflix/

frontend/
   src/
   components/
   pages/
   services/

backend/
   routes/
   controllers/
   models/
   config/

database/
   migrations/

videos/
```

---

# ▶️ Como Executar o Projeto

## 1. Clonar o repositório

```
git clone <url-do-repositorio>
```

## 2. Instalar dependências

Backend:

```
npm install
```

Frontend:

```
npm install
```

## 3. Configurar variáveis de ambiente

Criar arquivo `.env` no backend com as configurações de conexão do banco de dados e autenticação.

---

## 4. Iniciar o backend

```
npm run dev
```

---

## 5. Iniciar o frontend

```
npm start
```

---

# ☁️ Deploy

A aplicação pode ser publicada utilizando serviços de hospedagem modernos.

### Frontend

Deploy realizado na plataforma **Vercel**.

### Backend

Deploy realizado na plataforma **Render**.

### Banco de Dados

Banco hospedado em um serviço PostgreSQL na nuvem.

---

# 📚 Objetivos de Aprendizado

Este projeto foi desenvolvido para aprender e praticar:

* Desenvolvimento **Full Stack**
* Construção de **APIs REST**
* Integração entre frontend e backend
* Autenticação de usuários
* Estruturação de projetos web
* Deploy de aplicações

---

# ⚠️ Aviso

Este projeto é apenas para **fins educacionais**.

Caso sejam utilizados filmes ou séries reais, o conteúdo deve ser usado apenas para testes locais, respeitando os **direitos autorais**.

---

# 👨‍💻 Autor

Projeto desenvolvido por **Nicolas Natario** como parte do aprendizado em desenvolvimento web.

---

# 📌 Possíveis Melhorias Futuras

* Sistema de busca de filmes
* Sistema de favoritos
* Categorias de filmes
* Histórico de filmes assistidos
* Recomendações personalizadas
* Upload de vídeos pelo painel administrativo
* Streaming adaptativo (HLS)
