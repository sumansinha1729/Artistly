let localArtists = [] 
// memory fallback in server context

export async function POST(req) {
  const { query, variables } = await req.json()

  if (query.includes('submitArtist')) {
    const artist = variables.input
    localArtists.push(artist)

    if (typeof localStorage !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('artists') || '[]')
      const updated = [...existing, artist]
      localStorage.setItem('artists', JSON.stringify(updated))
    }

    return Response.json({
      data: {
        submitArtist: {
          success: true,
          message: 'Artist submitted successfully'
        }
      }
    })
  }

  
  if (query.includes('getArtists')) {
    let artists = []

    if (typeof localStorage !== 'undefined') {
      artists = JSON.parse(localStorage.getItem('artists') || '[]')
    } else {
      artists = localArtists 
    }

    return Response.json({
      data: {
        getArtists: artists
      }
    })
  }

  return Response.json({ error: 'Unsupported query' }, { status: 400 })
}
