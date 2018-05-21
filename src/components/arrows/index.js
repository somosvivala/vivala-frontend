import React from 'react';

export const PrevArrow = ({ currentSlide, slideCount, ...remainingProps, inside, white, orange, instituto }) => {
    return <button {...remainingProps} className={`slick-arrow slick-prev${instituto ? ' instituto' : ''}${white ? ' white' : ''}${orange ? ' orange' : ''}${inside ? ' inside' : ''}`} />
}

export const NextArrow = ({ currentSlide, slideCount, ...remainingProps, inside, white, orange, instituto }) => {
    return <button {...remainingProps} className={`slick-arrow slick-next${instituto ? ' instituto' : ''}${white ? ' white' : ''}${orange ? ' orange' : ''}${inside ? ' inside' : ''}`} />
}
