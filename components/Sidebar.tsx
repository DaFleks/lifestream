"use client";

import { MouseEvent } from "react";

import Container from "./aetherium/Container";

import WidgetButton from "./widgets/WidgetButton";

import basketballIcon from "@/public/icons/basketball.png";
import weatherIcon from "@/public/icons/weather.png";
import settingsIcon from "@/public/icons/settings.png";

import { useWidget } from "@/providers/WidgetContext";

const Sidebar = () => {
  const { setCurrentWidget } = useWidget();

  const handleOpenWidget = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentWidget(e.currentTarget.name);
  };

  return (
    <Container className="absolute size-full top-0 left-0 p-8 flex justify-end">
      <Container as="nav" className="w-fit h-full p-4 grid grid-flow-col grid-rows-3 gap-4 [direction:rtl] items-center">
        <WidgetButton id="basketball" name="basketball" onClick={handleOpenWidget} src={basketballIcon} alt="" label="Basketball" />
        <WidgetButton id="basketball" name="weather" onClick={handleOpenWidget} src={weatherIcon} alt="" label="Weather" />
        <WidgetButton id="basketball" name="settings" onClick={handleOpenWidget} src={settingsIcon} alt="" label="Settings" />
      </Container>
    </Container>
  );
};

export default Sidebar;
