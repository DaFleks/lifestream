"use client";

import Text from "./aetherium/Text";

const CurrentTemperature = ({ temperature }: { temperature?: string }) => {
  return <Text className="font-semibold mb-0.75">{temperature ?? "?"} °C</Text>;
};

export default CurrentTemperature;
