import { auth, db } from './config';
import { collection, addDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { postSchema, userSchema, commentSchema } from './schemas';
import { uploadImage } from '../utils/cloudinary';

// Funções para Posts
export const createPost = async (postData, coverFile, contentImages) => {
  try {
    // Upload da capa
    const coverUrl = await uploadImage(coverFile);
    
    // Upload das imagens do conteúdo
    const imageUrls = {};
    for (const [filename, file] of Object.entries(contentImages)) {
      const url = await uploadImage(file);
      imageUrls[filename] = {
        url,
        type: 'cloudinary'
      };
    }

    // Calcular tempo de leitura
    const wordCount = postData.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Criar post
    const newPost = {
      ...postSchema,
      ...postData,
      tags: postData.tags || [], // Garante que sempre será um array
      coverImage: {
        url: coverUrl,
        type: 'cloudinary'
      },
      images: imageUrls,
      readingTime,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'posts'), newPost);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar post:', error);
    throw error;
  }
};

// Função para buscar posts por tag
export const getPostsByTag = async (tag) => {
  try {
    const q = query(
      collection(db, 'posts'),
      where('tags', 'array-contains', tag)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Erro ao buscar posts por tag:', error);
    throw error;
  }
};

// Função para buscar todas as tags únicas
export const getAllTags = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const allTags = new Set();
    
    querySnapshot.docs.forEach(doc => {
      const tags = doc.data().tags || [];
      tags.forEach(tag => allTags.add(tag));
    });
    
    return Array.from(allTags);
  } catch (error) {
    console.error('Erro ao buscar tags:', error);
    throw error;
  }
};

// Funções para Usuários
export const createUser = async (userData) => {
  try {
    const newUser = {
      ...userSchema,
      ...userData,
      createdAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'users'), newUser);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

// Funções para Comentários
export const createComment = async (commentData) => {
  try {
    const newComment = {
      ...commentSchema,
      ...commentData,
      createdAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'comments'), newComment);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar comentário:', error);
    throw error;
  }
};