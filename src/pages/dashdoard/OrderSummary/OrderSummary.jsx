import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmptyState from "./emptyState/EmptyState";

const OrderSummary = () => {
    const [orderState, setOrderState] = useState("empty");

    const colors = tokens();
    return <>
        <Box sx={{
            maxWidth: "423px",
            backgroundColor: colors.primary[500],
            borderRadius: 2,
            p: 2
        }}>
            <Typography variant="h6" >
                Recent Orders
            </Typography>

            <EmptyState />
        </Box>
    </>
}

export default OrderSummary;