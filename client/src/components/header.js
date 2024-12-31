import React from 'react';
import { Button } from './Button';
import '../styles/header.css';
import logo from '../assets/images/logo/logo.jpeg';
import moon from '../assets/images/icon/moon.svg';
import sun from '../assets/images/icon/sun.svg';
import search from '../assets/images/icon/search.svg';

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

export function Header() {
  return (
    <header className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img src={logo} className="logo" alt="Logo do site" />
        </div>
        <div className="flex-1 mx-4">
          <div className="relative flex search-bar">
            <button className="search-bar-btn" >
              <img src={search} alt="Pesquise" />
            </button>
            <input
              type="search"
              placeholder="Buscar..."
              name='search'
              className=" max-w-md search-bar-input"
            />
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="dark-mode-toggle relative"
            onClick={toggleDarkMode}
          >
            <span>
              <img className="sun" src={sun} alt="modo claro" />
              <img className="moon" src={moon} alt="modo escuro" />
            </span>
          </button>
          <nav className="navbar">
            <ul className="flex navbar-container">
              <li className="navbar-link active">
                <a href="/" className="title-p-desktop active">
                  Home
                </a>
              </li>
              <li className="navbar-link">
                <a href="./pages/personagens.html" className="title-p-desktop">
                  Personagens
                </a>
              </li>
              <li className="navbar-link">
                <a href="./pages/personagens.html" className="title-p-desktop">
                  Tags
                </a>
              </li>
            </ul>
          </nav>
          <Button text="Login" type="primary" size="m" />
        </div>
      </div>
    </header>
  );
}
