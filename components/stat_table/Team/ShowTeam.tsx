// ShowTeam.jsx
import React from "react";
import InputCheckbox from "../share/InputCheckbox";
import useOpenTeamStore from "../../../store/useOpenTeamStore";
import { useTheme } from "next-themes";

function ShowTeam(teams: any) {
  const {openTeam} = useOpenTeamStore()
  const { resolvedTheme } = useTheme();

  return (
    <div className={`${openTeam ? "block" : "hidden"} mt-2 ${resolvedTheme === "dark" ? "bg-[#181D26] bg-opacity-10" : "bg-surface-1"} p-3 rounded-lg`}>
      <InputCheckbox options={teams.teams} name="team" label="Team" />
    </div>
  );
}

export default ShowTeam;
