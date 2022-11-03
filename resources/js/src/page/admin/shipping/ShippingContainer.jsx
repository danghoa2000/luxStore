import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SHIPPING_API } from '../../../../constants/api';
import { axiosClient } from '../../../../hooks/useHttp';
import TableHeader from './TableHeader';
import { CODE } from '../../../../constants/constants';
import Shipping from './Shipping';

const ShippingContainer = () => {
    const [shippingList, setShippingList] = useState([]);
    const [open, setOpen] = React.useState(true);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('shipping_code');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [status, setStatus] = useState({});
    const [showNoti, setShowNoti] = useState(false);
    const [searchField, setSearchFiled] = useState({});
    const [totalRecord, setTotalRecode] = useState(0);

    const navligate = useNavigate();
    const headCells = { ...TableHeader }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const redirectShippingCreate = useCallback(() => {
        navligate('/admin/shipping/create');
    }, [])
    const getShippingList = useCallback(() => {

        const paramater = {
            searchField: searchField,
            pageSize: rowsPerPage,
            currentPage: page,
            currentSort: orderBy,
            currentDirection: order,
        };

        axiosClient.get(SHIPPING_API.LIST, {
            params: {
                ...paramater
            }
        }).then((response) => {
            if (response.status === CODE.HTTP_OK) {
                setShippingList(response.data.shippings);
                setTotalRecode(response.data.total);
            }
        }).catch((response) => {
            setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
            setShowNoti(true)
        });
    }, [order, orderBy, page, rowsPerPage, searchField]);

    useEffect(() => {
        getShippingList()
    }, [order, orderBy, page, rowsPerPage, searchField])

    const deleteShipping = useCallback((id) => {
        axiosClient.delete(SHIPPING_API.DELETE + '/' + id)
            .then((response) => {
                if (response.status === CODE.HTTP_OK) {
                    setStatus({ type: 'success', message: response.data.message });
                    setShowNoti(true)
                    getShippingList()
                }
                if (response.data.code === CODE.HTTP_NOT_FOUND) {
                    setShowNoti(true)
                    setStatus({ type: 'error', message: response.data.message });
                };
            }).catch(({ response }) => {
                if (response.status === CODE.UNPROCESSABLE_ENTITY) {
                    Object.keys(response.data.errors).forEach(element => {
                        setError(element, { type: 'custom', message: Object.values(response.data.errors[element]) })
                    });
                }
                setStatus({ type: 'error', message: response.data ? response.data.message : 'Server error' });
                setShowNoti(true)
            });
    }, []);
    return <Shipping
        open={open}
        setOpen={setOpen}
        order={order}
        orderBy={orderBy}
        page={page}
        rowsPerPage={rowsPerPage}
        handleRequestSort={handleRequestSort}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        redirectShippingCreate={redirectShippingCreate}
        headCells={headCells}
        shippingList={shippingList}
        showNoti={showNoti}
        status={status}
        setShowNoti={setShowNoti}
        setStatus={setStatus}
        setSearchFiled={setSearchFiled}
        totalRecord={totalRecord}
        deleteShipping={deleteShipping}
        getShippingList={getShippingList}
    />
};

export default ShippingContainer;