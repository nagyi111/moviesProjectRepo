import React from 'react'
import { getCredits, getTrailer, img_500 } from '../src/utils'
import { TfiYoutube } from "react-icons/tfi";
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from './Carousel';


export const MyModal = ({ isOpen, setIsOpen, media }) => {

    const [trailer, setTrailer] = useState(null)
    const [credits, setCredits] = useState([])

    const type = media.media_type || (media.title ? 'movie' : 'tv')

    useEffect(() => {
        getTrailer(media.media_type, media.id).then(setTrailer)
        getCredits(media.media_type || type, media.id).then(setCredits)
    }, [])

    trailer && console.log(trailer[0])
    const getYoutubeTrailer = () => {
        if (trailer && trailer.length>0){
            const trailerYoutube=trailer.find(obj=>obj.site=="Youtube")
            return trailerYoutube? trailerYoutube : null
        }
    }

    return (
        <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className="modal-box bg-white text-gray-900 flex flex-col items-center max-w-200 w-fit">
                <img src={img_500 + media.backdrop_path} alt={media.title}></img>
                <h3 className="font-bold text-lg"></h3>
                <span className="font-bold">{media.original_title}</span>
                <span>({media.first_air_date || media.release_date})</span>
                <p className="py-4">{media.overview}</p>
                {trailer && trailer.length > 0 && (
                    <a className="text-3xl text-red-600"l
                        href={`https://youtube.com/watch?v=${trailer[0].key}`}>
                        <TfiYoutube />
                    </a>
                )}

                {credits && <Carousel credits={credits.slice(0,8)}/>}

                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn" onClick={() => setIsOpen(false)}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

