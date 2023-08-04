import ButtonInput from "../share/ButtonInput";

const Appearances = [
  { label: "All", value: "a" },
  { label: "More than", value: "GT" },
  { label: "Equal", value: "EQ" },
  { label: "Less than", value: "LT" },
];

export default function Age ({clear}:{clear:boolean}) {
  return (
    <div className="flex gap-2 items-center">
      Age
      <ButtonInput options={Appearances} name="age" value="ageValue" clear={clear}/>
    </div>
  );
}
 