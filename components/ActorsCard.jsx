import React from 'react'
import { img_300 } from '../src/utils'

export const ActorsCard = ({ actor }) => {
    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <img
                className="w-full h-80 object-cover"
                src={actor.profile_path ? img_300 + actor.profile_path : 'noImage.jpg'}
                alt={actor.name}
            />
            <h3 className="font-bold text-xl text-center p-3 text-white">
                {actor.name}
            </h3>
            {actor.known_for.map((obj) => (
                <p className="text-sm text-gray-300 text-center pb-2"
                    key={`${obj.media_type || 'media'}-${obj.id}`}>
                    {obj.title || obj.name}
                </p>
            ))}
        </div>
    )
}

