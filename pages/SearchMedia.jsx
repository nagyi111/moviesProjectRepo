import React from 'react'
import { Filter } from '../components/Filter'
import { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { getMedia } from '../src/utils'
import { MediaList } from '../components/MediaList'
import { Categories } from '../components/Categories'
import { useEffect } from 'react'
import { Pagination } from '../components/Pagination'

export const SearchMedia = () => {
  const [type, setType] = useState('movie')
  const [searchText, setSearchText] = useState('')
  const [media, setMedia] = useState(null)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [page, setPage] = useState(1)
  const [searchedText, setSearchedText] = useState('')
  console.log(type)

  const handleSearch = () => {
    if (searchText.trim().length === 0) return

    setPage(1)
    setSearchedText(searchText)
  }

  useEffect(() => {
    if (searchedText.length === 0) return

    getMedia(type, searchedText, page).then(setMedia)
  }, [type, searchedText, page])

  return (
    <div className='min-h screen'>
      <Filter type={type} setType={setType} />
      <Categories
        type={type}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
      {media && <MediaList data={media} type={type} />}
      {media && <Pagination {...{ page, setPage }} />}
    </div>
  )
}