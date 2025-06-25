'use client'
import { IconButton } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { useThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext()

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}

export default ThemeToggle
