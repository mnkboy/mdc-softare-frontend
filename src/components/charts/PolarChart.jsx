
import React from 'react';
import { Chart } from 'primereact/chart';

const PolarAreaChart = (props) => {
    const chartData = {
        datasets: [{
            data: props.data,
            backgroundColor: props.colors,
            label: props.label
        }],
        labels: props.tags
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scale: {
            gridLines: {
                color: '#ebedef'
            }
        }
    };

    return (
        <div className="card">
            <Chart type="polarArea" data={chartData} options={lightOptions} />
        </div>
    );
}

export default PolarAreaChart