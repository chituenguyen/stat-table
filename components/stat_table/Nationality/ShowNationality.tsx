// ShowTeam.jsx
import React from "react";
import InputCheckbox from "../share/InputCheckbox";
import useOpenNationStore from "../../../store/useOpenNationStore";


function ShowNationality(nation:any) {
  // const { openNation } = useOpen();
  const {openNation} = useOpenNationStore()
  const Nationality = Object.entries(nation.nation).map(([id, name]) => ({
    name,
    id,
  }));
  return (
    <div className={`${openNation ? "block" : "hidden"} mt-2 bg-surface-1 p-3 rounded-lg`}>
      <InputCheckbox options={Nationality} name="nationality" label="Nationality" />
    </div>
  );
}

export default ShowNationality;
