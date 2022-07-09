import { PaletteMode } from "@mui/material";

export const TYPES = {
  UPDATE_WEB_MODE: "UPDATE_WEB_MODE",
} as const;

export type WebUpdateProps = {
  key: string;
  value: PaletteMode | string;
};

export function update(props: WebUpdateProps) {
  return {
    type: TYPES.UPDATE_WEB_MODE,
    props,
  };
}
