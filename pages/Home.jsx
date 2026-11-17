import { useEffect, useState } from 'react'
import { getTrendings } from '../src/utils'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'

export const Home = () => {

  const [trendings, setTrendings] = useState([])

  useEffect(() => {
    getTrendings().then(setTrendings)
  }, [])

  return (
    <div>{trendings ? <MediaList data={trendings} type='trending'/> : <Loading />}
      </div>
  )
}

