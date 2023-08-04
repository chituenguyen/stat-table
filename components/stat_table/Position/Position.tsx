import position from "../../../const/Position";
import CheckboxInputNew from "./CheckBoxNew";

export default function Position () {
  return (
    <div className="flex gap-2">
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
