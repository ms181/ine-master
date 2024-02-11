import money from "../../../assets/temp/money-bag.png";
import BarChart from "./BarChart";
import { incomeData, expenceData } from "../../../assets/temp/weekly-fake-data";
import { useState } from "react";
import { ArrowDown, ArrowUp, Download, Upload } from "../../../assets/Icons";

export default function Dashboard() {
  const [indata, setInData] = useState({
    labels: incomeData.map((data) => {
      return data.day;
    }),
    datasets: [
      {
        label: " ",
        data: incomeData.map((data) => {
          return data.income;
        }),
        backgroundColor: ["#818CF8", "#FB923C"],
        borderRadius: 5,
      },
    ],
  });

  const [exdata, setExData] = useState({
    labels: expenceData.map((data) => {
      return data.day;
    }),
    datasets: [
      {
        label: " ",
        data: expenceData.map((data) => {
          return data.expence;
        }),
        backgroundColor: ["#818CF8", "#FB923C"],
        borderRadius: 5,
      },
    ],
  });

  return (
    <div className="py-8 w-full">
      <div className="section1">
        <div className="dashboardCard w-full h-full"></div>
        <div className="dashboardCardGrid">
          <div className="dashboardCard shadow-red-300">
            <div className="flex-1">
              <p className="info-text">This year expenses</p>
              <h4>$19861</h4>
            </div>
            <span className="icon-wrapper bg-red-100">
              <Upload className="w-5 h-5 text-red-500" />
            </span>
          </div>
          <div className="dashboardCard shadow-green-300">
            <div className="flex-1">
              <p className="info-text">This year income</p>
              <h4>$47542</h4>
            </div>
            <span className="icon-wrapper bg-green-100">
              <Download className="w-5 h-5 text-green-500" />
            </span>
          </div>
          <div className="dashboardCard shadow-orange-300">
            <div className="flex-1">
              <p className="info-text">This month expenses</p>
              <h4>$1261</h4>
            </div>
            <span className="icon-wrapper bg-orange-100">
              <ArrowUp className="w-5 h-5 text-orange-500" />
            </span>
          </div>
          <div className="dashboardCard shadow-blue-300">
            <div className="flex-1">
              <p className="info-text">This month income</p>
              <h4>$2305</h4>
            </div>
            <span className="icon-wrapper bg-blue-100">
              <ArrowDown className="w-5 h-5 text-blue-500" />
            </span>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="dashboardCard card-vertical items-start">
          <div>
            <h6>Income this week</h6>
          </div>
          <BarChart chartData={indata} />
        </div>
        <div className="dashboardCard card-vertical items-start">
          <div>
            <h6>Expenses this week</h6>
          </div>
          <BarChart chartData={exdata} />
        </div>
        <div className="dashboardCard card-vertical items-start">
          <div>
            <h6>Overall this week</h6>
          </div>
          <BarChart chartData={indata} />
        </div>
      </div>
    </div>
  );
}
