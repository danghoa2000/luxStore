import { Star } from '@mui/icons-material';
import { Rating } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { formatPrice } from '../../../utils/helper';

const ProductItem = ({ addToCart, shopItems }) => {
    return (
        <div className='product__list__item'>
            <div className='product mtop'>
                <div className='img'>
                    {shopItems?.sale_persen ? <span className='discount'>{shopItems?.sale_persen}% Off</span> : ""}
                    <img src={shopItems?.image} alt='' />
                    <div className='product-like'>
                        <label>{0}</label> <br />
                        <i className='fa-regular fa-heart' onClick={() => { }}></i>
                    </div>
                </div>
                <div className='product-details'>
                    <h3>{shopItems?.name}</h3>
                    <div className='rate'>
                        <Rating
                            name="text-feedback"
                            value={shopItems?.total_rate || 0}
                            readOnly
                            precision={0.5}
                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
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
    );
};

export default ProductItem;