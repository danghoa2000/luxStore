import { List, ListItem, ListItemText, ListSubheader, Rating } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OptionRate = ({ setSearchFiled, name }) => {
    const [rate, setRate] = useState('');
    useEffect(() => {
        if (rate) {
            setSearchFiled(pre => ({ ...pre, [name]: rate }))
        } else {
            setSearchFiled(({ [name]: _, ...newObj }) => newObj)
        }
    }, [rate, name])
    return <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        subheader={
            <ListSubheader
                className='search-title'
                component="div"
                style={{ fontWeight: "bold", padding: "10px 0", lineHeight: "22px", fontSize: "18px" }}>
                Rating
            </ListSubheader>
        }>
        {
            [5, 4, 3, 2, 1].map((value) => {
                return <ListItem
                    disablePadding
                    key={value}
                >
                    <div onClick={()=>setRate(value)}>
                        <Rating
                            value={value}
                            readOnly
                            className={rate == value ? 'rate__active' : ''}
                        />
                    </div>

                </ListItem>
            })
        }
    </List>
};

export default OptionRate;