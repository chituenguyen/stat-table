// OptionButton.tsx
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import CheckboxInputNew from "../Position/CheckBoxNew";
import { useOpen } from "../../../hooks/useOpenTeamAndNation";

type Option = {
  [key: string]: any; // Allow any other additional properties
};

type Props = {
  options: Option[];
  name: string;
  label: string;
};

const OptionButton: React.FC<Props> = ({ options, name, label }) => {
  const { setValue } = useFormContext();
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState<string[]>([]);
  const { openNation, openTeam } = useOpen();


  const handleSelectAll = () => {
    setSelectAll(true);
    setCheckboxes(options.map((item) => item.id.toString()));
    options.map((item) => {
      setValue(item.id.toString(), name);
    });
  };

  const handleDeselectAll = () => {
    setSelectAll(false);
    setCheckboxes([]);
    options.map((item) => {
      setValue(item.id.toString(), false);
    });
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      const newCheckboxes = checkboxes.filter((item) => item !== value);
      setCheckboxes(newCheckboxes);
    }

    setValue(name, checkboxes); // Update the form value
  };

  // Check if all individual checkboxes are selected
  useEffect(() => {
    if(!openNation && label==="Nationality"){
      setCheckboxes([]);
    }
    if(!openTeam && label==="Team"){
      setCheckboxes([]);
    }
    if (checkboxes.length > 0 && checkboxes.length === options.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }

    setValue(name, checkboxes);
  }, [checkboxes, options, setValue, name, openNation,label]);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p>{label}</p>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1 hover:cursor-pointer">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectAll && checkboxes.length === options.length}
              className="hover:cursor-pointer"
            />
            Select all
          </label>
          <label className="flex items-center gap-1 hover:cursor-pointer">
            <input
              type="checkbox"
              onChange={handleDeselectAll}
              checked={!selectAll && checkboxes.length === 0}
              className="hover:cursor-pointer"
            />
            Deselect all
          </label>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-2 gap-2">
        {options.map((item) => (
          <CheckboxInputNew
            key={item.value}
            label={item.name}
            name={item.id.toString()}
            defaultChecked={checkboxes.includes(item.id.toString())}
            value={name}
            onChange={handleCheckboxChange}
            flag={name}
          />
        ))}
      </div>
    </div>
  );
};

export default OptionButton;
