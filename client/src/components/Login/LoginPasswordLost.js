import React from 'react'
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as LoadSvg } from '../../assets/icon/load.svg';
import Error from '../Helper/Erro';;

const LoginPasswordLost = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="bg-white flex items-center w-full flex-col md:py-40 max-md:py-24 fade-in">
      <h1 className="title-b color-purple mb-8">Recupere sua Senha</h1>
      <form
        action=""
        className="flex flex-col items-center container p-8 w-full"
        onSubmit={handleSubmit}
      >
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <button
          className="btn-primary-m mt-6"
          disabled={loading}
          aria-label={loading ? 'Carregando...' : 'Entrar'}
        >
          {loading ? (
            <span className="flex gap-2">
              Carregando <LoadSvg className="animate-spin" />
            </span>
          ) : (
            'Entrar'
          )}
        </button>
        <Error erro={error} />
      </form>
    </section>
  );
}

export default LoginPasswordLost
