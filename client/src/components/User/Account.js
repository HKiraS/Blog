import React from 'react';
import { UserContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <section className="container mx-auto bg-color-white px-10 py-8">
      <h1>Conta</h1>
      <button className="btn-secundary-m rounded" onClick={handleLogout}>
        Sair
      </button>
      <Link to="/account/admin" className="btn-secundary-m my-3 rounded">
        Admin
      </Link>
    </section>
  );
};

export default Account;
