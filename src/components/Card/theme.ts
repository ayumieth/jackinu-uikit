import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "rgba(86, 111, 254, 0.2)",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
