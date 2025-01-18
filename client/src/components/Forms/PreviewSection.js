import React from "react";

function PreviewSection({ imgCape, textPreview, textContent }) {
  return (
    <div className="preview border-solid border-2 border-gray-500 py-3 px-5 flex flex-col items-center justify-self-center rounded max-w-60 h-full">
      <h2 className="title-s mb-6">Pré-visualização</h2>
      <div className="border-solid border-2 border-gray-400 w-48 h-24 justify-self-center rounded mb-4 flex items-center justify-center">
        {imgCape ? (
          <img
            src={imgCape}
            alt="Capa da imagem"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-center place-self-center">
            Nenhuma imagem selecionada
          </p>
        )}
      </div>
      <div className="text-sm">
        {textPreview ? (
          <div className="flex flex-col gap-2 col-start-2 col-end-3">
            <p>
              <strong>Nome do Arquivo:</strong> {textPreview.name}
            </p>
            <p>
              <strong>Tamanho do Arquivo:</strong> {textPreview.size} bytes
            </p>
            <p>
              <strong>Caracteres do Arquivo:</strong> {textContent.length}
            </p>
          </div>
        ) : (
          <p>Nenhum arquivo de texto selecionado</p>
        )}
      </div>
    </div>
  );
}

export default PreviewSection;