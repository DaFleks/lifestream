"use server";

import path from "path";
import fs from "fs";

export const getWallpapers = async () => {
  const folder = path.join(process.cwd(), "public/wallpapers/images");
  return fs.readdirSync(folder).map((file) => `/wallpapers/images/${file}`);
};
