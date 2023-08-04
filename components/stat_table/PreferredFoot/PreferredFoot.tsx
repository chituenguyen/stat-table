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
  return (
    <div className="flex items-center gap-2">
      Preferred foot
      <OptionButton options={PreferredFoot} name="preferredFoot" clear={clear} />
    </div>
  );
}
