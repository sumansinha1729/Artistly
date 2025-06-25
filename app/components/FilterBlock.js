'use client'
import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material'

export default function FilterBlock({ filters, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({ ...filters, [name]: value })
  }

  return (
    <Box className="flex gap-4 flex-wrap mb-6">
      {/* Category */}
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          name="category"
          value={filters.category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="DJ">DJ</MenuItem>
          <MenuItem value="Dancer">Dancer</MenuItem>
          <MenuItem value="Speaker">Speaker</MenuItem>
          <MenuItem value="Singer">Singer</MenuItem>
        </Select>
      </FormControl>

      {/* Location */}
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          name="location"
          value={filters.location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
          <MenuItem value="Bangalore">Bangalore</MenuItem>
          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
          <MenuItem value="Kolkata">Kolkata</MenuItem>
          <MenuItem value="Chennai">Chennai</MenuItem>
          <MenuItem value="Pune">Pune</MenuItem>
        </Select>
      </FormControl>

      {/* Price Range */}
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel id="price-label">Price Range</InputLabel>
        <Select
          labelId="price-label"
          name="priceRange"
          value={filters.priceRange}
          label="Price Range"
          onChange={handleChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="0-10000">Below ₹10,000</MenuItem>
          <MenuItem value="10000-15000">₹10,000–₹15,000</MenuItem>
          <MenuItem value="15000-999999">Above ₹15,000</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
