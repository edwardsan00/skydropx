import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { ToastContainer } from 'react-toast'
import { useLoading } from '@/hooks/useLoading'
import { FullLoaderScreen } from '@/components/molecules/loader'
import { wrapper } from 'src/store'

function MyApp({ Component, pageProps }: AppProps) {
  const { loading, loadingDone, loadingStart } = useLoading()
  Router.events.on('routeChangeStart', () => {
    loadingStart()
  })
  Router.events.on('routeChangeComplete', () => loadingDone())
  Router.events.on('routeChangeError', () => loadingDone())
  return (
    <>
      {loading ? <FullLoaderScreen /> : null}
      <Component {...pageProps} />
      <ToastContainer position="top-center" delay={6000} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
