import { Add, AddCircle, AddCircleSharp, RemoveCircle, Save, Search } from '@mui/icons-material';
import { Autocomplete, Button, CircularProgress, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import BasicModal from '../../../../../components/partial/BasicModal';
import CreateAttributeModal from '../../../../../components/partial/Modal/CreateAttributeModal';
import CreateAttributeValueModal from '../../../../../components/partial/Modal/CreateAttributeValueModal';
import ProductPropertyItem from '../../../../../components/partial/product/ProductPropertyItem';
import { GROUP_CATEGORY_API, PRODUCT_API } from '../../../../../constants/api';
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

const ProductProperty = (props, ref) => {
    const {
        control,
        setValue,
        name,
        getValues,
        setError,
        clearErrors,
        errors,
        setStatus,
        setShowNoti,
        getGroupCategory,
        groupCategorytList,
        product
    } = props;
    const [t] = useTranslation();
    const [properties, setProperties] = useState({});
    const [propertiesList, setPropertiesList] = useState([]);
    const [propertyCount, setpropertyCount] = useState(0);
    const [attributeList, setAttributeList] = useState([]);
    const [attributeValueList, setAttributeValueList] = useState([]);
    const [attributeSelectedList, setAttributeSelectedList] = useState([]);
    const [qty, setQty] = useState('');
    const [idEdit, setIdEdit] = useState(null);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(1);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [currentRef, setCurrentRef] = useState();
    const getAttributeList = useCallback(() => {
        axiosClient.get(GROUP_CATEGORY_API.ATTRIBUTE, {
            params: {
                group_category_id: getValues("group_category_id")
            }
        })
            .then((result) => {
                setAttributeList(result.data.groupCategories?.attributes.map(({ id, name }) => ({ id, name })))
            }).catch((err) => {
                console.log(err);
            });
    }, [getValues("group_category_id")]);

    const removeProperty = useCallback((index) => {
        const { [index]: _, ...newProperties } = properties;
        setProperties(newProperties)
        setAttributeSelectedList(attributeSelectedList.filter(item => item !== properties[index].attributeName))
    }, [attributeSelectedList, properties]);

    const updateAttributeName = useCallback((index, value) => {
        setProperties(pre => ({ ...pre, [index]: { attributeName: value?.id || "", attributeValue: "" } }));
        let newAttributeSelectedList = [...attributeSelectedList];
        newAttributeSelectedList = newAttributeSelectedList.filter(item => item !== properties[index].attributeName);
        if (value?.id) {
            newAttributeSelectedList.push(value.id);
        }
        setAttributeSelectedList(newAttributeSelectedList);
    }, [attributeSelectedList, properties])

    const updateAttributeValue = (index, value) => {
        setProperties(pre => ({ ...pre, [index]: { ...pre[index], attributeValue: value?.id || "" } }));
    }

    const saveProperty = useCallback(() => {
        const error = validateProperty();
        if (error) {
            setStatus({ type: 'error', message: "Please enter full information!" });
            setShowNoti(true);
            return;
        }
        if (idEdit === null) {
            setPropertiesList(pre => [...pre, { ...properties, qty: qty }])
        } else {
            let newPropertiesList = [...propertiesList];
            newPropertiesList[idEdit] = properties;
            newPropertiesList[idEdit].qty = qty;
            setPropertiesList(newPropertiesList);
        }
        setProperties({});
        setIdEdit(null);
        setAttributeSelectedList([]);
    }, [properties, propertiesList, idEdit, qty]);

    const validateProperty = useCallback(() => {
        let error = false;
        Object.entries(properties).forEach(([item, key]) => {
            if (properties[item].attributeName && properties[item].attributeValue) {
            } else {
                error = true;
            }
        })
        return error;
    }, [properties])

    const removeAll = useCallback(() => {
        setProperties({});
        setPropertiesList([])
        setValue(name, []);
        setAttributeSelectedList([])
    }, [name]);

    useImperativeHandle(ref, () => ({
        removeAll: () => {
            removeAll();
        }
    }), [name, ref])

    const renderProperty = useCallback((key, item) => {
        return (
            <React.Fragment key={key}>
                <ProductPropertyItem
                    setCurrentRef={setCurrentRef}
                    topFilms={topFilms}
                    index={key}
                    item={item}
                    removeProperty={removeProperty}
                    setProperties={setProperties}
                    properties={properties}
                    updateAttributeName={updateAttributeName}
                    updateAttributeValue={updateAttributeValue}
                    attributeList={attributeList}
                    attributeValueList={attributeValueList}
                    attributeSelectedList={attributeSelectedList}
                />
            </React.Fragment >
        )
    }, [properties, propertiesList, attributeList, attributeValueList]);

    useEffect(() => {
        if (product) {
            const newData = product?.product_detail?.map(item => {
                const newItem = (item.property_value).map(element => ({ attributeName: element.attribute_id, attributeValue: element.id }))
                return {
                    ...newItem,
                    qty: item.qty
                }
            })
            setPropertiesList(newData);
        }
    }, [product]);

    useEffect(() => {
        if (Object.keys(properties).length === 0) {
            setpropertyCount(0);
            setIdEdit(null);
            setQty(0)
        }
    }, [properties]);

    useEffect(() => {
        setValue(name, propertiesList)
    }, [name, propertiesList]);

    useEffect(() => {
        if (getValues("group_category_id") !== -1) {
            getAttributeList();
        } else {
            setAttributeList([])
        }
    }, [getValues("group_category_id")])

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
                            Object.entries(properties).map(([item, key]) => {
                                return (
                                    renderProperty(item, item)
                                );
                            })
                        }

                    </Grid>
                    {
                        properties && Object.keys(properties).length > 0 && (
                            <Grid item xs={5} style={{ margin: "10px 0" }}>
                                <TextField
                                    label="Qty"
                                    variant="standard"
                                    type="number"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                />
                            </Grid>
                        )
                    }
                    <Grid>
                        <IconButton aria-label="delete" style={{ background: 'rgba(0, 0, 0, 0.04)', borderRadius: '50%', width: 80, height: 80 }}
                            onClick={() => {
                                const newProperty = { ...properties };
                                newProperty[propertyCount] = { attributeName: '', attributeValue: '' };
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
                            propertiesList.map((item, index) => {
                                const { qty, ...newItem } = item;
                                return <React.Fragment key={index}>
                                    {
                                        <p>
                                            {
                                                Object.values(newItem).map((item, index) => {
                                                    return (
                                                        attributeList[index]?.name + ': ' + attributeValueList[index]?.name + ', '
                                                    )
                                                })
                                            }
                                            {
                                                "Qty: " + qty
                                            }
                                            <span
                                                className='edit__property'
                                                onClick={() => {
                                                    setProperties(newItem)
                                                    Object.entries(newItem).map(([value, key], index, arr) => {
                                                        if (index === (arr.length - 1)) {
                                                            setpropertyCount(Number(key) + 1)
                                                        };
                                                        return 1;
                                                    })
                                                    setIdEdit(index);
                                                    setQty(qty)
                                                }}>Edit</span>
                                        </p>
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
                                    onClick={() => saveProperty(idEdit)}
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
                                <CreateAttributeModal
                                    getAttributeList={getAttributeList}
                                    groupCategorytList={groupCategorytList}
                                    setShowNoti={setShowNoti}
                                    setStatus={setStatus}
                                />
                            )
                        }
                        {
                            type === 2 && (
                                <CreateAttributeValueModal
                                    currentRef={currentRef}
                                    groupCategorytList={groupCategorytList}
                                    setShowNoti={setShowNoti}
                                    setStatus={setStatus}
                                />
                            )
                        }
                    </BasicModal>
                )
            }
        </div>
    );
};


export default forwardRef(ProductProperty);