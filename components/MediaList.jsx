
import { MediaCard } from './MediaCard'

export const MediaList = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {data.map((obj) => (
        <MediaCard
          key={`${obj.media_type || 'media'}-${obj.id}`}
          media={obj}
        />
      ))}
    </div>
  )
}
