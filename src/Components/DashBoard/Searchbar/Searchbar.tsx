import { useState } from "react";
import "./Searchbar.scss";
import { Button } from "@consta/uikit/Button";
import { IconAdd } from "@consta/icons/IconAdd";
import { IconAlignJustify } from "@consta/icons/IconAlignJustify";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconSettings } from "@consta/icons/IconSettings";
import { IconTable } from "@consta/icons/IconTable";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { IconComponent } from "@consta/icons/Icon";
import { TextField } from "@consta/uikit/TextField";

type Item = {
  name: string;
  icon?: IconComponent;
};

const items = [
  {
    name: "Первый",
    icon: IconAlignJustify,
  },
  {
    name: "Второй",
    icon: IconTable,
  },
];
export default function Searchbar() {
  const [choiseGroupValue, setChoiseGroupValue] = useState<Item | null>(
    items[0]
  );
  const [textFieldValue, setTextFieldValue] = useState<string | null>(null);
  const handleTextFieldChange = ({ value }: { value: string | null }) =>
    setTextFieldValue(value);
  return (
    <div className="custom-Searchbar d-flex flex-row align-items-center gap-2">
      <Button label="Добавить" iconLeft={IconAdd} size="m" />
      <ChoiceGroup
        size="m"
        value={choiseGroupValue}
        onChange={setChoiseGroupValue}
        items={items}
        getItemLabel={(item) => item.name}
        getItemIcon={(item) => item.icon}
        onlyIcon
        name="ChoiceGroupExampleIcon"
        multiple={false}
        style={{
          backgroundColor: "rgba(243, 244, 247, 1)",
          boxShadow: "none",
        }}
      />
      <TextField
        leftSide={IconSearchStroked}
        onChange={handleTextFieldChange}
        value={textFieldValue}
        type="text"
        placeholder="Введите текст"
      />
      <Button
        iconRight={IconSettings}
        onlyIcon
        iconSize="l"
        style={{ backgroundColor: "rgba(243, 244, 247, 1)", color: "grey" }}
      />
    </div>
  );
}
