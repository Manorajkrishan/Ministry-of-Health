import React from 'react';
import LineCharts from './LineCharts/LineCharts';
import PieChart from './PieCharts/PieCharts';
import './Rreport.css'
import DMsideNav from '../DMNav/DMsideNav';
import HeaderPHI from '../Header/Header';
function ReportHomeDM() {
    return (
        <>
        <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
        <div className="report-container">
            <div className="report-header">Report for Disease Management</div>
            <div className="charts-container">
                <div className="chart">
                    <LineCharts />
                </div>
                <div className="chart">
                    <PieChart />
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default ReportHomeDM;
