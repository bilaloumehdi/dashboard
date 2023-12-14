import React from "react";
// import TopNav from "../../components/Navbar/TopNav/TopNav";
import SummaryCard from "../../components/summaryCard/SummaryCard";
import PieChartSummary from "./pieChartSummary/PieChartSummary";
import BarChartSummary from "./barChartSummary/BarChartSummary";
import Box from "@mui/material/Box";
import OrderSummary from "./OrderSummary/OrderSummary";
import { statistics } from "../../data/data";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { tokens } from "../../theme";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Dashboard = () => {
    const colors = tokens();

    return <Box sx={{
        display: "grid",
        gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr) 0.5fr"
        },
        gridAutoRows: {
            xs: "minmax(90px,auto)",
            sm: "minmax(100px,auto)",
            md: "minmax(140px,auto)"
        },
        gap: "20px",
        p: 3,
    }}>
        {/* Row1  */}
        <Box sx={{
            gridColumn: {
                sm: "span 1",
                md: "span 1"
            },
            flexGrow: {
                sm: 0
            }
        }}>
            <SummaryCard statistics={statistics.salesStats} icon={<LocalMallOutlinedIcon color="accent" fontSize="large" sx={{
                borderRadius: 2,
                backgroundColor: colors.accent[200],
                p: 1
            }} />} />
        </Box>
        <Box>
            <SummaryCard statistics={statistics.customerStats} icon={<GroupOutlinedIcon fontSize="large" sx={{
                borderRadius: 2,
                backgroundColor: "#FFCC9129",
                p: 1
            }} />} />
        </Box>

        <Box sx={{
            gridColumn: {
                xs: "span 1",
                sm: "span 2",
            },

        }}>
            <SummaryCard statistics={statistics.orderStats} icon={<LocalMallOutlinedIcon fontSize="large" sx={{
                borderRadius: 2,
                backgroundColor: "#FFCC9129",
                p: 1
            }} />}
            />
        </Box>

        {/* Row 2    */}
        <Box sx={{
            gridColumn: {
                sm: "span 1"
            },
            gridRow: {
                sm: "4",
                md: "span 2"
            },
            display: {
                xs: "none",
                sm: "inline-block"
            }
        }}>
            <PieChartSummary />
        </Box>
        <Box>
            <SummaryCard isActive={true} statistics={statistics.allProductsStats}
                icon={<FolderOpenOutlinedIcon color="primary" fontSize="large" sx={{
                    borderRadius: 2,
                    backgroundColor: colors.accent[200],
                    p: 1
                }} />}
            />
        </Box>

        <Box>
            <SummaryCard statistics={statistics.abandonedStats} icon={<ShoppingCartOutlinedIcon fontSize="large" sx={{
                borderRadius: 2,
                backgroundColor: "#FFCC9129",
                p: 1
            }} />} />
        </Box>

        {/* row 4 */}
        <Box sx={{
            gridColumn: { xs: "span 1", sm: "span 2" },
            gridRow: {
                sm: "5",
                md: "span 2"
            },
            display: {
                xs: "none",
                sm: "block "
            }
        }}>
            <BarChartSummary />
        </Box>

        <Box sx={{
            gridColumn: { xs: "span 1", md: "3/span 2" },
            gridRow: {
                sm: "4",
                md: "2/span 4"
            },
        }}>
            <OrderSummary />
        </Box>
    </Box>
}

export default Dashboard;