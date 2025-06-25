'use client'
import { createContext, useContext, useState } from 'react'

const ArtistContext = createContext()

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([])

  const addArtist = (artist) => {
    setArtists((prev) => [...prev, artist])
  }

  return (
    <ArtistContext.Provider value={{ artists, addArtist }}>
      {children}
    </ArtistContext.Provider>
  )
}

export const useArtistContext = () => useContext(ArtistContext)
