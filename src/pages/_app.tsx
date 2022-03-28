import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toast'

import store from 'src/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer position="top-center" delay={6000} />
    </Provider>
  )
}

export default MyApp
