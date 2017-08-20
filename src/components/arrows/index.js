import React from 'react';

export const PrevArrow = ({ currentSlide, slideCount, ...remainingProps, inside, white }) => {
    return <button {...remainingProps} className={`slick-arrow slick-prev${white ? ' white' : ''}${inside ? ' inside' : ''}`} />
}

export const NextArrow = ({ currentSlide, slideCount, ...remainingProps, inside, white }) => {
    return <button {...remainingProps} className={`slick-arrow slick-next${white ? ' white' : ''}${inside ? ' inside' : ''}`} />
}