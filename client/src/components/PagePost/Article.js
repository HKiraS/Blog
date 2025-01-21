import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/Article.css';
import { ReactComponent as ClockSvg } from '../../assets/icon/clock.svg';
import { ReactComponent as CalendarSvg } from '../../assets/icon/calendar.svg';
import { ReactComponent as LikeSvg } from '../../assets/icon/like.svg';
import { ReactComponent as ViewSvg } from '../../assets/icon/view.svg';
import { ReactComponent as MinusSvg } from '../../assets/icon/minus.svg';
import { ReactComponent as PlusSvg } from '../../assets/icon/plus.svg';
import { ReactComponent as ContrastSvg } from '../../assets/icon/contrast.svg';
import { ReactComponent as ShareSvg } from '../../assets/icon/share.svg';
import imgExemplo from '../../assets/images/girl random.jpeg';
import Image from '../Helper/Image';

function reducer(state, action) {
  switch (action) {
    case 'increment':
      state = state <= 24 ? state + 2 : state;
      window.localStorage.setItem('fontSize', state);
      return state;
    case 'decrement':
      state = state >= 12 ? state - 2 : state;
      window.localStorage.setItem('fontSize', state);
      return state;
    default:
      throw new Error('Ação inexistente');
  }
}

function Article({ data }) {
  const [Like, setLike] = React.useState(false);
  const fontSize = window.localStorage.getItem('fontSize')
    ? parseInt(window.localStorage.getItem('fontSize'))
    : 14;
  const [state, dispatch] = React.useReducer(reducer, fontSize);
  const articleRef = React.useRef();

  const params = useParams();

  const dataIndex = data.findIndex((item) => {
    return item.title === params.post;
  });

  data = data[dataIndex];
  const {
    title,
    img,
    tags,
    author,
    timeRead,
    date,
    views,
    likes,
    description,
  } = data;

  function handleLike({ currentTarget }) {
    setLike(!Like);
    currentTarget.classList.toggle('active');
  }

  function changeColorContent() {
    const article = articleRef.current;
    if (article) {
      if (
        window.localStorage.getItem('articleContrast') === 'active' &&
        article.classList.contains('dark')
      ) {
        window.localStorage.removeItem('articleContrast');
        article.classList.remove('dark');
      } else {
        article.classList.add('dark');
        window.localStorage.setItem('articleContrast', 'active');
      }
    }
  }

  useEffect(() => {
    const article = articleRef.current;
    if (!article) return;
    if (window.localStorage.getItem('articleContrast') === 'active') {
      article.classList.add('dark');
    }
  }, []);

  return (
    <article
      className="article-post max-w-4xl mx-auto py-16 max-md:py-8 mb-16 duration-300 rounded-b anime-down"
      ref={articleRef}
    >
      <div className="article-post-container mx-auto flex flex-col items-center max-md:max-w-full max-w-3xl">
        <figure className="w-10/12 h-80 max-sm:h-72 overflow-hidden rounded">
          <Image
            src={img}
            alt="garota"
            className="w-full h-full object-cover"
          />
        </figure>

        <h1 className="title-m mt-8 text-color-black">{title}</h1>
        <h2 className="text-n autor mb-6 color-gray-1">{author}</h2>
        <div className="tags-container flex gap-4 mb-4 mx-auto">
          {tags.map((tag) => (
            <Link
              to={'/search/' + tag}
              className="tag-post duration-300"
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </div>
        <div className="post-data flex flex-wrap gap-8 mb-8 px-8 max-sm:gap-4 mx-auto *:flex *:items-center *:gap-1 color-gray-2">
          <div className="icon">
            <ClockSvg />
            <span className="text-s">{timeRead}</span>
          </div>
          <div className="icon">
            <CalendarSvg />
            <span className="text-s">{date}</span>
          </div>
          <div className="icon">
            <LikeSvg />
            <span className="text-s">
              {likes > 1 ? likes + ' curtidas' : likes + ' curtidas'}
            </span>
          </div>
          <div className="icon">
            <ViewSvg />
            <span className="text-s">
              {views > 1 ? views + ' visualizações' : views + ' visualização'}
            </span>
          </div>
        </div>
        <div className="flex w-full flex-wrap max-w-xl justify-between max-sm:justify-center gap-4 px-8 items-center">
          <div className="acessability-container flex gap-3 *:border-2 *:p-2 *:duration-500 *:border-black *:border-solid *:rounded">
            <button className="" onClick={changeColorContent}>
              <ContrastSvg />
            </button>
            <button
              onClick={() => dispatch('increment')}
              disabled={state >= 24}
            >
              <PlusSvg />
            </button>
            <button
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
          className="max-w-screen-sm max-md:px-4 flex flex-col gap-4 article-text w-11/12 mx-auto"
          style={{ fontSize: state + 'px' }}
        >
          {description.split('/n').map((text, index) => (
            <p className="text-m" key={`paragraph-${index}`}>
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
            <Image
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
