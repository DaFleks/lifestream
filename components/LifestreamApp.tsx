import Container from "./aetherium/Container";

import Wallpaper from "./Wallpaper";
import InfoBar from "./InfoBar";

import { InfoBarProvider } from "@/providers/InfoBarContext";
import { getWallpapers } from "@/lib/serverHelpers";

const LifestreamApp = async () => {
  const wallpapers = await getWallpapers();

  return (
    <Container className="relative size-full p-8">
      <Wallpaper src={wallpapers} overlayOpacity={25} slideshowLength={30}/>
      <InfoBarProvider>
        <InfoBar className="left-8 bottom-6" />
      </InfoBarProvider>
    </Container>
  );
};

export default LifestreamApp;
