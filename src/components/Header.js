import React from "react";
import { ThemeContext } from "../theme-context";

export default function Header() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <header
          style={{
            backgroundColor: theme.background,
            display: "block",
            height: "100px"
          }}
        >
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            Toggle The Theme
          </button>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}
