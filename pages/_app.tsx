import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps /*, AppContext */ } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={pageProps.session} >
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </ThemeProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
