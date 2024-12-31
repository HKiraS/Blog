import React from 'react';
import { Button } from './Button';
import '../styles/RecentPosts.css';
import clock from '../assets/images/icon/clock.svg';
import calendar from '../assets/images/icon/calendar.svg';

export function Postes({
  img,
  title,
  description,
  timeRead,
  date,
  classes,
  href = '/',
  onClick = () => {
    window.location.href = href;
  },
}) {
  title = title.length > 30 ? title.substring(0, 27).padEnd(30, '.') : title;
  if (classes.includes('small') && title.length > 20) {
    title = title.substring(0, 17).padEnd(20, '...');
  } else if (title.length > 27) {
    title = title.substring(0, 27).padEnd(30, '...');
  } 
  
  if (classes.includes('small') && description.length > 200) {
    description = description.substring(0, 97).padEnd(100, '...');
  } else if (description.length > 197) {
    description = description.substring(0, 197).padEnd(200, '...');
  } 

  const classPost = `post-box shadow-sm cursor-pointer rounded overflow-hidden duration-500 ${classes}`;
  const classesTitle = classes.includes('main')
    ? 'post-title duration-500 title-b-desktop'
    : 'post-title duration-500 title-m-desktop';
  const classesText = classes.includes('main')
    ? 'post-description title-p-desktop'
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
      <div className="post-content flex flex-col px-6 pt-4 pb-8">
        <h2 className={classesTitle}>{title}</h2>
        <div className="flex gap-8 items-center mt-2 mb-3 text-p-desktop ">
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
        <Button text="Leia mais" type="secundary" size="p" classes="mt-4 max-w-max" />
      </div>
    </div>
  );
}
