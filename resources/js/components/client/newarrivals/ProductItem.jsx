import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../../utils/helper';

const ProductItem = ({ val }) => {
    return (
        <div className='box' style={{ margin: "0 5px" }}>
            <div className='img has__hover'>
                {val?.sale_persen != 0 ? <span className='discount'>{val?.sale_persen}% Off</span> : ""}
                <img src={val?.image} alt='' />
            </div>
            <h4>{val?.name}</h4>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                {val?.sale_price ?
                    (
                        <>
                            <span className="old-price">{formatPrice(val?.price)}</span>
                            <span className="new-price" style={{ marginLeft: 5 }}>{formatPrice(val?.sale_price)}</span>
                        </>
                    )
                    :
                    (<span className="new-price">{formatPrice(val?.price)}</span>)
                }
            </div>
        </div>
    );
};

export default ProductItem;