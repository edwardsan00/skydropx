import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toast'

import { wrapper } from 'src/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-center" delay={6000} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
