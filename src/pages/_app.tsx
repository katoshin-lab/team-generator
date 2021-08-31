import { Provider } from 'react-redux'
import { store } from '../reducks/store';

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
