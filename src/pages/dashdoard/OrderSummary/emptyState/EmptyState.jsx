import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { tokens } from "../../../../theme";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const EmptyState = () => {
    const colors = tokens();

    return <>
        {/* empty state */}
        <Box sx={{
            // minWidth: "282px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
            textAlign: "center",
            mx: "auto",
            mt: 5,
            p: 4,
        }
        }>
            {/* shop Icon */}
            < Box sx={{
                borderRadius: "50%",
                backgroundColor: colors.secondary[500],
                p: 4,
                mx: "auto",
            }}>
                <ShoppingBagIcon color={colors.secondary[700]} fontSize="large" />
            </Box >
            {/* Description */}
            < Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Typography variant="h5" fontWeight="bold" >
                    No Orders Yet ?
                </Typography>
                <Typography variant="p" color={colors.secondary[600]}>
                    Add products to your store and start selling to see orders here.
                </Typography>
            </Box >

            {/* Button Box */}
            < Box >
                <Button variant="contained" startIcon={<FavoriteBorderIcon />} color="accent"
                    sx={{
                        color: colors.primary[500],
                        borderRadius: 2,
                        textTransform: "capitalize"
                    }}>
                    New Product
                </Button>
            </Box >

        </Box >
    </>
}

export default EmptyState;