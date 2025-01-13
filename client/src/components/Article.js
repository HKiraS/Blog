import React from 'react';
import '../styles/Article.css';
import { ReactComponent as ClockSvg } from '../assets/icon/clock.svg';
import { ReactComponent as CalendarSvg } from '../assets/icon/calendar.svg';
import { ReactComponent as LikeSvg } from '../assets/icon/like.svg';
import { ReactComponent as ViewSvg } from '../assets/icon/view.svg';
import { ReactComponent as MinusSvg } from '../assets/icon/minus.svg';
import { ReactComponent as PlusSvg } from '../assets/icon/plus.svg';
import { ReactComponent as ContrastSvg } from '../assets/icon/contrast.svg';
import { ReactComponent as ShareSvg } from '../assets/icon/share.svg';
import imgExemplo from '../assets/images/girl random.jpeg';

function reducer(state, action) {
  switch (action) {
    case 'increment':
      state += 2;
      window.localStorage.setItem('fontSize', state);
      return state;
    case 'decrement':
      state -= 2;
      window.localStorage.setItem('fontSize', state);
      return state;
    default:
      throw new Error('Ação inexistente');
  }
}

function Article({ data }) {
  const [Like, setLike] = React.useState(false);
  const fontSize = window.localStorage.getItem('fontSize')
    ? window.localStorage.getItem('fontSize')
    : 14;
  const [state, dispatch] = React.useReducer(reducer, fontSize);
  const articleContainer = React.useRef();

  function handleLike({ currentTarget }) {
    setLike(!Like);
    currentTarget.classList.toggle('active');
  }

  function changeColorContent() {
    if (articleContainer.current) {
      articleContainer.current.classList.toggle('dark');
    }
  }

  return (
    <article
      className="article-post max-w-4xl mx-auto py-16 mb-16 duration-300"
      ref={articleContainer}
    >
      <div className="article-post-container mx-auto flex flex-col items-center">
        <figure className="img-post-container">
          <img
            src="https://i.pinimg.com/736x/4c/2a/39/4c2a39e777d2447f23bb73b7cbcdfd97.jpg"
            alt="garota"
            className="img-post"
          />
        </figure>

        <h1 className="title-m mt-8">{data.title}</h1>
        <h2 className="text-n autor mb-6">{data.author}</h2>
        <div className="tags-container flex gap-4 mb-4 mx-auto">
          {data.tags.map((tag) => (
            <span className="tag-post duration-300" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="post-info flex gap-8 mb-8 mx-auto">
          <div className="icon flex items-center gap-1">
            <ClockSvg />
            <span className="text-s">{data.timeRead}</span>
          </div>
          <div className="icon flex items-center gap-1">
            <CalendarSvg />
            <span className="text-s">{data.date}</span>
          </div>
          <div className="icon flex items-center gap-1">
            <LikeSvg />
            <span className="text-s">{data.likes} curtidas</span>
          </div>
          <div className="icon flex items-center gap-1">
            <ViewSvg />
            <span className="text-s">{data.views} visualizações</span>
          </div>
        </div>
        <div className="flex w-full max-w-xl justify-between px-8 items-center">
          <div className="acessability-container flex gap-3">
            <button
              className="border-2 p-2 duration-500 border-black border-solid rounded"
              onClick={changeColorContent}
            >
              <ContrastSvg />
            </button>
            <button
              className="border-2 p-2 duration-500 border-black border-solid rounded"
              onClick={() => dispatch('increment')}
              disabled={state >= 20}
            >
              <PlusSvg />
            </button>
            <button
              className="border-2 p-2 duration-500 border-black border-solid rounded"
              onClick={() => dispatch('decrement')}
              disabled={state === 12}
            >
              <MinusSvg />
            </button>
          </div>
          <div className="share-container flex gap-4">
            <button
              className="icon flex items-center gap-1 duration-300"
              onClick={handleLike}
            >
              <LikeSvg className="w-4 h-4" />
              <span>Curtir</span>
            </button>
            <button className="icon flex items-center gap-1">
              <ShareSvg className="w-4 h-4" />
              <span>Compartilhar</span>
            </button>
          </div>
        </div>
        <span className="separator w-11/12 h-0.5 col-span-2 row-start-1 place-self-center opacity-20 my-8"></span>
        <div
          className="max-w-screen-sm max-md:px-4 flex flex-col gap-4 article-text"
          style={{ fontSize: state + 'px' }}
        >
          {data.content.split('/n').map((text, index) => (
            <p className="text-m" key={index}>
              {text}
            </p>
          ))}
          <p className="text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
            tempor justo. Aenean ut tortor et dolor bibendum placerat a eget
            quam. Ut arcu augue, tincidunt vitae blandit ac, tempor et dolor.
            Proin vel pharetra nunc. Nullam et felis sit amet nisl malesuada
            interdum non eget dolor. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Suspendisse tempus
            sem sit amet eros rutrum, et viverra quam posuere. Maecenas placerat
            lacinia sem in tincidunt.
          </p>
          <p className="text-m">
            Maecenas commodo luctus magna in iaculis. Praesent vel urna arcu.
            Cras at laoreet arcu. Etiam ac tincidunt ex. Sed sollicitudin
            sodales blandit. Curabitur suscipit, est non efficitur mattis, leo
            tortor mollis erat, eget mattis dolor sem a elit.
          </p>
          <p className="text-m">
            Donec dictum elit id ipsum tincidunt, non bibendum nulla egestas. In
            aliquam auctor massa, id tincidunt massa mattis eu. Integer
            vulputate vehicula auctor. Nullam in aliquam dui. Sed commodo nulla
            id purus posuere rhoncus sed et ex. Mauris efficitur imperdiet
            ultricies. Nulla facilisi. Integer eu lorem turpis. Nulla
            consectetur, sem ut scelerisque placerat, leo arcu posuere orci,
            interdum sollicitudin tortor nulla auctor nisl. Ut a vestibulum
            augue, eget ornare magna. Suspendisse iaculis lacus sed euismod
            pellentesque. Suspendisse scelerisque eget augue sit amet
            consectetur. Aenean id ipsum vel augue aliquet porttitor. Donec a
            diam non nunc eleifend semper id id quam. Aenean ornare egestas nibh
            a iaculis.
          </p>
          <figure className="my-8">
            <img
              src={imgExemplo}
              alt="Exemplo de imagem"
              title="Exemplo de imagem"
              className="rounded"
            />
            <figcaption
              className="my-2 ml-2"
              style={{ fontSize: fontSize - 2 + 'px' }}
            >
              Exemplo de Legenda{' '}
            </figcaption>
          </figure>
          <p className="text-m">
            Praesent ac magna purus. Ut convallis sed elit eu gravida. Maecenas
            scelerisque sagittis nisl, in condimentum ante efficitur ac.
            Maecenas vitae dui vitae tellus gravida sollicitudin sit amet vel
            massa. Sed finibus lacus sed convallis elementum. Integer
            condimentum lorem sit amet lacinia fringilla. In cursus enim ut eros
            mollis, et eleifend mi lacinia. Maecenas rutrum elit ut nunc
            lacinia, quis porttitor ipsum vulputate. Etiam bibendum nibh
            pulvinar, luctus magna vitae, feugiat lorem. Proin sit amet dictum
            libero. Nunc dui lectus, hendrerit sed mauris sit amet, aliquam
            sollicitudin dolor. Pellentesque id lectus sed elit egestas
            pulvinar. Nunc vulputate orci quis tincidunt iaculis. Aliquam
            vestibulum maximus sem in aliquet.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Article;
