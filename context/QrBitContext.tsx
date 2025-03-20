"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export const QRCodeContext = createContext({
  selectedGroup: "",
  bordered: false,
  numered: false,
  colored: true,
  masked: true,
  setSelectedGroup: (value: string) => {},
  setBordered: (value: boolean) => {},
  setNumered: (value: boolean) => {},
  setColored: (value: boolean) => {},
  setMasked: (value: boolean) => {},
});

export const useQrContext = () => useContext(QRCodeContext);

interface ProviderProps {
  children: ReactNode;
}

export function QRCodeContextProvider({ children }: ProviderProps) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [bordered, setBordered] = useState(false);
  const [numered, setNumered] = useState(false);
  const [colored, setColored] = useState(true);
  const [masked, setMasked] = useState(true);

  return (
    <QRCodeContext.Provider
      value={{
        selectedGroup,
        bordered,
        numered,
        colored,
        masked,
        setSelectedGroup,
        setBordered,
        setNumered,
        setColored,
        setMasked
      }}
    >
      {children}
    </QRCodeContext.Provider>
  );
}
