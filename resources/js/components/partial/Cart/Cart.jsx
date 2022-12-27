import React from "react";
import "./style.css";
import {
    Stack,
    Step,
    StepConnector,
    StepLabel,
    Stepper,
    stepConnectorClasses,
    styled,
} from "@mui/material";
import PropTypes from "prop-types";
import {
    AddShoppingCart,
    Check,
    EventNote,
    Money,
    RateReview,
} from "@mui/icons-material";
import CartStep from "./CartStep";
import DetailStep from "./DetailStep";
import PaymentStep from "./PaymentStep";
import { useState } from "react";
import { useEffect } from "react";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
        color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
        color: "#784af4",
        zIndex: 1,
        fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "currentColor",
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <AddShoppingCart />,
        2: <EventNote />,
        3: <Money />,
        4: <RateReview />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const steps = ["Cart", "Details", "Payment", "Review"];

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
    const totalPrice = CartItem.reduce((price, item) => {
        let newPrice = item.price;
        if (item.sale_price) {
            newPrice = item.sale_price;
        }
        return price + item.pivot.qty * newPrice;
    }, 0);

    const [data, setData] = useState({
        cart: CartItem,
        address: "",
        discount: 0,
        shipping: 1.5,
        note: "",
        voucher: {},
        paymentMethod: "1",
        totalPrice: totalPrice,
    });

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handelSubmit = (data) => {
        console.log(data);
    }

    useEffect(() => {
        if (Object.keys(CartItem).length > 0) {
            setData({ ...data, cart: CartItem, totalPrice: totalPrice });
        }
    }, [CartItem]);

    return (
        <section className="cart-items">
            <div className="container">
                <Stack sx={{ width: "100%" }} spacing={4}>
                    <Stepper
                        alternativeLabel
                        activeStep={activeStep}
                        connector={<ColorlibConnector />}
                    >
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}>
                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Stack>
            </div>
            <div>
                {activeStep == 0 && (
                    <CartStep
                        CartItem={CartItem}
                        handleNext={handleNext}
                        addToCart={addToCart}
                        decreaseQty={decreaseQty}
                        totalPrice={totalPrice}
                        activeStep={activeStep}
                        handleBack={handleBack}
                        data={data}
                        setData={setData}
                    />
                )}

                {activeStep == 1 && (
                    <DetailStep
                        CartItem={CartItem}
                        handleNext={handleNext}
                        addToCart={addToCart}
                        decreaseQty={decreaseQty}
                        totalPrice={totalPrice}
                        activeStep={activeStep}
                        handleBack={handleBack}
                        data={data}
                        setData={setData}
                    />
                )}

                {activeStep == 2 && (
                    <PaymentStep
                        CartItem={CartItem}
                        handleNext={handleNext}
                        totalPrice={totalPrice}
                        activeStep={activeStep}
                        handleBack={handleBack}
                        data={data}
                        setData={setData}
                        handelSubmit={handelSubmit}
                    />
                )}
            </div>
        </section>
    );
};

export default Cart;
