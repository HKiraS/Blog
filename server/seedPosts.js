import mongoose from 'mongoose';
import Post from './models/Post.js'; // Certifique-se de ajustar o caminho e extensão

const posts = [
  {
    img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
    id: 1,
    title: 'Post 1bfudibfc jphnosfn ObvUDHBIJ OJIÓADSJIÓSJ ADOB jabsncskj',
    timeRead: '5 min',
    date: '2024-12-30',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 1',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/e4/d9/af/e4d9afedcf7452b2b5f3307f95c6b697.jpg',
    id: 2,
    title: 'Post 2',
    timeRead: '3 min',
    date: '2024-12-29',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 2',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/4c/2a/39/4c2a39e777d2447f23bb73b7cbcdfd97.jpg',
    id: 3,
    title: 'Post 3',
    timeRead: '4 min',
    date: '2024-12-28',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 3',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/f6/2c/e9/f62ce9a313720f7150e24c354087c148.jpg',
    id: 4,
    title: 'Post 4',
    timeRead: '6 min',
    date: '2024-12-27',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 4',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/fa/a2/3d/faa23d8f1a384841402c057295f87494.jpg',
    id: 5,
    title: 'Post 5',
    timeRead: '2 min',
    date: '2024-12-26',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 5',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/c4/08/9d/c4089d13fef09797de23d7092b70789d.jpg',
    id: 6,
    title: 'Post 6',
    timeRead: '7 min',
    date: '2024-12-25',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 6',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/0d/5b/16/0d5b168a23c9fd29dde587409338ff7d.jpg',
    id: 7,
    title: 'Post 7',
    timeRead: '8 min',
    date: '2024-12-24',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 7',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/df/ee/f7/dfeef70983e4c7505267564c79356c18.jpg',
    id: 8,
    title: 'Post 8',
    timeRead: '5 min',
    date: '2024-12-23',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 8',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/8d/cd/db/8dcddb4141b62a90178831f7d747617d.jpg',
    id: 9,
    title: 'Post 9',
    timeRead: '3 min',
    date: '2024-12-22',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 9',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/79/78/e5/7978e52de452abcb5963981d7a4c6c82.jpg',
    id: 10,
    title: 'Post 10',
    timeRead: '5 min',
    date: '2024-12-23',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 8',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
  {
    img: 'https://i.pinimg.com/736x/68/d0/a7/68d0a74c6246d44c7ac7be1082504d79.jpg',
    id: 11,
    title: 'Post 1dgubhuaidshuisdahujdhsuj',
    timeRead: '3 min',
    date: '2024-12-22',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 9',
    href: '/',
    content: 'Conteúdo do Post 1',
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao banco de dados!');

    await Post.deleteMany();
    console.log('Coleção de posts limpa.');

    await Post.insertMany(posts);
    console.log('Posts inseridos com sucesso!');

    mongoose.connection.close();
  } catch (error) {
    console.error('Erro ao inserir posts:', error);
    mongoose.connection.close();
  }
}

seedDatabase();
