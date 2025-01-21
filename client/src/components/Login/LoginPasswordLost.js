import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as LoadSvg } from '../../assets/icon/load.svg';
import Error from '../Helper/Erro';

const LoginPasswordLost = () => {
  const email = useForm('email');

  const { loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="bg-color-white flex items-center w-full flex-col md:py-40 max-md:py-24 fade-in">
      <h1 className="title-b color-purple mb-4">Recupere sua Senha</h1>
      <p className="title-s mb-8">
        Será enviado um email com link para recuperar a senha
      </p>

      <form
        action=""
        className="flex flex-col items-center container p-8 gap-6 w-full"
        onSubmit={handleSubmit}
      >
        <Input
          label="Informe o Email da conta"
          type="text"
          name="email"
          {...email}
        />
        <button
          className="btn-primary-m rounded mt-6"
          disabled={loading}
          aria-label={loading ? 'Carregando...' : 'Entrar'}
        >
          {loading ? (
            <span className="flex gap-2">
              Carregando <LoadSvg className="animate-spin" />
            </span>
          ) : (
            'Enviar'
          )}
        </button>
        <Error erro={error} />
      </form>
    </section>
  );
};

export default LoginPasswordLost;
