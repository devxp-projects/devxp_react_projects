import React from "react";
import "./SalesSummaryRow.scss";
import salesData from "./Data.salesSum.json";
import arrDownBtn from "../../assets/chevron-down.svg";
import arrDown from "../../assets/Arrow Down.svg";
import arrUp from "../../assets/Arrow Up.svg";
import LineChart, { iChart } from "./LineChart";
import BarChart from "./BarChart";

const chartData: iChart = {
  labels: [1, 2, 3, 4, 5, 6],
  datasets: [
    {
      label: "This Week",
      data: [15, 10, 30, 20, 15, 35],
      fill: false,
      borderColor: "rgb(115, 103, 240, 1)", //7367f0
    },
    {
      label: "Last Week",
      data: [20, 40, 15, 35, 20, 25],
      fill: false,
      borderColor: "rgba(225, 230, 0,1)", //ffe800
    },
  ],
};
const BarchartData: iChart = {
  labels: [1, 2, 3, 4, 5, 6],
  datasets: [
    {
      label: "This Week",
      data: [15, 10, 30, 20, 15, 35],
      fill: false,
      backgroundColor: "rgb(115, 103, 240, 1)",
    },
    {
      label: "Last Week",
      data: [20, 40, 15, 35, 20, 25],
      fill: false,
      backgroundColor: "rgba(225, 230, 0,1)",
    },
  ],
};

const SalesSummaryRow = () => {
  return (
    <div className="superContainer">
      {salesData.data.map((obj) => {
        return (
          <div key={obj.id} className="s-Container">
            {/* heading */}
            <div className="s-titleBox">
              <span className="s-title">{obj.title}</span>
              <span className="s-btn">
                View Report
                <img src={arrDownBtn} alt="" />
              </span>
            </div>
            {/* briefing */}
            <div className="s-summary">
              <span className="title">{obj.price}K</span>
              <div className="brief">
                <img src={`${obj.color === "red" ? arrDown : arrUp}`} alt="" />
                <span className="perc" style={{ color: `${obj.color}` }}>
                  {obj.percent}%
                </span>
                <span className="txt">vs Last Week</span>
              </div>
            </div>
            {/* chart */}
            <div className="s-chart">
              {obj.chart === "lineChart" ? (
                <LineChart data={chartData} />
              ) : (
                <BarChart data={BarchartData} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SalesSummaryRow;
