import { Button, TextField } from '@mui/material';
import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

const OptionPrice = ({ setSearchFiled, searchField }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const validate = useCallback(() => {
        if (maxPrice || minPrice) {
            if (maxPrice && minPrice && maxPrice < minPrice) {
                return false;
            }
            return true;
        }
        return false;
    }, [minPrice, maxPrice]);

    const handleAplly = useCallback(() => {
        const result = validate();
        if (result) {
            setSearchFiled(pre => ({ ...pre, 'price_max': maxPrice, 'price_min': minPrice }))
        } else {

        }
    }, [minPrice, maxPrice]);

    const handleCancel = useCallback(() => {
        setSearchFiled(({ price_min, price_max, ...newObj }) => newObj);
        setMinPrice('');
        setMaxPrice('');
    }, []);
    return <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: "25px 0 10px 0" }}>
            <TextField
                name="min_price"
                label={"Min price"}
                size="small"
                onBlur={(event) => {
                    setMinPrice(event.target.value ? event.target.value.trim() : '')
                }}
                type="number"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
                className="light-mode"
            />
            <span style={{ margin: "0 10px" }}>~</span>
            <TextField
                name="max_price"
                label={"Max price"}
                size="small"
                onBlur={(event) => {
                    setMaxPrice(event.target.value ? event.target.value.trim() : '')
                }}
                type="number"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
                className="light-mode"
            />
        </div>
        <div className='d-flex w-100'>
            <Button variant="contained" type='submit' style={{ background: "#28a745", marginRight: 5 }} size='small'
                onClick={handleAplly}
            >
                Apply
            </Button>
            <Button variant="contained" type='reset' className='bg-gray-100' size='small'
                onClick={handleCancel}
            >Clear</Button>
        </div>
    </>
};

export default OptionPrice;