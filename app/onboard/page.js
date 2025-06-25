'use client'
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Typography,
  Box,
  OutlinedInput,
  ListItemText,
  useTheme
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const categoryOptions = ['DJ', 'Dancer', 'Speaker', 'Singer']
const languageOptions = ['Hindi', 'English', 'Punjabi']
const feeOptions = ['Below ₹10,000', '₹10,000–₹15,000', '₹15,000–₹25,000', 'Above ₹25,000']

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  fee: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required')
})

export default function OnboardPage() {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      bio: '',
      category: [],
      languages: [],
      fee: '',
      location: ''
    }
  })

  const theme=useTheme()

 const onSubmit = async (formData) => {
  const query = `
    mutation SubmitArtist($input: ArtistInput!) {
      submitArtist(input: $input) {
        success
        message
      }
    }
  `

  const variables = { input: formData }

  const res = await fetch('/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  })

  const result = await res.json()
  alert(result.data.submitArtist.message)
  console.log('Submitted:', formData)
}


  return (
    <Box 
    sx={{
    minHeight: '100vh',
    m: 2,
    p: 3,
    maxWidth: '640px',
    mx: 'auto',
    border: '2px solid',
    borderColor: theme.palette.mode === 'dark' ? 'grey.700' : 'grey.400',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: 2,
    boxShadow: 3,
  }}
    >
      <Typography variant="h4" className="mb-4 font-bold text-center">
        Artist Onboarding
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        {/* Name */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Artist Name"
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
            />
          )}
        />

        {/* Bio */}
        <Controller
          name="bio"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Bio"
              multiline
              rows={3}
              error={!!errors.bio}
              helperText={errors.bio?.message}
              fullWidth
            />
          )}
        />

        {/* Category (Multi-select) */}
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.category}>
              <InputLabel>Category</InputLabel>
              <Select
                {...field}
                multiple
                input={<OutlinedInput label="Category" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {categoryOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={field.value.includes(option)} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
              <Typography variant="caption" color="error">
                {errors.category?.message}
              </Typography>
            </FormControl>
          )}
        />

        {/* Languages Spoken (Multi-select) */}
        <Controller
          name="languages"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.languages}>
              <InputLabel>Languages Spoken</InputLabel>
              <Select
                {...field}
                multiple
                input={<OutlinedInput label="Languages Spoken" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {languageOptions.map((lang) => (
                  <MenuItem key={lang} value={lang}>
                    <Checkbox checked={field.value.includes(lang)} />
                    <ListItemText primary={lang} />
                  </MenuItem>
                ))}
              </Select>
              <Typography variant="caption" color="error">
                {errors.languages?.message}
              </Typography>
            </FormControl>
          )}
        />

        {/* Fee Range */}
        <Controller
          name="fee"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth error={!!errors.fee}>
              <InputLabel>Fee Range</InputLabel>
              <Select {...field} label="Fee Range">
                {feeOptions.map((range) => (
                  <MenuItem key={range} value={range}>
                    {range}
                  </MenuItem>
                ))}
              </Select>
              <Typography variant="caption" color="error">
                {errors.fee?.message}
              </Typography>
            </FormControl>
          )}
        />

        {/* Location */}
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Location"
              error={!!errors.location}
              helperText={errors.location?.message}
              fullWidth
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit Artist
        </Button>
      </form>
    </Box>
  )
}
