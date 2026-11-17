
import { img_300 } from '../src/utils'

export const MediaCard = ({ media }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        {media.poster_path ? (
          <img
            src={img_300 + media.poster_path}
            alt={media.title || media.name || 'Poszter'}
            className="w-full"
          />
        ) : (
          <div className="p-8">Nincs poszter</div>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {media.title || media.name}
        </h2>

        <p>
          <span>{media.media_type}</span>
          {' | '}
          <span>
            {media.release_date || media.first_air_date}
          </span>
        </p>
      </div>
    </div>
  )
}
