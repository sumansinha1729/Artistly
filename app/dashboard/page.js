'use client'
import { useEffect, useState } from 'react'
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material'

export default function DashboardPage() {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const fetchArtists = async () => {
      const query = `
        query {
          getArtists {
            name
            bio
            category
            languages
            fee
            location
          }
        }
      `
      const res = await fetch('/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })

      const result = await res.json()
      setArtists(result.data.getArtists || [])
    }

    fetchArtists()
  }, [])

  return (
    <Box className="min-h-screen p-6 max-w-6xl mx-auto">
      <Typography variant="h4" className="mb-6 font-bold text-center">
        Submitted Artists
      </Typography>

      {artists.length === 0 ? (
        <Typography>No artists submitted yet.</Typography>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Category</strong></TableCell>
                <TableCell><strong>City</strong></TableCell>
                <TableCell><strong>Fee</strong></TableCell>
                <TableCell><strong>Action Button</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artists.map((artist, i) => (
                <TableRow key={i}>
                  <TableCell>{artist.name}</TableCell>
                  <TableCell>{artist.category?.join(', ')}</TableCell>
                  <TableCell>{artist.location}</TableCell>
                  <TableCell>{artist.fee}</TableCell>
                  <TableCell><Button>Edit</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  )
}
