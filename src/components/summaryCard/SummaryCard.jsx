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

const SummaryCard = ({ title }) => {
    const [selectedValue, setSelectedValue] = useState("week");
    const struct = [
        {
            name: "Customers",
            number: "0",
            increase: "+0.00"
        }, {
            name: "Active",
            number: "0",
            increase: "+0.00"
        }
    ]
    const colors = tokens();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Card variant="outlined" sx={{
            maxWidth: "321px",
            height: "145px",
            mt: 3,
            backgroundColor: colors.primary,
            borderRadius: 2
        }}>
            {/* Summary Content */}
            <CardContent sx={{
                display: "flex", flexDirection: "column",
                justifyContent: "end",
                gap: 2
            }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <CustomIconButton backgroundColor={colors.accent[200]} iconColor="accent" />
                    <CustomFormControl selectedValue={selectedValue} handleChange={handleChange} />
                </Box>

                {/* Summary Stats */}
                <Box sx={{
                    display: "flex", justifyContent: "space-between",
                }}>
                    {struct.map(s => {
                        return <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" >{s.name}</Typography>
                            <Typography variant="h6" sx={{ display: "inline", mr: 1, mt: 1, fontWeight: "bold" }} >{s.number}</Typography>
                            {s.increase && <Typography variant="p" color="green"></Typography>}
                        </Box>
                    })}


                    {/* <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" >Active</Typography>
                        <Typography variant="h6" sx={{ display: "inline", fontWeight: "bold", mr: 1, mt: 1 }}>0</Typography> */}
                    {/* si increse reate exist it will rendred */}
                    {/* <Typography variant="p" color="green">+0.00%</Typography>
                    </Box> */}
                </Box>
            </CardContent>
        </Card>
    )
}

export default SummaryCard;