import React from "react";
import { FormControl,Select,MenuItem } from "@mui/material";
import { tokens } from "../../theme";


const CustomFormControl = ({selectedValue, handleChange}) => {
    const colors = tokens();
    return (
        <FormControl>
            <Select
                value={selectedValue}
                onChange={handleChange}
                variant="outlined"
                size="small"
                sx={{
                    backgroundColor: colors.secondary[500],
                    borderRadius: 2,
                    border: "none",
                    ":": { border: "none" },
                }}
            >
                <MenuItem value="week" color="secondary">This Week</MenuItem>
                <MenuItem value="month" color="secondary">This Month</MenuItem>
                <MenuItem value="year" color="secondary">This Year</MenuItem>
            </Select>
        </FormControl>
    )
}

export default CustomFormControl;