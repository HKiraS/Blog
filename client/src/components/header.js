import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './Button';
import logo from '../assets/logo/logo.jpeg';
import { ReactComponent as MoonSvg } from '../assets/icon/moon.svg';
import { ReactComponent as SunSvg } from '../assets/icon/sun.svg';
import { ReactComponent as SearchSvg } from '../assets/icon/search.svg';
import '../styles/header.css';
import { UserContext } from '../context/UserContext';

function Header() {

  const {login, data} = React.useContext(UserContext);

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
    document.body.classList.toggle('no-scroll');
  };

  return (
    <header id="header" className="p-4 sticky top-0 left-0 duration-300 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="logo" alt="Logo do site" />
        </Link>
        <div className="flex-1 mx-4">
          <div className="relative flex search-bar justify-center">
            <button className="search-bar-btn py-2 px-3">
              <SearchSvg />
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
              <SunSvg className="sun absolute top-0 left-0 opacity-100 invisible" />
              <MoonSvg className="moon absolute top-0 left-0 opacity-0 invisible stroke-black" />
            </span>
          </button>
          <nav className="navbar-container flex gap-6 items-center">
            <NavLink
              end
              to=""
              className="title-s relative cursor-pointer navbar-link"
            >
              Home
            </NavLink>

            <NavLink
              to="/characters"
              className="title-s relative cursor-pointer navbar-link"
            >
              Personagens
            </NavLink>

            <NavLink
              to="/posts"
              className="title-s relative cursor-pointer navbar-link"
            >
              Artigos
            </NavLink>
            {login ? (
              <NavLink
                to="/account"
                className="title-s relative cursor-pointer navbar-link"
              >
                {data.nome}
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="btn-primary-m title-s relative cursor-pointer navbar-link"
              >
                Login
              </NavLink>
            )}
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
              <li
                className="navbar-link-mobile cursor-pointer relative active p-1"
                onClick={handleClick}
              >
                <NavLink
                  to="/"
                  className="title-s px-3 py-4 duration-500"
                >
                  Home
                </NavLink>
                <span className="w-full h-full absolute top-0 left-0"></span>
              </li>
              <li
                className="navbar-link-mobile cursor-pointer relative"
                onClick={handleClick}
              >
                <NavLink
                  to="characters"
                  className="title-s px-3 py-4 duration-500 "
                >
                  Personagens
                </NavLink>
                <span className="w-full h-full absolute top-0 left-0"></span>
              </li>
              <li
                className="navbar-link-mobile cursor-pointer relative"
                onClick={handleClick}
              >
                <NavLink to="posts" className="title-s px-3 py-4 duration-500">
                  Tags
                </NavLink>
                <span className="w-full h-full absolute top-0 left-0"></span>
              </li>
              <Link to="/login" onClick={() => {console.log('Clicou no link')}}>
                <Button
                  text="Login"
                  type="primary"
                  size="m"
                  classes="rounded w-full"
                />
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
