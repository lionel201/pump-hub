import '@/styles/globals.css'
import '../styles/app.scss'

import { AptosWalletAdapterProvider, NetworkName } from '@aptos-labs/wallet-adapter-react'
import { BloctoWallet } from '@blocto/aptos-wallet-adapter-plugin'
import { MartianWallet } from '@martianwallet/aptos-wallet-adapter'
import { PontemWallet } from '@pontem/wallet-adapter-plugin'
import { configureStore } from '@reduxjs/toolkit'
import { RiseWallet } from '@rise-wallet/wallet-adapter'
import { TrustWallet } from '@trustwallet/aptos-wallet-adapter'
import { FewchaWallet } from 'fewcha-plugin-wallet-adapter'
import type { AppProps } from 'next/app'
import { PetraWallet } from 'petra-plugin-wallet-adapter'
import { Provider as ReduxProvider } from 'react-redux'

import { LayoutPage } from '@/common/components/layout/LayoutPage'
import reducer from '@/stores/app/reducer'
import { initRootState } from '@/stores/rootReducer'

const wallets = [
  new PetraWallet(),
  new MartianWallet(),
  new PontemWallet(),
  new TrustWallet(),
  new FewchaWallet(),
  new RiseWallet(),
  new BloctoWallet({
    network: NetworkName.Testnet,
    bloctoAppId: '6d85f56e-5f2e-46cd-b5f2-5cf9695b4d46',
  }),
  // new SpikaWallet(),
  // new MSafeWalletAdapter(),
  // new NightlyWallet(),
]

const isDevelopmentMode = process.env.NODE_ENV === 'development'

export const store = configureStore({
  reducer: {
    app: reducer,
  },
  preloadedState: initRootState,
  devTools: isDevelopmentMode,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        ignoredPaths: ['connection'],
      },
    }).concat([]),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <ReduxProvider store={store}>
        <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage>
      </ReduxProvider>
    </AptosWalletAdapterProvider>
  )
}
