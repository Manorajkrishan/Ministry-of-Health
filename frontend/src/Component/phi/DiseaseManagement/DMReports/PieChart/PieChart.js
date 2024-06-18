import React, { useState, useEffect } from 'react'
import { Chart } from 'react-chartjs-2'

function PieChart() {


    const [diseaseCondition, setDiseaseCondition] = useState([]);
    const [patient, setPatientConditon] = useState([]);
    useEffect(() => {
        const aDisease = [];
        const aPatient = [];
        const getDiseaseData = async () => {
            const reqData = await fetch(`http://localhost:8090/disease/display`);
            const resData = await reqData.json();
            console.log(resData);
            for (let i = 0; i < resData.length; i++) {

                aDisease.push(resData[i].disease);
                aPatient.push(parseInt(resData[i].patient));


            }
            setDiseaseCondition(aDisease);
            setPatientConditon(aPatient);

        }
    })
    return (
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h2 className="mb-3">welcome to the dm pie chart</h2>
                <Chart
                    type="pie"
                    width={1349}
                    height={550}
                    data={{
                        labels: [diseaseCondition],
                        datasets: [{
                            data: [patient],
                            backgroundColor: ['red', 'blue', 'green', 'yellow', 'pink'],

                        }],
                    }}

                    options={{
                        title: "Diseases Pie chart",
                        noData: "empty data",
                    }}


                ></Chart>

            </div>
        </React.Fragment>
    )
}

export default PieChart