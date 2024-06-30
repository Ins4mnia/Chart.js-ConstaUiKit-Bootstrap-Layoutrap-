import { Doughnut } from "react-chartjs-2";
import "./DoughnutCustomersChart.scss";
import {
  Chart as ChartJs,
  Legend,
  Tooltip,
  plugins,
  scales,
  ArcElement,
} from "chart.js";
ChartJs.register(Legend, Tooltip, ArcElement, scales, plugins);

const DoughnutData = {
  labels: ["Ambity", "Planica", "Google"],
  datasets: [
    {
      data: [38.43, 31.21, 30.36],
      spacing: 10,
      cutout: "90%",
      borderRadius: 30,
      backgroundColor: [
        "rgba(42, 182, 93, 1)",
        "rgba(255, 169, 1, 1)",
        "rgba(64, 79, 212, 1)",
      ],
    },
  ],
};
const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.save();
    ctx.font = "bold 28px sans-serif";
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("1,324", xCoor, yCoor);
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle = "rgba(110,110,110,1)";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("Клиента", xCoor, yCoor);
    ctx.restore();
  },
};

const DoughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
};
export default function DoughnutCustomersChart() {
  return (
    <div className="custom-DoughnutCostumersChart d-flex flex-column gap-4">
      <h1 className="custom-DoughnutCostumersChart-font-head">
        Источники клиентов
      </h1>
      <div style={{ minHeight: "237px" }}>
        <Doughnut
          data={DoughnutData}
          options={DoughnutOptions}
          plugins={[textCenter]}
        />
      </div>
      <div className="d-flex flex-column gap-2">
        <div className="d-flex flex-row gap-2 align-items-center">
          <span style={{ color: "rgba(42, 182, 93, 1)" }}>1</span>
          <p className="custom-DoughnutCostumersChart-font-text">Текст</p>
          <span className="custom-DoughnutCostumersChart-hr"></span>
          <span className="custom-DoughnutCostumersChart-font-percent">
            38.43%
          </span>
        </div>
        <div className="d-flex flex-row gap-2 align-items-center">
          <span style={{ color: "rgba(255, 169, 1, 1)" }}>2</span>
          <p className="custom-DoughnutCostumersChart-font-text">Текст</p>
          <span className="custom-DoughnutCostumersChart-hr"></span>
          <span className="custom-DoughnutCostumersChart-font-percent">
            31.21%
          </span>
        </div>
        <div className="d-flex flex-row gap-2 align-items-center">
          <span style={{ color: "rgba(64, 79, 212, 1)" }}>3</span>
          <p className="custom-DoughnutCostumersChart-font-text">Текст</p>
          <span className="custom-DoughnutCostumersChart-hr"></span>
          <span className="custom-DoughnutCostumersChart-font-percent">
            30.36%
          </span>
        </div>
      </div>
    </div>
  );
}
