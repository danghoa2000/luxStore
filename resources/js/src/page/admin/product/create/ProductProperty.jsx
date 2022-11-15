import { Add, AddCircle, AddCircleSharp, RemoveCircle, Search } from '@mui/icons-material';
import { Autocomplete, Button, CircularProgress, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductPropertyItem from '../../../../../components/partial/product/ProductPropertyItem';
import { PRODUCT_API } from '../../../../../constants/api';
import { axiosClient } from '../../../../../hooks/useHttp';

const topFilms = [{
    id: '1',
    name: 'Option 1'
},
{
    id: '2',
    name: 'Option 2'
},
{
    id: '3',
    name: 'Option 3'
}
];

const ProductProperty = (props) => {
    const {
        control,
        setValue,
        getValues,
        setError,
        clearErrors,
        errors,
    } = props;
    const [t] = useTranslation();
    const [properties, setProperties] = useState({});
    const [propertyCount, setpropertyCount] = useState(0);
    const [attributeList, setAttributeList] = useState([]);
    const [attributeSelectedList, setAttributeSelectedList] = useState([]);

    const getAttributeList = useCallback(() => {
        axiosClient.get(PRODUCT_API.ATTRIBUTE)
            .then((result) => {
                setAttributeList(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    const removeProperty = useCallback((index) => {
        const { [index]: _, ...newProperties } = properties;
        setProperties(newProperties)
        setAttributeSelectedList(attributeSelectedList.filter(item => item !== properties[index].attribute))
    }, [attributeSelectedList, properties]);

    const updateAttributeName = useCallback((index, value) => {
        setProperties(pre => ({ ...pre, [index]: { attribute: value, attributeValue: "" } }));
        const newAttributeSelectedList = [...attributeSelectedList];
        newAttributeSelectedList.filter(item => item !== properties[index].attribute);
        newAttributeSelectedList.push(value);
        setAttributeSelectedList(newAttributeSelectedList);
    }, [attributeSelectedList, properties])

    const updateAttributeValue = (index, value) => {
        setProperties(pre => ({ ...pre, [index]: { ...pre[index], attributeValue: value } }));
    }

    console.log(properties);

    const renderProperty = useCallback((key, item) => {
        return (
            <React.Fragment key={key}>
                <ProductPropertyItem
                    topFilms={topFilms}
                    index={key}
                    item={item}
                    removeProperty={removeProperty}
                    setProperties={setProperties}
                    properties={properties}
                    updateAttributeName={updateAttributeName}
                    updateAttributeValue={updateAttributeValue}
                    attributeList={attributeList}
                    attributeSelectedList={attributeSelectedList}
                />
            </React.Fragment >
        )
    }, [properties]);

    useEffect(() => {
        getAttributeList();
    }, [])

    useEffect(() => {
        if (Object.keys(properties).length === 0) {
            setpropertyCount(0);
        }
    }, [properties]);

    return (
        <div className="card__admin">
            <Typography variant="h5" className='cart_admin_label' gutterBottom>
                Properties
            </Typography>

            <Grid container sx={{ margin: 0, width: '100%' }} spacing={10}>
                {
                    properties && Object.keys(properties).length > 0 &&
                    Object.entries(properties).map(([key, item]) => {
                        return (
                            renderProperty(key, item)
                        );
                    })
                }
                <IconButton aria-label="delete" style={{ background: 'rgba(0, 0, 0, 0.04)', borderRadius: '50%', width: 80, height: 80 }}
                    onClick={() => {
                        const newProperty = { ...properties };
                        newProperty[propertyCount] = { attribute: '', attributeValue: '' };
                        setpropertyCount(propertyCount + 1)
                        setProperties(newProperty);
                    }}
                >
                    <Add style={{ color: '#fff' }} />
                </IconButton>

            </Grid>
        </div>
    );
};


export default ProductProperty;