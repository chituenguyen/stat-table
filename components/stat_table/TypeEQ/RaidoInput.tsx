import { useTheme } from "next-themes";
import { useFormContext } from "react-hook-form";

type RadioInputProps = {
  label: string;
  value: string;
};

const RadioInput: React.FC<RadioInputProps> = ({ label, value }) => {
  const { register } = useFormContext();
  const {resolvedTheme} = useTheme()
  return (
    <div>
      <label className={`flex items-center gap-1 hover:cursor-pointer ${resolvedTheme === "dark"?"text-[#aaa]":""}`} htmlFor={value}>
        <input type="radio" id={value} value={value} {...register("typeEQ")} className={`hover:cursor-pointer accent-[#2187E5] `} />
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
