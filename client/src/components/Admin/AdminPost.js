import React from 'react';
import { createPost } from '../../firebase/utils';
import FileUploadField from '../Forms/FileUploadField';
import ImageGallery from '../Forms/ImageGalery';
import PreviewSection from '../Forms/PreviewSection';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';
import { ReactComponent as CloseSvg } from '../../assets/icon/close.svg';

const AdminPost = () => {
  const [imgPreviews, setImgPreviews] = React.useState([]);
  const [imgs, setImgs] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [imgCape, setImgCape] = React.useState(null);
  const [textPreview, setTextPrewiew] = React.useState(null);
  const [textContent, setTextContent] = React.useState('');
  const title = useForm();
  const topics = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        title: title.value,
        content: textContent,
        tags: tags,
      };

      const coverFile = imgCape;
      const contentImages = imgs.reduce((acc, img) => {
        return {
          ...acc,
          [img.name]: img,
        };
      }, {});

      const postId = await createPost(postData, coverFile, contentImages);
      console.log('Post criado com sucesso!', postId);
    } catch (error) {
      console.error('Erro ao criar post:', error);
    }

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
    console.log(files);
    setImgs((prev) => [...prev, ...files]);
    const previewUrls = files.map((file) => URL.createObjectURL(file));

    // Atualiza o estado para armazenar as pré-visualizações
    setImgPreviews((prev) => [...prev, ...previewUrls]);
  };

  const handleAddTag = (e) => {
    e.preventDefault();

    if (topics.value.trim()) {
      setTags((prev) => {
        if (prev.includes(topics.value.trim())) {
          return prev;
        }
        return [...prev, topics.value.trim()];
      });
      topics.setValue('');
    }
  }

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
    setImgPreviews([]);
    setImgs([]);
    setTags([]);
  };

  const removeImg = (e) => {
    setImgPreviews((prev) => prev.filter((_, index) => index !== e));
    setImgs((prev) => prev.filter((_, index) => index !== e));
  };

  return (
    <section className="max-w-3xl bg-color-white mx-auto flex flex-col justify-center items-center py-8 shadow-lg">
      <h1 className="title-b color-purple w-fit mb-12 mt-8">Envio do Artigo</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 gap-8 grid grid-cols-2 max-w-xl max-md:grid-cols-1 row-auto anime-down"
      >
        <div className="flex flex-col gap-6 justify-center">
          <Input label="Titulo" name="title" type="text" {...title} required />
          <div className="flex flex-wrap gap-3 max-h-20 overflow-y-auto">
            {Array.isArray(tags) && tags.length > 0 ? (
              tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="rounded flex items-center icon w-fit gap-3 cursor-pointer purple-bg px-4 py-2 text-color-white"
                    onClick={() => {
                      setTags(tags.filter((item) => item !== tag));
                    }}
                  >
                    {tag} <CloseSvg />
                  </span>
                );
              })
            ) : (
              <span className="rounded flex items-center icon w-fit gap-3 cursor-pointer purple-bg px-4 py-2 text-color-white">
                Exemplo <CloseSvg />
              </span>
            )}
          </div>
          <Input label="Tags" name="tags" type="text" {...topics} />
          <button
            className="btn-secundary-m rounded"
            onClick={handleAddTag}
          >
            Adicionar
          </button>
          <FileUploadField
            type="file"
            required={true}
            accept="image/*"
            onClick={addImgCape}
            label="Imagem de Capa"
          />
          <FileUploadField
            type="file"
            required={true}
            accept=".md"
            onClick={addText}
            label="Arquivo de Texto"
          />
          <FileUploadField
            type="file"
            multiple={true}
            required={true}
            accept="image/*"
            onClick={handleImgsChange}
            label="Imagens do Arquivo"
          />
        </div>
        <PreviewSection
          imgCape={imgCape}
          textPreview={textPreview}
          textContent={textContent}
        />
        <ImageGallery
          imgs={imgPreviews}
          onClick={removeImg}
          className="col-start-1 col-end-3"
        />
        <div className="flex justify-between gap-4 mt-4 col-start-1 col-end-3">
          <button className="btn-secundary-m rounded" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="btn-primary-m rounded" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdminPost;
