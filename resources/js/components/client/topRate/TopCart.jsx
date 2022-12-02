import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"
import { Rating } from "@mui/material"
import { Star } from "@mui/icons-material"

const TopCart = ({ topRateProduct }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {topRateProduct?.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  {value?.sale_persen ? <span className='discount'>{value?.sale_persen}% Off</span> : ""}
                  <img src={value?.image} alt='' />
                </div>
                <span className='tleft'>{value?.products_count}</span>
                <span className='tright'>{value?.name}</span>
                <Rating
                  name="text-feedback"
                  value={value?.total_rate || 0}
                  readOnly
                  precision={0.5}
                  emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
