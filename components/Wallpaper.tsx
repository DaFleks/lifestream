"use client";

import Image, { ImageProps } from "next/image";

import Container from "./aetherium/Container";

const Wallpaper = (props: ImageProps) => {
  //  Will adjust sizes later.
  return (
    <>
      <Image
        {...props}
        src={props.src}
        alt={props.alt ?? ""}
        fill
        className="size-full object-cover top-0 left-0 -z-20"
        priority
        sizes="100vw"
      />
      <Container className="size-full absolute top-0 left-0 -z-10" style={{ backgroundColor: "black", opacity: 0.25 }} />
    </>
  );
};

export default Wallpaper;
