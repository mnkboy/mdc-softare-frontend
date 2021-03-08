import React from 'react';
import { Chart } from 'primereact/chart';

const ComboChart = (props) => {
    console.log(props.votos);
    console.log(props.horas);

    const chartData = {
        labels: props.horas,
        datasets: [{
            type: 'line',
            label: 'Votos por hora',
            borderColor: '#42A5F5',
            borderWidth: 4,
            fill: false,
            data: props.votos
        }, {
            type: 'bar',
            label: 'Votantes',
            backgroundColor: '#66BB6A',
            data: props.votos,
            borderColor: 'white',
            borderWidth: 2
        },
        {
            type: 'bar',
            label: 'Intervalo',
            backgroundColor: '#FFA726',
            data: props.votos
        }
        ]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: '#495057'
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: '#495057'
                }
            }]
        }
    };

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={lightOptions} />
        </div>
    )
}

export default ComboChart