import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"
import { formatPrice } from "../../../utils/helper"

const Dcard = ({ productItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Slider {...settings}>
      {productItems.map((value, index) => {
        return (
          <div className='box' key={index}>
            <div className="product">
              <div className='img'>
                {value?.sale_persen ? <span className='discount'>{value?.sale_persen}% Off</span> : ""}
                <img src={value?.image} alt='' />
              </div>
              <h4>{value?.name}</h4>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                {value?.sale_price ?
                  (
                    <>
                      <span className="old-price">{formatPrice(value?.price)}</span>
                      <span className="new-price" style={{ marginLeft: 5 }}>{formatPrice(value?.sale_price)}</span>
                    </>
                  )
                  :
                  (<span className="new-price">{formatPrice(value?.price)}</span>)
                }
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

export default Dcard
