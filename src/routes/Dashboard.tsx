import React from "react";
import Admin from "../layouts/admin";
import DashboardStore from "../store/DashboardStore";

const Dashboard = () => {
    return (
        <Admin pageTitle={DashboardStore.pageTitle}>
            <h5>content of dashboard</h5>
        </Admin>
    )
}

export default Dashboard;