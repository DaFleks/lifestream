"use client";

import Text from "./aetherium/Text";

const Date = ({ dateString }: { dateString?: string }) => {
  return <Text className="text-lg font-semibold ml-1">{dateString}</Text>;
};

export default Date;
