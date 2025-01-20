// src/components/CreatePost.jsx (exemplo)
// import { createPost } from '../firebase/utils';

// const CreatePost = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const postData = {
//         title: 'Meu post',
//         content: '# Conteúdo em markdown...'
//       };
      
//       const coverFile = // seu arquivo de capa
//       const contentImages = {
//         'imagem1.jpg': // arquivo da imagem 1,
//         'imagem2.jpg': // arquivo da imagem 2
//       };

//       const postId = await createPost(postData, coverFile, contentImages);
//       console.log('Post criado com sucesso!', postId);
//     } catch (error) {
//       console.error('Erro ao criar post:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Criar Post</button>
//     </form>
//   );
// };