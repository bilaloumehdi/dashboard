import React from "react";
// import TopNav from "../../components/Navbar/TopNav/TopNav";
import Navbar from "../../components/Navbar";
import SummaryCard from "../../components/summaryCard/SummaryCard";
import RecentOrders from "./OrderSummary/OrderSummary";
import PieChartSummary from "./pieChartSummary/PieChartSummary";

const Dashboard = () => {
    return <div>
        {/* <SummaryCard /> */}
        {/* <RecentOrders /> */}
        <PieChartSummary />
    </div>
}

export default Dashboard;