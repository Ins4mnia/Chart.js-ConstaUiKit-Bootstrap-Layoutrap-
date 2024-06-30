import React from "react";
import "./Filters.scss";
import TimePeriodGroup from "./TimePeriodGroup/TimePeriodGroup";
import AnotherInfoGroup from "./AnotherInfoGroup/AnotherInfoGroup";

export default function Filters() {
  return (
    <div className="d-flex flex-column gap-2">
      <h1 className="custom-Filters-font-head">Аналитика продаж</h1>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <TimePeriodGroup />
        <AnotherInfoGroup />
      </div>
    </div>
  );
}
