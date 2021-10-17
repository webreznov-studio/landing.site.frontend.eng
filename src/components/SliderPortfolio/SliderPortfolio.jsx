import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Clock } from '../Clock';
import { SliderStyled } from './styles';

const sliderStyle = {
    position: 'absolute',
    top: '57px',
    left: '140px',
    right: '143px',
};

const carouselConfig = {
    autoPlay: true,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    swipeable: true,
};

export const SliderPortfolio = () => {
    return (
        <SliderStyled>
            <Carousel {...carouselConfig}>
                <div>
                    <img src="/portfolio/webreznov-1.png" alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src="/portfolio/webreznov-2.png" alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src="/portfolio/webreznov-3.png" alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src="/portfolio/webreznov-4.png" alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src="/portfolio/webreznov-5.png" alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src="/portfolio/webreznov-6.png" alt="astrolog" width="300px" />
                </div>
            </Carousel>
            <Clock />
        </SliderStyled>
    );
};
