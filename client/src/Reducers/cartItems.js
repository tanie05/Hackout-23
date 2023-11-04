import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {

  const [globalArray, setGlobalArray] = useState([]);

  const addToGlobalArray = (item) => {
    setGlobalArray([...globalArray, item]);
  };

  

  return (
    <GlobalContext.Provider value={{ globalArray, addToGlobalArray }}>
      {children}
    </GlobalContext.Provider>
  );
};
