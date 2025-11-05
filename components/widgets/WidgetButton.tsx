"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Container from "../aetherium/Container";
import Text from "../aetherium/Text";

interface WidgetButtonProps {
  src: string | StaticImport;
  alt: string;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  id?: string;
  name?: string;
}

const WidgetButton = (props: WidgetButtonProps) => {
  return (
    <button
      id={props.id}
      name={props.name}
      onClick={props.onClick}
      className="flex flex-col items-center gap-3 cursor-pointer hover:bg-neutral-100/25 p-2 rounded duration-200">
      <Container className="relative size-12 space-y-2  border-red-500">
        <Image src={props.src} alt={props.alt} fill sizes="" className="object-contain drop-shadow-md drop-shadow-neutral-600" />
      </Container>
      <Text className="text-xs mx-auto text-shadow-black text-shadow-md">{props.label}</Text>
    </button>
  );
};

export default WidgetButton;
