import React, { useState } from "react";
import { Box, Select, MenuItem, Card, CardContent, Typography } from "@mui/material";
import { tokens, useTheme } from "../../theme";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { FormControl } from '@mui/base/FormControl';
import CustomIconButton from "../ui/CustomIconButton";
import CustomFormControl from "../ui/CustomFormControl";

const styles = {
    root: {
        '& .MuiOutlinedInput-root': {
            border: 'none',
            '&:hover fieldset': {
                border: 'none',
            },
            '&.Mui-focused fieldset': {
                border: 'none',
            },
        },
    },
};

const SummaryCard = ({ isActive, icon, statistics }) => {
    const [selectedValue, setSelectedValue] = useState("week");
    const colors = tokens();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Card variant="outlined" sx={{
            backgroundColor: isActive ? colors.accent[500] : colors.primary[500],
            borderRadius: 2,
            color: isActive ? colors.primary[500] : "black",
        }}>
            {/* Summary Content */}
            <CardContent sx={{
                display: "flex", flexDirection: "column",
                justifyContent: "end",
                gap: 2
            }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    {icon}
                    {isActive || <CustomFormControl selectedValue={selectedValue} handleChange={handleChange} />}
                </Box>

                {/* Summary Stats */}
                <Box sx={{
                    display: "flex", justifyContent: "space-between",
                }}>
                    {statistics.map(s => {
                        return <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" color={isActive ? "primary" : "text.light"} >{s.name}</Typography>
                            <Typography variant="h4" sx={{ display: "inline", mr: 1, mt: 1, fontWeight: "bold" }} color={isActive ? "primary" : "black"} >{s.number}</Typography>
                            {s.increase && <Typography variant="p" color={isActive ? "primary" : "#519C66"}>{s.increase}</Typography>}
                        </Box>
                    })}
                </Box>
            </CardContent>
        </Card>
    )
}

export default SummaryCard;