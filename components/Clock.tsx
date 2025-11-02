"use client";

import Text from "./aetherium/Text";

interface ClockProps {
  time?: string;
}

const Clock = (props: ClockProps) => {
  return <Text className="text-6xl">{props.time ?? "00:00"}</Text>;
};

export default Clock;
