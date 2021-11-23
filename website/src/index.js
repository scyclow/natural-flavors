import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DAppProvider } from '@usedapp/core'
import { MediaConfiguration } from '@zoralabs/nft-components'
import {Networks, NFTFetchConfiguration} from '@zoralabs/nft-hooks';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
// } from "@apollo/client";

window.CONTRACT_ADDR = '0x9E9D63ff16E2c30e14150E035859c23fcF34db2D'

// const client = new ApolloClient({
//   uri: 'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1-rinkeby',
//   cache: new InMemoryCache()
// });

ReactDOM.render(
  <React.StrictMode>

      <MediaConfiguration
        networkId={Networks.RINKEBY}
        theme={{
          bodyFont: "font-family: serif; ",
          titleFont: "font-family: serif; ",
          headerFont: "font-family: serif; font-weight: 700;",
          mediaContentFont: "font-family: serif; ",
        }}
      >
        <NFTFetchConfiguration networkId={Networks.RINKEBY}>
          <App />
        </NFTFetchConfiguration>
      </MediaConfiguration>

  </React.StrictMode>,
  document.getElementById('root')
);

