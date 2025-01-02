import express from 'express';
import { Post } from '../models/Post.js';

const router = express.Router();

// Rota para listar todos os posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar posts.', error });
  }
});

// Rota para criar um novo post
router.post('/', async (req, res) => {
  try {
    console.log('Received body:', req.body); // Para debug
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error('Erro detalhado:', error); // Para debug
    res.status(400).json({ 
      message: 'Erro ao criar post.', 
      error: error.message,  // Inclui a mensagem de erro
      details: error // Inclui detalhes completos do erro
    });
  }
});
// Rota para atualizar um post pelo ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post não encontrado.' });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar post.', error });
  }
});

// Rota para deletar um post pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post não encontrado.' });
    }
    res.status(200).json({ message: 'Post deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar post.', error });
  }
});

export default router;
