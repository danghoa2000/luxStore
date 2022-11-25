import React, { useCallback, useEffect, useState } from 'react';
import { EVENT_API, PRODUCT_API } from '../../../../constants/api';
import { CODE } from '../../../../constants/constants';
import { axiosClient } from '../../../../hooks/useHttp';
import Event from './Event';

const EventContainer = () => {
    const [eventList, setEventList] = useState([]);
    const [productEventList, setProductEventList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);
    const getEventList = useCallback(() => {
        axiosClient.get(EVENT_API.LIST).then((response) => {
            if (response.status === CODE.HTTP_OK) {
                setEventList(response?.data?.events);
            }
        }).catch((response) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, [])

    const getProductList = useCallback(() => {
        axiosClient.get(PRODUCT_API.LIST).then((response) => {
            if (response.status === CODE.HTTP_OK) {
                setProductList(response?.data?.products.map(({ id, name }) => ({ id, name })));
            }
        }).catch((response) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, [])

    const updateProductEvent = useCallback(() => {

    }, [])

    useEffect(() => {
        getEventList();
        getProductList()
    }, [])
    return <Event
        eventList={eventList}
        setEventList={setEventList}
        productEventList={productEventList}
        setProductEventList={setProductEventList}
        updateProductEvent={updateProductEvent}
        productList={productList}
    />
};

export default EventContainer;