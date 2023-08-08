import { useTheme } from "next-themes";
import ButtonInput from "../share/ButtonInput";

const Appearancess = [
  { label: "All", value: "a" },
  { label: "More than", value: "GT" },
  { label: "Equal", value: "EQ" },
  { label: "Less than", value: "LT" },
];

export default function Appearances ({clear}:{clear:boolean}) {
  const {resolvedTheme} = useTheme()
  return (
    <div className={`flex items-center gap-2 ${resolvedTheme === "dark" ?"text-[#aaa]":""}`}>
      Appearances
      <ButtonInput
        options={Appearancess}
        name="appearances"
        value="appearValue"
        clear = {clear}
      />
    </div>
  );
}
