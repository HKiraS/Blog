import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { ReactComponent as ClockSvg } from '../assets/icon/clock.svg';
import { ReactComponent as CalendarSvg } from '../assets/icon/calendar.svg';
import '../styles/RecentPosts.css';

export function Posts({
  img,
  title,
  description,
  timeRead,
  date,
  classes = 'small',
  onClick = (event) => {
    event.preventDefault();
  },
}) {
  // if (classes.includes('ultra-small') && title.length > 12) {
  //   title = title.substring(0, 9).padEnd(12, '...');
  // }

  // if (classes.includes('ultra-small') && description.length > 20) {
  //   description = description.substring(0, 17).padEnd(20, '...');
  // }

  if (classes.includes('small') && title.length > 16) {
    title = title.substring(0, 13).padEnd(16, '...');
  } else if (title.length > 27) {
    title = title.substring(0, 27).padEnd(30, '...');
  }

  if (classes.includes('small') && description.length > 50) {
    description = description.substring(0, 47).padEnd(50, '...');
  } else if (description.length > 197) {
    description = description.substring(0, 197).padEnd(200, '...');
  }

  const classPost = `post-box shadow-sm cursor-pointer rounded shadow-lg overflow-hidden duration-500 h-fit ${classes}`;
  const classesTitle = classes.includes('main')
    ? 'post-title duration-500 title-b'
    : 'post-title duration-500 title-m';
  const classesText = classes.includes('main')
    ? 'post-description title-s'
    : 'post-description text-n';

  return (
    <Link to={'/posts/' + title}>
      <div className={classPost}>
        <div className="post-image flex flex-col justify-end relative">
          <img
            className="h-full w-full object-cover "
            src={img}
            alt={`imagem de ${title}`}
          />
        </div>
        <div className="post-content flex flex-col px-6 max-md:px-4 pt-4 max-md:pt-2 pb-8 ">
          <h2 className={classesTitle}>{title}</h2>
          <div className="flex gap-4 lg:gap-8 items-center mt-2 max-md:mt-1 mb-3 max-md:mb-2 text-s flex-wrap max-lg:gap-2">
            <div className="icon flex items-center gap-1">
              <ClockSvg />
              <span className="self-center">{timeRead}</span>
            </div>
            <div className="icon flex items-center gap-1">
              <CalendarSvg />
              <span className="self-center">{date}</span>
            </div>
          </div>
          <p className={classesText}>{description}</p>
          <Link to={`/posts/${title}`} className="btn-secundary-s rounded mt-4 text-center max-w-max max-md:max-w-full">
            Leia Mais
          </Link>
        </div>
      </div>
    </Link>
  );
}
