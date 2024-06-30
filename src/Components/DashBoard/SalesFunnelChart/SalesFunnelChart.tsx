import "./SalesFunnelChart.scss";

export default function SalesFunnelChart() {
  return (
    <div className="custom-salesFunnelChart d-flex flex-column gap-4">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h1 className="custom-salesFunnelChart-heading-font">Воронка продаж</h1>
        <p className="custom-salesFunnelChart-heading-font-finalPecrent">
          Итоговая конверсия —{" "}
          <span className="custom-salesFunnelChart-heading-font-finalPecrent-accent">
            {((data[data.length - 1].count * 100) / data[0].count).toFixed(0)}%
          </span>
        </p>
      </div>
      <div className="d-flex flex-column gap-1">
        {fullData.map((elem, index) => {
          return (
            <div
              className="custom-salesFunnelChart-line d-flex flex-row justify-content-between align-items-center ps-4"
              key={index}
              style={{ backgroundColor: `rgba(${elem.color},0.1)` }}
            >
              <h1 className="custom-salesFunnelChart-line-font">
                {elem.title}
              </h1>
              <div className="d-flex flex-row align-items-center gap-4">
                <p
                  className="custom-salesFunnelChart-line-font-percent"
                  style={{ color: `rgba(${elem.color},1)` }}
                >
                  {elem.percent}
                </p>
                <div
                  className="custom-salesFunnelChart-line-countBlock text-center p-3"
                  style={{
                    backgroundColor: `rgba(${elem.color},1)`,
                    width: `${elem.count * 3}px`,
                    minWidth: "50px",
                  }}
                >
                  <p className="custom-salesFunnelChart-line-font-countBlock">
                    {elem.count}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function rgbaStringToString(rgbaString) {
  const values = rgbaString.match(/\d+/g).map(Number);
  return `${values[0]},${values[1]},${values[2]}`;
}
const data = [
  { title: "Не отработан", count: 100 },
  { title: "Обработан", count: 95 },
  { title: "Проконсультирован", count: 85 },
  { title: "КП отправлено", count: 75 },
  { title: "Договор подписан", count: 65 },
  { title: "Оплата внесена", count: 55 },
  { title: "Закрывающие документы подписаны", count: 45 },
  { title: "Сделка успешна", count: 35 },
];
const colors = [
  "(7, 40, 119, 1)",
  "(64, 79, 212, 1)",
  "(107, 68, 193, 1)",
  "(222, 86, 135, 1)",
  "(255, 169, 1, 1)",
  "(255, 95, 1, 1)",
  "(42, 182, 165, 1)",
  "(42, 182, 93, 1)",
];
const fullData = data.map((item, index) => {
  return {
    title: item.title,
    count: item.count,
    color: rgbaStringToString(colors[index]),
    percent:
      ((item.count * 100) / data[index === 0 ? 0 : index - 1].count).toFixed(
        0
      ) + "%",
  };
});
