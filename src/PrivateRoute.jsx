import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useauth'; // Make sure the path to your useAuth hook is correct
import Dashboard from './page/dashboard';
import { LoginPage } from './page/login';

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <Route path="/dashboard" element={<Dashboard />} />
  ) : (
    <Route path="/login" element={<LoginPage />} />
  );
};

export default PrivateRoute;