
import { useEffect, useState } from 'react'
import { getMovies } from '../src/utils'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'

export const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMovies()
      .then(data => {
        console.log('Betöltött filmek:', data)
        setMovies(data)
      })
      .catch(err => {
        console.error('Film API hiba:', err)
        setError('Nem sikerült betölteni a filmeket.')
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Loading />

  if (error) {
    return <p className="text-red-500 p-6">{error}</p>
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Filmek
      </h1>

      <MediaList data={movies} />
    </div>
  )
}
