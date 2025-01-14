import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../Forms/Input';
import { UserContext } from '../../context/UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <form
      action=""
      className="flex flex-col items-center bg-white container mx-auto my-6 p-8"
      onSubmit={handleSubmit}
    >
      <Input label="Usuário" type="text" name="username" {...username} />
      <Input label="Senha" type="password" name="password" {...password} />
      <button>Entrar</button>
    </form>
  );
};

export default LoginForm;
