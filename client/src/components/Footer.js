import React from 'react';
import { ReactComponent as GithubSvg } from '../assets/icon/github.svg';
import { ReactComponent as LinkedinSvg } from '../assets/icon/linkedin.svg';
import { ReactComponent as DiscordSvg } from '../assets/icon/discord.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container mx-auto grid max-md:grid-cols-2 gap-4">
        <div className="about gap-6 grid  pr-3 pb-4">
          <h2 className="footer-title title-m">Sobre</h2>
          <p className="footer-text text-s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec
            pretium tristique, ligula nibh scelerisque nulla, at interdum urna
          </p>
        </div>
        <span className="separator h-5/6 w-px opacity-20 in-black-bg justify-self-center self-center"></span>
        <div className="flex flex-col gap-3 col-start-3 col-end-3 row-span-1 row-end-1 px-3">
          <h2 className="title-m self-center text-nowrap max-sm:text-wrap">
            Links Rapidos
          </h2>
          <ul className="footer-links flex flex-col gap-2 lg:self-center">
            <li className="footer-link relative flex items-center">
              <a href="/" className="pl-3 duration-500">
                Personagens
              </a>
            </li>
            <li className="footer-link relative flex items-center">
              <a href="/" className="pl-3 duration-500">
                Tags
              </a>
            </li>
            <li className="footer-link relative flex items-center">
              <a href="/" className="pl-3 duration-500">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright col-start-1 col-end-4 row-start-1 row-end-3 flex flex-col justify-center items-center gap-6">
          <span className="separator w-4/5 h-px in-black-bg opacity-20"></span>
          <p className="text-s">
            &copy; 2024 Undertale Blog. Todos os direitos reservados.
          </p>
          <div className="social flex gap-6">
            <a href="/" className="rounded shadow-2xl duration-500 p-2">
              <GithubSvg />
            </a>
            <a href="/" className="rounded shadow-2xl duration-500 p-2">
              <DiscordSvg />
            </a>
            <a href="/" className="rounded shadow-2xl duration-500 p-2">
              <LinkedinSvg />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;