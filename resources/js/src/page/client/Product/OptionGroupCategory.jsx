import { List, ListItem, ListSubheader, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

const OptionGroupCategory = ({ setSearchFiled, name, option }) => {
    const [item, setItem] = useState('');
    useEffect(() => {
        if (item) {
            setSearchFiled(pre => ({ ...pre, [name]: item }))
        } else {
            setSearchFiled(({ [name]: _, ...newObj }) => newObj)
        }
    }, [item, name])

    return <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        subheader={
            <ListSubheader
                className='search-title'
                component="div"
                style={{ fontWeight: "bold", padding: "10px 0", lineHeight: "22px", fontSize: "18px" }}>
                Group category
            </ListSubheader>
        }>
        {
            option.map((value) => {
                return <ListItem
                    disablePadding
                    key={value.id}
                >
                    <div onClick={() => setItem(value.id)}>
                        <Typography
                            className={item == value.id ? 'rate__active' : ''}
                            style={{ fontSize: 16 }}
                        >
                            - {value.name}
                        </Typography>
                    </div>

                </ListItem>
            })
        }
    </List>
};

export default OptionGroupCategory;