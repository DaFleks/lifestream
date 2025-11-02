"use client";

import Container from "./aetherium/Container";
import Wallpaper from "./Wallpaper";
import wallpaperImage from "@/public/wallpapers/images/wallpaper-1.jpg";

const LifestreamApp = () => {
  return (
    <Container>
      <Wallpaper src={wallpaperImage} alt="" />
    </Container>
  );
};

export default LifestreamApp;
