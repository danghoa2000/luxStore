import { Checkbox, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Option = ({ option, label, setSearchFiled, searchField, name }) => {
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    useEffect(() => {
        if (checked.length > 0) {
            const newSearchField = { ...searchField };
            newSearchField[name] = checked;
            setSearchFiled(newSearchField);
        } else {
            setSearchFiled(({ [name]: _, ...newObj }) => newObj)
        }
    }, [checked, name])
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={
                <ListSubheader
                    className='search-title'
                    component="div"
                    style={{ fontWeight: "bold", padding: "10px 0", lineHeight: "22px", fontSize: "18px" }}>
                    {label}
                </ListSubheader>
            }>
            {
                Object.values(option).map((value) => {
                    const labelId = `checkbox-list-label-${value.id}`;
                    return <ListItem
                        key={value.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments"></IconButton>
                        }
                        className='list__checkbox border-bottom-1'
                    >
                        <ListItemText role={undefined} onClick={handleToggle(value.id)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value.name || value.attribute_value_name} />
                        </ListItemText>
                    </ListItem>
                })
            }
        </List>
    )
};

export default Option;