import React from 'react';
import LineCharts from './LineCharts/LineCharts';
import PieCharts from './PieCharts/PieCharts';
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
            <div className="card-container">
                <div className="card">
                    <div className="card-header">Line Chart</div>
                    <div className="card-body">
                        <LineCharts />
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Pie Chart</div>
                    <div className="card-body">
                        <PieCharts />
                    </div>
                </div>
            </div>
        </div></div>
        </>
    );
}

export default ReportHomeDM;
