import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
        navigate('/login'); // Navigate to the login page after successful logout
      } catch (error) {
        console.error('Error logging out:', error);
        navigate('/login'); // Navigate to the login page even if there's an error
      }
    };

    handleLogout();
  }, [logout, navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      <p>Please wait while we log you out of your account.</p>
    </div>
  );
};

export default Logout;