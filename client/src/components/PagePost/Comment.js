import React from 'react';
import { ReactComponent as LikeSvg } from '../../assets/icon/right.svg';
import { ReactComponent as ResponseSvg } from '../../assets/icon/response.svg';
import { ReactComponent as OptionsSvg } from '../../assets/icon/threePoints.svg';

function Comment({ comment, handleReaction, response = false, userReactions }) {

  return (
    <div className={`comment-container relative ${response ? 'my-0' : 'my-1'}`}>
      <div
        className={`comment w-full block ${response ? 'response col-start-2 col-end-3' : 'col-start-1 col-end-3'}`}
        id={`comment-${comment.id}`}
        key={comment.name + ' - ' + comment.id}
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
      {comment.response.length > 0 && comment.response.map((response) => {
        return <Comment key={response.id} comment={response} response={true} handleReaction={handleReaction} userReactions={userReactions} />;
      })}
    </div>
  );
}

export default Comment;
