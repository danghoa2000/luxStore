import { Checkbox, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import Option from './Option';

const OptionAttribute = ({ formFilter, option, setSearchFiled, searchField, name }) => {
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
    }
    useEffect(() => {
        if (checked.length > 0) {
            const newSearchField = { ...searchField };
            newSearchField[name] = checked;
            setSearchFiled(newSearchField);
        } else {
            const { [name]: _, ...newObj } = { ...searchField };
            setSearchFiled(newObj)
        }
    }, [checked, name])

    return (
        formFilter[option] && Object.keys(formFilter[option]).map((value, index) => {
            if (Object.keys(formFilter[option][value]['option']).length > 0 || formFilter[option][value]['option'].length > 0)
                return <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    key={index}
                    subheader={
                        <ListSubheader
                            className='search-title'
                            component="div"
                            style={{ fontWeight: "bold", padding: "10px 0", lineHeight: "22px", fontSize: "18px" }}>
                            {formFilter[option][value]['name']}
                        </ListSubheader>
                    }>
                    {

                        Object.values(formFilter[option][value]['option']).map((value, index) => {
                            const labelId = `checkbox-list-label-${index}`;
                            return <ListItem
                                key={index}
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
        })
    );
}
export default OptionAttribute;