import React, { useState } from 'react';
import { ReactComponent as LikeSvg } from '../assets/icon/right.svg';
import { ReactComponent as ResponseSvg } from '../assets/icon/response.svg';
import { ReactComponent as OptionsSvg } from '../assets/icon/threePoints.svg';

function Comment({ comment }) {
  const [userReactions, setUserReactions] = useState({});
  const [comments, setComments] = useState(comment);

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
    <>
      {comments.map((comment, index) => {
        return (
          <div>
            <div
              className="comment w-full"
              id={`comment-${comment.id}`}
              key={comment.name +" - "+ comment.id}
            >
              <div className="perfil flex gap-2 items-center">
                <img
                  src={comment.img}
                  alt={comment.name}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <span className="name-user">{comment.name}</span>
                <span className="time-ago color-gray-2">{'3 h'}</span>
              </div>
              <p className="text-n">{comment.comment}</p>
              <div className="comment-options flex gap-16 justify-self-end mt-3">
                <button>
                  <OptionsSvg className="w-5 options" />
                </button>
                <button className="flex gap-1 items-center">
                  <ResponseSvg className="w-5" />
                  <span className="text-s">Responder</span>
                </button>
                <div className="likes-container flex gap-3 *:items-center">
                  <button
                    className={`flex gap-1 text-s like *:duration-300 ${
                      userReactions[comment.id] === 'like' ? 'active' : ''
                    }`}
                    onClick={() => {
                      handleReaction(comment.id, 'like');
                    }}
                  >
                    <span className="">{comment.likes}</span>
                    <LikeSvg className="-rotate-90 w-6" />
                  </button>
                  <button
                    className={`flex gap-1 text-s dislike *:duration-300 ${
                      userReactions[comment.id] === 'dislike' ? 'active' : ''
                    }`}
                    onClick={() => {
                      handleReaction(comment.id, 'dislike');
                    }}
                  >
                    <span className="">- {comment.dislikes}</span>
                    <LikeSvg className="rotate-90 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Comment;
