import React from 'react'

export const themes: any = {
  light: {
    palette: {
      primary: {
        main: '#aeea00',
      },
      type: 'light',
    },
  },
  dark: {
    palette: {
      primary: {
        main: '#1b5e20',
      },
      type: 'dark',
    },
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  switchTheme: () => {},
})
