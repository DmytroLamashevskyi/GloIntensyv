import { Theme, Themes } from "../models/theme";

export const lightTheme: Theme = {
  name: "Light",
  colors: {
    backgroundPrimary: "#4682b4",
    backgroundSecondary: "#edf0f1",
  },
};

export const darkTheme: Theme = {
  name: "Dark",
  colors: {
    backgroundPrimary: "black",
    backgroundSecondary: "gray",
  },
};

export const themes: Themes = {
  light: lightTheme,
  dark: darkTheme,
};
