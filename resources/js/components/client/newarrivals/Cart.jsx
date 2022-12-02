import React from "react"
import Slider from "react-slick"
import { formatPrice } from "../../../utils/helper"
import Ndata from "./Ndata"
import ProductItem from "./ProductItem"

const Cart = ({ productItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <div 
      // {...settings}
        className="content grid product"
      >
        {productItems.map((val, index) => {
          return (
            <ProductItem val={val} key={index} />
          )
        })}
      </div>
    </>
  )
}

export default Cart
