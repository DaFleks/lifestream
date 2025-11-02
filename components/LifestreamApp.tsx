"use client";

import Container from "./aetherium/Container";

import Wallpaper from "./Wallpaper";
import Date from "./Date";
import Clock from "./Clock";
import CurrentTemperature from "./CurrentTemperature";

import wallpaperImage from "@/public/wallpapers/images/wallpaper-1.jpg";

const LifestreamApp = () => {
  return (
    <Container className="relative size-full p-8">
      <Wallpaper src={wallpaperImage} alt="" />
      <Container className="absolute left-8 bottom-6 space-y-2">
        <Date dateString="Sunday, Nov 2" />
        <Container className="flex items-end gap-4">
          <Clock time="12:45" />
          <CurrentTemperature temperature="25" />
        </Container>
      </Container>
    </Container>
  );
};

export default LifestreamApp;
