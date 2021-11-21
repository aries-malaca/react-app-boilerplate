import React from 'react';
import { AuthProvider } from 'react-auth-kit'
import Routes from './router/Routes';
import { DarkModeProvider } from './contexts/DarkModeContext';

const App: React.FC = () => {
  return (
    <AuthProvider authType="localstorage"
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
        <DarkModeProvider>
          <Routes />
        </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;