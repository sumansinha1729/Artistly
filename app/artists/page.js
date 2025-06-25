'use client'
import { useState, useMemo, Suspense, lazy } from 'react'
import { useTheme } from '@mui/material/styles'
import data from '../data/artists.json'
import CircularProgress from '@mui/material/CircularProgress'
import FilterBlock from '../components/FilterBlock'

const ArtistCard = lazy(() => import('../components/ArtistCard'))

export default function ArtistsPage() {
  const [filters, setFilters] = useState({ category: '', location: '', priceRange: '' })
  const theme = useTheme()

  const filteredArtists = useMemo(() => {
    return data.filter((artist) => {
      const matchCategory = filters.category ? artist.category === filters.category : true
      const matchLocation = filters.location ? artist.location === filters.location : true

      let matchPrice = true
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number)
        matchPrice = artist.price >= min && artist.price <= max
      }

      return matchCategory && matchLocation && matchPrice
    })
  }, [filters])

  return (
    <main
    className="min-h-screen px-10 sm:px-18 md:px-32 pt-5 pb-20"
      style={{
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        transition: 'all 0.3s ease',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.875rem', fontWeight: 700 }}>
        Artist Listings
      </h1>

      <div style={{ maxWidth: '96rem', margin: '0 auto' }}>
        <FilterBlock filters={filters} onChange={setFilters} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <Suspense fallback={<CircularProgress color="primary" />}>
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </Suspense>
        </div>
      </div>
    </main>
  )
}
