const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../')));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Servidor funcionando!'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});