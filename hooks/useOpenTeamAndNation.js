// useOpen.js
import React, { createContext, useContext, useState } from "react";

const OpenContext = createContext();

export function useOpen() {
  return useContext(OpenContext);
}

export function OpenProvider({ children }) {
  const [openTeam, setOpenTeam] = useState(false);
  const [openNation, setopenNation] = useState(false);
  // console.log(openNation)

  const updateValueTeam = (newValue) => {
    setOpenTeam(newValue);
  };

  const updateValueNation = (newValue) => {
    setopenNation(newValue);
  };

  return (
    <OpenContext.Provider
      value={{ openTeam, openNation, updateValueTeam, updateValueNation }}
    >
      {children}
    </OpenContext.Provider>
  );
}
