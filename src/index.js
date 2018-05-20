import React from "react";
import { render } from "react-dom";
import { themes } from "./themes";
import { ThemeContext } from "./theme-context";
import HeaderWrapper from "./components/Header-Wrapper";

// https://reactjs.org/docs/context.html

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <HeaderWrapper />
        </ThemeContext.Provider>
        <Main />
      </div>
    );
  }
}

function Main(props) {
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

render(<App />, document.getElementById("root"));
