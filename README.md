# Squad B — Refatoração e Integração com IA

> ⚠️ **Projeto acadêmico de refatoração**

Este repositório **não é um projeto desenvolvido originalmente por mim**. Ele corresponde a um projeto desenvolvido anteriormente por um squad no 1º período (Squad B), utilizado como base para uma atividade acadêmica do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

Como parte da **Avaliação do 1º Ciclo**, o projeto foi escolhido para ser refatorado e aprimorado individualmente, seguindo os requisitos propostos pela faculdade.

Entre as melhorias realizadas estão a correção e organização do código, ajustes de HTML e CSS, criação de um backend com **Node.js e Express** e a integração de um **chat com inteligência artificial utilizando a API do Google Gemini**.

O objetivo deste trabalho é aplicar conhecimentos de refatoração, desenvolvimento web, Organização da estrutura de pastas de um projeto, integração com APIs, inteligência artificial e controle de versão utilizando Git e GitHub.

## 🌐 Projeto online

🔗 [Acessar o projeto](https://squad-b-refactor.onrender.com)

## 📌 Sobre a avaliação

A atividade consiste em:

- Escolher um projeto desenvolvido por algum squad;
- Identificar problemas e melhorias necessárias para o funcionamento da aplicação;
- Refatorar e aprimorar o projeto utilizando ferramentas de IA como apoio;
- Adicionar um chat com inteligência artificial;

## 🔨 Alterações realizadas

Durante a refatoração, foram realizadas melhorias como:

- Organização da estrutura de pastas;
- Correções e melhorias no HTML;
- Correções e padronização do CSS;
- Ajustes de elementos da interface;
- Criação de um servidor utilizando Node.js e Express;
- Criação de uma API para comunicação com o chat;
- Integração com a API do Google Gemini;
- Desenvolvimento da assistente virtual **BIA**;
- Tratamento de erros no chat;
- Adaptação do servidor para ambiente de produção;
- Deploy da aplicação utilizando Render.

Todas as alterações foram registradas e versionadas por meio de commits no Git.

## 🤖 Chat com IA — BIA

A **BIA** é uma assistente virtual adicionada ao projeto durante esta atividade.

Sua implementação utiliza a **API do Google Gemini** para processar as mensagens enviadas pelos visitantes e gerar respostas relacionadas ao contexto do Squad B.

A assistente foi configurada para:

- Responder em português do Brasil;
- Informar sobre os serviços do Squad B;
- Apresentar os projetos da equipe;
- Manter respostas objetivas;
- Recusar educadamente perguntas fora do contexto do projeto;
- Exibir um indicador de digitação enquanto processa a resposta;
- Possuir tratamento de erros;
- Utilizar uma chave de API armazenada em variável de ambiente.

## 🛠️ Tecnologias utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript

### Back-end

- Node.js
- Express
- Dotenv

### Inteligência Artificial

- Google Gemini API
- `@google/genai`

### Ferramentas

- Git
- GitHub
- Visual Studio Code
- HTTPie
- Render
