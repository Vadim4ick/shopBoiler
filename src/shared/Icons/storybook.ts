/* eslint-disable @typescript-eslint/no-explicit-any */
import * as ICONS from "./index";

type IconOptions = Record<keyof typeof ICONS, any>;
export const ICON_OPTIONS = Object.entries(ICONS).reduce<IconOptions>(
  (acc, [iconName, IconComponent]) => {
    acc[iconName.replace(/icon$/i, "") as keyof typeof ICONS] = IconComponent(
      {},
    );
    return acc;
  },
  {} as IconOptions,
);
