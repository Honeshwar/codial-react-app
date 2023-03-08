import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { login as userLogin } from '../api';
export const useProviderAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const login = async (email, password) => {
    const response = await userLogin(email, password);
    if (response.success) {
      setUser(response.data.user);
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
  const logout = () => {};

  return {
    user,
    loading,
    login,
    logout,
  };
};

export const useAuthContextValue = () => {
  return useContext(AuthContext);
};
