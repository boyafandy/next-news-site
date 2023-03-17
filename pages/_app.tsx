import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { Center } from "../components/Center";
import { Footer } from "../components/Footer";
import { GlobalStyle, theme } from "../shared/theme";
import { store } from "../store";

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} /> 
      <Head>
        <title>Whats next?</title>
      </Head>
      <Header/>
        <main className="main">
          <Center>
            <Component {...pageProps} />
          </Center>
        </main>
      <Footer/>
    </ThemeProvider>
  )
}

export default store.withRedux(MyApp)