import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartInterface } from "./PieChart";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const BarChart: React.FC<ChartInterface> = ({ data }) => {
  return (
    <div>
      <Bar
        data={data}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
