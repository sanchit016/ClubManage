import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState('none');
  const [loggedId, setLoggedId] = useState(null)

  return (
    <UserContext.Provider value={{ isLoggedIn, setLoggedIn, loggedId, setLoggedId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
