// src/hooks/useAuth.js
import { useState, useEffect, createContext, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';
import { auth } from "../firebase.config";
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";



const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
        Cookies.set('authUser', JSON.stringify(user));
      } else {
        // User is signed out
        setCurrentUser(null);
        Cookies.remove('authUser');
      }
    });

    return unsubscribe;
  }, []);
  const logout = async () => {
    try {
      await signOut(auth);
      // Clear the currentUser state and the cookie
      setCurrentUser(null);
      Cookies.remove('authUser');
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = { currentUser, setCurrentUser , logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};