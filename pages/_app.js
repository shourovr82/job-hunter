import '../styles/globals.css'
import Root from '../utility/Root'

export default function App({ Component, pageProps }) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  )
}
