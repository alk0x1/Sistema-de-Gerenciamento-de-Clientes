# Sistema de Gerenciamento de Clientes

### Pré-requisitos
- Node.js v20.x.x
- npm ou yarn
- PostgreSQL 


### Instalando e Executando o Backend
**1. Clonar o repositório:**
```bash 
  git clone git@github.com:alk0x1/Sistema-de-Gerenciamento-de-Clientes.git
  cd Sistema-de-Gerenciamento-de-Clientes
```

**2. Navegar até o diretório do backend:**
```bash 
cd backend
```

**3. Instalar dependências:**
```bash
npm i
```
ou

```bash
yarn 
```

**4. Configurar as variáveis de ambiente:**
Crie um arquivo .env no diretório do backend e preencha as variáveis de ambiente no formato:
```
DATABASE_URL=SUA_URL_DE_CONEXÃO_DO_POSTGRES
NODE_ENV=development      # Flag utilizada para criar a tabela no seu banco do postgres
```

**6. Iniciar o servidor backend:**

```bash
npm run dev
```
ou
```bash
yarn dev
```

### Instalando e Executando o Frontend
**1. Navegar até o diretório do frontend (a partir da raiz do projeto):**
```bash
cd frontend
```
**2. Instalar dependências:**
```bash
npm i
```
ou

```bash
yarn 
```

**3. Iniciar a aplicação frontend:**
```bash
npm run dev
```
ou

```bash
yarn dev
```
