import { LinearProgress } from "@mui/material";
import React from "react";

const Loading = () => {
    return (
        <div className="d-flex justify-center" style={{ minHeight: 500, width: '100%' }}>
            <LinearProgress />
        </div>
    );
};

export default Loading;
