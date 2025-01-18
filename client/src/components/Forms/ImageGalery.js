import React from "react";

function ImageGallery({ previews, setPreviews, ...props }) {

  const removeImg = (e) => {
    setPreviews((prev) => prev.filter((_, index) => index !== e));
  };

  return (
    <div className="flex overflow-hidden gap-3" {...props}>
      <div className="flex gap-3 overflow-auto pb-3">
        {previews.length === 0 && (
          <div
          className="flex justify-center items-center relative max-w-48 h-28 border-solid border-2 border-gray-950 rounded overflow-hidden max-md:grid-cols-1 flex-shrink-0"
        >
          <p className="color-gray-500 text-center">
            Nenhuma imagem selecionada.
          </p>
        </div>
        )}
        {previews.map((img, index) => (
          <div
            key={index}
            id={index}
            className="relative max-w-48 h-28 border-solid border-2 border-gray-950 rounded overflow-hidden max-md:grid-cols-1 flex-shrink-0"
            onClick={() => removeImg(index)}
          >
            <span className="absolute black-bg w-full h-full opacity-0 hover:opacity-100 duration-300 z-10 color-white flex justify-center items-center title-m cursor-pointer">
              Remover
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