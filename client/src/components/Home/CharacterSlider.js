import React from 'react';
import { CharacterCard } from '../CharacterCard.js';
import { Link } from 'react-router-dom';

export function CharacterSlider({ data }) {
  const evenData = data.filter((_, index) => index % 2 === 0);
  const oddData = data.filter((_, index) => index % 2 !== 0);

  return (
    <section className="w-full my-16">
      <header className="shadow-lg">
        <div className="container mx-auto flex justify-between items-center my-8">
          <h1 className="title-b relative in-black-bg gap-4">Personagens</h1>
          <div className="btn-container flex gap-6">
            {/* <div className="options flex items-center gap-4">
              <button className="py-2 px-4 rounded bg-color-white text-color-black duration-300">
                Opção 1
              </button>
              <button className="py-2 px-4 rounded bg-color-white text-color-black duration-300">
                Opção 1
              </button>
              <button className="py-2 px-4 rounded bg-color-white text-color-black duration-300">
                Opção 1
              </button>
            </div> */}
            <Link to="/characters" className="btn-secundary-s rounded">
              Ver Todos
            </Link>
          </div>
        </div>
      </header>
      <div className="flex items-center max-w-screen-2xl mx-auto justify-center w-11/12 gap-8 px-8 max-sm:px-4 anime-left">
        <div className="character-container mx-auto my-16 flex flex-col gap-8 max-md:gap-4 overflow-hidden w-full">
          <div className="gap-8 max-md:gap-4 character-box pb-4 flex relative mb-4 *:snap-center snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
            {evenData.map((item) => (
              <CharacterCard
                key={item.title + item.id}
                name={item.title}
                img={item.img}
              />
            ))}
          </div>
          <div className="gap-8 max-md:gap-4 character-box flex relative mb-4 pb-4 *:snap-center snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
            {oddData.map((item) => (
              <CharacterCard
                key={item.title + item.id}
                name={item.title}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
