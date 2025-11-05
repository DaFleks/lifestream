"use client";

import { useWidget } from "@/providers/WidgetContext";
import Basketball from "./widgets/basketball/Basketball";
import ScorePinGrid from "./widgets/basketball/ScorePinGrid";

const WidgetDisplay = () => {
  const { currentWidget } = useWidget();
  return (
    <>
      {currentWidget === "basketball" && <Basketball />}
      {currentWidget === "scores" && <ScorePinGrid />}
    </>
  );
};

export default WidgetDisplay;
