import React from "react";
import { Line } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export interface iLineChart {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
  }[];
}
interface LineChartProp {
  data: iLineChart;
}

const LineChart: React.FC<LineChartProp> = ({ data }) => {
  return (
    <div>
      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: "Chart.js Line Chart",
            },
          },
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

export default LineChart;
