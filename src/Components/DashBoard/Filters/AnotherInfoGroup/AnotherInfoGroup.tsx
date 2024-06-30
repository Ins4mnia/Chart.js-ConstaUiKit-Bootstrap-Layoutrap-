import React, { useState } from "react";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
type Item = string;

const items: Item[] = ["Компания", "Отдел", "Сотрудник"];
export default function AnotherInfoGroup() {
  const [value, setValue] = useState<Item | null>(items[0]);
  return (
    <ChoiceGroup
      size="s"
      value={value}
      onChange={setValue}
      items={items}
      getItemLabel={(item) => item}
      multiple={false}
      name="ChoiceGroupExample"
    />
  );
}
