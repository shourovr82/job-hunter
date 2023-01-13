import AuthProvider from "../context/AuthProvider/AuthProvider";
import "../styles/globals.css";
import Root from "../utility/Root";

export default function App({ Component, pageProps }) {
   return (
      <AuthProvider>
         <Component {...pageProps} />
      </AuthProvider>
   );
}
