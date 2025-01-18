import React, { useRef } from 'react';
import FileUploadField from '../Forms/FileUploadField';
import ImageGallery from '../Forms/ImageGalery';
import PreviewSection from '../Forms/PreviewSection';
// import { ReactComponent as CloseSvg } from '../../assets/icon/close.svg';

const AdminPost = () => {
  // const formData = new FormData();
  const [previews, setPreviews] = React.useState([]);
  const [imgCape, setImgCape] = React.useState(null);
  const [textPreview, setTextPrewiew] = React.useState(null);
  const [textContent, setTextContent] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const handleImgsChange = async (e) => {
    e.preventDefault();
    const input = e.target.nextElementSibling;

    if (!input) return;
    input.click();
    // Abre o seletor de arquivos

    // Aguarda a seleção dos arquivos
    const files = await new Promise((resolve) => {
      const handleFileChange = () => {
        const selectedFiles = Array.from(input.files); // Transforma os arquivos em um array
        resolve(selectedFiles);
        input.removeEventListener('change', handleFileChange);
      };

      input.addEventListener('change', handleFileChange);
    });

    if (!files || files.length === 0) return;

    // Cria URLs temporárias para as imagens
    const previewUrls = files.map((file) => URL.createObjectURL(file));

    // Atualiza o estado para armazenar as pré-visualizações
    setPreviews((prev) => [...prev, ...previewUrls]);
  };

  const addText = async (e) => {
    e.preventDefault();
    const input = e.target.nextElementSibling;

    if (!input) return;
    input.click();

    const text = await new Promise((resolve) => {
      const handleFileChange = () => {
        const selectedFiles = input.files[0];
        resolve(selectedFiles);
        input.removeEventListener('change', handleFileChange);
      };

      input.addEventListener('change', handleFileChange);
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

  const addImgCape = async (e) => {
    e.preventDefault();
    const input = e.target.nextElementSibling;

    if (!input) return;
    input.click();

    const file = await new Promise((resolve) => {
      const handleFileChange = () => {
        const selectedFile = input.files[0];
        input.removeEventListener('change', handleFileChange); // Remove o listener para evitar múltiplas chamadas
        resolve(selectedFile);
      };

      input.addEventListener('change', handleFileChange);
    });

    if (!file) return; // Caso o usuário não selecione nada

    // Cria a URL de pré-visualização e define no estado
    const previewUrl = URL.createObjectURL(file);
    setImgCape(previewUrl);
    return file;
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setImgCape(null);
    setTextPrewiew(null);
    setTextContent('');
    setPreviews([]);
  };

  return (
    <section className="container bg-white mx-auto flex flex-col justify-center items-center py-8 shadow-lg">
      <h1 className="title-b color-purple w-fit mb-12 mt-8">
        Envio dos Artigos
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 gap-8 grid grid-cols-2 max-w-xl  max-md:grid-cols-1 row-auto"
      >
        <div className="flex flex-col gap-6 justify-center">
          <FileUploadField
            type="file"
            multiple={false}
            required={true}
            accept={'image/*'}
            onClick={addImgCape}
            label={'Imagem de Capa'}
          />
          <FileUploadField
            type="file"
            multiple={false}
            required={true}
            accept={'.md'}
            onClick={addText}
            label={'Arquivo de Texto'}
          />
          <FileUploadField
            type="file"
            multiple={true}
            required={true}
            accept={'image/*'}
            onClick={handleImgsChange}
            label={'Imagens do Arquivo'}
          />
        </div>
        <PreviewSection imgCape={imgCape} textPreview={textPreview} textContent={textContent} />
        <ImageGallery previews={previews} setPreviews={setPreviews} className="col-start-1 col-end-3" />
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
