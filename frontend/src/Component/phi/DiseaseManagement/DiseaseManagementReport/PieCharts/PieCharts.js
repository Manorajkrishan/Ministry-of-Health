import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

function PieChart() {
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        getPatient();
    }, []);

    function getPatient() {
        axios.get(`http://localhost:8090/patient/display`)
            .then((res) => {
                setPatient(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function aggregateData() {
        const aggregatedData = {};
        patient.forEach((item) => {
            const disease = item.patientDisease;
            if (!aggregatedData[disease]) {
                aggregatedData[disease] = 0;
            }
            aggregatedData[disease]++;
        });
        return aggregatedData;
    }

    const series = Object.values(aggregateData());
    const options = {
        chart: {
            type: 'pie',
        },
        labels: Object.keys(aggregateData()),
    };

    return (
        <>
     
        <div>
            <h2>Pie chart for the patients suffering from infectious diseases</h2>
            <Chart options={options} series={series} type="pie" height={350} />
        </div>
   
        </>
    );
}

export default PieChart;
