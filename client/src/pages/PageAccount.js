import React from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const PageAccount = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <section>
      <h1>Conta</h1>
      <button className="btn-secundary-m rounded" onClick={handleLogout}>
        Sair
      </button>
    </section>
  );
};

export default PageAccount;
