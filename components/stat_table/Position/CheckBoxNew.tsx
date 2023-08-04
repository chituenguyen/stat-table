import { useFormContext } from "react-hook-form";

type CheckboxInputProps = {
  label: string;
  name: string;
  defaultChecked: boolean;
  value: string;
  onChange?: (value: string, checked: boolean) => void;
  flag?: string;
  clear?:boolean
};

const CheckboxInputNew: React.FC<CheckboxInputProps> = ({
  label,
  name,
  defaultChecked,
  value,
  onChange,
  flag,
  clear
}) => {
  const { register } = useFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.name, e.target.checked); // Call the onChange function with the checkbox value
    }
  };
  return (
    <div>
      <label className="flex items-center gap-1 hover:cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          {...register(name)}
          value={value}
          onChange={(e) => handleChange(e)}
          className="hover:cursor-pointer"
        />
        {flag && flag === "team" ? (
          <img
            src={`https://apisf.p2pcdn.xyz/api/v1/team/${name}/image`}
            className="w-4 h-4"
            alt="Team flag"
          />
        ) : flag === "nationality" ? (
          <img
            src={`https://www.sofascore.com/static/images/flags/${name.toLocaleLowerCase()}.png`}
            className="w-4 h-4"
            alt="Nationality flag"
          />
        ) : (
          ""
        )}

        {label}
      </label>
    </div>
  );
};

export default CheckboxInputNew;
