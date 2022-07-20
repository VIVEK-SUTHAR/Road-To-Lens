import { ApolloProvider } from '@apollo/client'
import client from "../apollo-client"
import Navbar from '../components/Navbar'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
