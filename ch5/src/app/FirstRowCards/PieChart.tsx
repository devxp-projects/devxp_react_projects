import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export interface iChart {
  labels?: number[];
  datasets: {
    label?: string;
    data: number[];
    fill: boolean;
    borderColor?: string;
    backgroundColor?: string;
  }[];
}

export interface ChartInterface {
  data: iChart;
}

const PieChart: React.FC<ChartInterface> = ({ data }) => {
  return (
    <div>
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default PieChart;
