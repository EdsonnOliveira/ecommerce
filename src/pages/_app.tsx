import "@/styles/globals.css";
import "@/styles/text.css";
import { Roboto as Nunito_Sans } from 'next/font/google'
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistor, store } from "@/services/redux";
import { PersistGate } from "redux-persist/integration/react";
import { storeWrapper } from "@/services/redux/store";

const font = Nunito_Sans({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin']
})

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className={font.className}>
          <Component {...pageProps} />
        </main>
      </PersistGate>
    </Provider>
  )
}

export default storeWrapper.withRedux(App)