import React from 'react';
import Slider from 'infinite-react-carousel';

import './Slide.scss';

const Slide = ({ children, slidesToShow, arrowsScroll, autoplay }) => {
    return (
        <div className='slide'>
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} autoplay={autoplay}>
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;