import { Line } from "react-chartjs-2";
import "./LineTransactionsChart.scss";
import {
  Chart as ChartJs,
  Legend,
  Tooltip,
  PointElement,
  CategoryScale,
  LineElement,
  LinearScale,
  plugins,
  scales,
  ScriptableContext,
} from "chart.js";
ChartJs.register(
  Legend,
  Tooltip,
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement,
  scales,
  plugins
);
const LineData = {
  labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", ""],
  datasets: [
    {
      label: "Продукт 1",
      data: [100000, 200000, 700000, 100000, 400000, 300000, 600000],
      borderColor: "rgba(42, 182, 93, 1)",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "rgba(42, 182, 93, 0.4)");
        gradient.addColorStop(1, "rgba(42, 182, 93, 0)");
        return gradient;
      },
    },
    {
      label: "Продукт 2",
      data: [
        200000, 100000, 521000, 309000, 520000, 400000, 100000, 600000, 500000,
      ],
      borderColor: "rgba(64, 79, 212, 1)",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "rgba(64, 79, 212, 0.4)");
        gradient.addColorStop(1, "rgba(64, 79, 212, 0)");
        return gradient;
      },
    },
    {
      label: "Продукт 3",
      data: [
        250000, 600000, 221000, 709000, 220000, 400000, 100000, 600000, 500000,
      ],
      borderColor: "rgba(152, 79, 212, 1)",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "rgba(255, 50, 1, 0.4)");
        gradient.addColorStop(1, "rgba(64, 79, 212, 0)");
        return gradient;
      },
    },
  ],
};
const LineOptions = {
  lineTension: 0.3,
  pointStyle: false,
  fill: true,
  borderWidth: 1,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        drawTicks: false,
        color: "rgba(234, 234, 234, 1)",
      },
      ticks: {
        labelOffset: 90,
        color: "rgba(110, 110, 110, 1)",
      },
    },
    y: {
      grid: {
        drawTicks: false,
      },
      ticks: {
        color: "rgba(110, 110, 110, 1)",
        callback: function (value: number) {
          return (
            value.toString().slice(0, 3) +
            " " +
            value.toString().slice(3) +
            " ₽"
          );
        },
      },
      min: 0,
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 14,
          weight: "bold",
          family: "Montserrat",
        },
      },
      display: true,
      position: "bottom",
    },
  },
};
export default function LineTransactionsChart() {
  return (
    <div className="custom-lineTransactionsChart d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-1">
        <h1 className="custom-lineTransactionsChart-font-head">Сумма сделок</h1>
        <h2 className="custom-lineTransactionsChart-font-subhead">
          январь 2023 - июнь 2023
        </h2>
      </div>
      <div style={{ height: "328px" }}>
        <Line data={LineData} options={LineOptions} />
      </div>
    </div>
  );
}
