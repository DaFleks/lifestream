import Container from "./aetherium/Container";

import Wallpaper from "./Wallpaper";
import InfoBar from "./InfoBar";
import Sidebar from "./Sidebar";
import WidgetDisplay from "./WidgetDisplay";

import { WidgetProvider } from "@/providers/WidgetContext";
import { InfoBarProvider } from "@/providers/InfoBarContext";
import { getWallpapers } from "@/lib/serverHelpers";

const LifestreamApp = async () => {
  const wallpapers = await getWallpapers();

  return (
    <Container className="relative size-full p-8 flex flex-col">
      <Wallpaper src={wallpapers} overlayOpacity={33} slideshowLength={15} />
      <InfoBarProvider>
        <InfoBar className="left-8 bottom-6" />
      </InfoBarProvider>
      <WidgetProvider>
        <WidgetDisplay />
        <Sidebar />
      </WidgetProvider>
    </Container>
  );
};

export default LifestreamApp;
