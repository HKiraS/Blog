import React from 'react';
import { Posts } from './Posts';
import '../styles/RecentPosts.css';

export function RecentPosts({ data }) {
  const mainPost = data[0];
  mainPost.classes = 'main-post';

  const sidePosts = data.filter((_, index) => index > 0 && index < 4);
  sidePosts.forEach((item) => {
    item.classes = 'side-post';
  });

  const smallPosts = data.filter((_, index) => index > 3 && index < 8);
  smallPosts.forEach((item) => {
    item.classes = 'small-post';
  });

  return (
    <section className="">
      <div className="max-w-screen-2xl container mx-auto px-4 lg:px-0 recent-posts">
        <h1 className="title-b w-fit relative my-16 justify-self-center">
          Destaques
        </h1>
        <div className="posts-container container max-md:px-4 mx-auto grid grid-cols-10 max-md:flex max-md:flex-col max-lg:gap-0 max-lg:px-0">
          <div className="col-span-5 row-span-3 w-full h-full flex flex-col gap-8 ">
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
            <div className="small-posts-container col-span-5 row-start-2 row-end-4 max-w-full grid grid-cols-2 gap-8 ">
              <span className="separator w-11/12 h-0.5 col-span-2 row-start-1 place-self-center opacity-20"></span>
              {smallPosts.map(
                ({ img, title, description, timeRead, date, classes, id }) => (
                  <Posts
                    key={title+" "+id}
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
          <span className="separator col-start-6 row-span-3 h-5/6 w-0.5 max-md:h-0.5 max-md:w-5/6 max-md:my-8 place-self-center opacity-20"></span>
          <div className="side-posts-container col-start-7 col-end-11 row-span-full grid grid-cols-1 place-content-center gap-12 max-md:gap-0 ">
            {sidePosts.map(
              (
                { img, title, description, timeRead, date, classes },
                index,
                arr,
              ) => {
                return (
                  <div key={index}>
                    <Posts
                      img={img}
                      title={title}
                      description={description}
                      timeRead={timeRead}
                      date={date}
                      classes={classes}
                    />
                    {arr.length - 1 !== index ? (
                      <span className="separator md:hidden max-md:h-0.5 max-md:w-5/6 max-md:my-8 place-self-center opacity-20"></span>
                    ) : null}
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
