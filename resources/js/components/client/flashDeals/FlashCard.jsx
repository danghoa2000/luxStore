import React, { useCallback, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { formatPrice } from "../../../utils/helper"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <Slider {...settings}>
        {productItems.map((items) => {
          const rate = [];
          for (var i = 0; i < items?.total_rate; i++) {
            rate.push(<i className='fa fa-star' key={i}></i>);
          }
          return (
            <div className='box' key={items.id}>
              <div className='product mtop'>
                <div className='img'>
                  {items?.sale_persen ? <span className='discount'>{items?.sale_persen}% Off</span> : ""}
                  <img src={items?.image} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{items?.name}</h3>
                  <div className='rate'>
                    {rate}
                  </div>
                  <div className='price'>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                      {items?.sale_price ?
                        (
                          <>
                            <span className="old-price">{formatPrice(items?.price)}</span>
                            <span className="new-price" style={{ marginLeft: 5 }}>{formatPrice(items?.sale_price)}</span>
                          </>
                        )
                        :
                        (<span className="new-price">{formatPrice(items?.price)}</span>)
                      }
                    </div>
                    {/* step : 3  
                 if hami le button ma click garryo bahne 
                */}
                    <button onClick={() => addToCart(items)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
