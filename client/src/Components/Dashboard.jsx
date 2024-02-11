import BarChart from "../Charts/BarChart";
import { incomeData, expenseData } from "../assets/temp/weekly-fake-data";
import { useState } from "react";
import { ArrowDown, ArrowUp, Download, Upload } from "../assets/Icons";

export default function Dashboard() {
  const [indata, setInData] = useState({
    labels: incomeData.map((data) => data.day),
    datasets: [
      {
        label: " ",
        data: incomeData.map((data) => data.income),
        backgroundColor: ["orange"],
        borderRadius: 5,
      },
    ],
  });

  const [exdata, setExData] = useState({
    labels: expenseData.map((data) => data.day),
    datasets: [
      {
        label: " ",
        data: expenseData.map((data) => data.expense),
        backgroundColor: ["#818CF8"],
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
              <Upload classNames="w-5 h-5 text-red-500" />
            </span>
          </div>
          <div className="dashboardCard shadow-green-300">
            <div className="flex-1">
              <p className="info-text">This year income</p>
              <h4>$47542</h4>
            </div>
            <span className="icon-wrapper bg-green-100">
              <Download classNames="w-5 h-5 text-green-500" />
            </span>
          </div>
          <div className="dashboardCard shadow-orange-300">
            <div className="flex-1">
              <p className="info-text">This month expenses</p>
              <h4>$1261</h4>
            </div>
            <span className="icon-wrapper bg-orange-100">
              <ArrowUp classNames="w-5 h-5 text-orange-500" />
            </span>
          </div>
          <div className="dashboardCard shadow-blue-300">
            <div className="flex-1">
              <p className="info-text">This month income</p>
              <h4>$2305</h4>
            </div>
            <span className="icon-wrapper bg-blue-100">
              <ArrowDown classNames="w-5 h-5 text-blue-500" />
            </span>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="dashboardCard card-vertical items-start gap-4">
          <div>
            <h6>Income this week</h6>
          </div>
          <BarChart chartData={indata} />
        </div>
        <div className="dashboardCard card-vertical items-start gap-4">
          <div>
            <h6>Expenses this week</h6>
          </div>
          <BarChart chartData={exdata} />
        </div>
        <div className="dashboardCard card-vertical items-start gap-4">
          <div>
            <h6>Overall this week</h6>
          </div>
          <BarChart chartData={indata} />
        </div>
      </div>
    </div>
  );
}
