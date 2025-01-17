import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import LoginCreate from '../components/Login/LoginCreate';
import LoginPasswordLost from '../components/Login/LoginPasswordLost';
import LoginPasswordReset from '../components/Login/LoginPasswordReset';
import '../styles/login.css'

const PageLogin = () => {
  
  document.title = 'UnderBlog | Login';

  return (
    <section className='login gray-3-bg my-16 mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-md shadow-md anime-left'>
      <nav className='flex *:px-5 *:py-3 *:rounded-t-md *:duration-300 *:active:bg-white '>
        <NavLink to='' end>Login</NavLink>
        <NavLink to='create'>Cadrastrar</NavLink>
      </nav>
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
