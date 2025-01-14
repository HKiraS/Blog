import React, { useEffect } from 'react';
import { ReactComponent as FilterSvg } from '../../assets/icon/filter.svg';
import { Posts } from '../Post';
import NavArrows from '../NavArrows';
import '../../styles/AnotherPosts.css';

export function AnotherPosts({ data }) {
  const [TagActive, setTagActive] = React.useState(false);
  const [postsLimit, setPostsLimit] = React.useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setPostsLimit(10);
      } else if (window.innerWidth < 1280 && window.innerWidth > 1024) {
        setPostsLimit(8);
      } else if (window.innerWidth < 1024) {
        setPostsLimit(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="another-posts w-full my-16" id="posts">
      <div>
        <header className="shadow-lg my-16" id="AnotherPosts">
          <div className="container mx-auto flex justify-between items-center py-8 relative">
            <h1 className="title-b relative in-black-bg">Outros Posts</h1>
            <div
              className="flex items-center gap-2 cursor-pointer btn-filter p-3"
              onClick={() => {
                setTagActive(!TagActive);
              }}
            >
              <FilterSvg />
              <span className="text-n">Filtro</span>
            </div>
            {TagActive ? console.log('Filtro') : null}
          </div>
        </header>
        <div className="posts-container px-4 container mx-auto grid grid-cols-5 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 xl:grid-cols-5 gap-8 max-md:gap-2 my-16">
          {data.map(({ img, title, timeRead, date, description }, index) => {
            return index < postsLimit ? (
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
          className="flex mx-auto my-16 justify-center sm:gap-2 items-center"
        >
          <NavArrows direction="left" />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index, arr) => {
            const isActive = index === 0 ? 'active' : '';
            const classButton = `w-10 h-10 color-black p-2 duration-300 hover:bg-n ${isActive}`;

            return (
              <button key={'button-' + index} className={classButton}>
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
