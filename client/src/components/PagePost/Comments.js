import React, { useState } from 'react';
import '../../styles/Comments.css';
// import { Posts } from './Posts';
import Comment from './Comment';
import { ReactComponent as WhatsappSvg } from '../../assets/icon/whatsapp.svg';
import { ReactComponent as FacebookSvg } from '../../assets/icon/facebook.svg';
import { ReactComponent as XSvg } from '../../assets/icon/twitter-x.svg';

import { ReactComponent as OptionsSvg } from '../../assets/icon/threePoints.svg';
import { ReactComponent as SendSvg } from '../../assets/icon/send.svg';

function Comments() {
  const arrayComments = [
    {
      img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
      id: '1',
      name: 'Maria1',
      date: '10/10/2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      likes: 34,
      dislikes: 12,
      response: [
        {
          img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
          id: '1_1',
          name: 'Maria4235',
          date: '10/10/2023',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
          likes: 23,
          dislikes: 32,
          response: [],
        },
        {
          img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
          id: '1_2',
          name: 'Maria2341',
          date: '10/10/2023',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
          likes: 1,
          dislikes: 0,
          response: [],
        },
      ],
    },
    {
      img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
      id: '2',
      name: 'Maria12',
      date: '10/10/2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      likes: 12,
      dislikes: 12,
      response: [],
    },
    {
      img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
      id: '3',
      name: 'Maria123',
      date: '10/10/2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      likes: 54,
      dislikes: 12,
      response: [],
    },
    {
      img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
      id: '4',
      name: 'Maria213',
      date: '10/10/2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      likes: 0,
      dislikes: 12,
      response: [],
    },
    {
      img: 'https://i.pinimg.com/736x/77/29/c8/7729c8fbc7ead89b1a5f29c860108b58.jpg',
      id: '5',
      name: 'Maria2134',
      date: '10/10/2023',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      likes: 45,
      dislikes: 12,
      response: [],
    },
  ];
  const [comments, setComments] = React.useState(arrayComments);
  const [userReactions, setUserReactions] = useState({});

  const handleReaction = (commentId, reactionType) => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          const currentReaction = userReactions[commentId];
          let newLikes = comment.likes;
          let newDislikes = comment.dislikes;

          // Remover reação anterior se existir
          if (currentReaction === 'like') {
            newLikes--;
          } else if (currentReaction === 'dislike') {
            newDislikes--;
          }

          // Adicionar nova reação se diferente da anterior
          if (currentReaction !== reactionType) {
            if (reactionType === 'like') {
              newLikes++;
            } else {
              newDislikes++;
            }
          }

          // Atualizar o estado das reações do usuário
          setUserReactions((prev) => ({
            ...prev,
            [commentId]: currentReaction === reactionType ? null : reactionType,
          }));

          return {
            ...comment,
            likes: newLikes,
            dislikes: newDislikes,
          };
        }
        return comment;
      });
    });
  };

  return (
    <section className="comments max-w-4xl mx-auto py-16 rounded-t-md">
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
            <button className="cursor-pointer text-color-black">
              <SendSvg />
            </button>
          </div>
          <span className="separator w-11/12 h-0.5 col-span-2 row-start-1 place-self-center opacity-20 my-6"></span>
          <div className="comments-list flex flex-col gap-4">
            {comments ? (
              comments.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    setComments={setComments}
                    comment={comment}
                    handleReaction={handleReaction}
                    userReactions={userReactions}
                  />
                );
              })
            ) : (
              <p>Não existem comentários</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
