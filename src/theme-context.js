import React from "react";
import { themes } from "./themes";

// context allows us to make props such as theme available to components at any depth
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});
