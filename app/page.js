'use client'

import Link from 'next/link'
import { useTheme } from '@mui/material/styles'
import { Button, Typography, Card, CardContent, CardMedia, Box } from '@mui/material'

const categories = [
  {
    title: 'DJs',
    image: 'https://images.pexels.com/photos/9005499/pexels-photo-9005499.jpeg',
  },
  {
    title: 'Dancers',
    image: 'https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg',
  },
  {
    title: 'Speakers',
    image: 'https://images.pexels.com/photos/8761534/pexels-photo-8761534.jpeg',
  },
  {
    title: 'Singers',
    image: 'https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg',
  }
]

export default function HomePage() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        overflowX:"hidden",
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        p: 6,
        transition: 'all 0.3s ease'
      }}
    >
      {/* HERO SECTION */}
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: '48rem',
          mx: 'auto',
          mb: 12,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Welcome to Artistly
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 4 }}>
          Discover and book talented DJs, dancers, speakers and singers for your next event. From weddings to
          concerts, we have got the perfect artist for you.
        </Typography>
        <Link href="/artists" passHref>
          <Button variant="contained" color="primary">Explore Artists</Button>
        </Link>
      </Box>

      {/* CATEGORIES */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          gap: 3,
          maxWidth: '65rem',
          mx: 'auto',
        }}
      >
        {categories.map((cat, idx) => (
          <Card key={idx} sx={{ borderRadius: 2, bgcolor: theme.palette.background.paper }}>
            <CardMedia
              component="img"
              height="180"
              image={`${cat.image}?auto=compress&fit=crop&w=600&q=60`}
              alt={cat.title}
            />
            <CardContent>
              <Typography variant="h6" align="center">{cat.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
