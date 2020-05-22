import React, { createContext, useState } from 'react';

const AppContext = createContext({});

const Provider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <AppContext.Provider value={{ isLoggedIn, toggleLogIn }}>{props.children}</AppContext.Provider>
    </>
  );

  function toggleLogIn() {
    setIsLoggedIn(!isLoggedIn);
  }
};

export { AppContext, Provider };
