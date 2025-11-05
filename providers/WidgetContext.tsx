"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface WidgetState {
  currentWidget: string;
  setCurrentWidget: Dispatch<SetStateAction<string>>;
}

const WidgetContext = createContext<WidgetState | undefined>(undefined);

export const WidgetProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentWidget, setCurrentWidget] = useState<string>("");

  return <WidgetContext.Provider value={{ currentWidget, setCurrentWidget }}>{children}</WidgetContext.Provider>;
};

export const useWidget = () => {
  const context = useContext(WidgetContext);
  if (!context) throw new Error("useWidget must be used within a WidgetContextProvider.");
  return context;
};
