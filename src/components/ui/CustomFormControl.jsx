import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { tokens } from "../../theme";


const CustomFormControl = ({ selectedValue, handleChange }) => {
    const colors = tokens();
    return (
        <FormControl sx={{
        }}>
            <Select
                value={selectedValue}
                onChange={handleChange}
                variant="outlined"
                size="small"
                sx={{
                    backgroundColor: colors.secondary[500],
                    borderRadius: 2,
                    border: "none",
                    "&:hover": { border: "none" },
                    color: colors.secondary[400]
                }}
            >
                <MenuItem value="week" >This Week</MenuItem>
                <MenuItem value="month" >This Month</MenuItem>
                <MenuItem value="year" >This Year</MenuItem>
            </Select>
        </FormControl>
    )
}

export default CustomFormControl;