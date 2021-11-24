import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import { DAppProvider } from '@usedapp/core'
import { MediaConfiguration } from '@zoralabs/nft-components'
import {Networks, NFTFetchConfiguration} from '@zoralabs/nft-hooks';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


window.CONTRACT_ADDR = '0x9E9D63ff16E2c30e14150E035859c23fcF34db2D'
window.GQL_URI = 'https://indexer-dev-rinkeby.zora.co/v1/graphql'
window.NETWORK_ID = Networks.RINKEBY


const client = new ApolloClient({
  uri: window.GQL_URI,
  cache: new InMemoryCache()
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MediaConfiguration
        networkId={window.NETWORK_ID}
      >
        <NFTFetchConfiguration networkId={window.NETWORK_ID}>
          <App />
        </NFTFetchConfiguration>
      </MediaConfiguration>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

