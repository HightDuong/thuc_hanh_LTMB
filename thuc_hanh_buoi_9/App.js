import React from 'react';
import { AuthContextProvider } from './contexts/AuthContext';
import RootRouter from './router';

const App = () => {
  return (
    <AuthContextProvider>
      <RootRouter />
    </AuthContextProvider>
  );
};

export default App;