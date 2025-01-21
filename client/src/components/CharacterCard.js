import React from 'react';
import '../styles/Character.css';
import { Link } from 'react-router-dom';
import Image from './Helper/Image';

export function CharacterCard({ name, img, onClick = () => {}, ...props }) {
  const title =
    name.length >= 15 ? name.substring(0, 12).padEnd(15, '.') : name;

  return (
    <Link to={'characters/' + name}>
      <div
        className={`character-card relative rounded-md max-lg:w-64 cursor-pointer ${props.className}`}
        onClick={onClick}
        {...props}
      >
        <Image
          src={img}
          alt={name}
          className="object-cover rounded-md w-full h-full"
        />
        <span className="overlay absolute top-0 left-0 z-10 black-bg opacity-0 ease-in-out w-full h-full duration-300 rounded-md"></span>
        <div className="character-card-info flex absolute items-center bg-color-black bg-opacity-70 bottom-0 left-0 rounded-b z-20 h-0 duration-500 ease-in-out w-full">
          <h2 className="title-s pl-4 opacity-0 hover:opacity-100 duration-500 ease-in-out pointer-events-none text-color-white">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
