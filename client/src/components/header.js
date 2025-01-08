import React from 'react';
import { Button } from './Button';
import logo from '../assets/logo/logo.jpeg';
import {ReactComponent as moon} from '../assets/icon/moon.svg';
import {ReactComponent as sun} from '../assets/icon/sun.svg';
import {ReactComponent as search} from '../assets/icon/search.svg';
import '../styles/header.css';

// Trocar o tema da página
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('light');
  body.classList.toggle('dark');

  const currentMode = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentMode);
}

// Carregar o estado do tema ao carregar a página
(function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme);
})();

// Função para alternar o menu de navegação
const handleClick = (event) => {
  const navbar = document.querySelector('.navbar-container-mobile');
  navbar.classList.toggle('active');
  event.currentTarget.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
};

if (window.screenY > 100) {
  
}

export function Header() {
  return (
    <header className="p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img src={logo} className="logo" alt="Logo do site" />
        </div>
        <div className="flex-1 mx-4">
          <div className="relative flex search-bar justify-center">
            <button className="search-bar-btn py-2 px-3">
              <img src={search} alt="Pesquise" />
            </button>
            <input
              type="search"
              placeholder="Buscar..."
              name="search"
              id="search"
              className=" max-w-md search-bar-input"
            />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <button
            className="dark-mode-toggle relative cursor-pointer "
            onClick={toggleDarkMode}
          >
            <span className="absolute top-0 left-0 grid place-content-center duration-300">
              <img
                className="sun absolute top-0 left-0 opacity-0 invisible"
                src={sun}
                alt="modo claro"
              />
              <img
                className="moon absolute top-0 left-0 opacity-0 invisible"
                src={moon}
                alt="modo escuro"
              />
            </span>
          </button>
          <nav className="navbar flex gap-6 items-center">
            <ul className="flex navbar-container gap-6">
              <li className="navbar-link cursor-pointer relative active">
                <a href="/" className="title-s-desktop active">
                  Home
                </a>
              </li>
              <li className="navbar-link cursor-pointer relative">
                <a href="#characters" className="title-s-desktop">
                  Personagens
                </a>
              </li>
              <li className="navbar-link cursor-pointer relative">
                <a href="#posts" className="title-s-desktop">
                  Tags
                </a>
              </li>
            </ul>
            <Button text="Login" type="primary" size="m" />
          </nav>
          <nav className="navbar-mobile flex items-center">
            <button
              className="navbar-toggle-btn flex flex-col gap-2 p-4"
              onClick={handleClick}
            >
              <span className="bar rounded-full w-8 h-0.5"></span>
              <span className="bar rounded-full w-8 h-0.5"></span>
              <span className="bar rounded-full w-8 h-0.5"></span>
            </button>
            <ul className="flex navbar-container-mobile rounded-bl flex-col fixed gap-px overflow-hidden top-0 right-0 duration-300">
              <li className="navbar-link-mobile cursor-pointer relative active p-1" onClick={handleClick}>
                <a
                  href="/"
                  className="title-s-desktop px-3 py-4 duration-500 active"
                >
                  Home
                </a>
                <span className="w-full h-full absolute top-0 left-0"></span>
              </li>
              <li className="navbar-link-mobile cursor-pointer relative" onClick={handleClick}>
                <a
                  href="#characters"
                  className="title-s-desktop px-3 py-4 duration-500 "
                >
                  Personagens
                </a>
                <span className="w-full h-full absolute top-0 left-0"></span>
              </li>
              <li className="navbar-link-mobile cursor-pointer relative" onClick={handleClick}>
                <a
                  href="#posts"
                  className="title-s-desktop px-3 py-4 duration-500"
                >
                  Tags
                </a>
                <span className="w-full h-full absolute top-0 left-0"></span>
              </li>
              <Button
                text="Login"
                type="primary"
                size="m"
                classes="rounded-none w-full"
              />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
