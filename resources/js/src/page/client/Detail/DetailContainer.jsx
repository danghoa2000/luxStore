import { map, result } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCT_API } from '../../../../constants/api';
import { CODE } from '../../../../constants/constants';
import { axiosClient } from '../../../../hooks/useHttp';
import Detail from './Detail';

const DetailContainer = ({ CartItem, addToCart, decreaseQty, showNoti, setShowNoti, setStatus }) => {
    const [qty, setQty] = useState(1);
    const { state } = useLocation();
    const [product, setProduct] = useState();
    const [tab, setTab] = useState(0);
    const [option, setOption] = useState({});

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    const getProduct = useCallback(() => {
        axiosClient.get(PRODUCT_API.SHOW, {
            params: {
                id: state?.id || 1
            }
        }).then((response) => {
            setProduct(response.data.product);
            if (response.data.code === CODE.HTTP_NOT_FOUND) {
                setStatus({ type: 'error', message: response.data.message });
                setShowNoti(true)
            };
        }).catch(({ response }) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, [state])
    useEffect(() => {
        getProduct();
    }, [state])

    const checkExitProduct = () => {
        const optionTemp = (Object.values(option)).sort();
        const data = Object.keys(product?.product_detail)?.map((item) => {
            let obj = {};
            obj['id'] = product?.product_detail[item].id;
            obj['option'] = Object.values(product?.product_detail[item].property_value).map(item => item.id).sort();
            obj['qty'] = qty;
            return obj;
        });
        const result = data.find(item => (item.option).toString() == optionTemp.toString() && qty <= item.qty);
        return result || null;
    }

    const handleSubmit = () => {
        const result = checkExitProduct();
        console.log(result);
        if (result) {
            addToCart(result, result.qty);
        } else {
            setStatus({ type: 'warning', message: "Option select is invalid" });
            setShowNoti(true);
        }
    }
    return <Detail
        qty={qty}
        setQty={setQty}
        product={product}
        handleChange={handleChange}
        tab={tab}
        setOption={setOption}
        option={option}
        handleSubmit={handleSubmit}
    />
};

export default DetailContainer;