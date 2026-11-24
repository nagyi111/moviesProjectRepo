import { img_300 } from '../src/utils'
import { MyModal } from './MyModal'
import { Rating } from './Rating'
import { useState } from 'react'

export const MediaCard = ({ media, type }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="card bg-base-100 shadow-sm">
      <figure onClick={()=>setIsOpen(true)}>
          <img
            src={media.poster_path ? img_300+media.poster_path : 'placeholder.jpeg'}
            alt={media.title || media.name || 'Poszter'}
            className="w-full"
          />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {media.title || media.name}
        </h2>

        <Rating vote={media.vote_average} />

        <p>
          {media.release_date || media.first_air_date}
        </p>
      </div>
    </div>
    {isOpen && <MyModal {...{isOpen, setIsOpen, media}}/>}
    </>
  )
}