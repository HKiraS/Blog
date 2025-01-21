import React, { useState } from 'react';
import { ReactComponent as FilterSvg } from '../../assets/icon/filter.svg';
import { Posts } from '../Post';
import NavArrows from '../NavArrows';
import '../../styles/AnotherPosts.css';

export function AnotherPosts({ data }) {
  const [TagActive, setTagActive] = useState(false);

  return (
    <section className="another-posts w-full my-16">
      <header className="shadow-lg my-16">
        <div className="container mx-auto flex justify-between items-center py-8 relative">
          <h1 className="title-b relative in-black-bg">Outros Posts</h1>
          <div
            className="flex items-center gap-2 cursor-pointer btn-filter p-3"
            onClick={() => {
              setTagActive(!TagActive);
            }}
          >
            <FilterSvg />
            <span className="text-n duration-300">Filtro</span>
          </div>
          {TagActive ? console.log('Filtro') : null}
        </div>
      </header>
      <div className="posts-container px-4 container mx-auto grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-8 max-md:gap-2 my-16 anime-left">
        {data.map(({ img, title, timeRead, date, description }, index) => {
          return index < 8 ? (
            <Posts
              key={`title-${index}`}
              img={img}
              title={title}
              description={description}
              timeRead={timeRead}
              date={date}
            />
          ) : null;
        })}
      </div>
      <div
        id="page-controls"
        className="flex mx-auto my-16 justify-center sm:gap-2 items-center "
      >
        <NavArrows direction="left" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          const isActive = index === 0 ? 'active' : '';

          return (
            <button
              key={'button-' + index}
              className={`w-10 h-10 text-color-black p-2 duration-300 hover:text-color-orange active:text-color-orange ${isActive}`}
            >
              {item}
            </button>
          );
        })}
        <NavArrows direction="right" />
      </div>
    </section>
  );
}
