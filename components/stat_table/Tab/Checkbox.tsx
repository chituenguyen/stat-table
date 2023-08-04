// components/CheckboxInput.tsx
import React from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxInputProps {
  label: string;
  name: string;
  initialData?: any;
  initialDataPosition?: any;
  onChange?: (checked: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  name,
  initialData,
  initialDataPosition,
  onChange,
}) => {
  const { register } = useFormContext();

  // Find the corresponding item in initialData based on accessorKey
  const item =
    initialData?.data.find((dataItem: any) => dataItem.accessorKey === name) ||
    initialDataPosition?.find((item: any) => item.name === name);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <label className="flex items-center gap-1">
      <input
        type="checkbox"
        {...register(name)}
        checked={item ? true : false}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export default CheckboxInput;
