import { Provider as ReduxProvider } from 'react-redux';
import { Provider as NextAuthProvider } from 'next-auth/client';

import { store } from '../reducks/store';

import '../theme/reset.css'

export default function App({ Component, pageProps }) {

  return (
    <ReduxProvider store={store}>
      <NextAuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </NextAuthProvider>
    </ReduxProvider>
  )
}
