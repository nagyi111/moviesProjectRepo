import React from 'react';
//import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300 } from '../src/utils';
import AliceCarouselImport from 'react-alice-carousel';

const AliceCarousel = AliceCarouselImport.default ?? AliceCarouselImport

const handleDragStart = (e) => e.preventDefault();

export const Carousel = ({credits}) => {

    const items = credits.map(obj =>
        <div key={obj.id}>
            <img
                className="w-full h-40 object-contain"
                src={obj.profile_path ? img_300 + obj.profile_path : "noImage.jpg"}
                alt={obj.name}
                onDragStart={handleDragStart}
            />
            <p>{obj.name}</p>
        </div>
    )

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
                0: {items: 2},
                600: {items: 3},
                1024: {items: 6}
            }}
        />
    )
}