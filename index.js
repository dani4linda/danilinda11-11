
require('dontev').config();

const express = require('express');

const app = express();
const PORTA = process.env.PORTA || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensagem: 'API da loja funcionando!'});
});

app.listen(PORTA, () => {
  console.log(`servidor rodando em http://localhost:${PORTA}`); 
});

