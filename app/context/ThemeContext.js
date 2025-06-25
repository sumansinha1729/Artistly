'use client'
import { createContext, useContext, useState } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light')

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#2563eb',
      },
      background: {
        default: mode === 'light' ? '#f8fafc' : '#0f172a',
        paper: mode === 'light' ? '#fff' : '#1e293b',
      },
    },
  })

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
