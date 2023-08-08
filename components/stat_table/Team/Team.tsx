// Team.jsx
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import useOpenTeamStore from "../../../store/useOpenTeamStore";
import { useTheme } from "next-themes";

function Team({ clear }: { clear: boolean }) {
  // const { updateValueTeam } = useOpen();
  const{changeOpenTeam} = useOpenTeamStore()
  const methods = useFormContext();
  const {register} = useFormContext();
  const {resolvedTheme} = useTheme()

  useEffect(() => {
    if (methods.watch("teamoption") === "allteam") {
      changeOpenTeam(false);
    }
    if (methods.watch("teamoption") === "chooseteam") {
      changeOpenTeam(true);
    }
  }, [methods]);

  return (
    <div>
      <div className={`flex items-center gap-2 hover:cursor-pointer ${resolvedTheme === "dark"?"text-[#aaa]":""}`}>
        <p>Team</p>
        <div className="flex items-center gap-2">
        <label
          className="flex items-center gap-1 hover:cursor-pointer"
          htmlFor="allnation"
        >
          <input
            type="radio"
            id="allteam"
            {...register("teamoption")}
            onChange={() => {
              const value = methods.getValues();
              const nationality = Object.keys(value).filter(
                (key) => value[key] === "team"
              );
              nationality.forEach((item) => {
                methods.setValue(item, false);
              });
              methods.setValue("teamoption", "allteam");
            }}
            checked={methods.getValues("teamoption") === "allteam"}
            value={"allteam"}
            className="hover:cursor-pointer accent-[#2187E5]"
          />
          All
        </label>

        <label
          className="flex items-center gap-1 hover:cursor-pointer"
          htmlFor="chooseteam"
        >
          <input
            type="radio"
            id="chooseteam"
            {...register("teamoption")}
            onChange={() => {
              methods.setValue("teamoption", "chooseteam");
            }}
            checked={methods.getValues("teamoption") === "chooseteam"}
            value={"chooseteam"}
            className="hover:cursor-pointer accent-[#2187E5]"
          />
          Choose
        </label>
        </div>
      </div>
    </div>
  );
}

export default Team;
