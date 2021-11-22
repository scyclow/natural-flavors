import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DAppProvider } from '@usedapp/core'
import { MediaConfiguration } from '@zoralabs/nft-components'
import {Networks, NFTFetchConfiguration} from '@zoralabs/nft-hooks';

window.CONTRACT_ADDR = '0x9E9D63ff16E2c30e14150E035859c23fcF34db2D'

ReactDOM.render(
  <React.StrictMode>
    <NFTFetchConfiguration network={Networks.RINKEBY}>
      <MediaConfiguration
        theme={{
          bodyFont: "font-family: serif; ",
          titleFont: "font-family: serif; ",
          headerFont: "font-family: serif; font-weight: 700;",
          mediaContentFont: "font-family: serif; ",
        }}
      >
        <App />
      </MediaConfiguration>
    </NFTFetchConfiguration>

  </React.StrictMode>,
  document.getElementById('root')
);

