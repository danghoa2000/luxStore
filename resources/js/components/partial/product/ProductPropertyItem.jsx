import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import ProductAttributeName from './ProductAttributeName';
import ProductAttributeValue from './ProductAttributeValue';
import { AddCircleSharp, RemoveCircle } from '@mui/icons-material';
import { axiosClient } from '../../../hooks/useHttp';
import { PRODUCT_API } from '../../../constants/api';

const ProductPropertyItem = ({ topFilms, index, item, removeProperty, setProperties, properties, updateAttributeName, updateAttributeValue, attributeList, attributeSelectedList }) => {
    const [attributeName, setAttributeName] = useState(properties[index].attributeName);
    const [attributeValue, setAttributeValue] = useState(properties[index].attributeValue);
    const [attributeValueList, setAttributeValueList] = useState([]);

    const getOptionByAttribute = useCallback(() => {
        axiosClient.post(PRODUCT_API.OPTIONS, { id: attributeName })
            .then((result) => {
                setAttributeValueList(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (attributeName) {
            getOptionByAttribute();
        }
    }, [attributeName])

    const handleUpdateAttributeName = (value) => {
        setAttributeName(value)
        setAttributeValue("")
        updateAttributeName(index, value)
    };

    const handleUpdateAttributeValue = (value) => {
        setAttributeValue(value)
        updateAttributeValue(index, value)
    }

    return (
        <div style={{ padding: 5, display: 'flex' }}>
            <div className='d-flex' style={{ border: '1px solid', padding: '5px', borderRadius: 5 }}>
                <ProductAttributeName
                    topFilms={topFilms}
                    attributeName={attributeName}
                    setAttributeName={setAttributeName}
                    attributeList={attributeList}
                    handleUpdateAttributeName={handleUpdateAttributeName}
                    attributeSelectedList={attributeSelectedList}
                />
                <ProductAttributeValue
                    topFilms={topFilms}
                    attributeValue={attributeValue}
                    setAttributeValue={setAttributeValue}
                    attributeValueList={attributeValueList}
                    handleUpdateAttributeValue={handleUpdateAttributeValue}
                />
                {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={topFilms}
                    sx={{ width: 300 }}
                    getOptionLabel={(option) => option.name || ""}
                    // getOptionSelected={(option, value) => option.id === value.id }
                    isOptionEqualToValue={(option, value) => option?.id === value?.id}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                /> */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 2, justifyContent: 'space-between' }}>
                <Button variant="contained" style={{ padding: 3, minWidth: 'unset', color: 'red', background: 'white' }}
                    onClick={() => removeProperty(index)}
                ><RemoveCircle /></Button>
                <Button variant="contained" style={{ padding: 3, minWidth: 'unset' }}><AddCircleSharp /></Button>
            </div>
        </div>
    )
};

export default ProductPropertyItem;