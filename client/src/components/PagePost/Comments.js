import React from 'react';
import '../../styles/Comments.css';
// import { Posts } from './Posts';
// import Comment from '../Comment';
import { ReactComponent as WhatsappSvg } from '../../assets/icon/whatsapp.svg';
import { ReactComponent as FacebookSvg } from '../../assets/icon/facebook.svg';
import { ReactComponent as XSvg } from '../../assets/icon/twitter-x.svg';

import { ReactComponent as OptionsSvg } from '../../assets/icon/threePoints.svg';
import { ReactComponent as SendSvg } from '../../assets/icon/send.svg';

function Comments() {
  // const arrayComments = [
  //   {
  //     img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
  //     id: '1',
  //     name: 'Maria1',
  //     date: '10/10/2023',
  //     comment:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     likes: 34,
  //     dislikes: 12,
  //     response: [
  //       {
  //         img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
  //         id: '1-1',
  //         name: 'Maria4235',
  //         date: '10/10/2023',
  //         comment:
  //           'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //         likes: 23,
  //         dislikes: 32,
  //         response: [],
  //       },
  //       {
  //         img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
  //         id: '1-2',
  //         name: 'Maria2341',
  //         date: '10/10/2023',
  //         comment:
  //           'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //         likes: 1,
  //         dislikes: 0,
  //         response: [],
  //       },
  //     ],
  //   },
  //   {
  //     img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
  //     id: '2',
  //     name: 'Maria12',
  //     date: '10/10/2023',
  //     comment:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     likes: 12,
  //     dislikes: 12,
  //     response: [],
  //   },
  //   {
  //     img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
  //     id: '3',
  //     name: 'Maria123',
  //     date: '10/10/2023',
  //     comment:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     likes: 54,
  //     dislikes: 12,
  //     response: [],
  //   },
  //   {
  //     img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
  //     id: '4',
  //     name: 'Maria213',
  //     date: '10/10/2023',
  //     comment:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     likes: 0,
  //     dislikes: 12,
  //     response: [],
  //   },
  //   {
  //     img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
  //     id: '5',
  //     name: 'Maria2134',
  //     date: '10/10/2023',
  //     comment:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     likes: 45,
  //     dislikes: 12,
  //     response: [],
  //   },
  // ];

  return (
    <section className="comments max-w-4xl mx-auto py-16">
      <div className="mx-auto flex flex-col max-w-2xl">
        <h2 className="title-m">Comentários</h2>
        <div className="flex gap-2 my-6 share-container *:p-2 *:rounded-full">
          <button className="whatsapp">
            <WhatsappSvg />
          </button>
          <button className="facebook">
            <FacebookSvg />
          </button>
          <button className="x">
            <XSvg className="w-5" />
          </button>
          <button className="bg-gray-300 rounded-full p-1">
            <OptionsSvg className="rotate-90" />
          </button>
        </div>
        <div className="comments-container flex gap-8 w-full mb-4 flex-col overflow-hidden">
          <div className="user-comment-container border-solid border-2 rounded-full duration-500 flex items-center px-4 w-full">
            <input
              type="text"
              id="user-comment"
              placeholder="Escreva um comentario..."
              className="w-full p-3"
            />
            <button className="cursor-pointer">
              <SendSvg />
            </button>
          </div>
          <span className="separator w-11/12 h-0.5 col-span-2 row-start-1 place-self-center opacity-20 my-6"></span>
          <div className="comments-list flex flex-col gap-4">
            {/* <Comment comment={arrayComments}/> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
