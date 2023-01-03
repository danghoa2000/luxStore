import { Add } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

const ModalAddress = ({ setType }) => {
    return (
        <div className="my__address">
            <div className="header">
                <Typography variant="h6">My address</Typography>
                <Button
                    variant="outlined"
                    startIcon={<Add />}
                    style={{ background: "#ee4d2d" }}
                    onClick={() => setType(2)}
                >
                    Add new address
                </Button>
            </div>
            <div className="my__address__content">
                <div className="address address__item">
                    <div className="address__desc">
                        <div className="address__contact">
                            <Typography
                                variant="h8"
                                style={{ fontWeight: "bold" }}
                            >
                                {/* {currentAddress?.name} */}
                                Name
                            </Typography>
                            <span
                                style={{
                                    borderLeft: "1px solid rgba(0,0,0,.26)",
                                    margin: "0 8px",
                                }}
                            ></span>
                            <Typography variant="h8">
                                {/* {currentAddress?.phone} */}
                                phone
                            </Typography>
                        </div>
                        <Typography variant="h8">
                            {/* {currentAddress?.address} */}
                            address
                        </Typography>
                        <span className="mark__default">Defaul</span>
                    </div>
                    <div className="address__tool">
                        <div className="d-flex">
                            <span className="change" style={{ marginRight: 3 }}>
                                update
                            </span>
                            <span className="change" style={{ marginLeft: 3 }}>
                                delete
                            </span>
                        </div>
                        <Button
                            variant="contained"
                            style={{
                                textTransform: "capitalize",
                                fontSize: 12,
                                padding: "5px 10px",
                            }}
                        >
                            Set default
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAddress;
