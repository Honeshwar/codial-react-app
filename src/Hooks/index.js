import { useState } from 'react';

export const useProviderAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const login = (email, password) => {};
  const logout = () => {};

  return {
    user,
    loading,
    login,
    logout,
  };
};
