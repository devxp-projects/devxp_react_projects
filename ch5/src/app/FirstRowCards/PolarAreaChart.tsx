import React from "react";
import { PolarArea } from "react-chartjs-2";
import { ChartInterface } from "./PieChart";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PolarAreaChart: React.FC<ChartInterface> = ({ data }) => {
  return (
    <div>
      <PolarArea
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

export default PolarAreaChart;
