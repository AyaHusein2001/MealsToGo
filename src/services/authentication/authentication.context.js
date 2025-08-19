import { createContext, useEffect, useState } from 'react';
import { loginRequest, registerRequest } from './authentication.service';
import { auth } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr ?? null);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    setError(null);
    loginRequest(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential.user);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onRegister = (email, password, repeatPassword) => {
    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    setError(null);
    registerRequest(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });
  };
  const onLogout = () => {
    setUser(null);
    auth.signOut();
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        setError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
