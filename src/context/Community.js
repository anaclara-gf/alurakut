import React, { createContext, useState, useContext } from "react";

const DefineCommunityContext = createContext();

export default function DefineCommunityProvider({ children }) {
  const [defineCommunity, setDefineCommunity] = useState([]);

  return (
    <DefineCommunityContext.Provider
      value={{
        defineCommunity,
        setDefineCommunity
      }}
    >
      {children}
    </DefineCommunityContext.Provider>
  );
}

export function useDefineCommunity() {
  const context = useContext(DefineCommunityContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { defineCommunity, setDefineCommunity } = context;
  return { defineCommunity, setDefineCommunity };
}