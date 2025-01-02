import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes.js';

const app = express();
const PORT = 3000;

// Middleware para tratar JSON
app.use(express.json());

// Conexão com MongoDB
const mongoUri = 'mongodb://127.0.0.1:27017/blog';

// Conexão com MongoDB (versão atualizada)
try {
  await mongoose.connect(mongoUri);
  console.log('Conectado ao MongoDB com sucesso!');
} catch (err) {
  console.error('Erro ao conectar ao MongoDB:', err);
  process.exit(1);
}

// Monitor de erros na conexão
mongoose.connection.on('error', err => {
  console.error('Erro na conexão MongoDB:', err);
});

// Monitor de desconexão
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB desconectado');
});

// Rotas
app.use('/api/posts', postRoutes);

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Tratamento de erros não capturados
process.on('unhandledRejection', (err) => {
  console.error('Erro não tratado:', err);
  process.exit(1);
});