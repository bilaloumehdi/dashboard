import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import EmptyState from "./emptyState/EmptyState";

const OrderSummary = () => {
    const [orderState, setOrderState] = useState("empty");

    const colors = tokens();
    return <>
        <Box sx={{
            maxWidth: "100%",
            height: "100%",
            backgroundColor: colors.primary[500],
            borderRadius: 2,
            p: 2
        }}>
            <Typography variant="h4" >
                Recent Orders
            </Typography>

            <EmptyState />
        </Box>
    </>
}

export default OrderSummary;