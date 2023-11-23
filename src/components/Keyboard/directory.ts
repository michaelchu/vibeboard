import { win_65 } from "./Layout/win_65.ts";
import { mac_65 } from "./Layout/mac_65.ts";
import { KeyProps } from "../../util/types.ts";

interface LayoutMapping {
  [key: string]: KeyProps[];
}

interface DirectoryProps {
  win: LayoutMapping;
  mac: LayoutMapping;
}

export const directory: DirectoryProps = {
  win: {
    "40_keys": win_65,
    "40_ortho": win_65,
    "50_ortho": win_65,
    "60_keys": win_65,
    "65_keys": win_65,
    "75_keys": win_65,
    "80_keys": win_65,
    "100_keys": win_65,
  },
  mac: {
    "40_keys": mac_65,
    "40_ortho": mac_65,
    "50_ortho": mac_65,
    "60_keys": mac_65,
    "65_keys": mac_65,
    "75_keys": mac_65,
    "80_keys": mac_65,
    "100_keys": mac_65,
  },
};
