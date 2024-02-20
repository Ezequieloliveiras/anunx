
import '@/styles/globals.css';
import { ToastyProvider } from '../contexts/Toasty';

export default function App({ Component, pageProps }) {
  return (
    <ToastyProvider>
      <Component {...pageProps} />
    </ToastyProvider>
  )
}
