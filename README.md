<div align="center">

# 🔐 Segurança no Pipeline CI/CD: Do Repositório ao Deploy

### Construindo um fluxo moderno de desenvolvimento com **Next.js**, **GitHub Actions**, **Render** e boas práticas de segurança.

<br/>

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

</div>

---

# 🎯 Objetivo do Lab

Neste laboratório prático iremos construir uma aplicação completa utilizando:

- ⚛️ **Next.js**
- 🎨 **Tailwind CSS**
- 🔐 **Variáveis de Ambiente**
- 🤖 **GitHub Actions**
- ☁️ **Deploy no Render**
- 🔄 **CI/CD**
- 🛡️ **Boas práticas de segurança**

O objetivo é ensinar, na prática, como funciona um fluxo moderno de desenvolvimento utilizado em empresas de tecnologia.

Ao final do workshop, teremos:

✅ Um frontend funcional  
✅ Uma API REST integrada  
✅ Deploy automático na nuvem  
✅ Pipeline de testes automatizados  
✅ Proteção de branch no GitHub  
✅ Variáveis de ambiente configuradas corretamente  

---

# 📚 Sumário

- [⚙️ Pré-requisitos](#️-pré-requisitos)
- [🚀 Step 1 - Criando o Projeto Next.js](#-step-1---criando-o-projeto-nextjs)
- [🧹 Step 2 - Limpando e Estruturando o Projeto](#-step-2---limpando-e-estruturando-o-projeto)
- [🛠️ Step 3 - Construindo a API REST](#️-step-3---construindo-a-api-rest)
- [🎨 Step 4 - Criando o Frontend](#-step-4---criando-o-frontend)
- [☁️ Step 5 - Deploy no Render (CD)](#️-step-5---deploy-no-render-cd)
- [🤖 Step 6 - Pipeline CI com GitHub Actions](#-step-6---pipeline-ci-com-github-actions)
- [🔐 Step 7 - Segurança e Variáveis de Ambiente](#-step-7---segurança-e-variáveis-de-ambiente)
- [🛡️ Step 8 - Branch Protection e Pull Requests](#️-step-8---branch-protection-e-pull-requests)
- [🐛 Troubleshooting](#-troubleshooting)
- [📚 Cheat Sheet de Comandos](#-cheat-sheet-de-comandos)
- [🎉 Conclusão](#-conclusão)

---

# ⚙️ Pré-requisitos

Antes de iniciar o laboratório, verifique os itens abaixo:

- [ ] Node.js instalado
- [ ] Git instalado
- [ ] Conta no GitHub
- [ ] Conta no Render
- [ ] VSCode instalado
- [ ] Conhecimentos básicos de React/JavaScript
- [ ] Terminal funcionando corretamente

---

# 🚀 Step 1 - Criando o Projeto Next.js

## 📦 Criando o ambiente

Abra o terminal e execute:

```bash
npm create-next-app@latest achados-e-perdidos
```

Durante a instalação, selecione as seguintes opções:

| Configuração | Valor |
|---|---|
| TypeScript | Yes |
| ESLint | Yes |
| React Compiler | No |
| Tailwind CSS | Yes |
| src/directory | Yes |
| App Router | Yes |
| import alias | No |
| AGENTS.md | No |

---

## 📂 Abrindo o projeto no VSCode

Abra o VSCode e selecione a pasta criada.

---

# 🧹 Step 2 - Limpando e Estruturando o Projeto

## 🎨 Configurando o Tailwind

Abra o arquivo:

```bash
src/app/globals.css
```

Apague todo o conteúdo e deixe apenas:

```css
@import "tailwindcss";
```

---

## 🏠 Criando a página inicial

Abra o arquivo:

```bash
src/app/page.tsx
```

Substitua todo o conteúdo por:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          🔍 Achados e Perdidos
        </h1>

        <p className="text-center text-gray-600">
          Sistema em construção para o workshop...
        </p>
      </div>
    </main>
  );
}
```

---

# 🛠️ Step 3 - Construindo a API REST

No Next.js App Router, criamos APIs através de arquivos `route.ts`.

## 📁 Estrutura da API

Crie a seguinte estrutura:

```bash
src/
└── app/
    └── api/
        └── items/
            └── route.ts
```

---

## 🔌 Criando a rota da API

No arquivo `route.ts`, adicione:

```typescript
import { NextResponse } from "next/server";

// Simulação de banco de dados em memória
const items = [
  { id: 1, name: "Garrafa de Água Azul", location: "Prédio 3", status: "perdido" },
  { id: 2, name: "Chave de Carro", location: "Biblioteca", status: "achado" }
];

// GET: Lista todos os itens
export async function GET() {
  return NextResponse.json(items);
}

// POST: Cadastra um novo item
export async function POST(request: Request) {
  const body = await request.json();

  const newItem = {
    id: items.length + 1,
    name: body.name,
    location: body.location,
    status: body.status || "perdido",
  };

  items.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}
```

---

## ▶️ Executando o projeto

No terminal:

```bash
npm run dev
```

Acesse:

```bash
http://localhost:3000
```

---

# 🎨 Step 4 - Criando o Frontend

Agora vamos conectar o frontend com nossa API.

Abra novamente:

```bash
src/app/page.tsx
```

Substitua tudo por:

```tsx
"use client";

import { useState, useEffect } from "react";

type Item = {
  id: number;
  name: string;
  location: string;
  status: string;
};

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !location) return;

    await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        status: "perdido",
      }),
    });

    setName("");
    setLocation("");

    fetchItems();
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">
          🔍 Achados e Perdidos
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-100"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Item perdido:
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Carteira preta..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Onde foi perdido/achado?
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Biblioteca..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Registrar Item
          </button>
        </form>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">
            Itens Registrados
          </h2>

          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="p-3 border rounded-md flex justify-between items-center bg-gray-50"
              >
                <div>
                  <p className="font-medium text-lg">{item.name}</p>

                  <p className="text-sm text-gray-500">
                    📍 {item.location}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    item.status === "achado"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.status.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
```

---

> 💡 A linha `"use client"` é extremamente importante no Next.js moderno.
>
> Por padrão, o Next.js tenta renderizar tudo no servidor.
>
> Como utilizamos `useState` e `useEffect`, precisamos avisar que esse componente será executado no navegador do usuário.

---

# ☁️ Step 5 - Deploy no Render (CD)

## 🌐 Criando a conta

1. Acesse o site do Render
2. Clique em **Get Started**
3. Faça login com GitHub
4. Autorize os acessos

---

## 🚀 Criando o Web Service

1. Clique em **New Service**
2. Escolha **Web Service**
3. Cole o link do repositório

Configure:

| Configuração | Valor |
|---|---|
| Name | achados-e-perdidos-workshop |
| Branch | main |
| Runtime | Node |
| Build Command | npm run build |
| Start Command | npm run start |

Selecione o plano **Free** e clique em:

```bash
Deploy Web Service
```

---

> 💡 Neste momento você acabou de configurar um fluxo de **Continuous Delivery (CD)**.
>
> Toda vez que houver push na branch principal, o Render poderá fazer o deploy automaticamente.

---

# 🤖 Step 6 - Pipeline CI com GitHub Actions

## 🧪 Criando um teste simples

Abra o arquivo:

```bash
package.json
```

Na seção `scripts`, adicione:

```json
"test": "echo \"Simulando execução de testes... Testes passaram!\" && exit 0"
```

Exemplo:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "echo \"Simulando execução de testes... Testes passaram!\" && exit 0"
}
```

---

## 📁 Estrutura do GitHub Actions

Crie:

```bash
.github/
└── workflows/
    └── ci.yml
```

---

## 🤖 Criando o pipeline

Dentro do `ci.yml`:

```yaml
name: Pipeline CI - Achados e Perdidos

on:
  push:
    branches:
      - main

jobs:
  testes:
    name: Rodar Testes de Código
    runs-on: ubuntu-latest

    steps:
      - name: 📥 Baixar o código
        uses: actions/checkout@v4

      - name: ⚙️ Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: 📦 Instalar dependências
        run: npm install

      - name: 🧪 Rodar testes
        run: npm run test
```

---

## 🚀 Executando o pipeline

```bash
git add .
git commit -m "ci: adiciona pipeline github actions"
git push origin main
```

---

> 💡 O GitHub Actions funciona como um computador na nuvem.
>
> Ele baixa seu código, instala dependências e executa processos automaticamente.

---

# 🔐 Step 7 - Segurança e Variáveis de Ambiente

## 🚨 O erro clássico: senha chumbada

Abra:

```bash
src/app/api/items/route.ts
```

E altere o método POST:

```typescript
export async function POST(request: Request) {
  const API_KEY = "senha_admin_super_secreta_123";

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Chave de API não encontrada" },
      { status: 401 }
    );
  }

  const body = await request.json();

  const newItem = {
    id: items.length + 1,
    name: body.name,
    location: body.location,
    status: body.status || "perdido",
  };

  items.push(newItem);

  console.log("Item cadastrado usando a chave:", API_KEY);

  return NextResponse.json(newItem, { status: 201 });
}
```

---

> 🚨 Isso é um grave problema de segurança.
>
> Se essa senha for enviada para o GitHub, qualquer pessoa poderá vê-la.

---

## ✅ Corrigindo com Variáveis de Ambiente

Crie um arquivo:

```env
.env
```

Adicione:

```env
MINHA_CHAVE_SECRETA=senha_admin_super_secreta_123
```

Agora altere o código:

```typescript
const API_KEY = process.env.MINHA_CHAVE_SECRETA;
```

---

> 💡 O arquivo `.env` fica protegido porque o Next.js já o adiciona automaticamente no `.gitignore`.

---

## 📄 Criando o `.env.example`

Crie:

```env
.env.example
```

Conteúdo:

```env
# Crie um arquivo .env na raiz do projeto

MINHA_CHAVE_SECRETA=sua_senha_aqui
```

---

> 💡 O `.env.example` serve como documentação para outros desenvolvedores.

---

# 🛡️ Step 8 - Branch Protection e Pull Requests

## 🔒 Protegendo a branch main

No GitHub:

```text
Settings → Branches → Add Branch Protection Rule
```

Configure:

- Require a pull request before merging
- Require status checks to pass before merging

---

## 🚫 Impedindo bypass do administrador

Marque também:

```text
Do not allow bypassing the above settings
```

---

> 💡 Agora ninguém consegue fazer push direto na `main`.
>
> Todo código precisa passar por Pull Request + Pipeline CI.

---

## 🌿 Trabalhando com branches

Criando uma branch:

```bash
git checkout -b feature-nova
```

---

## ⚠️ Corrigindo o pipeline para PRs

Atualize o `ci.yml`:

```yaml
on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main
```

---

## 🔄 Merge manual

```bash
git checkout main
git pull origin main
git merge nome-da-sua-branch
git push origin main
```

---

# 🐛 Troubleshooting

## ❌ Erro: `npm not found`

Verifique se o Node.js está instalado:

```bash
node -v
npm -v
```

---

## ❌ Erro 401 na API

Verifique:

- Se o `.env` existe
- Se a variável está correta
- Se o Render possui a variável cadastrada

---

## ❌ GitHub Actions não executa

Verifique:

- Caminho correto: `.github/workflows/ci.yml`
- Indentação do YAML
- Trigger `pull_request`

---

## ❌ Render não sobe aplicação

Confira:

```bash
Build Command: npm run build
Start Command: npm run start
```

---

# 📚 Cheat Sheet de Comandos

## 📦 Next.js

```bash
npm create-next-app@latest
npm run dev
npm run build
npm run start
```

---

## 🌿 Git

```bash
git init
git add .
git commit -m "mensagem"
git push origin main
```

---

## 🌱 Branches

```bash
git checkout -b minha-branch
git checkout main
git merge minha-branch
```

---

## 🤖 GitHub Actions

```bash
.github/workflows/ci.yml
```

---

## ☁️ Deploy

```bash
Render → New Web Service
```

---

# 🎉 Conclusão

Ao longo deste laboratório construímos um fluxo profissional completo de desenvolvimento moderno:

✅ Aplicação Next.js com Tailwind CSS  
✅ API REST com GET e POST  
✅ Frontend integrado ao backend  
✅ Deploy automatizado no Render  
✅ Pipeline CI com GitHub Actions  
✅ Variáveis de ambiente  
✅ Proteção da branch principal  
✅ Fluxo com Pull Requests  

---

> 🚀 Este é o mesmo fluxo utilizado em empresas reais de tecnologia para garantir:
>
> - Qualidade
> - Segurança
> - Escalabilidade
> - Automação
> - Confiabilidade

---

# 📌 Tecnologias Utilizadas

<div style="display: flex; gap: 12px; flex-wrap: wrap;">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg">
</div>

---

# 👨‍💻 Autor: Daniel Santos Garcia

Desenvolvido para o projeto de extensão **WebTech** 🚀
