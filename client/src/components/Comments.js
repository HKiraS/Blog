import React from 'react';
import '../styles/Comments.css';
// import { Posts } from './Posts';
import { ReactComponent as WhatsappSvg } from '../assets/icon/whatsapp.svg';
import { ReactComponent as FacebookSvg } from '../assets/icon/facebook.svg';
import { ReactComponent as XSvg } from '../assets/icon/twitter-x.svg';
// import { ReactComponent as ResponseSvg } from '../assets/icon/response.svg';
import { ReactComponent as OptionsSvg } from '../assets/icon/threePoints.svg';
import { ReactComponent as SendSvg } from '../assets/icon/send.svg';

function Comments() {

  return (
    <section className="comments max-w-4xl mx-auto py-16">
      <div className="mx-auto flex flex-col max-w-2xl">
        <h2 className="title-m">Comentários</h2>
        <div className="flex gap-4 my-6">
          <button>
            <WhatsappSvg />
          </button>
          <button>
            <FacebookSvg />
          </button>
          <button>
            <XSvg className="w-5" />
          </button>
          <button className="bg-gray-300 rounded-full p-1">
            <OptionsSvg className="rotate-90" />
          </button>
        </div>
        <div className="comments-container flex gap-8 w-full mb-4  overflow-hidden">
          <div className="border-solid border-2 border-gray-300 rounded-full focus:border-gray-900 hover:border-gray-500 duration-500 flex items-center px-4 w-full peer">
            <input
              type="text"
              id='user-comment'
              placeholder="Escreva um comentario..."
              className="w-full p-3 peer-focus-within:border-gray-900"
            />
            <button className="cursor-pointer">
              <SendSvg />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
