import React from "react";
import { IconButton } from "@mui/material";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const CustomIconButton = ({ icon }) => {

    return (
        <IconButton sx={{ borderRadius: 2, p: 1 }}>
            <LocalMallOutlinedIcon fontSize="large" sx={{
                borderRadius: 2,
                p: 1
            }} />
        </IconButton>
    )
}

export default CustomIconButton;