// Importar os pacotes que instalamos
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis do arquivo .env

// Inicializar o aplicativo Express
const app = express();
const port = 3000; // O servidor rodará na porta 3000

// Configurar os middlewares
app.use(cors()); // Permite que o frontend acesse este backend
app.use(express.json()); // Permite que o servidor entenda JSON

// --- A ROTA PRINCIPAL DA NOSSA API DE CHAT ---
// Encontre esta rota no seu server.js e a substitua
app.post('/api/chat', async (req, res) => {
    // 1. Pega a mensagem E o sessionId que vieram do frontend
    const { message: userMessage, sessionId } = req.body; // <-- MUDANÇA AQUI

    if (!userMessage || !sessionId) {
        return res.status(400).json({ error: 'Mensagem ou sessionId não fornecido.' });
    }

    console.log(`Mensagem recebida da sessão [${sessionId}]: "${userMessage}"`);

    try {
        console.log('Enviando para o n8n...');
        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

        if (!n8nWebhookUrl) {
            throw new Error("A URL do webhook do n8n não foi definida no arquivo .env");
        }

        // 2. Envia a mensagem E o sessionId para o n8n
        const n8nResponse = await axios.post(n8nWebhookUrl, {
            message: userMessage,
            sessionId: sessionId // <-- MUDANÇA AQUI
        });

        console.log('Resposta recebida do n8n:', n8nResponse.data);
        res.json(n8nResponse.data);

    } catch (error) {
        console.error('Erro ao conectar com o n8n:', error.message);
        res.status(500).json({ error: 'Desculpe, não consegui me conectar com o agente de IA.' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});