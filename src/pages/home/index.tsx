
import React from "react";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Monthly Data',
            data: [22000, 25000, 32000, 30000, 42000, 55000, 37000, 43000, 35000, 40000, 28000, 32000],
            backgroundColor: function (context: any) {
                const index = context.dataIndex;
                return index === 9 ? '#000000' : '#94A3B8'; // October - Black, others - Blue-gray
            },
            hoverBackgroundColor: '#000000',
            borderRadius: 5,
            borderSkipped: false,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem: any) {
                    if (tooltipItem.dataIndex === 9) {
                        return `${tooltipItem.formattedValue} (13% increase)`;
                    }
                    return tooltipItem.formattedValue;
                },
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 10000,
            },
        },
    },
};


const Home: React.FC = () => {
    const userEmail = localStorage.getItem("userEmail");
    const loginTime = localStorage.getItem("loginTime");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Admin sahifa</h1>
            {userEmail && (
                <div className="mt-4">
                    <p><strong>Email:</strong> {userEmail}</p>
                    <p><strong>Ro'yxatdan o'tilgan:</strong> {loginTime}</p>
                </div>
            )}
            <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-lg font-semibold text-gray-700 text-center mb-4">
                    Oxirgi 12 oy malumotlari
                </h2>
                <Bar data={data} options={options} />
            </div>

        </div>
    );
};

export default Home;
