import React, { useEffect, useState } from "react";
import { formatPrice } from "../../../utils/helper";
import { Box, Button, TextField, Typography } from "@mui/material";
import { axiosClient } from "../../../hooks/useHttp";
import { CUSTOMER_ADDRESS_API } from "../../../constants/api";
import { useAuth } from "../../../hooks/useAuth";
import { CODE } from "../../../constants/constants";

const DetailStep = ({
    CartItem,
    handleNext,
    addToCart,
    decreaseQty,
    totalPrice,
    activeStep,
    handleBack,
    data,
    setData,
    address,
    currentAddress,
    setOpen,
}) => {
    const applyVoucher = () => {};
    return (
        <React.Fragment>
            <div className="container d-flex">
                <div className="cart-details">
                    <div className="cart-list product">
                        <Typography variant="h7" style={{ fontWeight: "bold" }}>
                            Shipping Address
                        </Typography>
                        <div className="address">
                            {Object.keys(currentAddress).length > 0 && (
                                <div>
                                    <div className="address__contact">
                                        <Typography
                                            variant="h8"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            {currentAddress?.name}
                                        </Typography>
                                        <span
                                            style={{
                                                borderLeft:
                                                    "1px solid rgba(0,0,0,.26)",
                                                margin: "0 8px",
                                            }}
                                        ></span>
                                        <Typography variant="h8">
                                            {currentAddress?.phone}
                                        </Typography>
                                    </div>
                                    <Typography variant="h8">
                                        {currentAddress?.address}
                                    </Typography>
                                </div>
                            )}

                            <div className="address__tool">
                                <span
                                    className="change"
                                    onClick={() => setOpen(true)}
                                >
                                    Change
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="cart-list product">
                        <Typography variant="h7" style={{ fontWeight: "bold" }}>
                            Order detail
                        </Typography>

                        {CartItem.map((item, index) => {
                            let price = item.price;
                            if (item.sale_price) {
                                price = item.sale_price;
                            }
                            const productQty = price * item.pivot.qty;

                            return (
                                <div className="d-flex" key={item.id}>
                                    <span
                                        style={{
                                            fontWeight: 500,
                                            margin: 20,
                                        }}
                                    >{`${index + 1},`}</span>
                                    <div className="cart-details">
                                        <h3>{item.product.name}</h3>
                                        <h4>
                                            {formatPrice(
                                                item.sale_price || item.price
                                            )}{" "}
                                            * {item.pivot.qty}
                                            <span>
                                                {formatPrice(productQty)}
                                            </span>
                                        </h4>
                                        <h4>
                                            {Object.values(
                                                item.property_value
                                            ).map(
                                                (val) =>
                                                    val.attribute_value_name +
                                                    ", "
                                            )}
                                        </h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Button
                        variant="contained"
                        className="btn__view_cart"
                        onClick={handleBack}
                    >
                        Back to Cart
                    </Button>
                    <Button
                        variant="contained"
                        className="btn__checkcout"
                        onClick={handleNext}
                    >
                        Proceed to Payment
                    </Button>
                </div>

                <div className="cart-total product">
                    <div className="cart-total__box">
                        <div className="box__price">
                            <Typography
                                variant="h7"
                                className="box__price__label"
                            >
                                Subtotal:
                            </Typography>
                            <Typography
                                variant="h7"
                                style={{ fontWeight: "bold" }}
                            >
                                {formatPrice(totalPrice)}
                            </Typography>
                        </div>

                        <div className="box__price">
                            <Typography
                                variant="h7"
                                className="box__price__label"
                            >
                                Shipping:
                            </Typography>
                            <Typography
                                variant="h7"
                                style={{ fontWeight: "bold" }}
                            >
                                -
                            </Typography>
                        </div>

                        <div className="box__price">
                            <Typography
                                variant="h7"
                                className="box__price__label"
                            >
                                Tax:
                            </Typography>
                            <Typography
                                variant="h7"
                                style={{ fontWeight: "bold" }}
                            >
                                {formatPrice(totalPrice)}
                            </Typography>
                        </div>

                        <div className="box__price">
                            <Typography
                                variant="h7"
                                className="box__price__label"
                            >
                                Discount:
                            </Typography>
                            <Typography
                                variant="h7"
                                style={{ fontWeight: "bold" }}
                            >
                                -
                            </Typography>
                        </div>
                    </div>
                    <h3 style={{ textAlign: "right" }}>
                        {" "}
                        {formatPrice(totalPrice)}
                    </h3>
                    <label htmlFor="" style={{ marginBottom: 10 }}>
                        Additional Comments
                        <span
                            style={{
                                fontSize: 12,
                                color: "rgb(233, 69, 96)",
                                margin: "0 10px",
                                padding: "3px 10px",
                                backgroundColor: "rgb(255, 225, 230)",
                                borderRadius: 3,
                            }}
                        >
                            Note
                        </span>
                    </label>
                    <TextField
                        name="note"
                        multiline
                        rows={4}
                        value={data.note}
                        onChange={(e) =>
                            setData({ ...data, note: e.target.value })
                        }
                        margin="dense"
                    />

                    <TextField
                        name="voucher"
                        variant="outlined"
                        placeholder="Voucher"
                        className="voucher"
                        margin="dense"
                        value={data.voucher.name}
                        onChange={(e) =>
                            setData({
                                ...data,
                                voucher: {
                                    ...data.voucher,
                                    name: e.target.value,
                                },
                            })
                        }
                    />

                    <Button
                        variant="contained"
                        className="btn__view_cart"
                        style={{ margin: 0 }}
                        onClick={applyVoucher}
                    >
                        Apply Voucher
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailStep;
