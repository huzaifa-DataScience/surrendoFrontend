import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [trackerCode ,setTrackerCode] = useState(null)

  return (
    <UserContext.Provider value={{ userData, setUserData , trackerCode, setTrackerCode }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
