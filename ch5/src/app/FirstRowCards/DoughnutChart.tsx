import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ChartInterface } from "./PieChart";
Chart.register(...registerables);

const DoughnutChart: React.FC<ChartInterface> = ({ data }) => {
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default DoughnutChart;
