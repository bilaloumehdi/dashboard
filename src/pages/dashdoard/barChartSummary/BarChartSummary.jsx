import { Box, Button, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomFormControl from "../../../components/ui/CustomFormControl";
import { BarChart } from "@mui/x-charts";
const chartSetting = {
    xAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    width: 500,
    height: 400,
};
const dataset = [
    {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: 'Jan',
    },
    {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: 'Fev',
    },
    {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: 'Mar',
    },
    {
        london: 54,
        paris: 56,
        newYork: 92,
        seoul: 73,
        month: 'Apr',
    },
    {
        london: 57,
        paris: 69,
        newYork: 92,
        seoul: 99,
        month: 'May',
    },
    {
        london: 60,
        paris: 63,
        newYork: 103,
        seoul: 144,
        month: 'June',
    },
    {
        london: 59,
        paris: 60,
        newYork: 105,
        seoul: 319,
        month: 'July',
    },
    {
        london: 65,
        paris: 60,
        newYork: 106,
        seoul: 249,
        month: 'Aug',
    },
    {
        london: 51,
        paris: 51,
        newYork: 95,
        seoul: 131,
        month: 'Sept',
    },
    {
        london: 60,
        paris: 65,
        newYork: 97,
        seoul: 55,
        month: 'Oct',
    },
    {
        london: 67,
        paris: 64,
        newYork: 76,
        seoul: 48,
        month: 'Nov',
    },
    {
        london: 61,
        paris: 70,
        newYork: 103,
        seoul: 25,
        month: 'Dec',
    },
];

const BarChartSummary = () => {
    const [selectedValue, setSelectedValue] = useState("sales");
    const [periodValue, setPeriodValue] = useState("week");
    const colors = tokens();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }
    return (
        <Box sx={{
            width: "100%",
            backgroundColor: colors.primary[500],
            gap: 3,
            p: 2,
            borderRadius: 2,
            overflow: "auto"
        }}>
            {/* header */}
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: colors.primary[500]
            }}>
                {/* title */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography variant="h4" component="div">
                        Summary
                    </Typography>
                    <FormControl>
                        <Select
                            value={selectedValue}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            sx={{
                                backgroundColor: colors.accent[200],
                                color: colors.accent[500],
                                borderRadius: 3,
                                border: "none",
                                ":hover": { border: "none" },
                            }}
                        >
                            <MenuItem value="sales" color="secondary">Sales</MenuItem>
                            <MenuItem value="customers" color="secondary">Customers</MenuItem>
                            <MenuItem value="orders" color="secondary">Orders</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/* selection form */}
                <CustomFormControl selectedValue={periodValue} handleChange={(e) => setPeriodValue(e.target.value)}></CustomFormControl>
            </Box>
            {/* bar chart */}
            <BarChart
                xAxis={[{
                    scaleType: 'band',
                    data: ['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'],
                    categoryGapRatio: 0.8,
                    barGapRatio: 0.8,
                    slots: 10
                }]}
                yAxis={[{
                    data: ["20", 40, 60, 80, 100],
                }]}
                series={[{ data: [100, 100, 100, 100, 100, 100, 100], color: colors.secondary[500], }]}
                width={600}
                height={300}
                skipAnimation

            />
        </Box>
    )
}

export default BarChartSummary;