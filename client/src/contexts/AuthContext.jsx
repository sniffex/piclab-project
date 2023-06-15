import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    try {
      const response = await axios.post('https://piclab-project-api.vercel.app/api/auth/register', { email, password });
      setUser(response.data.user);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await axios.post('https://piclab-project-api.vercel.app/api/auth/login', { email, password });
      setUser(response.data.user);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const logout = async () => {
    try {
      await axios.post('https://piclab-project-api.vercel.app/api/auth/logout');
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        const response = await axios.get('https://piclab-project-api.vercel.app/api/auth/users');
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      }
    };

    checkUserAuth();
  }, []);

  return (
      <UserContext.Provider value={{ createUser, user, logout, signIn }}>
        {children}
      </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
