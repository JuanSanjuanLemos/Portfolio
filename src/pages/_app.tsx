import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { useState } from 'react';
import { darkTheme, GlobalStyle, lightTheme } from '../styles/global';
import { ThemeProvider } from 'styled-components';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");
  let themeName = "dark";
  const isDarkTheme = theme === "dark";
  isDarkTheme ? (themeName = "dark") : (themeName = "light");

  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return(
    <ChakraProvider>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>

      <Head>
        <title>Portfólio</title>
      </Head>
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
      <Component {...pageProps} />
      <GlobalStyle />

      </ThemeProvider>
    </ChakraProvider>
  )
}