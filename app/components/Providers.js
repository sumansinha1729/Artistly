'use client'

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { ArtistProvider } from '../context/ArtistContext'
import { ThemeProvider } from '../context/ThemeContext'
import Navbar from './Navbar'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#007bff' },
  },
})

export default function Providers({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProvider>
        <ArtistProvider>
          <Navbar />
          {children}
        </ArtistProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}
