import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DAppProvider } from '@usedapp/core'
import { MediaConfiguration } from '@zoralabs/nft-components'

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider>
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
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

