import React, { useState, useEffect } from 'react'
import { getActorDetails, getActorCredits, img_300 } from '../src/utils'

export const ActorModal = ({ isOpen, setIsOpen, actor }) => {

    const [actorDetails, setActorDetails] = useState(null)
    const [credits, setCredits] = useState([])

    useEffect(() => {
        getActorDetails(actor.id).then(setActorDetails)
        getActorCredits(actor.id).then(setCredits)
    }, [actor.id])

    if (!actorDetails) return null

    return (
        <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className="modal-box bg-white text-gray-900 max-w-5xl">
                <div className="flex flex-col items-center">
                    <img className="w-48 rounded-xl" src={actorDetails.profile_path ? img_300 + actorDetails.profile_path : "noImage.jpg"} alt={actorDetails.name} />
                    <h2 className="font-bold text-2xl">{actorDetails.name}</h2>
                    <p>Születési dátum: {actorDetails.birthday}</p>
                    <p>Születési hely: {actorDetails.place_of_birth}</p>
                    <p className="py-4">{actorDetails.biography}</p>
                </div>

                <h2 className="font-bold text-2xl text-center p-4">Filmográfia</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {credits.map(obj => (
                        <div key={obj.credit_id} className="bg-gray-100 rounded-xl p-2 text-center">
                            <img src={obj.poster_path ? img_300 + obj.poster_path : "noImage.jpg"} alt={obj.title || obj.name} />
                            <h3 className="font-bold">{obj.title || obj.name}</h3>
                            <p>{(obj.release_date || obj.first_air_date || "").slice(0, 4)}</p>
                            <p>Karakter: {obj.character}</p>
                        </div>
                    ))}
                </div>

                <div className="modal-action">
                    <button className="btn" onClick={() => setIsOpen(false)}>Close</button>
                </div>
            </div>
        </dialog>
    )
}