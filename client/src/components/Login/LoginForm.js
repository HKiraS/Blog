import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as LoadSvg } from '../../assets/icon/load.svg';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div className="bg-white mx-auto shadow my-6 flex items-center sm:w-3/4 md:w-2/3 lg:w-1/2 flex-col md:py-52 max-md:py-24 rounded anime-left">
      <h1 className="title-b color-purple">Faça Login</h1>
      <form
        action=""
        className="flex flex-col items-center container p-8 w-full"
        onSubmit={handleSubmit}
      >
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <button
          className="btn-primary-m mt-6"
          disabled={loading}
          aria-label={loading ? 'Carregando...' : 'Entrar'}
        >
          {loading ? (
            <span className='flex gap-2'>
              Carregando <LoadSvg className='animate-spin' />
            </span>
          ) : (
            'Entrar'
          )}
        </button>
      </form>
      <span className="color-black flex gap-2">
        Ainda não fez o cadrastro? 
        <Link to="login/create" className="color-blue hover:text-blue-800">
          Faça agora
        </Link>
      </span>
    </div>
  );
};

export default LoginForm;
