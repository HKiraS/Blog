import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Navigate } from 'react-router-dom';
import PageLoading from './PageLoading';

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);

  if (login === false) {
    <Navigate to="/login" />;
  } else if (login) {
    return children;
  } else {
    return <PageLoading/>;
  }
};

export default ProtectedRoute;
