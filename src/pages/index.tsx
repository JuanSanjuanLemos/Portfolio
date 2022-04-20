import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";

import { darkTheme, GlobalStyle, lightTheme } from "../styles/global";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  let themeName = "dark";
  const isDarkTheme = theme === "dark";
  isDarkTheme ? (themeName = "dark") : (themeName = "light");
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header>
        <button className={`button-theme -${themeName}`} onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </button>
      </Header>
      <Presentation />
      <AboutMe />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}
