import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../../utils/helper';

const ProductItem = ({val}) => {
    const [item, setItem] = useState({});
    useEffect (() => {
        setItem({...val})
    }, [val]);
    return (
        <div className='box' style={{ margin: "0 5px" }}>
            <div className='img'>
                {item?.sale_persen != 0 ? <span className='discount'>{item?.sale_persen}% Off</span> : ""}
                <img src={val?.image} alt='' />
            </div>
            <h4>{item?.name}</h4>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                {item?.sale_price ?
                    (
                        <>
                            <span className="old-price">{formatPrice(item?.price)}</span>
                            <span className="new-price" style={{ marginLeft: 5 }}>{formatPrice(item?.sale_price)}</span>
                        </>
                    )
                    :
                    (<span className="new-price">{formatPrice(item?.price)}</span>)
                }
            </div>
        </div>
    );
};

export default ProductItem;