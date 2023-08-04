import RadioInput from "./RaidoInput";

export default function () {
  return (
    <div className="flex gap-2 items-center">
      <RadioInput label="Overall" value="o" />
      <RadioInput label="Home" value="home" />
      <RadioInput label="Away" value="away" />
    </div>
  );
}
