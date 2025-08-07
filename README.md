## 🤖 Agente de IA com Chat Web e Geração de Documentos
Um projeto de chatbot com interface web que utiliza um agente de IA do n8n para conduzir uma conversa estruturada, extrair dados e, ao final, acionar um fluxo do Power Automate para gerar documentos Word a partir de um template.

# 📖 Sobre o Projeto
Este projeto foi criado para demonstrar a integração de ponta a ponta entre uma interface de usuário (front-end), um servidor intermediário (back-end), uma plataforma de automação de fluxo de trabalho (n8n) e uma ferramenta de automação de escritório (Power Automate).

O objetivo principal é substituir o preenchimento manual de formulários e documentos complexos por uma conversa guiada e inteligente com um agente de IA. O usuário conversa com o chatbot, fornece as informações necessárias e, ao final, recebe um documento .docx preenchido automaticamente.

🏛️ Arquitetura
O sistema é composto por 4 componentes principais que se comunicam em sequência:

[Interface do Chat (HTML/JS)] -> [Servidor Node.js (Backend)] -> [n8n (Orquestração e IA)] -> [Power Automate (Geração do Documento)]

Frontend: A interface de chat onde o usuário interage. Construída com HTML, CSS e JavaScript puro.

Backend: Um servidor em Node.js (Express) que serve como um proxy seguro, gerenciando a comunicação entre o frontend e o n8n.

n8n: O cérebro do projeto. Orquestra a lógica da conversa, gerencia a memória (histórico) e realiza a extração de dados estruturados ao final da conversa.

Power Automate: O braço executor. Recebe os dados extraídos do n8n via HTTP e os utiliza para preencher um template do Microsoft Word.

✨ Principais Funcionalidades
Interface de Chat Reativa: Experiência de usuário similar ao ChatGPT.

Memória de Conversa: O agente se lembra do contexto da conversa utilizando um ID de Sessão.

Formatação de Resposta: Renderiza negrito (**texto**) e divide respostas longas em múltiplos balões para melhor legibilidade.

Extração de Dados Estruturados: Uma IA secundária analisa a conversa completa e extrai os dados em um formato JSON limpo.

Geração de Documentos Automatizada: Integração com o Power Automate para preencher templates .docx.

Backend Seguro: O servidor intermediário protege as chaves e URLs dos webhooks.

🚀 Tecnologias Utilizadas
Frontend:

HTML5

CSS3

JavaScript (Vanilla)

Backend:

Node.js

Express.js

Axios (para chamadas HTTP)

CORS

Dotenv (para variáveis de ambiente)

Automação e IA:

n8n

Google Gemini (ou outro modelo de LLM)

Microsoft Power Automate