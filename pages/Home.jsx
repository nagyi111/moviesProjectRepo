import { useEffect, useState } from 'react'
import { getTrendings } from '../src/utils'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'
import { Pagination } from '../components/Pagination'

export const Home = () => {

  const [trendings, setTrendings] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getTrendings(page).then(setTrendings)
  }, [page])

  return (
    <div>{
      trendings ? <MediaList data={trendings} type='trending'/> : <Loading />}
    <Pagination {...{page,setPage}}/>
    </div>
  )
}

