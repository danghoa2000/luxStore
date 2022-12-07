import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

const TopCart = ({ topGroupCategory }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {topGroupCategory?.map((value, index) => {
          return (
            <div className='box' key={index}>
              <div className="product">
                <div className='nametop d-flex'>
                  <span className='tleft'>{value?.products_count}</span>
                  <span className='tright'>{value?.name}</span>
                </div>
                <div className='img'>
                  <img src={value?.image} alt='' />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
