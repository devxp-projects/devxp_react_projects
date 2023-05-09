import React from "react";
import "./SalesSummaryRow.scss";
import salesData from "./Data.salesSum.json";
import arrDownBtn from "../../assets/chevron-down.svg";
import arrDown from "../../assets/Arrow Down.svg";
import arrUp from "../../assets/Arrow Up.svg";
import LineChart, { iLineChart } from "./LineChart";

const chartData: iLineChart = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      data: [10, 20, 15, 25, 30, 35, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
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
              <LineChart data={chartData} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SalesSummaryRow;
