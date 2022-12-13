import { FormControl, FormControlLabel, FormLabel, List, ListItem, ListSubheader, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Controller } from 'react-hook-form';

const OptionGroupCategory = ({ setSearchFiled, name, option, reset,
    setValue,
    getValues,
    control,
    handleSubmit,
    getProductList }) => {

    return <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        subheader={
            <ListSubheader
                className='search-title'
                component="div"
                style={{ fontWeight: "bold", padding: "10px 0", lineHeight: "22px", fontSize: "18px" }}>
                Group category
            </ListSubheader>
        }>
        {
            <Controller
                name="group_category"
                control={control}
                render={({ field }) =>
                    <FormControl variant="standard">
                        <RadioGroup>
                            {
                                option.map((value) => {
                                    return <FormControlLabel
                                        {...field}
                                        key={value.id}
                                        control={<Radio
                                            value={value.id}
                                            readOnly
                                            style={{ display: 'none' }}
                                            onClick={() => {
                                                if (field.value == value.id) {
                                                    field.onChange('')
                                                } else {
                                                    field.onChange(value.id)
                                                }
                                            }}

                                        />}
                                        label={value.name}
                                        style={{ marginLeft: 0 }}
                                        className={`${getValues('group_category') == value.id ? 'active' : ''}`}
                                    />
                                })
                            }
                        </RadioGroup>
                    </FormControl>
                }
            />
        }
    </List>


};

export default OptionGroupCategory;