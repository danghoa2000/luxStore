import { AccountCircle, AddHomeWork, BorderColor, CalendarMonth, Call, Email, PermContactCalendar } from '@mui/icons-material';
import { Box, Breadcrumbs, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, InputAdornment, InputLabel, Radio, RadioGroup, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Direction from '../../../../../components/partial/Direction';

const AccountCreate = (props) => {
    const {
        redirectBack,
        handleCreate,
        toggleDirection,
        setToggleDirection
    } = props;

    const { handleSubmit, control, setValue, getValues } = useForm({
        shouldUnregister: false,
        defaultValues: {
            user_code: '',
            full_name: '',
            email: '',
            telephone: '',
            birthday: '',
            address: '',
            direction: '',
            role: 0,
            status: 1,
            province_id: '',
            district_id: '',
            commune_id: '',
        }
    });

    return <>
        <div className="d-flex justify-content-between align-items-center">
            <Typography variant="h4" gutterBottom>
                Account
            </Typography>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link to="/admin">
                    Home
                </Link>
                <Link to="/admin/account">
                    Account
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
                            name="user_code"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="userCode">User code <span className='required'></span></InputLabel>
                                    <Input
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        placeholder="Enter your User Code"
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="full_name"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="fullName">Full name <span className='required'></span></InputLabel>
                                    <Input
                                        id="fullName"
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <BorderColor />
                                            </InputAdornment>
                                        }
                                        placeholder="Enter your Full Name"
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="email">Email <span className='required'></span></InputLabel>
                                    <Input
                                        id="email"
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        }
                                        placeholder="Enter your Email address"
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="card__admin">
                <Typography variant="h5" className='cart_admin_title' gutterBottom>
                    Contact infomation
                </Typography>

                <Grid container sx={{ margin: 0, padding: 1, width: '100%' }} spacing={10}>
                    <Grid item xs={6}>
                        <Controller
                            name="telephone"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="telephone">Telephone <span className='required'></span></InputLabel>
                                    <Input
                                        id="telephone"
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Call />
                                            </InputAdornment>
                                        }
                                        placeholder="xxx-xxx-xxxx"
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="birthday"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="birthday">Birthday <span className='required'></span></InputLabel>
                                    <Input
                                        id="birthday"
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <CalendarMonth />
                                            </InputAdornment>
                                        }
                                        placeholder="Enter your Birthday"
                                        type='date'
                                    />
                                </FormControl>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="address"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="address">Address</InputLabel>
                                    <Input
                                        id="address"
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AddHomeWork />
                                            </InputAdornment>
                                        }
                                        placeholder="Enter your address"
                                        onBlur={(event) => {
                                            setValue(event.target.id, event.target.value ? event.target.value.trim() : '')
                                        }}
                                    />
                                </FormControl>}
                        />
                    </Grid>

                    <Grid item xs={6} style={{ position: 'relative' }} >
                        <Controller
                            name="direction"
                            control={control}
                            render={({ field }) =>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="direction">Direction</InputLabel>
                                    <Input
                                        {...field}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PermContactCalendar />
                                            </InputAdornment>
                                        }
                                        placeholder="Province/City, District, Ward/Commune,..."
                                        onFocus={() => setToggleDirection(true)}
                                    />
                                </FormControl>}
                        />
                        {toggleDirection && <Direction
                            setValue={setValue}
                            field='direction'
                            control={control}
                            ToggleDirection={setToggleDirection}
                            getValues={getValues}
                        />}
                    </Grid>
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
                                name="role"
                                control={control}
                                render={({ field }) =>
                                    <FormControl variant="standard">
                                        <FormLabel id="role">Role<span className='required'></span></FormLabel>
                                        <RadioGroup
                                            defaultValue="1"
                                            {...field}
                                            checked={'1'}
                                        >
                                            <FormControlLabel value="1" control={<Radio />} label="Manage" />
                                            <FormControlLabel value="0" control={<Radio />} label="Employee" />
                                        </RadioGroup>
                                    </FormControl>}
                            />
                        </div>


                    </Grid>
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
                <Button variant="contained" type='submit' className='m-1'>Create</Button>
                <Button variant="contained" className='m-1 btn-cancel'>Cancle</Button>
            </div>

        </form>

    </>
};

export default AccountCreate;