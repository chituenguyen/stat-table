import { useTheme } from "next-themes";
import OptionButton from "../share/OptionButton";

export default function PreferredFoot ({clear}:{clear:boolean}) {
  const PreferredFoot = [
    {
      label: "All",
      value: "a",
    },
    {
      label: "Both",
      value: "Both",
    },
    {
      label: "Right",
      value: "Right",
    },
    {
      label: "Left",
      value: "Left",
    },
  ];
  const {resolvedTheme} = useTheme()
  return (
    <div className={`flex items-center gap-2 ${resolvedTheme === "dark" ? "text-[#aaa]":""}`}>
      Preferred foot
      <OptionButton options={PreferredFoot} name="preferredFoot" clear={clear} />
    </div>
  );
}
