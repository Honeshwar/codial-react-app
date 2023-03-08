import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { login as userLogin, register } from '../api';
import {
  getTokenFromLocalStorage,
  LOCAL_STORAGE_TOKEN_KEY,
  removeTokenFromLocalStorage,
  setTokenToLocalStorage,
} from '../Utils';

import jwt from 'jwt-decode';

export const useProviderAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //jwt token decode always for context
  useEffect(() => {
    const userToken = getTokenFromLocalStorage(LOCAL_STORAGE_TOKEN_KEY);
    if (userToken) {
      const user = jwt(userToken);
      setUser(user);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await userLogin(email, password);
    if (response.success) {
      setUser(response.data.user);
      setTokenToLocalStorage(
        LOCAL_STORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
      return {
        success: true,
      };
    } else {
    }
    return {
      success: false,
      message: response.message,
    };
  };
  const logout = () => {
    setUser(null);
    //after logout ,we have to jwt token get from server ,remove it now
    removeTokenFromLocalStorage(LOCAL_STORAGE_TOKEN_KEY);
  };

  const signup = async (name, email, password, confirmPassword) => {
    const response = await register(name, email, password, confirmPassword);
    if (response.success) {
      setUser(response.data.user);
      setTokenToLocalStorage(
        LOCAL_STORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  return {
    user,
    loading,
    login,
    logout,
    signup,
  };
};

export const getAuthContextValue = () => {
  return useContext(AuthContext);
};
