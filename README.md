<div align="center">

# 🔐 Segurança no Pipeline CI/CD
### Do Repositório ao Deploy com Next.js, GitHub Actions e Render

<p align="center">

<img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
<img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />

</p>

<p align="center">
🚀 Workshop WebTech • CI/CD • GitHub Actions • Render • Segurança • DevOps
</p>

<p align="center">
Laboratório prático de CI/CD, Deploy Automatizado e Segurança de Aplicações Web.
</p>

</div>

---

## 🚀 Tecnologias Utilizadas

<div align="center">

<img width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
<img width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
<img width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
<img width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
<img width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
<img width="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />

</div>

---

## 🌎 Onde este conhecimento é aplicado?

- 🏢 Empresas de software
- ☁️ Plataformas SaaS
- 🚀 Startups
- 🏦 Sistemas corporativos
- 🛒 E-commerces
- 📱 Aplicações Web modernas
- 🤖 Projetos DevOps

---

# 🎯 Objetivo do Lab

Neste laboratório prático iremos construir uma aplicação completa utilizando:

* ⚛️ **Next.js**
* 🎨 **Tailwind CSS**
* 🔐 **Variáveis de Ambiente**
* 🤖 **GitHub Actions**
* ☁️ **Deploy no Render**
* 🔄 **CI/CD**
* 🛡️ **Boas práticas de segurança**

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

* [🎯 Objetivo do Lab](#-objetivo-do-lab)
* [⚙️ Pré-requisitos](#️-pré-requisitos)
* [🚀 Step 1 - Criando o Projeto Next.js](#-step-1---criando-o-projeto-nextjs)
* [🧹 Step 2 - Limpando e Estruturando o Projeto](#-step-2---limpando-e-estruturando-o-projeto)
* [🛠️ Step 3 - Construindo a API REST](#️-step-3---construindo-a-api-rest)
* [🎨 Step 4 - Criando o Frontend](#-step-4---criando-o-frontend)
* [☁️ Step 5 - Deploy no Render (CD)](#️-step-5---deploy-no-render-cd)
* [🤖 Step 6 - Pipeline CI com GitHub Actions](#-step-6---pipeline-ci-com-github-actions)
* [🔐 Step 7 - Segurança e Variáveis de Ambiente](#-corrigindo-com-variáveis-de-ambiente)
* [🛡️ Step 8 - Branch Protection e Pull Requests](#️-step-8---branch-protection-e-pull-requests)
* [🐛 Troubleshooting](#-troubleshooting)
* [📚 Cheat Sheet de Comandos](#-cheat-sheet-de-comandos)
* [🎉 Conclusão](#-conclusão)

---

# ⚙️ Pré-requisitos

Antes de iniciar o laboratório, verifique os itens abaixo:

* [ ] Node.js instalado
* [ ] Git instalado
* [ ] Conta no GitHub
* [ ] VSCode instalado
* [ ] Terminal funcionando corretamente

---

# 🚀 Step 1 - Criando o Projeto Next.js

## 📦 Criando o ambiente

É recomendado que você crie uma pasta específica para organizar os seus projetos, como por exemplo `C:\Projetos`. Abra o terminal da sua preferência, navegue até essa pasta e execute o comando abaixo:

```bash
npm create next-app@latest achados-e-perdidos

```

> 💡 **Atenção no terminal:** Após dar `Enter`, o instalador perguntará se deseja prosseguir com a instalação do pacote. Digite `y` e aperte Enter. Em seguida, na primeira pergunta sobre usar as configurações padrão, selecione **"No"** para podermos customizar.

Durante a instalação, selecione as seguintes opções:

| Configuração | Valor |
| --- | --- |
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

Após selecionar as opções acima e aguardar a instalação ser concluída, você precisa abrir a pasta do projeto recém-criado.

Pelo seu explorador de arquivos, abra a pasta `achados-e-perdidos`, clique com o botão direito em algum lugar vazio e escolha a opção **"Abrir com Code"** (Open with Code). Você também pode abrir pelo terminal navegando com `cd achados-e-perdidos` e executando o comando `code .`.

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
          Sistema em construção...
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

Crie a seguinte estrutura dentro de `src/app/`:

```bash
src/
└── app/
    └── api/
        └── items/
            └── route.ts

```

> 💡 **Por que dessa estrutura para o `route.ts`?**
> O Next.js utiliza roteamento baseado em pastas (App Router). Para criar uma API que responde na URL `/api/items`, nós criamos essas pastas aninhadas. O arquivo lá dentro obrigatoriamente precisa se chamar `route.ts` para que o framework entenda que se trata de uma rota de backend (API) e não de uma tela visual.

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

No terminal integrado do VSCode, inicie o servidor de desenvolvimento:

```bash
npm run dev

```

Acesse no seu navegador:

```bash
http://localhost:3000

```

> 📍 **Onde estamos e o que fizemos até o momento?**
> Nós acabamos de criar a base estrutural do nosso sistema e já temos ele rodando localmente! Nós configuramos o Tailwind, montamos uma tela inicial básica e, nos bastidores, criamos nossa própria API. Essa API (`/api/items`) já conta com um pequeno "banco de dados" provisório e está pronta para receber informações (`POST`) e listar os itens perdidos (`GET`).

---

# 🎨 Step 4 - Criando o Frontend

Agora vamos conectar o frontend visual com a nossa API.

Abra novamente o arquivo:

```bash
src/app/page.tsx

```

Substitua tudo por:

```tsx
"use client";

import { useState, useEffect } from "react";

// Definição da estrutura do dado
type Item = {
  id: number;
  name: string;
  location: string;
  status: string;
};

export default function Home() {
  // Criando os estados para controlar a tela
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  // Chama a API logo quando a página carrega
  useEffect(() => {
    fetchItems();
  }, []);

  // Função para buscar os dados no backend
  const fetchItems = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
  };

  // Função para enviar o formulário e criar um novo item
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

    // Limpando os campos do formulário
    setName("");
    setLocation("");

    // Recarregando a lista atualizada
    fetchItems();
  };

  // Renderização visual com TailwindCSS
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

> 💡 **Entendendo a mágica do código Frontend:**
> * **`"use client"`**: Por padrão o Next.js roda no servidor. Essa linha avisa ao sistema que essa tela interage com o usuário no navegador.
> * **`type Item`**: Cria o contrato de dados. Garante que todo item terá os campos exatos que precisamos.
> * **`useState`**: Variáveis reativas do React. Elas guardam nossa lista de itens e os textos digitados no formulário em tempo real.
> * **`useEffect`**: Essa função dispara as engrenagens assim que a tela abre, chamando a API pela primeira vez.
> * **`fetchItems` & `handleSubmit**`: São as funções que realizam as requisições (comunicação com a API). Uma busca (GET) e a outra envia o que foi digitado (POST), atualizando a lista em seguida.
> * **`return (...)`**: Onde o visual é construído. Usamos as classes do Tailwind para estilizar as tags HTML, e misturamos variáveis dentro de chaves `{}` para renderizar a lista dinamicamente.
> 
> 

---

## 💾 Versionando o Código

Antes de irmos para a nuvem, precisamos salvar nosso trabalho. Vá até o seu **GitHub** e crie um novo repositório vazio (sem README) e copie o link gerado.

No terminal do VSCode, encerre o servidor apertando `Ctrl + C` e execute a sequência abaixo substituindo pelo seu link:

```bash
git remote add origin <link do repo que você criou>
git branch -M main
git add .
git commit -m "feat: cria frontend e integra com a api"
git push -u origin main

```

---

# ☁️ Step 5 - Deploy no Render (CD)

## 🌐 Criando a conta

1. Acesse o site do Render clicando aqui: [https://render.com](https://www.google.com/search?q=https://render.com)
2. Clique em **Start for free**
3. Faça login com GitHub
4. Autorize os acessos

---

## 🚀 Criando o Web Service

No passo anterior já subimos o nosso repositório no GitHub. Agora vamos conectá-lo.

1. Clique em **New**
2. Escolha **Web Service**
3. Clique em "Public Git Repository" e cole a URL do seu repositório lá.

Configure:

| Configuração | Valor |
| --- | --- |
| Name |  |
| Branch | main |
| Language | Node |
| Build Command | `npm install && npm run build` |
| Start Command | `npm run start` |

Selecione o plano **Free** e clique em:

```bash
Deploy Web Service

```

---

> 💡 Neste momento você acabou de configurar um fluxo de **Continuous Delivery (CD)**.
> Toda vez que houver push na branch principal, o Render poderá fazer o deploy automaticamente.

---

# 🤖 Step 6 - Pipeline CI com GitHub Actions

## 🧪 Criando um teste simples

Abra o arquivo:

```bash
package.json

```

Na seção `scripts`, adicione a linha referente ao `test`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "echo \"Simulando execução de testes... Testes passaram!\" && exit 0"
}

```

> 💡 **O que é e por que essa linha de teste está aí?**
> A cultura de CI (Integração Contínua) exige que o código seja validado antes de ir para a nuvem. Como não escrevemos testes unitários complexos no momento, criamos esse script "coringa". Ele simula a passagem em um teste enviando a mensagem de sucesso e o código `exit 0` (código de saída sem erros no terminal), ensinando o robô do GitHub que a verificação foi aprovada.

---

## 📁 Estrutura do GitHub Actions

> 💡 **Como o GitHub interpreta automações?**
> O GitHub não "adivinha" nossos fluxos. Para que ele entenda que desejamos rodar scripts e ações nos servidores dele, nós precisamos criar uma estrutura exata de diretórios: uma pasta `.github` na raiz absoluta do projeto, contendo uma subpasta `workflows`. Qualquer arquivo `.yml` que colocarmos ali dentro será lido e interpretado como um "robô" de pipeline.

Certifique-se de estar na **raiz do seu projeto** e crie a seguinte estrutura de pastas e arquivo:

```bash
.github/
└── workflows/
    └── ci.yml

```

---

## 🤖 Criando o pipeline

Dentro do `ci.yml` recém-criado, cole a receita abaixo:

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

> 💡 **Entendendo o Pipeline passo a passo:**
> * **`on:`**: É o nosso gatilho. Ele diz ao GitHub: "Desperte e execute sempre que alguém fizer um push na branch main".
> * **`runs-on:`**: Requisita um computador virtual com Linux (Ubuntu) nos servidores do GitHub para rodar nossa ação.
> * **`steps:`**: É a nossa linha de montagem:
> 1. Ele acessa e clona o repositório.
> 2. Instala o ambiente do Node.js.
> 3. Baixa as bibliotecas de sistema executando `npm install`.
> 4. Roda nossa camada de segurança executando o `npm run test` que acabamos de configurar.
> 
> 
> 
> 

---

## 🚀 Executando o pipeline

No seu terminal, certifique-se de parar qualquer programa rodando (use `Ctrl + C` se necessário) e envie esse pipeline para as nuvens executando:

```bash
git add .
git commit -m "ci: adiciona pipeline github actions"
git push origin main

```

**🔌 Conectando o Webhook (Importante):**
Como estamos utilizando um link público do repositório no Render (em vez da integração oficial com o app do GitHub), o Render fica "surdo" para essas atualizações e não sabe quando fazer o deploy. Para resolver isso, criamos uma ponte direta de comunicação chamada Webhook:

1. Acesse o **Render**, vá na seção **Settings** do seu projeto.
2. Role a página até encontrar **Deploy Hook** e copie o endereço (URL) gerado.
3. Agora vá na página do repositório no **GitHub**, acesse a aba **Settings**.
4. No menu lateral, clique em **Webhooks** e em seguida **Add webhook**.
5. No campo **Payload URL**, cole o endereço que copiou do Render.
6. Altere o **Content type** para `application/json` e clique em **Add webhook**.

Agora, toda vez que o pipeline rodar e o código atualizar, o GitHub "ligará" para o Render avisando para iniciar o deploy!

---

> 💡 O GitHub Actions funciona como um computador na nuvem.
> Ele baixa seu código, instala dependências e executa processos automaticamente.

---

## 🚨 Simulando um Vazamento de Credenciais (Erro Real de Segurança)

Agora vamos reproduzir um erro MUITO comum no mercado: deixar uma senha diretamente no código.

Abra novamente o arquivo:

```bash
src/app/api/items/route.ts

```

Altere a função `POST` para:

```typescript
// POST: Rota para cadastrar um novo item
export async function POST(request: Request) {
  const API_KEY = "senha_admin_super_secreta_123";

  // Simulando uma verificação de segurança
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

  // Apenas para provar que a chave foi utilizada
  console.log("Item cadastrado usando a chave:", API_KEY);

  return NextResponse.json(newItem, { status: 201 });
}

```

> 💡 **O que essa nova função POST faz?**
> Nós declaramos uma variável de credencial chamada `API_KEY`. Antes de cadastrar a informação no "banco", passamos por uma instrução `if (!API_KEY)` que funciona como uma roleta de catraca: caso a chave esteja ausente ou errada, o código bloqueia e envia um erro 401 ("Não autorizado"). Mas, o nosso grande perigo aqui não é o bloqueio, e sim que a senha oficial está "chumbada", ou seja, exposta totalmente na claridade do código.

---

## ☠️ O Problema

Agora faça o versionamento normalmente para salvar esse passo:

```bash
git add .
git commit -m "feat: adiciona verificacao de api key"
git push origin main

```

---

> 🚨 Acabamos de cometer um erro gravíssimo de segurança.
> A chave `senha_admin_super_secreta_123` agora está pública no GitHub.
> Existem robôs na internet escaneando repositórios 24h por dia procurando:
> * Tokens
> * Senhas
> * Chaves de API
> * Credenciais AWS
> * Cartões
> * Secrets
> 
> 
> Em ambientes reais isso pode gerar:
> * Invasões
> * Vazamento de dados
> * Custos financeiros
> * Comprometimento de servidores
> 
> 

---

# 🔐 Corrigindo com Variáveis de Ambiente

## 📄 Criando o arquivo `.env`

Na raiz do projeto, crie o arquivo que vai guardar as chaves a sete chaves:

```env
.env

```

Adicione:

```env
MINHA_CHAVE_SECRETA=senha_admin_super_secreta_123

```

---

## 🛠️ Alterando o código

Volte ao arquivo da API:

```bash
src/app/api/items/route.ts

```

Troque o trecho:

```typescript
const API_KEY = "senha_admin_super_secreta_123";

```

Por:

```typescript
const API_KEY = process.env.MINHA_CHAVE_SECRETA;

```

---

> 💡 O `.env` nunca deve ser enviado ao GitHub.
> O Next.js já adiciona esse arquivo automaticamente no `.gitignore`.

---

## 🚀 Enviando a correção

```bash
git add .
git commit -m "fix: remove senha chumbada e utiliza variáveis de ambiente"
git push origin main

```

---

# ☁️ Corrigindo o Ambiente na Nuvem (Render)

Depois dessa alteração, a aplicação provavelmente irá quebrar no Render.

Por quê?

Porque agora a chave existe apenas no seu computador local através do `.env`.

O servidor do Render NÃO possui essa variável ainda.

---

## 🔧 Configurando variáveis de ambiente no Render

No painel do Render, navegue no menu lateral:

```text
Environment → Environment Variables

```

Clique no botão:

```text
Add Environment Variable

```

Adicione exatamente:

| Campo | Valor |
| --- | --- |
| Key | MINHA_CHAVE_SECRETA |
| Value | senha_admin_super_secreta_123 |

Depois clique em:

```text
Save Changes

```

---

> 💡 Agora o Render consegue acessar a variável usando:
> ```typescript
> process.env.MINHA_CHAVE_SECRETA
> 
> ```
> 
> 
> exatamente como fazemos localmente, mantendo a credencial segura da internet.

---

# 📄 Criando o `.env.example`

Como o `.env` fica oculto do GitHub, outros desenvolvedores que clonarem nosso projeto não saberão quais variáveis precisam criar.

Por isso criamos um modelo de referência.

Na raiz do projeto, crie:

```env
.env.example
```

Conteúdo:

```env
# Crie um arquivo .env na raiz do projeto e insira a credencial abaixo

MINHA_CHAVE_SECRETA=sua_senha_aqui
```

## 👁️ Garantindo o envio do arquivo de exemplo

Por padrão, o Next.js ignora qualquer arquivo que comece com `.env`. Para garantir que o nosso modelo vá para o GitHub e ajude outros desenvolvedores, precisamos abrir uma exceção.

Abra o arquivo `.gitignore` na raiz do projeto, desça até o final e adicione a seguinte linha com o ponto de exclamação:

```text
# Garante que o arquivo de exemplo suba para o repositório
!.env.example
```

> 💡 **O truque da exclamação:** O sinal `!` no `.gitignore` funciona como uma negação. Ele avisa ao Git: *"Eu sei que você ignora arquivos de ambiente, mas NÃO ignore este específico"*. Se ele já estava cinza (ignorado) no VS Code, você verá que ele voltará a ficar verde/branco!

---

## 🚀 Versionando o exemplo

Assim a cronologia fica perfeita: o aluno cria o `.env.example`, arruma o `.gitignore` para o Git enxergá-lo, e só então faz o commit e o push!

```bash
git add .
git commit -m "docs: adiciona .env.example para documentar variaveis"
git push origin main
```

---

> ✅ **Fluxo correto de segurança**
>
> - `.env` → privado/local
> - `.env.example` → público/documentação
> - GitHub → nunca recebe secrets reais
> - Render → armazena secrets do ambiente de produção

---

# 🛡️ Step 8 - Branch Protection e Pull Requests

## ⚠️ Corrigindo o pipeline para PRs

Antes de blindarmos o repositório no GitHub, precisamos garantir que o nosso robô do Actions seja capaz de escutar novos fluxos de trabalho envolvendo Pull Requests.

Atualize o `ci.yml` na sua máquina local:

```yaml
on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main

```

Suba a atualização para a principal:

```bash
git add .github/workflows/ci.yml
git commit -m "fix: atualiza gatilhos do ci"
git push origin main

```

---

## 🔒 Protegendo a branch main

Agora que o CI está pronto, vamos blindar a porta principal. No site do GitHub acesse:

```text
Settings → Branches → Add Classic Branch Protection Rule

```

Na seção de configurações preencha o seguinte:

* **Branch name pattern:** Coloque `main`. Isso informa ao GitHub especificamente sobre *qual* branch essa regra de bloqueio atuará.
* Marque **Require a pull request before merging**
* Marque **Require status checks to pass before merging**

---

## 🚫 Impedindo bypass do administrador

Para garantir que as regras da empresa sejam respeitadas por todos (inclusive os donos), marque também:

```text
Do not allow bypassing the above settings

```

ou *"Include administrators"* caso a interface esteja diferente.

Salve a alteração no final da página.

---

> 💡 Agora ninguém consegue fazer push direto na `main`.
> Todo código precisa passar por Pull Request + Pipeline CI.

---

## 🌿 Trabalhando com branches

Como não podemos mais fazer envios diretos, criamos ramificações (cópias do projeto) para adicionar novas funcionalidades:

Criando uma nova branch:

```bash
git checkout -b feature-nova

```

A partir daqui, você realiza suas edições, faz os commits e empurra para a branch na nuvem (`git push origin feature-nova`), abrindo o Pull Request no site do GitHub para integrar com a `main` assim que os testes passarem.

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

* Se o `.env` existe
* Se a variável está correta
* Se o Render possui a variável cadastrada

---

## ❌ GitHub Actions não executa

Verifique:

* Caminho correto: `.github/workflows/ci.yml`
* Indentação do YAML
* Trigger `pull_request` adicionado aos gatilhos

---

## ❌ Render não sobe aplicação

Confira as chaves de build no ambiente:

```bash
Build Command: npm install && npm run build
Start Command: npm run start

```

---

### 🚨 B.O. Comum: Erro "failed to push" ao tentar subir o código

**O Problema:** Se na hora de criar o repositório no GitHub você marcou sem querer a caixinha *"Add a README file"* ou *"Add .gitignore"*, o GitHub gerou arquivos na nuvem que não existem no seu PC. Para evitar que você apague esses arquivos acidentalmente, o Git bloqueia o seu `push` com o erro `fetch first` ou `non-fast-forward`.

**A Solução (O Desbloqueio):**
Você precisa puxar os arquivos da nuvem primeiro, juntar com os seus e depois enviar tudo de volta.

**1. Puxe as alterações da nuvem "costurando" os históricos (Rebase):**

```bash
git pull origin main --rebase

```

> ⚠️ **Atenção aos Conflitos:** O Git pode pausar e avisar que houve conflito (ex: no arquivo README.md). Se isso acontecer, abra o arquivo no VS Code, escolha qual versão você quer manter (clique em *Accept Current Change* ou *Accept Incoming Change*) e salve.

**2. Avise o Git que o conflito foi resolvido:**

```bash
git add .

```

**3. Tire o Git do modo de "pausa" e continue o processo:**

```bash
git rebase --continue

```

> 💡 **Dica de Ouro:** Se o terminal abrir uma tela preta estranha cheia de `~` (o editor Vim), não entre em pânico! Para sair e salvar, digite apenas `:wq` e aperte Enter.

**4. O caminho está livre! Empurre seu código para o GitHub:**

```bash
git push -u origin main

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
> * Qualidade
> * Segurança
> * Escalabilidade
> * Automação
> * Confiabilidade
> 
> 

---

## 👨‍💻 Autor

<div align="center">

### Daniel Santos Garcia

Desenvolvido para o projeto de extensão **WebTech** 🚀

<a href="https://github.com/danielsg0">
  <img src="https://img.shields.io/badge/GitHub-Perfil-black?style=for-the-badge&logo=github">
</a>

<a href="https://www.linkedin.com/in/danielsg0">
  <img src="https://img.shields.io/badge/LinkedIn-Perfil-blue?style=for-the-badge&logo=linkedin">
</a>

</div>
