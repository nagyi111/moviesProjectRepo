import React from 'react'
import { ActorsCard }  from './ActorsCard.jsx'

export const ActorsList = ({ actors }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
            {actors.map((obj) => (
                <ActorsCard
                    key={obj.id}
                    actor={obj}
                />
            ))}
        </div>
    )
}

