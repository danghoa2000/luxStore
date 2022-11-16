import { Add, AddCircle, AddCircleSharp, RemoveCircle, Save, Search } from '@mui/icons-material';
import { Autocomplete, Button, CircularProgress, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BasicModal from '../../../../../components/partial/BasicModal';
import CreateAttributeModal from '../../../../../components/partial/Modal/CreateAttributeModal';
import CreateAttributeValueModal from '../../../../../components/partial/Modal/CreateAttributeValueModal';
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
    const [propertiesList, setPropertiesList] = useState([]);
    const [propertyCount, setpropertyCount] = useState(0);
    const [attributeList, setAttributeList] = useState([]);
    const [attributeValueList, setAttributeValueList] = useState([]);
    const [attributeSelectedList, setAttributeSelectedList] = useState([]);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(1);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getAttributeList = useCallback(() => {
        axiosClient.get(PRODUCT_API.ATTRIBUTE)
            .then((result) => {
                setAttributeList(result.data.attribute)
                setAttributeValueList(result.data.options)
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
        setProperties(pre => ({ ...pre, [index]: { attribute: value?.id || "", attributeValue: "" } }));
        let newAttributeSelectedList = [...attributeSelectedList];
        newAttributeSelectedList = newAttributeSelectedList.filter(item => item !== properties[index].attribute);
        if (value?.id) {
            newAttributeSelectedList.push(value.id);
        }
        setAttributeSelectedList(newAttributeSelectedList);
    }, [attributeSelectedList, properties])

    const updateAttributeValue = (index, value) => {
        setProperties(pre => ({ ...pre, [index]: { ...pre[index], attributeValue: value?.id || "" } }));
    }

    const saveProperty = useCallback(() => {
        setPropertiesList(pre => [...pre, { ...properties }])
        setProperties({});
    }, [properties, propertiesList]);

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
    }, [properties, propertiesList]);

    const PROPERTYITEM = useCallback((key, item) => {
        return (
            <React.Fragment key={key}>
                {
                    Object.values(item).map(data => {
                        console.log(item);
                        return (
                            'attribute: ' + data.attribute + '- attributeValue: ' + data.attributeValue + ', '
                        )
                    })
                }
            </React.Fragment >
        )
    }, [propertiesList]);

    const PROPERTYLIST = useCallback(() => {

        console.log(propertiesList);
        return (

            propertiesList && propertiesList.length > 0 && (
                propertiesList.map((index, item) => {
                    console.log(Object.values(item), item);
                    return <React.Fragment key={item}>
                        {
                            Object.values(item).map(data => {
                                console.log(item);
                                return (
                                    'attribute: ' + data.attribute + '- attributeValue: ' + data.attributeValue + ', '
                                )
                            })
                        }
                    </React.Fragment >
                })
            )
        )
    }, [propertiesList]);

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

            <Grid container sx={{ margin: 0, width: '100%', padding: 0 }} spacing={10}>
                <Grid item xs={10}>
                    <Grid>
                        {
                            properties && Object.keys(properties).length > 0 &&
                            Object.entries(properties).map(([key, item]) => {
                                return (
                                    renderProperty(key, item)
                                );
                            })
                        }

                    </Grid>
                    <Grid>
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

                    <Grid>
                        <Typography variant="h6" className='cart_admin_label' gutterBottom>
                            Properties list
                        </Typography>
                        {propertiesList && propertiesList.length > 0 && (
                            propertiesList.map((index, item) => {
                                console.log(Object.values(item), item);
                                return <React.Fragment key={item}>
                                    {
                                        Object.values(item).map(data => {
                                            console.log(item);
                                            return (
                                                'attribute: ' + data.attribute + '- attributeValue: ' + data.attributeValue + ', '
                                            )
                                        })
                                    }
                                </React.Fragment >
                            })
                        )}
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    {
                        properties && Object.keys(properties).length > 0 && (
                            <>
                                <Button variant="contained" className='m-1' style={{ textTransform: 'none', width: 180, maxWidth: '100%' }}
                                    onClick={() => {
                                        setOpen(true)
                                        setType(1);
                                    }}
                                >
                                    Create new attribute
                                </Button>

                                <Button variant="contained" className='m-1' style={{ textTransform: 'none', width: 180, maxWidth: '100%' }}
                                    onClick={() => {
                                        setOpen(true)
                                        setType(2);
                                    }}
                                >
                                    Create new value
                                </Button>

                                <Button variant="contained" className='m-1' style={{ textTransform: 'none', width: 180, background: 'rgb(73, 170, 25)', maxWidth: '100%' }}
                                    onClick={saveProperty}
                                >
                                    <Save style={{ marginRight: 2 }} />
                                    Save
                                </Button>
                            </>
                        )
                    }
                </Grid>
            </Grid>
            {
                open && (
                    <BasicModal open={open} handleClose={handleClose}>
                        {
                            type === 1 && (
                                <CreateAttributeModal />
                            )
                        }
                        {
                            type === 2 && (
                                <CreateAttributeValueModal />
                            )
                        }
                    </BasicModal>
                )
            }
        </div>
    );
};


export default ProductProperty;