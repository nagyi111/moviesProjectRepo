
import {MediaCard} from './MediaCard'
import {getTitle} from '../src/utils'

export const MediaList = ({ data, type }) => {
  return (
    <div>
      <h2 className='text-center font-bold text-gray-300 pb-2 text-2xl p-2'>{getTitle(type)}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">

        {data.map((obj) => (
          <MediaCard
            key={`${obj.media_type || 'media'}-${obj.id}`}
            media={obj} type={type}
          />
        ))}
      </div>
    </div>
  )
}
