import React from 'react';
import { Button } from './Button';
import '../styles/RecentPosts.css';
import clock from '../assets/images/icon/clock.svg';
import calendar from '../assets/images/icon/calendar.svg';

export function Posts({
  img,
  title,
  description,
  timeRead,
  date,
  classes = 'small',
  href = '/',
  onClick = () => {
    window.location.href = href;
  },
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

  const classPost = `post-box shadow-sm cursor-pointer rounded shadow-lg overflow-hidden duration-500 h-fit ${classes}`;
  const classesTitle = classes.includes('main')
    ? 'post-title duration-500 title-b-desktop'
    : 'post-title duration-500 title-m-desktop';
  const classesText = classes.includes('main')
    ? 'post-description title-s-desktop'
    : 'post-description text-n-desktop';

  return (
    <div className={classPost} onClick={onClick}>
      <div className="post-image flex flex-col justify-end relative">
        <img
          className="h-full w-full object-cover "
          src={img}
          alt="post-image"
        />
      </div>
      <div className="post-content flex flex-col px-6 max-md:px-4 pt-4 max-md:pt-2 pb-8 ">
        <h2 className={classesTitle}>{title}</h2>
        <div className="flex gap-4 lg:gap-8 items-center mt-2 max-md:mt-1 mb-3 max-md:mb-2 text-s-desktop flex-wrap max-lg:gap-2">
          <div className="time-read flex items-center gap-1">
            <img className="" src={clock} alt="relógio" />
            <span className="self-center">{timeRead}</span>
          </div>
          <div className="date flex items-center gap-1">
            <img src={calendar} alt="calendário" />
            <span className="self-center">{date}</span>
          </div>
        </div>
        <p className={classesText}>{description}</p>
        <Button
          text="Leia mais"
          type="secundary"
          size="s"
          classes="mt-4 max-w-max max-md:max-w-full"
        />
      </div>
    </div>
  );
}
