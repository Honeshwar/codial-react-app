// auth related data use karna chata hai in entire application,use createContext() hook
import { createContext } from 'react';
import { useProviderAuth } from '../Hooks/customHookForAuthContext';

const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
};
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  //props = {children}
  const auth = useProviderAuth(); //custom hook that we created,use state inside it for user,loading ,and func create login,,out

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
