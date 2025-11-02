"use client";

import Image, { ImageProps } from "next/image";

const Wallpaper = (props: ImageProps) => {
  //  Will adjust sizes later.
  return (
    <Image
      {...props}
      src={props.src}
      alt={props.alt ?? ""}
      fill
      className="object-cover fixed w-full h-full top-0 left-0"
      priority
      sizes="100vw"
    />
  );
};

export default Wallpaper;
