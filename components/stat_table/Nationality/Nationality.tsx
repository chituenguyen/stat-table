import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import useOpenNationStore from "../../../store/useOpenNationStore";
import { useTheme } from "next-themes";

function Nationality({ clear }: { clear: boolean }) {
  // const { updateValueNation } = useOpen();
  const {changeOpennation} = useOpenNationStore()
  const methods = useFormContext();
  const {register} = useFormContext();
  const {resolvedTheme} = useTheme()

  useEffect(() => {
    if (methods.watch("nationalityoption") === "allnation") {
      changeOpennation(false);
    }
    if (methods.watch("nationalityoption") === "choosenation") {
      changeOpennation(true);
    }
  }, [methods]);
  return (
    <div>
      <div className="flex items-center gap-2">
        <label
          className={`flex items-center gap-1 hover:cursor-pointer ${resolvedTheme === "dark"?"text-[#aaa]":""}`}
          htmlFor="allnation"
        >
          <input
            type="radio"
            id="allnation"
            {...register("nationalityoption")}
            onChange={() => {
              const value = methods.getValues();
              const nationality = Object.keys(value).filter(
                (key) => value[key] === "nationality"
              );
              nationality.forEach((item) => {
                methods.setValue(item, false);
              });
              methods.setValue("nationalityoption", "allnation");
            }}
            checked={methods.getValues("nationalityoption") === "allnation"}
            value={"allnation"}
            className="hover:cursor-pointer accent-[#2187E5]"
          />
          All
        </label>

        <label
          className={`flex items-center gap-1 hover:cursor-pointer ${resolvedTheme === "dark"?"text-[#aaa]":""}`}
          htmlFor="choosenation"
        >
          <input
            type="radio"
            id="choosenation"
            {...register("nationalityoption")}
            onChange={() => {
              methods.setValue("nationalityoption", "choosenation");
            }}
            checked={methods.getValues("nationalityoption") === "choosenation"}
            value={"choosenation"}
            className="hover:cursor-pointer accent-[#2187E5]"
          />
          Choose
        </label>
      </div>
    </div>
  );
}

export default Nationality;
