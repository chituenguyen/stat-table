import { useTheme } from "next-themes";
import OptionButton from "../share/OptionButton";

export default function Accmulation ({clear}:{clear:boolean}) {
  const Appearances = [
    {
      label: "Total",
      value: "total",
    },
    {
      label: "Per game",
      value: "perGame",
    },
    {
      label: "Per 90 mins",
      value: "per90",
    },
  ];
  const {resolvedTheme} = useTheme()
  return (
    <div className={`flex items-center gap-2 ${resolvedTheme === "dark"?"text-[#aaa]":""}`}>
      Accumulation
      <OptionButton options={Appearances} name="accumulation" clear={clear}/>
    </div>
  );
}
