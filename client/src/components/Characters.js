import React, { useRef } from 'react';
import { Character } from './Character.js';
import { Button } from './Button.js';
import NavArrows from './NavArrows';

export function Characters({ data }) {
  return (
    <section className="w-full my-16">
      <header className="shadow-lg">
        <div className="container mx-auto flex justify-between items-center  my-8">
          <h1 className="title-b-desktop relative title-in-black-bg gap-4">
            Personagens
          </h1>
          <div className="btn-container flex gap-6">
            {/* <div className="options flex items-center gap-4">
              <button className="py-2 px-4 rounded btn-option duration-300">
                Opção 1
              </button>
              <button className="py-2 px-4 rounded btn-option duration-300">
                Opção 1
              </button>
              <button className="py-2 px-4 rounded btn-option duration-300">
                Opção 1
              </button>
            </div> */}
            <Button text="Ver Todos" type="secundary" size="s" />
          </div>
        </div>
      </header>
      <div className="flex items-center container mx-auto justify-center w-11/12 gap-8">
        <NavArrows direction="left" />
        <div className="character-container mx-auto my-16 flex flex-col gap-8 overflow-hidden w-full">
          <div className="gap-8 character-box grid grid-flow-col">
            {data
              .filter((_, index) => index % 2 === 0)
              .map((item) => (
                <Character key={item.id} name={item.title} img={item.img} />
              ))}
          </div>
          <div className="gap-8 character-box flex">
            {data
              .filter((_, index) => index % 2 !== 0)
              .map((item) => (
                <Character key={item.id} name={item.title} img={item.img} />
              ))}
          </div>
        </div>
        <NavArrows />
      </div>
    </section>
  );
}
