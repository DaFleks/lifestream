"use client";

import { cn } from "@/lib/utils";

import Container from "./aetherium/Container";

import Date from "./Date";
import Clock from "./Clock";
import Temperature from "./Temperature";

import { useInfoBar } from "@/providers/InfoBarContext";

interface InfoBarProps {
  className?: string;
}

const InfoBar = (props: InfoBarProps) => {
  const { date, time, temperature } = useInfoBar();
  return (
    <Container className={cn("absolute space-y-2", props.className)}>
      <Date dateString={date} />
      <Container className="flex items-end gap-4">
        <Clock time={time} />
        <Temperature temperature={temperature} />
      </Container>
    </Container>
  );
};

export default InfoBar;
