import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const initialValue = window.localStorage.getItem('dark') === 'true';

export const DarkModeContext = React.createContext({
  dark: initialValue,
  setDark: (arg: boolean) => {}
});

export const DarkModeProvider: React.FC = (props) => {
  const [displayDark, setDisplayDark] = useState(initialValue);
  const theme = createTheme({ palette: { mode: displayDark ? 'dark': 'light' }});

  return (
    <DarkModeContext.Provider value={{
      dark: displayDark,
      setDark: (arg) => {
        setDisplayDark(arg);
        localStorage.setItem('dark', arg.toString());
      }
    }}>
      <ThemeProvider theme={ theme }>
        { props.children }
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};