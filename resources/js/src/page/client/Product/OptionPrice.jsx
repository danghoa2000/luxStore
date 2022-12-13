import { Button, FormControl, TextField } from '@mui/material';
import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

const OptionPrice = ({ setSearchFiled, searchField, reset,
    setValue,
    getValues, control }) => {
    return <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: "25px 0 10px 0" }}>
            <Controller
                name="price_min"
                control={control}
                render={({ field }) =>
                    <FormControl variant="standard">
                        <TextField
                            {...field}
                            label={"Min price"}
                            size="small"
                            onBlur={(event) => {
                                setValue(event.target.value ? event.target.value.trim() : '')
                            }}
                            type="number"
                            onChange={(event) => setValue(event.target.name, event.target.value)}
                            className="light-mode"
                        />
                    </FormControl>
                }
            />

            <span style={{ margin: "0 10px" }}>~</span>
            <Controller
                name="price_max"
                control={control}
                render={({ field }) =>
                    <FormControl variant="standard">
                        <TextField
                            {...field}
                            label={"Max price"}
                            size="small"
                            onBlur={(event) => {
                                setValue(event.target.name, event.target.value ? event.target.value.trim() : '')
                            }}
                            type="number"
                            onChange={(event) => setValue(event.target.name, event.target.value)}
                            className="light-mode"
                        />
                    </FormControl>
                }
            />
        </div>
    </>
};

export default OptionPrice;