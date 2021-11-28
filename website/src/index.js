import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


// window.CONTRACT_ADDR = '0x9E9D63ff16E2c30e14150E035859c23fcF34db2D'
// window.GQL_URI = 'https://indexer-dev-rinkeby.zora.co/v1/graphql'
// window.BASE_ZORA_URL = 'https://rinkeby.zora.co'

window.CONTRACT_ADDR = '0xBD1cA111380B436350034c7040E7C44949605702'
window.GQL_URI = 'https://indexer-prod-mainnet.zora.co/v1/graphql'
window.BASE_ZORA_URL = 'https://zora.co'

const client = new ApolloClient({
  uri: window.GQL_URI,
  cache: new InMemoryCache()
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

