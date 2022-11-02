import { Paper, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <Typography variant="h4" gutterBottom>
                    Home
                </Typography>
            </div>
            <Outlet />
        </>
    );
};

export default Home;