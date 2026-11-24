import { useEffect, useState } from 'react'
import { getSelectedMediaByCateg } from '../src/utils'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination'

export const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    getSelectedMediaByCateg('movie', selectedCategories.join(','), page)
      .then(setMovies)
      .then(() => setLoading(false))
  }, [selectedCategories, page])
  
  if (loading) return <Loading />

  if (error) {
    return <p className="text-red-500 p-6">{error}</p>
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Filmek
      </h1>
      <Categories type='movie' {...{ selectedCategories, setSelectedCategories }} />
      <MediaList data={movies} type="movie" />
      <Pagination {...{ page, setPage }} />
    </div>
  )
}
