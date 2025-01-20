import React from 'react';
import { UserContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
  const { userLogout, data } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <section className='container mx-auto white-bg shadow-lg px-10 py-8'>
      <h1 className='title-b w-fit color-purple mb-8'>Conta</h1>

      {data && (
        <ul className='flex flex-col gap-3'>
          <li>
            <span className='font-bold'>Nome:</span> {data.nome}
          </li>
          <li>
            <span className='font-bold'>Email:</span> {data.email}
          </li>
        </ul>
      )}
      <button className="btn-secundary-m rounded" onClick={handleLogout}>
        Sair
      </button>
      <Link to='/account/admin' className='btn-secundary-m my-3 rounded'>Admin</Link>
    </section>
  );
};

export default Account;
