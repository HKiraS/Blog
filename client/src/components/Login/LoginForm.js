import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as LoadSvg } from '../../assets/icon/load.svg';
import Error from '../Helper/Erro';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="bg-white flex items-center w-full flex-col md:py-52 max-md:py-24 fade-in">
      <h1 className="title-b color-purple">Faça Login</h1>
      <form
        action=""
        className="flex flex-col items-center container p-8 gap-6 w-full"
        onSubmit={handleSubmit}
      >
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {error && (
          <span className="color-black flex gap-2">
            Esqueceu a senha?
            <Link to="login/lost" className="color-blue hover:text-blue-800">
              Recupere agora
            </Link>
          </span>
        )}
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
            'Entrar'
          )}
        </button>
        <Error erro={error} />
      </form>
      <span className="color-black flex gap-2">
        Ainda não fez o cadrastro?
        <Link to="./create" className="color-blue hover:text-blue-800">
          Faça agora
        </Link>
      </span>
    </section>
  );
};

export default LoginForm;
