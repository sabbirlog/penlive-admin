import DashboardData from "@/components/ui/DashboardData";
import DashboardStats from "@/components/ui/DashboardStats";
import React from "react";

const Dashboard: React.FC = () => {
    return (
        <>
            <DashboardStats />
            <DashboardData />
        </>
    );
};

export default Dashboard;
