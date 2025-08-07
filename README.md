# 🤖 Agente de IA com Chat Web e Geração de Documentos

_Um projeto de chatbot com interface web que utiliza um agente de IA do n8n para conduzir uma conversa estruturada, extrair dados e, ao final, acionar um fluxo do Power Automate para gerar documentos Word a partir de um template._

---

## 📖 Sobre o Projeto

Este projeto foi criado para demonstrar a integração de ponta a ponta entre uma interface de usuário (front-end), um servidor intermediário (back-end), uma plataforma de automação de fluxo de trabalho (n8n) e uma ferramenta de automação de escritório (Power Automate).

O objetivo principal é substituir o preenchimento manual de formulários e documentos complexos por uma conversa guiada e inteligente com um agente de IA. O usuário conversa com o chatbot, fornece as informações necessárias e, ao final, recebe um documento `.docx` preenchido automaticamente.

## 🏛️ Arquitetura

O sistema é composto por 4 componentes principais que se comunicam em sequência:

`[Interface do Chat (HTML/JS)]` -> `[Servidor Node.js (Backend)]` -> `[n8n (Orquestração e IA)]` -> `[Power Automate (Geração do Documento)]`

1.  **Frontend**: A interface de chat onde o usuário interage. Construída com HTML, CSS e JavaScript puro.
2.  **Backend**: Um servidor em Node.js (Express) que serve como um proxy seguro, gerenciando a comunicação entre o frontend e o n8n.
3.  **n8n**: O cérebro do projeto. Orquestra a lógica da conversa, gerencia a memória (histórico) e realiza a extração de dados estruturados ao final da conversa.
4.  **Power Automate**: O braço executor. Recebe os dados extraídos do n8n via HTTP e os utiliza para preencher um template do Microsoft Word.

## ✨ Principais Funcionalidades

- **Interface de Chat Reativa**: Experiência de usuário similar ao ChatGPT.
- **Memória de Conversa**: O agente se lembra do contexto da conversa utilizando um ID de Sessão.
- **Formatação de Resposta**: Renderiza negrito (`**texto**`) e divide respostas longas em múltiplos balões para melhor legibilidade.
- **Extração de Dados Estruturados**: Uma IA secundária analisa a conversa completa e extrai os dados em um formato JSON limpo.
- **Geração de Documentos Automatizada**: Integração com o Power Automate para preencher templates `.docx`.
- **Backend Seguro**: O servidor intermediário protege as chaves e URLs dos webhooks.

## 🚀 Tecnologias Utilizadas

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [Axios](https://axios-http.com/) (para chamadas HTTP)
  - [CORS](https://expressjs.com/en/resources/middleware/cors.html)
  - [Dotenv](https://www.npmjs.com/package/dotenv) (para variáveis de ambiente)
- **Automação e IA**:
  - [n8n](https://n8n.io/)
  - [Google Gemini](https://ai.google/discover/gemini/) (ou outro modelo de LLM)
  - [Microsoft Power Automate](https://powerautomate.microsoft.com/)

## ⚙️ Começando

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/download/) (versão 18 ou superior)
- Uma conta e instância do [n8n](https://n8n.io/) (Cloud ou auto-hospedada)
- Uma conta Microsoft com acesso ao [Power Automate](https://powerautomate.microsoft.com/) e Word Online (Business)

### Instalação e Configuração

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git)
    cd NOME-DO-SEU-REPOSITORIO
    ```

2.  **Instale as dependências do backend:**
    ```sh
    npm install
    ```

3.  **Configure o Power Automate:**
    - Crie um fluxo com o gatilho "Quando uma solicitação HTTP for recebida".
    - Use o JSON de exemplo (definido na nossa conversa) para gerar o esquema.
    - Adicione a ação "Preencher um modelo do Microsoft Word", mapeando os campos do JSON para os campos do seu template.
    - Adicione a ação "Criar arquivo" para salvar o documento final.
    - **Copie a URL de POST HTTP gerada pelo gatilho.**

4.  **Configure o n8n:**
    - Importe ou crie o fluxo de trabalho que desenvolvemos.
    - Certifique-se de que o `AI Agent` principal está com o prompt correto para guiar a conversa.
    - Certifique-se de que o caminho de "finalizar" contém o nó de IA para extração de dados e o nó `HTTP Request`.
    - **Copie a URL de Produção do `Webhook` que inicia o fluxo.**

5.  **Configure as Variáveis de Ambiente:**
    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Adicione as URLs que você copiou, seguindo o modelo do arquivo `.env.example`.

    **.env.example**
    ```env
    # Cole a URL de produção do seu webhook do n8n aqui
    N8N_WEBHOOK_URL="SUA_URL_DO_N8N_AQUI"
    ```

## ▶️ Como Usar

1.  **Inicie o servidor backend:**
    ```sh
    node server.js
    ```
    O terminal deve exibir `Servidor rodando em http://localhost:3000`.

2.  **Abra a interface do chat:**
    - Abra o arquivo `index.html` em seu navegador de preferência.

Agora você pode começar a conversar com seu agente!

## 🔮 Próximos Passos (To-Do)

- [ ] **Sistema de Autenticação**: Implementar login e senha para que cada usuário tenha seu próprio histórico de conversas e acesso privado.
- [ ] **Banco de Dados**: Substituir a memória em `staticData` do n8n por um banco de dados real (como SQLite ou PostgreSQL) para persistir as conversas.
- [ ] **Streaming de Respostas**: Modificar o backend para usar Server-Sent Events (SSE) e exibir a resposta da IA palavra por palavra.
- [ ] **Melhorar o Tratamento de Erros**: Adicionar mais feedback visual para o usuário caso ocorra um erro na comunicação com a IA.

## 👤 Contato

[SEU NOME] - [@SEU_LINKEDIN] - [SEU_EMAIL@exemplo.com]

Link do Projeto: `https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO`

## 📄 Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.