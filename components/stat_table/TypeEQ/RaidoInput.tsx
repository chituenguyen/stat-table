import { useFormContext } from "react-hook-form";

type RadioInputProps = {
  label: string;
  value: string;
};

const RadioInput: React.FC<RadioInputProps> = ({ label, value }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label className="flex items-center gap-1 hover:cursor-pointer" htmlFor={value}>
        <input type="radio" id={value} value={value} {...register("typeEQ")} className="hover:cursor-pointer" />
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
