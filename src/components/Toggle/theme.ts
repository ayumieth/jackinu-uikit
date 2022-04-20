import { darkColors, lightColors, baseColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: baseColors.primary,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.card,
};
