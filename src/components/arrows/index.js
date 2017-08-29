import React from 'react';

export const PrevArrow = ({ currentSlide, slideCount, ...remainingProps, inside, white, instituto }) => {
    return <button {...remainingProps} className={`slick-arrow slick-prev${instituto ? ' instituto' : ''}${white ? ' white' : ''}${inside ? ' inside' : ''}`} />
}

export const NextArrow = ({ currentSlide, slideCount, ...remainingProps, inside, white, instituto }) => {
    return <button {...remainingProps} className={`slick-arrow slick-next${instituto ? ' instituto' : ''}${white ? ' white' : ''}${inside ? ' inside' : ''}`} />
}
