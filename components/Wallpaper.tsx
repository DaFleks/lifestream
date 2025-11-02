"use client";

import Image from "next/image";

import Container from "./aetherium/Container";
import { useEffect, useState } from "react";

interface WallpaperProps {
  src: string[];
  alt?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  slideshowLength?: number;
}

const Wallpaper = ({ src, alt = "Background wallpaper for Lifestream.", overlayOpacity = 0, overlayColor = "black", slideshowLength = 60000, ...imgProps }: WallpaperProps) => {
  const [currentWallpaper, setCurrentWallpaper] = useState<string>(src[0]);

  useEffect(() => {
    let i = 0;
    const wallpaperSlideshow = setInterval(() => {
      setCurrentWallpaper(src[i++]);
      if (i === src.length) i = 0;
    }, slideshowLength * 60 * 1000);

    return () => {
      clearInterval(wallpaperSlideshow);
    };
  }, []);

  return (
    <>
      <Image
        src={currentWallpaper}
        alt={alt}
        {...imgProps}
        fill
        className="size-full object-cover top-0 left-0 -z-20"
        priority
        sizes="100vw"
      />
      <Container
        className="size-full absolute top-0 left-0 -z-10"
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity * 0.01 }}
      />
    </>
  );
};

export default Wallpaper;
