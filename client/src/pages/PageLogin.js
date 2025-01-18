import React from 'react';
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import LoginCreate from '../components/Login/LoginCreate';
import LoginPasswordLost from '../components/Login/LoginPasswordLost';
import LoginPasswordReset from '../components/Login/LoginPasswordReset';
import { ReactComponent as CloseSvg } from '../assets/icon/close.svg';
import '../styles/login.css';

const PageLogin = () => {
  document.title = 'UnderBlog | Login';

  return (
    <section className="login gray-3-bg my-16 mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-md shadow-md anime-left overflow-hidden">
      <div className='flex justify-between'>
        <nav className="flex *:px-5 *:py-3 *:rounded-t-md *:duration-300 ">
          <NavLink to="/login" end>
            Login
          </NavLink>
          <NavLink to="/login/create">Cadrastrar</NavLink>
          <NavLink to="/login/lost">Recuperar senha</NavLink>
        </nav>
        <Link to='/' className='px-5 py-3 duration-200 hover:bg-red-500'>
          <CloseSvg className='color-black' />
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default PageLogin;
