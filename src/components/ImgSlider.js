import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        SlideToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/images/slider-badging.jpg' alt='img' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-badag.jpg' alt='img' />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    padding-top: 20px;
    ul li button {
        &:before {
            font-size: 10px;
            color: rbg( 150 158 171);
        }
    }
    li.slick-active button::before {
        color: #fff;
    }
    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
`;

const Wrap = styled.div`
    cursor: pointer;

    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 0 26px 30px -10px rgb( 0 0 0 / 0.69),
                    0 16px 10px -10px rgb( 0 0 0 / 0.73);
        transition: all 0.3s ease-in-out;

        &:hover {
            border: 4px solid rgb( 249 249 249 / 0.8 );
        }
    }
`;