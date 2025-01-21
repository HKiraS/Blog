import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.jpeg';
import { ReactComponent as MoonSvg } from '../assets/icon/moon.svg';
import { ReactComponent as SunSvg } from '../assets/icon/sun.svg';
import { ReactComponent as SearchSvg } from '../assets/icon/search.svg';
import { ReactComponent as UserSvg } from '../assets/icon/user.svg';
import { UserContext } from '../context/UserContext';
import '../styles/header.css';

function Header() {
  const { login, data } = React.useContext(UserContext);
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

  const handleClick = ({ currentTarget }) => {
    currentTarget.classList.toggle('active');
  };

  // Função para alternar o menu de navegação
  const handleMenuClick = (e) => {
    handleClick(e);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <header id="header" className="p-4 sticky top-0 left-0 duration-300 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="logo" alt="Logo do site" />
        </Link>

        <div className="flex gap-6 max-sm:gap-3 items-center">
          <div className="relative flex search-bar *:duration-500 justify-center rounded overflow-hidden ">
            <button
              className="search-bar-btn bg-color-white active:bg-gray-3 hover:bg-color-blue py-2 px-3 "
              onClick={handleClick}
            >
              <SearchSvg />
            </button>
            <input
              type="search"
              placeholder="Buscar..."
              name="search"
              id="search"
              className="max-w-md search-bar-input -order-1 text-color-black bg-color-white w-0"
            />
          </div>
          <button
            className="dark-mode-toggle relative cursor-pointer w-12 h-6 rounded-full"
            onClick={toggleDarkMode}
          >
            <span className="absolute top-0 left-0 grid place-content-center duration-300 w-6 h-6 rounded-full *:w-6 *:h-6 *:rounded-full">
              <SunSvg className="sun absolute top-0 left-0 opacity-100 invisible text-color-white" />
              <MoonSvg className="moon absolute top-0 left-0 opacity-0 invisible text-color-black" />
            </span>
          </button>
          <nav className="navbar-container -translate-y-1 flex gap-6 items-center max-lg:hidden">
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
            {!login ? (
              <Link
                to="/login"
                className="title-s relative cursor-pointer btn-primary-m hover:translate-y-1 rounded"
              >
                Login
              </Link>
            ) : (
              <NavLink
                to="/account"
                className="title-s relative cursor-pointer navbar-link flex items-center gap-2"
              >
                {data.nome} <UserSvg className="*:active:stroke-purple-700" />
              </NavLink>
            )}
          </nav>
          <div className="navbar-mobile hidden items-center max-lg:block">
            <button
              className="navbar-toggle-btn flex flex-col gap-2 w-16 h-14 justify-center items-center"
              onClick={handleMenuClick}
            >
              <span className="bar rounded-full w-8 h-0.5 duration-300 bg-gray-3"></span>
              <span className="bar rounded-full w-8 h-0.5 duration-300 bg-gray-3"></span>
              <span className="bar rounded-full w-8 h-0.5 duration-300 bg-gray-3"></span>
            </button>
            <nav className="flex navbar-container-mobile z-20 h-max bg-color-white w-6/12 rounded-bl flex-col fixed overflow-hidden top-0 right-0 duration-300 shadow-lg *:duration-500 *:px-3 *:py-6 *:cursor-pointer *:flex *:items-center *:relative *:gap-2 *:w-full *:bg-text-color-white *:text-color-black">
              <NavLink
                to="/"
                className="title-s navbar-link-mobile"
                onClick={handleMenuClick}
              >
                Home
              </NavLink>
              <NavLink
                to="characters"
                className="title-s navbar-link-mobile"
                onClick={handleMenuClick}
              >
                Personagens
              </NavLink>

              <NavLink
                to="posts"
                className="title-s navbar-link-mobile"
                onClick={handleMenuClick}
              >
                Tags
              </NavLink>

              {!login ? (
                <Link
                  to="/login"
                  className="title-s relative cursor-pointer btn-primary-b flex justify-center"
                >
                  Login
                </Link>
              ) : (
                <NavLink
                  to="/account"
                  className="title-s relative cursor-pointer navbar-link-mobile flex items-center gap-2"
                >
                  {data.nome} <UserSvg className="text-color-black" />
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
