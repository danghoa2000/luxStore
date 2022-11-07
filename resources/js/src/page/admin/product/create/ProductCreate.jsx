import { AccountCircle, AddHomeWork, BorderColor, CalendarMonth, Call, Email, PermContactCalendar, PhotoCamera } from '@mui/icons-material';
import { Box, Breadcrumbs, Button, CircularProgress, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import ShowSnackbars from '../../../../../components/partial/ShowSnackbars';
import UploadFile from '../../../../../components/partial/UploadFile';

const ProductCreate = (props) => {
    const {
        redirectBack,
        handleCreate,
        toggleDirection,
        setToggleDirection,
        handleSubmit,
        control,
        reset,
        setValue,
        getValues,
        errors,
        loadding,
        showNoti,
        status,
        setShowNoti,
        groupCategorytList,
        categoryList,
        manufacturerList
    } = props;

    const [t] = useTranslation();
    return <>
        <div className="d-flex justify-content-between align-items-center">
            <Typography variant="h4" gutterBottom>
                Product
            </Typography>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link to="/admin">
                    Home
                </Link>
                <Link to="/admin/categories">
                    Product
                </Link>
                <Typography>Create</Typography>
            </Breadcrumbs>
        </div>
        <div style={{ marginBottom: 10 }}>
            <Button variant="contained" onClick={() => redirectBack()}>Back</Button>
        </div>
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="card__admin">
                <Typography variant="h5" className='cart_admin_title' gutterBottom>
                    Basic information
                </Typography>
                <Grid container sx={{ margin: 0, padding: 1, width: '100%' }} spacing={10}>
                    <Grid item xs={6}>
                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="">{t('product.list.table.image')}</InputLabel>
                                    <Input
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        placeholder={t('placehoder', { name: t('product.list.table.image') })}
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />
                        {errors.image && <p className='text-danger'>{errors.image.message}</p>}

                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="product_code"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="">{t('product.list.table.product_code')}<span className='required'></span></InputLabel>
                                    <Input
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        placeholder={t('placehoder', { name: t('product.list.table.product_code') })}
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />
                        {errors.product_code && <p className='text-danger'>{errors.product_code.message}</p>}

                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="fullName">{t('product.list.table.name')}</InputLabel>
                                    <Input
                                        id="fullName"
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <BorderColor />
                                            </InputAdornment>
                                        }
                                        placeholder={t('placehoder', { name: t('product.list.table.name') })}
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />
                        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="price"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="fullName">{t('product.list.table.price')}<span className='required'></span></InputLabel>
                                    <Input
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <BorderColor />
                                            </InputAdornment>
                                        }
                                        placeholder={t('placehoder', { name: t('product.list.table.price') })}
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />
                        {errors.price && <p className='text-danger'>{errors.price.message}</p>}
                    </Grid>
                </Grid>
            </div>

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
                                    >
                                        <MenuItem key={""} value={-1} disabled>
                                            {"select group category"}
                                        </MenuItem>

                                        {
                                            groupCategorytList.length > 0 && (
                                                groupCategorytList.map(item => (
                                                    <MenuItem key={""} value={item.id}>
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
                                        <MenuItem key={""} value={-1} disabled>
                                            {"select category"}
                                        </MenuItem>

                                        {
                                            categoryList.length > 0 && (
                                                categoryList.map(item => (
                                                    <MenuItem key={""} value={item.id}>
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
                                        <MenuItem key={""} value={-1} disabled>
                                            {"select manufacturer"}
                                        </MenuItem>

                                        {
                                            manufacturerList.length > 0 && (
                                                manufacturerList.map(item => (
                                                    <MenuItem key={""} value={item.id}>
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

            <div className="card__admin">
                <Typography variant="h5" className='cart_admin_title' gutterBottom>
                    Setting
                </Typography>

                <Grid container sx={{ margin: 0, padding: 1, width: '100%' }} spacing={10}>
                    <UploadFile setValue={setValue} />
                </Grid>
            </div>

            <div className="card__admin">
                <Typography variant="h5" className='cart_admin_title' gutterBottom>
                    Setting
                </Typography>

                <Grid container sx={{ margin: 0, padding: 1, width: '100%' }} spacing={10}>
                    <Grid item xs={6}>
                        <div className='d-inline'>
                            <Controller
                                name="status"
                                control={control}
                                render={({ field }) =>
                                    <FormControl>
                                        <FormLabel id="status">Status<span className='required'></span></FormLabel>
                                        <RadioGroup
                                            defaultValue="1"
                                            {...field}
                                            checked={'1'}
                                        >
                                            <FormControlLabel value="1" control={<Radio />} label="Active" />
                                            <FormControlLabel value="0" control={<Radio />} label="Block" />
                                        </RadioGroup>
                                    </FormControl>
                                }
                            />
                        </div>

                    </Grid>
                </Grid>
            </div>
            <div className='d-flex justify-content-center w-100'>
                <Button variant="contained" type='submit' className='m-1' disabled={loadding}>{loadding &&
                    <CircularProgress
                        disableShrink
                        style={{ color: 'white', width: '14px', height: '14px', margin: '0 5px 0 0' }} />}
                    Create
                </Button>
                <Button variant="contained" type='reset' className='m-1 btn-cancel'
                    onClick={() => reset()}
                >Clear</Button>
            </div>
        </form>
        {showNoti && <ShowSnackbars type={status.type} message={status.message} setShowNoti={setShowNoti} />}
    </>
};

export default ProductCreate;