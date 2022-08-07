import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store, { persistor } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react';
// PersisGate delays the rendering of your app's UI until your persisted state has been retrieved and saved the redux store.   
// its loading prop can be your custom Spinner or null if you dont want to render anything when you're waiting the getting data.
function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Component {...pageProps} /></ PersistGate >
  </Provider>
}

export default MyApp
