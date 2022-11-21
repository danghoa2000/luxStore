import { FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const ProductType = (props) => {
    const {
        control,
        setValue,
        getValues,
        setError,
        clearErrors,
        errors,
        groupCategorytList,
        categoryList,
        manufacturerList,
        onChangeGroupCategory,
        groupCategoryId,
        setGroupCategoryId,
    } = props;
    const [t] = useTranslation();
    return (
        <div className="card__admin">
            <Grid container sx={{ margin: 0, padding: 1, width: '100%' }} spacing={10}>
                <Grid item xs={6}>
                    <Controller
                        name="group_category_id"
                        control={control}
                        render={({ field }) =>
                            <FormControl variant="standard">
                                <Select
                                    {...field}
                                    label={<>{t('product.list.table.group_category_id')}<span className='required'></span></>}
                                    size="small"
                                    value={groupCategoryId}
                                    onChange={e => {
                                        setGroupCategoryId(e.target.value)
                                        setValue(e.target.name, e.target.value)
                                        onChangeGroupCategory()
                                    }}
                                >
                                    <MenuItem key={""} value={-1}>
                                        {"select group category"}
                                    </MenuItem>

                                    {
                                        groupCategorytList.length > 0 && (
                                            groupCategorytList.map(item => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.name}
                                                </MenuItem>
                                            ))
                                        )
                                    }
                                </Select>
                            </FormControl>}
                    />
                    {errors.group_category_id && <p className='text-danger'>{errors.group_category_id.message}</p>}
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="category_id"
                        control={control}
                        render={({ field }) =>
                            <FormControl variant="standard">
                                <Select
                                    {...field}
                                    label={<>{t('product.list.table.category_id')}<span className='required'></span></>}
                                    size="small"
                                >
                                    <MenuItem key={""} value={-1}>
                                        {"select category"}
                                    </MenuItem>

                                    {
                                        categoryList.length > 0 && (
                                            categoryList.map(item => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.name}
                                                </MenuItem>
                                            ))
                                        )
                                    }
                                </Select>
                            </FormControl>}
                    />
                    {errors.category_id && <p className='text-danger'>{errors.category_id.message}</p>}
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="manufacturer_id"
                        control={control}
                        render={({ field }) =>
                            <FormControl variant="standard">
                                <Select
                                    {...field}
                                    label={<>{t('product.list.table.manufacturer_id')}<span className='required'></span></>}
                                    size="small"
                                >
                                    <MenuItem key={""} value={-1}>
                                        {"select manufacturer"}
                                    </MenuItem>

                                    {
                                        manufacturerList.length > 0 && (
                                            manufacturerList.map(item => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.name}
                                                </MenuItem>
                                            ))
                                        )
                                    }
                                </Select>
                            </FormControl>}
                    />
                    {errors.manufacturer_id && <p className='text-danger'>{errors.manufacturer_id.message}</p>}
                </Grid>

                <Grid item xs={6}>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) =>
                            <FormControl variant="standard">
                                <TextField
                                    {...field}
                                    label={t('product.list.table.description')}
                                    multiline
                                    maxRows={4}
                                    variant="standard"
                                />
                            </FormControl>}
                    />
                    {errors.description && <p className='text-danger'>{errors.description.message}</p>}
                </Grid>
            </Grid>

        </div>
    );
};

export default ProductType;