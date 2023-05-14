import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export interface iChart {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor?: string;
    backgroundColor?: string;
  }[];
}
export interface ChartInterface {
  data: iChart;
}

const LineChart: React.FC<ChartInterface> = ({ data }) => {
  return (
    <div>
      <Line
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

export default LineChart;
