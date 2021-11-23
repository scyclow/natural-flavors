import React from 'react';
import ReactDOM from 'react-dom';
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

const client = new ApolloClient({
  uri: 'https://indexer-dev-rinkeby.zora.co/v1/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MediaConfiguration
        networkId={Networks.RINKEBY}
      >
        <NFTFetchConfiguration networkId={Networks.RINKEBY}>
          <App />
        </NFTFetchConfiguration>
      </MediaConfiguration>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

