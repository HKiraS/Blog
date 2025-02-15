import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Header from './components/Header.js';
import Footer from './components/Footer';
import PagePosts from './pages/PagePosts';
import PageHome from './pages/PageHome';
import PageCharacters from './pages/PageCharacters';
import PageCharacter from './pages/PageCharacter';
import PageLogin from './pages/PageLogin.js';
import PageAccount from './pages/PageAccount.js';
import Page404 from './pages/Page404';
import PageContact from './pages/PageContact.js';
import PageSearch from './pages/PageSearch.js';

import { UserStorage } from './context/UserContext.js';
import ProtectedRoute from './components/Helper/ProtectedRoute.js';

/* eslint-disable no-dupe-keys */
export const dados = [
  {
    img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
    id: 1,
    title: 'Os personagens mais fortes',
    timeRead: '5 min',
    tags: ['História', 'Personagem', 'Guerra'],
    views: 100,
    likes: 1,
    author: 'Kira',
    date: '2024-12-30',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. /nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus./n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus./nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus./nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus.',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/e4/d9/af/e4d9afedcf7452b2b5f3307f95c6b697.jpg',
    id: 2,
    title: 'Post 2',
    timeRead: '3 min',
    tags: ['História', 'Guerra'],
    views: 200,
    likes: 93,
    author: 'Kira',
    date: '2024-12-29',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 2',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/4c/2a/39/4c2a39e777d2447f23bb73b7cbcdfd97.jpg',
    id: 3,
    title: 'Post 3',
    timeRead: '4 min',
    tags: ['Personagem', 'Guerra'],
    views: 130,
    likes: 21,
    author: 'Kira',
    date: '2024-12-28',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 3',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/f6/2c/e9/f62ce9a313720f7150e24c354087c148.jpg',
    id: 4,
    title: 'Post 4',
    timeRead: '6 min',
    tags: ['Personagem', 'Guerra', 'Criativo'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-27',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 4',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/fa/a2/3d/faa23d8f1a384841402c057295f87494.jpg',
    id: 5,
    title: 'Post 5',
    timeRead: '2 min',
    tags: ['História', 'Personagem', 'Ação'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-26',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 5',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/c4/08/9d/c4089d13fef09797de23d7092b70789d.jpg',
    id: 6,
    title: 'Post 6',
    timeRead: '7 min',
    tags: ['História', 'Comedia'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-25',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 6',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/0d/5b/16/0d5b168a23c9fd29dde587409338ff7d.jpg',
    id: 7,
    title: 'Post 7',
    timeRead: '8 min',
    tags: ['Destruição', 'Personagem', 'Guerra'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-24',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 7',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/df/ee/f7/dfeef70983e4c7505267564c79356c18.jpg',
    id: 8,
    title: 'Post 8',
    timeRead: '5 min',
    tags: ['História', 'Terror', 'Guerra'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-23',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 8',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/8d/cd/db/8dcddb4141b62a90178831f7d747617d.jpg',
    id: 9,
    title: 'Post 9',
    timeRead: '3 min',
    tags: ['Criação', 'Personagem', 'Guerra'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-22',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 9',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/79/78/e5/7978e52de452abcb5963981d7a4c6c82.jpg',
    id: 10,
    title: 'Post 10',
    timeRead: '5 min',
    tags: ['Survival', 'Personagem', 'Guerra'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-23',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 8',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/68/d0/a7/68d0a74c6246d44c7ac7be1082504d79.jpg',
    id: 11,
    title: 'Post 1dgubhuaidshuisdahujdhsuj',
    timeRead: '3 min',
    tags: ['Vingança', 'Personagem', 'Guerra'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-22',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus.',
    href: '/',
  },
  {
    img: 'https://i.pinimg.com/736x/df/2e/2c/df2e2c0f0a8c938d5b438a8fbc905723.jpg',
    id: 12,
    title: 'Post 1dgubhuaidshuisdahujdhsuj',
    timeRead: '3 min',
    tags: ['História', 'Personagem', 'Aventura'],
    views: 100,
    likes: 21,
    author: 'Kira',
    date: '2024-12-22',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec pretium tristique, ligula nibh scelerisque nulla, at interdum urna ante in tortor. Nunc mattis leo non ex placerat sollicitudin. Praesent consequat sagittis mi, at efficitur dui fermentum ac. Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper tempor at, fringilla at velit. Phasellus venenatis porttitor nibh, vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend sed odio in, suscipit porttitor justo. In finibus in nibh id cursus. Nullam porta maximus nisi, vitae tristique metus. do Post 9',
    href: '/',
  },
];
/* eslint-enable no-dupe-keys */

export function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true  }}>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/posts/*" element={<PagePosts />} />
          <Route path="/characters" element={<PageCharacters />} />
          <Route path="/characters/:character/*" element={<PageCharacter />} />
          <Route path="/search/*" element={<PageSearch />} />
          <Route path="/login/*" element={<PageLogin />} />
          <Route
            path="/account/*"
            element={
              <ProtectedRoute>
                <PageAccount />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<PageContact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
