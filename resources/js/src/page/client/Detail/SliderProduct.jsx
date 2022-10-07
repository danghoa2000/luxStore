import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BASE_URL } from '../../../../constants/constants';
import { auto } from '@popperjs/core';

const SliderProduct = (props) => {
    const {
        dots,
        slidesToShow,
        slidesToScroll,
        autoplay,
        appendDots,
        dotsClass,
        customPaging,
        data,
        slideClass
    } = props;

    let settings = {
        dots: dots,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: false,
        dotsClass: dotsClass
    }

    if (appendDots) {
        settings = {
            ...settings, appendDots: appendDots
        }
    }

    if (customPaging) {
        settings = {
            ...settings, customPaging: customPaging,
        }
    }
    return (
        <>
            <section className={slideClass}>
                <Slider {...settings}>
                    {data.map((value, index) => {
                        return (
                            <>
                                <div className='d-flex justify-content-center' style={{ height: 300, paddingBottom: 100, margin: auto}} key={index}>
                                    <img src={BASE_URL + value.cover} alt=''/>
                                </div>
                            </>
                        )
                    })}
                </Slider>
            </section>
        </>
    )
};

export default SliderProduct;