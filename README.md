# 👥 User Management Dashboard

Interface web desenvolvida em React para gerenciamento de usuários, consumindo uma API REST construída com Node.js, Express, Prisma e MongoDB.

O projeto foi desenvolvido com foco na criação de uma aplicação full stack, aplicando conceitos de componentização, gerenciamento de rotas, consumo de APIs e organização escalável de código.

---

## 📖 Visão Geral

A aplicação permite realizar operações completas de gerenciamento de usuários através de uma interface moderna e intuitiva.

Principais funcionalidades:

* Cadastro de usuários
* Listagem de usuários
* Atualização de informações
* Remoção de usuários
* Integração com API REST
* Navegação entre páginas
* Componentização reutilizável

---

## 🚀 Funcionalidades

### Cadastro de Usuários

Permite registrar novos usuários informando:

* Nome
* E-mail
* Idade

### Gerenciamento

* Visualização de usuários cadastrados
* Atualização de registros existentes
* Exclusão de usuários

### Integração com API

Toda a comunicação com o backend é realizada através de requisições HTTP utilizando Axios.

---

## 🛠️ Tecnologias

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,vite,javascript" />
</p>

### Frontend

* React
* React Router DOM
* JavaScript
* Vite

### Estilização

* Styled Components

### Comunicação

* Axios

---

## 🏗️ Arquitetura

```text
Pages
   │
   ▼
Components
   │
   ▼
Services
   │
   ▼
API REST
```

A aplicação foi organizada utilizando separação de responsabilidades, facilitando manutenção, reutilização e escalabilidade.

---

## 📂 Estrutura do Projeto

```text
src
│
├── assets
│
├── components
│   ├── Button
│   ├── Title
│   └── TopBackground
│
├── pages
│   ├── Home
│   └── ListUsers
│
├── services
│   └── api.js
│
├── styles
│   └── GlobalStyles.js
│
├── routes.jsx
└── main.jsx
```

---

## 🔄 Fluxo da Aplicação

```text
Usuário
   │
   ▼
Interface React
   │
   ▼
Axios
   │
   ▼
API Node.js
   │
   ▼
MongoDB
```

---

## 🎥 Demonstração

Vídeo do projeto em funcionamento:

LinkedIn:
https://www.linkedin.com/posts/lucasfernandes-fullstack_react-reactjs-node-ugcPost-7373852329009287168-AHSr/

---

## 🎯 Objetivos Técnicos

* Desenvolvimento de aplicações React
* Consumo de APIs REST
* Organização de projetos Frontend
* Componentização
* Gerenciamento de rotas
* Integração Full Stack

---

## 👨‍💻 Autor

Desenvolvido por Lucas Fernandes.
