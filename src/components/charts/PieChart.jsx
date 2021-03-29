import React from 'react';
import { Chart } from 'primereact/chart';

const PieChart = (props) => {
    const chartData = {
        labels: props.tags,
        datasets: [
            {
                data: props.data,
                backgroundColor: props.colors,
                hoverBackgroundColor: props.colors
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
            <Chart type="pie" data={chartData} options={lightOptions} />
        </div>
    )
}

export default PieChart