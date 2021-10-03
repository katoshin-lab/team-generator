import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ThemeProvider } from 'styled-components';
import color from '../theme/color';

import { store } from '../reducks/store';

import '../theme/reset.css';

const theme = {
  ...color,
}

export default function App({ Component, pageProps }) {

  return (
    <>
      <ReduxProvider store={store}>
        <NextAuthProvider session={pageProps.session}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </NextAuthProvider>
      </ReduxProvider>
      <HeadElement />
    </>
  )
}

// Initial Head Tag
const HeadElement = () => (
  <Head>
    <title>Team-Generator</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet" />
    <style>
      {`*{font-family: 'Nunito', sans-serif;} `}
    </style>
  </Head>
)
