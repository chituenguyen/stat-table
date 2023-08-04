// Team.jsx
import React, { useEffect } from "react";
import { useOpen } from "../../../hooks/useOpenTeamAndNation";
import { useFormContext } from "react-hook-form";

function Team({ clear }: { clear: boolean }) {
  const { updateValueTeam } = useOpen();
  const methods = useFormContext();
  const {register} = useFormContext();

  useEffect(() => {
    if (methods.watch("teamoption") === "allteam") {
      updateValueTeam(false);
    }
    if (methods.watch("teamoption") === "chooseteam") {
      updateValueTeam(true);
    }
  }, [methods]);

  return (
    <div>
      <div className="flex items-center gap-2 hover:cursor-pointer">
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
            className="hover:cursor-pointer"
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
            className="hover:cursor-pointer"
          />
          Choose
        </label>
        </div>
      </div>
    </div>
  );
}

export default Team;
