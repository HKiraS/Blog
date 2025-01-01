import React from 'react';
import '../styles/AnotherPosts.css';
import filter from '../assets/images/icon/filter.svg';
import { Postes } from './Postes';
import NavArrows from './NavArrows';

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
  },
];
const handleClick = (e) => e.target.classList.toggle('active');

export default function AnotherPosts(obj) {
  const [isTagActive, setIsTagActive] = React.useState(false);

  const containerActive = isTagActive ? 'active' : '';

  return (
    <section className="another-posts w-full my-16">
      <div>
        <header className="shadow-lg my-16" id="AnotherPosts">
          <div className="container mx-auto flex justify-between items-center py-8 relative">
            <h1 className="title-b-desktop relative">Outros Posts</h1>
            <div
              data-tags-container={isTagActive}
              className="flex items-center gap-2 cursor-pointer btn-filter p-3"
              onClick={(e) => {
                setIsTagActive(!isTagActive);
              }}
            >
              <img src={filter} alt="icone filtro" />
              <span className="text-n-desktop">Filtro</span>
            </div>
            <div className="tags-container grid grid-cols-3 gap-3 rounded absolute p-3 right-1">
              {[
                'Ação',
                'Aventura',
                'Comédia',
                'Magia',
                'Guerra',
                'Romance',
                'Ação',
                'Aventura',
                'Comédia',
                'Magia',
                'Guerra',
                'Romance',
              ].map((item, index) => {
                if (index < 8) {
                  return (
                    <span
                      onClick={handleClick}
                      key={index}
                      className="p-3 text-n-desktop tag duration-300 rounded cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                }
                return null;
              })}

              <label
                htmlFor="search"
                className="rounded cursor-pointer flex items-center justify-center font-bold"
              >
                Pesquisar
              </label>
            </div>
          </div>
        </header>
        <div
          data-container={containerActive}
          className="posts-container container mx-auto grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-4 my-16"
        >
          {posts.map(({ img, title, timeRead, date, description, id }) => {
            if (id < 11) {
              return (
                <Postes
                  key={id}
                  img={img}
                  title={title}
                  description={description}
                  timeRead={timeRead}
                  date={date}
                />
              );
            }
            return null;
          })}
        </div>
        <div
          id="page-controls"
          className="flex mx-auto my-16 justify-center sm:gap-2 items-center"
        >
          <NavArrows direction="left" />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index, arr) => {
            const isActive = index === 0 ? 'active' : '';
            const classButton = `w-10 h-10 color-black p-2 duration-300 hover:bg-n-desktop ${isActive}`;

            return (
              <button key={index} className={classButton}>
                {item}
              </button>
            );
          })}
          <NavArrows direction="right" />
        </div>
      </div>
    </section>
  );
}
