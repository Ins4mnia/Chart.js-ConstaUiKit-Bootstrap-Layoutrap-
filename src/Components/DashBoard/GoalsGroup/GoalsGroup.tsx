import React from "react";
import "./GoalsGroup.scss";
import { ProgressLine } from "@consta/uikit/ProgressLine";

const data = [
  {
    title: "Количество продаж",
    result: 12,
    max: 16,
  },
  {
    title: "Сумма сделок, руб",
    result: "10М",
    max: "20М",
  },
  {
    title: "Средний чек, руб",
    result: "2.5М",
    max: "10М",
  },
  {
    title: "Успешные сделки",
    result: 8,
    max: 8,
  },
];

export default function GoalsGroup() {
  return (
    <div className=" d-flex flex-row gap-4">
      {data.map((item, index) => {
        const percent = (parseInt(item.result) / parseInt(item.max)) * 100;
        return (
          <div
            className={`${
              index == data.length - 1 ? "col-3" : "col"
            } custom-GoalsGroup-item d-flex flex-column gap-2`}
          >
            <div className="d-flex flex-column gap-3">
              <h1 className="custom-GoalsGroup-item-font-head">{item.title}</h1>
              <h2 className="custom-GoalsGroup-item-font-info">
                <span className="custom-GoalsGroup-item-font-info-accent">
                  {item.result}
                </span>{" "}
                из {item.max}
              </h2>
            </div>
            <div className="d-flex flex-column gap-2">
              <ProgressLine value={percent} className="custom-progressLine" />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h3 className="custom-GoalsGroup-item-font-percent">
                  {percent}% выполнено
                </h3>
                <h4 className="custom-GoalsGroup-item-font-percent-result">
                  +9.15%
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
