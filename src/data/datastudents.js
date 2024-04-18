// Inside the file where StudentLinks is defined, e.g., StudentLinks.js

import React, { useContext } from 'react';
import { BsKanban } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { AuthContext } from '../AuthContext';

const StudentLinks = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      // Additional logic after successful logout, e.g., navigate to the login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    [
      {
        title: 'My Learning',
        links: [
          {
            name: 'All Courses',
            icon: <BsKanban />,
            route: 'my-learning',
          },
          {
            name: 'My Courses',
            icon: <IoMdContacts />,
            route: 'my-courses',
          },
          {
            name: 'Logout',
            icon: <IoMdContacts />,
            route: 'logout',
          },
        ],
      },
    ]
  );
};

export default StudentLinks; // Export StudentLinks
