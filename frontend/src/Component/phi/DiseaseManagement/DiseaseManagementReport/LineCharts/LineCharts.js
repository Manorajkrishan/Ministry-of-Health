import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LineCharts() {
    const [session, setSession] = useState([]);

    // Fetch session data from API
    useEffect(() => {
        getSession();
    }, []);

    function getSession() {
        axios.get(`http://localhost:8090/session/display`)
            .then((res) => {
                setSession(res.data);
            })
            .catch((err) => {
                console.log(err);

            });
    }

    // Process session data to aggregate by year and month
    function aggregateData() {
        const aggregatedData = {};
        session.forEach((item) => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // Month is 0-indexed, so we add 1

            if (!aggregatedData[year]) {
                aggregatedData[year] = {};
            }
            if (!aggregatedData[year][month]) {
                aggregatedData[year][month] = 0;
            }
            aggregatedData[year][month]++;
        });
        return aggregatedData;
    }

    // Render line chart
    function renderLineChart() {
        const aggregatedData = aggregateData();
        const years = Object.keys(aggregatedData).sort();
        const series = [];

        years.forEach((year) => {
            const months = Array.from({ length: 12 }, (_, i) => i + 1); // Generate numbers from 1 to 12 for months
            const data = months.map((month) => aggregatedData[year][month] || 0);
            series.push({
                name: year,
                data: data,
            });
        });

        const options = {
            chart: {
                type: 'line',
                height: 350,
                width: '50%',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                title: {
                    text: 'Number of Sessions',

                },
                min: 0,
                max: 10
            },
            title: {
                text: 'Awareness Sessions by Year and Month',
                align: 'center',
                style: {
                    fontSize: '20px',
                },
            },
        };

        return <Chart options={options} series={series} type="line" height={250} />;
    }

    return (
        <>
   
            <hr />
            <br />

            <div>
                {renderLineChart()}
            </div>
           
        </>
    );
}

export default LineCharts;
