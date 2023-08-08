// ShowTeam.jsx
import React from "react";
import InputCheckbox from "../share/InputCheckbox";
import useOpenNationStore from "../../../store/useOpenNationStore";
import { useTheme } from "next-themes";


function ShowNationality(nation:any) {
  // const { openNation } = useOpen();
  const {openNation} = useOpenNationStore()
  const Nationality = Object.entries(nation.nation).map(([id, name]) => ({
    name,
    id,
  }));
  const { resolvedTheme } = useTheme();

  return (
    <div className={`${openNation ? "block" : "hidden"} mt-2 ${resolvedTheme === "dark" ? "bg-[#181D26]" : "bg-surface-1"} p-3 rounded-lg`}>
      <InputCheckbox options={Nationality} name="nationality" label="Nationality" />
    </div>
  );
}

export default ShowNationality;
