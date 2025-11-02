"use client";

import { getCurrentDate, getCurrentTemperature, getCurrentTime } from "@/lib/helpers";
import { createContext, useContext, useEffect, useState } from "react";

interface InfoBarState {
  date: string;
  time: string;
  temperature: string;
}

const InfoBarContext = createContext<InfoBarState | undefined>(undefined);

export const InfoBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("00:00");
  const [temperature, setTemperature] = useState<string>("0");

  useEffect(() => {
    //  Initial pre-interval fetch / state set.
    (async () => {
      setDate(getCurrentDate());
      setTime(getCurrentTime());
      setTemperature(await getCurrentTemperature());
    })();

    /*  INTERVALS
            - Date & Time - Every 1 second.
            - Weather - Every hour.
    */
    const dateTimeInterval = setInterval(() => {
      setDate(getCurrentDate());
      setTime(getCurrentTime());
    }, 1000);

    const weatherInterval = setInterval(async () => {
      setTemperature(await getCurrentTemperature());
    }, 60 * 60 * 1000);

    return () => {
      clearInterval(dateTimeInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  return <InfoBarContext.Provider value={{ date, time, temperature }}>{children}</InfoBarContext.Provider>;
};

export const useInfoBar = () => {
  const context = useContext(InfoBarContext);
  if (!context) throw new Error("useInfoBar must be used within an InfoBarProvider");

  return context;
};
