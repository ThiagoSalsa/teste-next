import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainContainer from '../components/MainContainer'
import { Main } from 'next/document'

export default function App({ Component, pageProps }: AppProps) {
  return( <MainContainer><Component {...pageProps} /></MainContainer>)
}