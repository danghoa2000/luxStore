import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem';

const Event = (props) => {
    const {
        eventList,
        setEventList,
        productEventList,
        setProductEventList,
        updateProductEvent,
        productList
    } = props;
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <Typography variant="h4" gutterBottom>
                    Event
                </Typography>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link to="/admin">
                        Home
                    </Link>
                    <Typography>Event</Typography>
                </Breadcrumbs>
            </div>
            <div className="card__admin">
                <Paper style={{ margin: '-25px' }}>
                    {eventList && eventList.map(item =>
                    (
                        <Accordion style={{ backgroundColor: '#343a40' }} key={item.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id={`panel1a-header-${item?.id}`}
                            >
                                <Typography>{item?.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AccordionItem
                                    productList={productList}
                                    item={item}
                                />
                            </AccordionDetails>
                        </Accordion>
                    ))}

                </Paper>
            </div>
        </>
    );
};

export default Event;