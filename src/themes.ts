import React from 'react'

export const themes: any = {
  light: {
    palette: {
      primary: {
        main: '#5b8c5a',
      },
      type: 'light',
    },
  },
  dark: {
    palette: {
      primary: {
        main: '#596157',
      },
      type: 'dark',
    },
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  switchTheme: () => {},
})
