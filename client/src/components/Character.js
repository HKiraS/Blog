import React from 'react';
import '../styles/Character.css';

export function Character({
  name,
  img,
  alt = 'Character',
  href = '/',
  onClick = () => {
    window.location.href = href;
  },
}) {
  name = name.length >= 15 ? name.substring(0, 12).padEnd(15, '.') : name;

  return (
    <div
      className="character-card relative rounded-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={img}
        alt={alt}
        className="object-cover rounded-md w-full h-full"
      />
      <span className="overlay absolute top-0 left-0 z-10 bg-black opacity-0 ease-in-out w-full h-full duration-300 rounded-md"></span>
      <div className="flex absolute items-center bottom-0 left-0 rounded-b z-20 h-0 duration-500 ease-in-out">
        <h2 className="title-p-desktop pl-4 opacity-0 hover:opacity-100 duration-500 ease-in-out">
          {name}
        </h2>
      </div>
    </div>
  );
}
