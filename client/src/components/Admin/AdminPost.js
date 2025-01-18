import React, { useRef } from 'react';
// import { ReactComponent as CloseSvg } from '../../assets/icon/close.svg';

const AdminPost = () => {
  // const formData = new FormData();
  const [previews, setPreviews] = React.useState([]);
  const [imgCape, setImgCape] = React.useState(null);
  const [textPreview, setTextPrewiew] = React.useState(null);
  const [textContent, setTextContent] = React.useState('');
  const fileImgRef = useRef(null);
  const textInputRef = useRef(null);
  const imagesInputRef = useRef(null);

  const handleSubmit = () => {};

  const handleImgsChange = async (e) => {
    e.preventDefault();

    if (!imagesInputRef.current) return;

    // Abre o seletor de arquivos
    imagesInputRef.current.click();

    // Aguarda a seleção dos arquivos
    const files = await new Promise((resolve) => {
      const handleFileChange = () => {
        const selectedFiles = Array.from(imagesInputRef.current.files); // Transforma os arquivos em um array
        resolve(selectedFiles);
        imagesInputRef.current.removeEventListener('change', handleFileChange);
      };

      imagesInputRef.current.addEventListener('change', handleFileChange);
    });

    if (!files || files.length === 0) return;

    // Cria URLs temporárias para as imagens
    const previewUrls = files.map((file) => URL.createObjectURL(file));

    // Atualiza o estado para armazenar as pré-visualizações
    setPreviews((prev) => [...prev, ...previewUrls]);
  };

  const addImgCape = async (e) => {
    e.preventDefault();

    if (!fileImgRef.current) return;

    // Dispara o clique no input para abrir o seletor de arquivos
    fileImgRef.current.click();

    // Espera o usuário selecionar o arquivo
    const file = await new Promise((resolve) => {
      const handleFileChange = () => {
        const selectedFile = fileImgRef.current.files[0];
        fileImgRef.current.removeEventListener('change', handleFileChange); // Remove o listener para evitar múltiplas chamadas
        resolve(selectedFile);
      };

      fileImgRef.current.addEventListener('change', handleFileChange);
    });

    if (!file) return; // Caso o usuário não selecione nada

    // Cria a URL de pré-visualização e define no estado
    const previewUrl = URL.createObjectURL(file);
    setImgCape(previewUrl);
    return file;
  };

  const removeImg = (e) => {
    const id = parseInt(e.currentTarget.id);
    setPreviews((prev) => prev.filter((_, index) => index !== id));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setImgCape(null);
    setTextPrewiew(null);
    setTextContent('');
    setPreviews([]);
  };

  const addText = async (e) => {
    e.preventDefault();
    if (!textInputRef.current) return;
    textInputRef.current.click();
    const fileText = textInputRef.current;

    const text = await new Promise((resolve) => {
      const handleFileChange = () => {
        const selectedFiles = fileText.files[0]; // Transforma os arquivos em um array
        resolve(selectedFiles);
        fileText.removeEventListener('change', handleFileChange);
      };

      fileText.addEventListener('change', handleFileChange);
    });
    if (!text) return;
    setTextPrewiew(text);

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      setTextContent(fileContent);
    };

    reader.onerror = () => {
      console.error('Erro ao ler o arquivo.');
    };

    reader.readAsText(text);
    return text;
  };

  return (
    <section className="container bg-white mx-auto flex flex-col justify-center items-center py-8 shadow-lg">
      <h1 className="title-b color-purple w-fit mb-12 mt-8">
        Envio dos Artigos
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 gap-8 grid grid-cols-2 max-w-xl  max-md:grid-cols-1"
      >
        <div className="flex flex-col gap-8">
          <div>
            <label htmlFor="img" className="title-s">
              Capa do Artigo
            </label>
            <button
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={addImgCape}
            >
              Upload da Capa do Artigo
            </button>
            <input
              ref={fileImgRef}
              type="file"
              accept="image/*"
              className="hidden"
              name="img"
              required
            />
          </div>
          <div>
            <label htmlFor="artigo" className="title-s">
              Artigo Escrito
            </label>
            <button
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={addText}
            >
              Upload de Arquivo .md
            </button>
            <input
              ref={textInputRef}
              type="file"
              accept=".md"
              className="hidden"
              name="artigo"
              required
            />
          </div>
          <div>
            <label htmlFor="imgs" className="title-s">
              Imagens
            </label>
            <button
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleImgsChange}
            >
              Upload de Imagens
            </button>
            <input
              type="file"
              name="imgs"
              multiple
              accept="image/*"
              ref={imagesInputRef}
              className="hidden"
              required
            />
          </div>
        </div>
        <div className="preview border-solid border-2 border-gray-500 py-3 px-5 flex flex-col items-center justify-self-center rounded max-w-60 ">
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
        <div className="col-span-2 row-span-2 flex overflow-hidden gap-3">
          <div className="flex gap-3 overflow-auto pb-3 scr">
            {previews.map((img, index) => {
              return (
                <div
                  key={index}
                  id={index}
                  className="relative max-w-48 h-28 border-solid border-2 border-gray-950 rounded overflow-hidden max-md:grid-cols-1 flex-shrink-0"
                  onClick={removeImg}
                >
                  <span className="absolute black-bg w-full h-full opacity-0 hover:opacity-100 duration-300 z-10 color-white flex justify-center items-center title-m cursor-pointer">
                    Remover
                  </span>
                  <img
                    src={img}
                    className="h-full w-full object-cover "
                    alt="Imagem"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between gap-4 mt-4 col-start-1 col-end-3">
          <button className="btn-secundary-m rounded" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="btn-primary-m rounded">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default AdminPost;
