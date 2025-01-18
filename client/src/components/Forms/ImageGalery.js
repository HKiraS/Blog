import React from "react";
import { ReactComponent as CloseSvg } from '../../assets/icon/close.svg';


function ImageGallery({ imgs, onClick, ...props }) {

  return (
    <div className="flex overflow-hidden gap-3" {...props}>
      <div className="flex gap-3 overflow-auto pb-3">
        {imgs.length === 0 && (
          <div
          className="flex justify-center items-center relative max-w-48 h-28 border-solid border-2 border-gray-950 rounded overflow-hidden max-md:grid-cols-1 flex-shrink-0"
        >
          <p className="color-gray-2 text-center">
            Nenhuma imagem selecionada.
          </p>
        </div>
        )}
        {imgs.map((img, index) => (
          <div
            key={index}
            id={index}
            className="relative w-48 h-28 border-solid border-2 border-gray-950 rounded overflow-hidden max-md:grid-cols-1 flex-shrink-0"
            onClick={() => onClick(index)}
          >
            <span className="absolute black-bg w-full h-full opacity-0 hover:opacity-100 duration-300 z-10 color-white flex justify-center items-center title-m cursor-pointer">
              <CloseSvg className="w-10 h-10 color-orange"  />
            </span>
            <img
              src={img}
              className="h-full w-full object-cover"
              alt="Imagem"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;