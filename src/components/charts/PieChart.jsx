import React from 'react';
import { Chart } from 'primereact/chart';

const PieChart = (props) => {
    const chartData = {
        labels: ['Votados: ' + props.data[0], 'No votados ' + props.data[1]],
        datasets: [
            {
                data: props.data,
                backgroundColor: [
                    "#81C784",
                    "#ba000d",

                ],
                hoverBackgroundColor: [
                    "#81C784",
                    "#ba000d",
                ]
            }
        ]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057',
                fontSize: 24
            }
        }
    };

    return (
        <div className="card">
            <h4>Meta: {(props.data[0] + props.data[1])}</h4>
            <Chart type="pie" data={chartData} options={lightOptions} />
        </div>
    )
}

export default PieChart