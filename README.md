📌 Cadastro de Usuários – React + Node.js

Aplicação completa de cadastro de usuários, com front-end em React e back-end em Node.js/Express, integrados a um banco de dados MongoDB via Prisma.
O projeto permite cadastrar, listar, atualizar e excluir usuários de forma simples.

---

🚀 Tecnologias utilizadas

Front-end:

- React

- Styled-components

- Axios

Back-end:

- Node.js

- Express

- Prisma

- MongoDB

- CORS

---

📂 Estrutura do projeto

O sistema é dividido em dois repositórios:

Front-end (React) → este repositório: cadastro-usuarios-react

Back-end (API) → API Cadastro de Usuários

---

⚙️ Instalação e execução
🔹 1. Clonar os repositórios
# Clonar o front-end (React)
git clone https://github.com/seu-usuario/cadastro-usuarios-react.git
cd cadastro-usuarios-react

# Clonar o back-end (API)
git clone https://github.com/llcfernandes/api-cadastro-de-usuarios-node.git
cd api-cadastro-de-usuarios-node

---

🔹 2. Rodar a API (Back-end)

Acesse a pasta da API:

cd api-cadastro-de-usuarios-node


Instale as dependências:

yarn install


(Foi configurado yarn neste projeto, mas pode aparecer também npm em alguns lugares porque foi usado durante os estudos. Priorize o uso do yarn).

Configure o arquivo .env na raiz do projeto:

DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>/?retryWrites=true&w=majority&appName=Users"


Gere o Prisma Client:

npx prisma generate


Inicie a API:

yarn dev


🔗 A API ficará disponível em:
http://localhost:3000

---

🔹 3. Rodar o Front-end (React)

Acesse a pasta do front:

cd cadastro-usuarios


Instale as dependências:

yarn install


Inicie a aplicação:

yarn start


🔗 O front ficará disponível em:
http://localhost:5173
 (ou a porta configurada pelo Vite/React)

 ---

🔑 Funcionalidades

- Criar novo usuário (nome, email, idade)

- Listar todos os usuários

- Atualizar informações de um usuário

- Excluir usuário

---

📂 Estrutura simplificada do front

cadastro-usuarios-react/

│── src/
│   ├── components/   # Componentes React
│   ├── services/     # Configuração do Axios
│   ├── styles/       # Estilização com styled-components
│   └── App.jsx
│── package.json

---

✍️ Autor: Lucas Fernandes
