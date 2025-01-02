import React from 'react';
import '../styles/RecentPosts.css';
import { Posts } from './Posts';

export function RecentPosts({ data }) {
  const mainPost = data[0];
  mainPost.classes = 'main-post';

  const sidePosts = data.filter((_, index) => index > 0 && index < 5);
  sidePosts.forEach((item) => {
    item.classes = 'side-post';
  });

  const smallPosts = data.filter((_, index) => index > 4 && index < 12);
  smallPosts.forEach((item) => {
    item.classes = 'small-post';
  });

  return (
    <section className="">
      <div className="container mx-auto recent-posts">
        <h1 className="title-b-desktop w-fit relative my-16">Destaques</h1>
        <div className="posts-container grid grid-cols-10">
          <div className="col-span-5 row-span-3 w-full h-full grid grid-cols-1 gap-8 ">
            <div className="main-post-container col-span-5 row-start-1 w-full">
              <Posts
                date={mainPost.date}
                description={mainPost.description}
                title={mainPost.title}
                img={mainPost.img}
                timeRead={mainPost.timeRead}
                classes={mainPost.classes}
              />
            </div>
            <div className="small-posts-container col-span-5 row-start-2 row-end-4 max-w-full grid grid-cols-2 gap-8">
              <span className="separator w-11/12 h-0.5 col-span-2 row-start-1 place-self-center opacity-20"></span>
              {smallPosts.map(
                ({ img, title, description, timeRead, date, classes, id }) => (
                  <Posts
                    key={id}
                    img={img}
                    title={title}
                    description={description}
                    timeRead={timeRead}
                    date={date}
                    classes={classes}
                  />
                ),
              )}
            </div>
          </div>
          <span className="separator col-start-6 row-span-3 h-5/6 w-0.5 place-self-center opacity-20"></span>
          <div className="side-posts-container col-start-7 col-end-11 row-span-full grid grid-cols-1 place-content-center gap-12">
            {sidePosts.map(
              ({ img, title, description, timeRead, date, classes, id }) => (
                <Posts
                  img={img}
                  key={id}
                  title={title}
                  description={description}
                  timeRead={timeRead}
                  date={date}
                  classes={classes}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
