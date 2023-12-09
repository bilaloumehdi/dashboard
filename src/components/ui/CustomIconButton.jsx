import React from "react";
import { IconButton } from "@mui/material";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const CustomIconButton = ({ backgroundColor, iconColor }) => {

    return (
        <IconButton sx={{ backgroundColor, borderRadius: 2, p: 1 }}>
            <LocalMallOutlinedIcon color={iconColor} />
        </IconButton>
    )
}

export default CustomIconButton;