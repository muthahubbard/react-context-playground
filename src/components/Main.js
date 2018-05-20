import React from "react";
import { ThemeContext } from "../theme-context";

export default function Main(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <main
          style={{ backgroundColor: theme.background, color: theme.foreground }}
        >
          <h2>Default Theme Always</h2>
        </main>
      )}
    </ThemeContext.Consumer>
  );
}
