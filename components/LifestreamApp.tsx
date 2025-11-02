"use client";

import Container from "./aetherium/Container";

import Wallpaper from "./Wallpaper";
import InfoBar from "./InfoBar";

import wallpaperImage from "@/public/wallpapers/images/wallpaper-1.jpg";
import { InfoBarProvider } from "@/providers/InfoBarContext";

const LifestreamApp = () => {
  return (
    <Container className="relative size-full p-8">
      <Wallpaper src={wallpaperImage} alt="" />
      <InfoBarProvider>
        <InfoBar className="left-8 bottom-6" />
      </InfoBarProvider>
    </Container>
  );
};

export default LifestreamApp;
