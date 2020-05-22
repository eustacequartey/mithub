import React, { useContext } from 'react';
import AuthNavigator from './Auth/index';
import AppNavigator from './AppFront/index';
import { AppContext } from '~/context/context';

const index = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <>
      {isLoggedIn && <AppNavigator />}
      {!isLoggedIn && <AuthNavigator />}
    </>
  );
};

export default index;
