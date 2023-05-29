import React from "react";
import "./FirstRowCards.scss";
import Data from "./Data.FirstRowCard.json";
import { iChart } from "./PieChart";
import { Pie } from "react-chartjs-2";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import PolarAreaChart from "./PolarAreaChart";

const PieChartData: iChart = {
  datasets: [
    {
      label: "This Week",
      data: [15, 10, 30],
      fill: true,
      borderColor: "rgb(115, 103, 240, 1)", //7367f0
    },
  ],
};
const DoughnutChartData: iChart = {
  datasets: [
    {
      label: "This Week",
      data: [10, 20, 30],
      fill: true,
      // backgroundColor: "white",
      // borderColor: "rgb(115, 103, 240, 1)", //7367f0
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
const FirstRowCards = () => {
  return (
    <div className="container">
      {Data?.data.map((item) => {
        return (
          <div className="cardWrap" key={item.id}>
            <div className="heading">
              <div className="title">{item.title}</div>
              <div className="titleNumber">
                {item.titleNumber}
                {item.percent ? item.percent : ""}
              </div>
            </div>

            <div className="chart">
              {item.chart === "bar" ? <BarChart data={BarchartData} /> : ""}
              {item.chart === "pie" ? <Pie data={PieChartData} /> : ""}
              {item.chart === "doughnut" ? (
                <DoughnutChart data={DoughnutChartData} />
              ) : (
                ""
              )}
              {item.chart === "polar" ? (
                <PolarAreaChart data={DoughnutChartData} />
              ) : (
                ""
              )}
            </div>

            <div className="footer">
              {item.UpperFooterTitle ? (
                <div className="upperSection">
                  <div>
                    <div className="description">{item.UpperFooterTitle}</div>
                    {item.UpperfooterTitleDesc ? (
                      <div
                        className={`subDescription ${
                          item.UpperfooterTitleDesc === "Very Poor" ? "red" : ""
                        }`}
                      >
                        {item.UpperfooterTitleDesc}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="descNumber">
                    {item.UpperfooterNumber}
                    {item.footPercent ? item.footPercent : ""}
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="lowerSection">
                <div>
                  <div className="footerTitle">{item.footerTitle}</div>
                  {item.footerTitleDesc ? (
                    <div
                      className={`footerTitleDesc ${
                        item.UpperfooterTitleDesc === "Very Poor" ? "red" : ""
                      }`}
                    >
                      {item.footerTitleDesc}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="footerNumber">
                  {item.footerNumber}
                  {item.footPercent ? item.footPercent : ""}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FirstRowCards;
