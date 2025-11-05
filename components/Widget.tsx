"use client";

import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import Container from "./aetherium/Container";
import { Button } from "./ui/button";

import { useWidget } from "@/providers/WidgetContext";

type AllowedWidths =
  | "w-0"
  | "w-[10%]"
  | "w-[20%]"
  | "w-[30%]"
  | "w-[40%]"
  | "w-[50%]"
  | "w-[60%]"
  | "w-[70%]"
  | "w-[80%]"
  | "w-[90%]"
  | "w-[100%]"
  | "w-[10%]"
  | "w-1/4"
  | "w-3/4"
  | "w-1/2"
  | "w-1/3"
  | "w-2/3"
  | "w-full";

interface WidgetProps {
  children?: React.ReactNode;
  size: AllowedWidths;
  className?: string;
}

const Widget = (props: WidgetProps) => {
  const { setCurrentWidget } = useWidget();

  const handleClose = () => setCurrentWidget("");

  return (
    <Container className={cn('h-full absolute top-0 right-0 p-8 z-50', props.size)}>
      <Container className={cn("h-full w-full bg-neutral-100/66 rounded shadow-md shadow-black/25 p-4 relative", props.className)}>
        <Button onClick={handleClose} className="absolute -top-2.5 -right-2.5 w-5 h-5 p-0 bg-neutral-600" size="icon">
          <XIcon className="w-3 h-3" />
        </Button>
        {props.children}
      </Container>
    </Container>
  );
};

export default Widget;
