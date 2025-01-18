import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../components/User/Account';
import PageAdmin from './PageAdmin';

const PageAccount = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Account />}/>
        <Route path='/admin/*' element={<PageAdmin/>}/>
      </Routes>
    </section>
  );
};

export default PageAccount;
