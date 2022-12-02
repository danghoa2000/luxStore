import React, { useCallback, useMemo, useState } from "react"
import { formatPrice } from "../../../utils/helper"

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const RATE = useCallback(() => {
    const rate = [];
    for (var i = 0; i < shopItems?.total_rate; i++) {
      rate.push(<i className='fa fa-star' key={i}></i>);
    }
    return rate;
  }, [shopItems])
  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img mb-30'>
                {shopItems?.sale_persen ? <span className='discount'>{shopItems?.sale_persen}% Off</span> : ""}
                <img src={shopItems?.image} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems?.name}</h3>
                <div className='rate'>
                  {RATE}
                </div>
                <div className='price'>
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    {shopItems?.sale_price ?
                      (
                        <>
                          <span className="old-price">{formatPrice(shopItems?.price)}</span>
                          <span className="new-price" style={{ marginLeft: 5 }}>{formatPrice(shopItems?.sale_price)}</span>
                        </>
                      )
                      :
                      (<span className="new-price">{formatPrice(shopItems?.price)}</span>)
                    }
                  </div>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
