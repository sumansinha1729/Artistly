'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:768px)')

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Artists', path: '/artists' },
    { label: 'Onboard', path: '/onboard' },
    { label: 'Dashboard', path: '/dashboard' }
  ]

  return (
    <AppBar position="static" color="default">
      <Toolbar className="flex justify-between">
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              <List sx={{ width: 200 }}>
                {navLinks.map((link) => (
                  <ListItem button component={Link} href={link.path} key={link.label} onClick={toggleDrawer}>
                    <ListItemText primary={link.label} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.path}>
                <Button>{link.label}</Button>
              </Link>
            ))}
          </div>
        )}
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  )
}
