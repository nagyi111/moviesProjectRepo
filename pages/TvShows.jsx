import { useEffect, useState } from 'react'
import { getSelectedMediaByCateg } from '../src/utils'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination'

export const TvShows = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategories, setSelectedCategories] = useState([])
   const [page, setPage] = useState(1)

  useEffect(() => {
  getSelectedMediaByCateg('tv', selectedCategories.join(','), page)
    .then(setShows)
    .then(() => setLoading(false))
}, [selectedCategories, page])

  if (loading) return <Loading />

  if (error) {
    return <p className="text-red-500 p-6">{error}</p>
  }

  return (
  <div className="max-w-7xl mx-auto">
    <Categories type="tv" {...{selectedCategories, setSelectedCategories}} />
    <MediaList data={shows} type="tv" />
    <Pagination {...{ page, setPage }} />
  </div>
)}