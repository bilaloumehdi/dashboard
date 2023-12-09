import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomFormControl from "../../../components/ui/CustomFormControl";
import { tokens } from "../../../theme";
import { PieChart } from "@mui/x-charts";

const PieChartSummary = () => {
    const [selectedValue, setSelectedValue] = useState("week");
    const colors = tokens();
    const palette = [colors.accent[500], colors.secondary[500], "#FFCC91"]
    return <>
        <Box sx={{
            maxWidth: "321px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colors.primary[500],
            gap:3,
            p: 2,
            borderRadius: 2
        }}>
            {/* title */}
            {/* FormControl */}
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography variant="h6" component="div">
                    Marketinng
                </Typography>
                <CustomFormControl selectedValue={selectedValue} handleChange={selectedValue} />
            </Box>
            {/*  Pie Chart with the legend*/}
            <Box sx={{
                mx: "auto"
            }}>
                <PieChart colors={palette} series={[
                    {
                        data: [
                            { id: 0, value: 0, label: "Acquisition" },
                            { id: 1, value: 10, label: "Purchase" },
                            { id: 2, value: 0, label: "Retention" },
                        ],
                        innerRadius: 45,
                        paddingAngle: 0,
                        cornerRadius: 0,
                        startAngle: 0,
                        endAngle: 360
                    },
                ]}
                    width={400}
                    height={200}
                    margin={{ top: 50 }}
                    slotProps={{
                        legend: {
                            direction: 'row',
                            position: { vertical: 'top', horizontal: 'left' },
                            padding: 2,
                            labelStyle: {
                                fontSize: 14,
                                fill: colors.secondary[600],
                            },
                            itemGap: 20,
                            markGap: 8,
                            itemMarkHeight: 10,
                            itemMarkWidth: 10,
                        },

                    }} >

                </PieChart>
            </Box>
        </Box>
    </>
}


export default PieChartSummary;