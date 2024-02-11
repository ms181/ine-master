import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Chart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        scaleShowLabels: false,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            display: false,
          },
        },
        scales: {
          x: {
            // grid: { display: false },
            // ticks: {
            //   display: false,
            // },
          },
          y: {
            // grid: { display: false },
            // ticks: {
            //   display: false,
            // },
          },
        },
      }}
    />
  );
}
