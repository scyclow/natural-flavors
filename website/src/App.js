
import './App.css';

import {
  NFTDataContext,
  NFTPreview,
  NFTFullPage,
  PreviewComponents,
} from "@zoralabs/nft-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Losers
        </h1>
      </header>

      <NFTPreview
        id="44000044"
        contract="0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270"
        showBids
        showPerpetual
        // initialData={token}
        // useBetaIndexer={true}
        // key={`${tokenInfo.tokenContract}-${tokenInfo.tokenId}`}
      >
        <div className="owned-list-item">
          <PreviewComponents.MediaThumbnail />

        </div>
      </NFTPreview>

      <NFTFullPage
        id="44000044"
        contract="0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270"
      />
    </div>
  );
}

export default App;
