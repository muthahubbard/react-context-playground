import React from "react";
import { render } from "react-dom";
import { themes } from "./themes";
import { ThemeContext } from "./theme-context";
import Main from "./components/Main";
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

render(<App />, document.getElementById("root"));
