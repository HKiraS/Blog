import React from 'react';
import '../styles/Footer.css';
import github from '../assets/images/icon/github.svg';
import linkedin from '../assets/images/icon/linkedin.svg';
import discord from '../assets/images/icon/discord.svg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container mx-auto grid gap-4">
        <div className="about gap-6 grid pr-3 pb-4">
          <h2 className="footer-title title-m-desktop">Sobre</h2>
          <p className="footer-text text-s-desktop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            mattis blandit nulla ut tincidunt. In sollicitudin, lorem nec
            pretium tristique, ligula nibh scelerisque nulla, at interdum urna
            ante in tortor. Nunc mattis leo non ex placerat sollicitudin.
            Praesent consequat sagittis mi, at efficitur dui fermentum ac.
            Aliquam id bibendum magna. Morbi consequat justo eu ex facilisis
            volutpat. Sed eget sagittis eros. Duis arcu odio, lobortis semper
            tempor at, fringilla at velit. Phasellus venenatis porttitor nibh,
            vel malesuada nibh aliquet blandit. Pellentesque nibh nunc, eleifend
            sed odio in, suscipit porttitor justo. In finibus in nibh id cursus.
            Nullam porta maximus nisi, vitae tristique metus. do Post 1
          </p>
        </div>
        <span className="separator h-5/6 w-px opacity-20 in-black-bg justify-self-center self-center"></span>
        <div className="flex flex-col gap-3 col-start-3 col-end-3 row-span-1 row-end-1 px-3">
          <h2 className="footer-title title-m-desktop">Links Rapidos</h2>
          <ul className="footer-links ml-6">
            <li className="footer-link relative flex items-center">
              <a href="/" className='duration-500'>Personagens</a>
            </li>
            <li className="footer-link relative flex items-center">
              <a href="/" className='duration-500'>Tags</a>
            </li>
            <li className="footer-link relative flex items-center">
              <a href="/" className='duration-500'>Contato</a>
            </li>
          </ul>
        </div>
        <div className="copyright col-start-1 col-end-4 row-start-1 row-end-3 flex flex-col justify-center items-center gap-6">
          <span className="separator w-4/5 h-px in-black-bg opacity-20"></span>
          <p className='text-s-desktop'>&copy; 2024 Undertale Blog. Todos os direitos reservados.</p>
          <div className="social flex gap-6">
            <a href="/" className='rounded shadow-2xl shadow-white duration-500 p-2'><img src={github} alt="Link para o Github" /></a>
            <a href="/" className='rounded shadow-2xl shadow-white duration-500 p-2'><img src={discord} alt="Link para o Discord" /></a>
            <a href="/" className='rounded shadow-2xl shadow-white duration-500 p-2'><img src={linkedin} alt="Link para o Linkedin" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
