import React, { useState, useEffect } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getUser(token) {
    const [url, options] = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(false);
      const [url, options] = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok) throw new Error('Error: Usuário inválido');
      const { token } = await tokenResponse.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
    } catch (err) {
      setError(err.message)
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  };

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (!token) setLogin(false);
      try {
        setError(null);
        setLoading(true);
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Token inválido');
        await getUser(token);
      } catch (err) {
        userLogout();
      } finally {
        setLoading(false);
      }
    }

    autoLogin();
  }, []);

  return (
    <UserContext.Provider value={{ userLogin, data, login, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};
