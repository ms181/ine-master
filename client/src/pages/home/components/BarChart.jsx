import { Chart as ChartJS } from "chart.js/auto"; //! this has to be written
import { Bar } from "react-chartjs-2";

export default function Chart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options = {{
        plugins:{
          legend:{
            display: false
          }
        }
      }}
    />
  );
}
