"use client";

import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import Container from "./aetherium/Container";
import { Button } from "./ui/button";

import { useWidget } from "@/providers/WidgetContext";
import Text from "./aetherium/Text";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

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
  src: string | StaticImageData;
  title?: string;
}

const Widget = (props: WidgetProps) => {
  const { setCurrentWidget } = useWidget();

  const handleClose = () => setCurrentWidget("");

  return (
    <Container className={cn("h-full absolute top-0 right-0 p-8 z-50 ", props.size)}>
      <Container className={cn("h-full w-full bg-neutral-400/50 rounded shadow-md shadow-black/25 p-2 relative", props.className)}>
        <Container className="flex justify-between items-center mb-2">
          <Container className="flex items-center gap-2">
            <Container className="relative w-4 aspect-square">
              <Image src={props.src} alt="Window Icon" fill sizes="" className="object-contain" />
            </Container>
            <Text className="text-sm mt-[0.25] text-shadow-sm text-shadow-neutral-700/25">{props.title}</Text>
          </Container>

          <Button onClick={handleClose} variant="ghost" className="w-4 h-4 p-3" size="icon">
            <XIcon className="w-4! h-4!" />
          </Button>
        </Container>

        {props.children}
      </Container>
    </Container>
  );
};

export default Widget;
