'use client'
import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({accounts}:DoughnutChartProps ) => {

    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1245,  1234, 1234, 1234],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ]
            }
        ],
        labels: ["Bank 1",  "Bank 4", "Bank 5", "Bank 6"],
    }
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Doughnut data ={data} options={{
        cutout: "70%",
        plugins: {
          legend: {
            display: false,
          },
        }
      }}/>
    </div>
  )
}

export default DoughnutChart
