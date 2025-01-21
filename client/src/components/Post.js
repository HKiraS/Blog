import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ClockSvg } from '../assets/icon/clock.svg';
import { ReactComponent as CalendarSvg } from '../assets/icon/calendar.svg';
import '../styles/RecentPosts.css';
import Image from './Helper/Image';

export function Posts({
  img,
  title,
  description,
  timeRead,
  date,
  classes = 'small',
  ...props
}) {
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

  return (
    <Link to={`/posts/${title}`}>
      <div
        className={`post-box bg-gray-4 hover:-translate-y-3 max-sm:w-full shadow-sm cursor-pointer rounded hover:shadow-lg overflow-hidden duration-500 h-fit ${classes}`}
        {...props}
      >
        <div className="post-image flex flex-col justify-end relative h-80">
          <Image
            className="h-full w-full object-cover"
            classcontainer="rounded-none"
            src={img}
            alt={`imagem de ${title}`}
          />
        </div>
        <div className="post-content flex flex-col px-6 max-md:px-4 pt-4 max-md:pt-2 pb-8 ">
          <h2
            className={`'post-title duration-500 ${
              classes.includes('main') ? 'title-b' : 'title-m'
            }`}
          >
            {title}
          </h2>
          <div className="flex gap-8 items-center mt-2 max-md:mt-1 mb-3 max-md:mb-2 text-s flex-wrap max-2xl:gap-4">
            <div className="icon flex items-center gap-1 text-gray-2">
              <ClockSvg />
              <span className="self-center">{timeRead}</span>
            </div>
            <div className="icon flex items-center gap-1 text-gray-2">
              <CalendarSvg />
              <span className="self-center">{date}</span>
            </div>
          </div>
          <p
            className={`post-description ${
              classes.includes('main') ? 'title-s' : 'text-n'
            }`}
          >
            {description}
          </p>
          <span
            to={`/posts/${title}`}
            className="btn-secundary-s rounded mt-4 text-center max-w-max max-md:max-w-full"
          >
            Leia Mais
          </span>
        </div>
      </div>
    </Link>
  );
}
