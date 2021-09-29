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
    </>
  )
}
