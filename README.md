# 🔐 Segurança no Pipeline CI/CD: Do Repositório ao Deploy

Construção de um fluxo de desenvolvimento e deploy seguro, protegendo dados sensíveis da aplicação.

---

## 🚀 Tecnologias Utilizadas

Linguagens, plataformas e ferramentas utilizadas na construção do projeto.

<div align="left">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg">
  <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg">
</div>

---

## 📌 Onde Aplicar

Este projeto pode ser aplicado em diversas situações:

- Desenvolvimento de **APIs** e aplicações **Back-end**
- Configuração de **pipelines CI/CD** com GitHub Actions
- **Hospedagem segura** de aplicações em nuvem
- Trabalho colaborativo e **segurança de repositórios**

---

# 📚 Sumário

- [O que é Segurança no CI/CD?](#seguranca)
- [Introdução ao Lab](#introducao)
- [Step 1 - O Perigo do Hardcode](#step1)
- [Step 2 - O Escudo Local: Variáveis de Ambiente](#step2)
- [Step 3 - O Guardião do Repositório: .gitignore](#step3)
- [Step 4 - O Cofre: GitHub Secrets](#step4)
- [Step 5 - Deploy Seguro no Railway](#step5)
- [Boas Práticas de Código](#boasPraticas)

---

# 🔐 O que é Segurança no CI/CD? <a id="seguranca"></a>

Quando falamos de **Continuous Integration** e **Continuous Deployment (CI/CD)**, não estamos apenas automatizando a subida do código para um servidor.

Estamos criando uma **esteira automatizada de entrega**

Se enviarmos dados sensíveis — como senhas, tokens de API e credenciais de banco de dados — sem proteção, qualquer pessoa com acesso ao repositório ou aos logs da pipeline poderá comprometer a aplicação.

---

## 🎯 Objetivo do Lab

O foco deste workshop é garantir que você saiba como desenvolver, testar e publicar uma aplicação sem **nunca expor credenciais**.

Vamos explorar:

1. **Identificação de riscos** — O que nunca deve ficar no código
2. **Proteção local** — Uso correto de arquivos `.env`
3. **Proteção remota** — Utilizando GitHub Secrets com segurança
4. **Deploy blindado** — Configuração segura no Railway

---

# 🧪 Introdução ao Lab <a id="introducao"></a>

Neste laboratório utilizaremos uma API REST simples de **Achados e Perdidos** em Node.js.

Essa API precisa:

- Se conectar a um banco de dados
- Utilizar uma chave secreta para autenticação

Nossa missão será proteger essas informações desde o desenvolvimento local até o deploy em produção.

---

# ⚠️ Step 1 - O Perigo do Hardcode <a id="step1"></a>

Clone o repositório base fornecido e abra o arquivo `database.js`.

Você verá algo parecido com isso:

```javascript
// src/database.js
const mongoose = require('mongoose');

// ❌ ERRO GRAVE: Credenciais expostas diretamente no código
const dbURI = "mongodb+srv://admin:senhaSuperSecreta123@cluster0.mongodb.net/achados_perdidos";

function connectDB() {
    mongoose.connect(dbURI)
        .then(() => console.log("Conectado ao Banco de Dados!"))
        .catch(err => console.error("Erro ao conectar", err));
}

module.exports = connectDB;
```

## 🚨 Qual é o problema aqui?

Se você fizer um `git push` com esse código:

- A senha ficará pública
- O histórico do GitHub guardará essa credencial para sempre
- Bots automatizados podem encontrar e explorar essa informação rapidamente

Hackers possuem robôs que varrem o GitHub 24 horas por dia procurando exatamente por esse tipo de vazamento.

---

# 🛡️ Step 2 - O Escudo Local: Variáveis de Ambiente <a id="step2"></a>

A solução é remover as credenciais do código-fonte e armazená-las em variáveis de ambiente.

---

## 1️⃣ Criando o arquivo `.env`

Na raiz do projeto, crie um arquivo chamado:

```bash
.env
```

Adicione suas credenciais:

```env
DATABASE_URL=mongodb+srv://admin:senhaSuperSecreta123@cluster0.mongodb.net/achados_perdidos
SECRET_TOKEN=meuTokenSeguroDaAPI
```

---

## 2️⃣ Refatorando o código

Agora altere o arquivo `database.js`:

```javascript
// src/database.js
require('dotenv').config();
const mongoose = require('mongoose');

// ✅ SOLUÇÃO: Variável vinda do ambiente
const dbURI = process.env.DATABASE_URL;

function connectDB() {
    mongoose.connect(dbURI)
        .then(() => console.log("Conectado ao Banco de Dados!"))
        .catch(err => console.error("Erro ao conectar", err));
}

module.exports = connectDB;
```

---

# 🧱 Step 3 - O Guardião do Repositório: `.gitignore` <a id="step3"></a>

Mesmo usando `.env`, ainda existe um problema:

Se você fizer commit do arquivo `.env`, as credenciais irão para o GitHub do mesmo jeito.

Precisamos impedir isso.

---

## 1️⃣ Crie ou edite o `.gitignore`

Na raiz do projeto:

```gitignore
# Dependências
node_modules/

# Variáveis de ambiente
.env
```

---

## 💡 Dica de Ouro

Crie também um arquivo:

```bash
.env.example
```

Exemplo:

```env
DATABASE_URL=
SECRET_TOKEN=
```

Esse arquivo pode subir para o GitHub sem problemas e ajuda outros desenvolvedores a entenderem quais variáveis precisam configurar.

---

# 🔒 Step 4 - O Cofre: GitHub Secrets <a id="step4"></a>

O GitHub Actions não possui acesso ao arquivo `.env`.

Então como a pipeline acessa as credenciais?

Usando os **GitHub Secrets**.

---

## 📍 Configurando

No seu repositório GitHub:

1. Vá em **Settings**
2. Acesse:
   - `Secrets and variables`
   - `Actions`
3. Clique em:
   - `New repository secret`

---

## ➕ Adicione:

| Nome | Valor |
|---|---|
| `DATABASE_URL` | URI do banco de dados |
| `SECRET_TOKEN` | Token secreto da aplicação |

---

## ✅ Resultado

Agora sua pipeline poderá acessar:

```yaml
${{ secrets.DATABASE_URL }}
```

Tudo de forma:

- Criptografada
- Segura
- Sem expor dados nos logs

---

# ☁️ Step 5 - Deploy Seguro no Railway <a id="step5"></a>

Agora precisamos configurar as variáveis no ambiente de produção.

O Railway também não possui acesso ao arquivo `.env`.

---

## 📍 Configuração no Railway

1. Acesse seu painel do Railway
2. Entre no projeto
3. Clique no serviço da API
4. Vá até a aba:
   - `Variables`
5. Clique em:
   - `New Variable`

---

## ➕ Adicione:

| Variável | Valor |
|---|---|
| `DATABASE_URL` | URI do banco |
| `SECRET_TOKEN` | Token da aplicação |

---

## ✅ Resultado

O Railway fará automaticamente um novo deploy da aplicação utilizando as variáveis configuradas de forma segura.

Sua aplicação agora está protegida:

- No desenvolvimento
- No repositório
- Na pipeline
- No deploy em produção

---

# 🧠 Boas Práticas de Código <a id="boasPraticas"></a>

Além da proteção de credenciais, também precisamos proteger a qualidade do código que entra na pipeline.

---

# 🛡️ Branch Protection Rules

Nunca permita commits diretos na branch `main`.

---

## 📍 Configuração

No GitHub:

1. Vá em:
   - `Settings`
   - `Branches`
2. Clique em:
   - `Add branch protection rule`

---

## ⚙️ Configure:

### Branch name pattern

```txt
main
```

### Habilite:

- ✅ `Require a pull request before merging`
- ✅ `Require approvals`

---

## 🎯 Benefícios

Isso garante que:

- Todo código seja revisado
- Vulnerabilidades sejam detectadas antes do merge
- Credenciais vazadas sejam identificadas
- A pipeline execute apenas código aprovado

---

# ✅ Conclusão

Ao longo deste laboratório aprendemos como:

- Evitar vazamento de credenciais
- Utilizar variáveis de ambiente corretamente
- Configurar GitHub Secrets
- Fazer deploy seguro no Railway
- Proteger o fluxo de desenvolvimento com revisão de código

Segurança em CI/CD não é opcional.

Ela faz parte do processo profissional de desenvolvimento moderno.

---