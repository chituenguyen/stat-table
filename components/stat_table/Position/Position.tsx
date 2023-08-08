import { useTheme } from "next-themes";
import position from "../../../const/Position";
import CheckboxInputNew from "./CheckBoxNew";

export default function Position () {
  const {resolvedTheme} = useTheme()
  return (
    <div className={`flex gap-2 ${resolvedTheme === "dark"?"text-[#aaa]":""}`}>
      Position
      <div className="flex gap-2">
        {position.map((item) => (
          <CheckboxInputNew
            key={item.name}
            label={item.label}
            name={item.name}
            defaultChecked={true}
            value={"position"}
          />
        ))}
      </div>
    </div>
  );
}
