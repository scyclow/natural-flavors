
import './Main.css';

import { useState } from 'react'
import shuffle from 'lodash/shuffle'
import {
  NFTDataContext,
  NFTPreview,
  NFTFullPage,
  PreviewComponents,
} from "@zoralabs/nft-components";
import { useNFT } from '@zoralabs/nft-hooks'
import tokenData from './data'
import { Link } from 'react-router-dom'

const brands = Array.from(tokenData.reduce((set, token) => set.add(token.attributes[0].value), new Set()))
const packetStates = Array.from(tokenData.reduce((set, token) => set.add(token.attributes[2].value), new Set()))
const condiments = Array.from(tokenData.reduce((set, token) => set.add(token.attributes[1].value), new Set()))
const orientations = Array.from(tokenData.reduce((set, token) => set.add(token.attributes[3].value), new Set()))

export default function Main() {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedPacketState, setSelectedPacketState] = useState('')
  const [selectedCondiment, setSelectedCondiment] = useState('')
  const [selectedOrientation, setSelectedOrientation] = useState('')
  const [gridSize, setGridSize] = useState('large')
  const [sortOrder, setSortOrder] = useState('random')

  const gridSizeClasses = {
    xs: 'thumbnailGridXS',
    small: 'thumbnailGridSmall',
    medium: 'thumbnailGridMedium',
    large: 'thumbnailGridLarge',
  }

  const filteredData = tokenData
    .filter(d => {
      if (selectedBrand && d.attributes[0].value !== selectedBrand) return false
      if (selectedPacketState && d.attributes[2].value !== selectedPacketState) return false
      if (selectedCondiment && d.attributes[1].value !== selectedCondiment) return false
      if (selectedOrientation && d.attributes[3].value !== selectedOrientation) return false
      return true
    })

  let sortedData = filteredData
  if (sortOrder === 'random') {
    sortedData = shuffle(filteredData)
  }

  return (
    <div className="Main">
      <header>
        <h1>
          Natural Flavors
        </h1>
      </header>

      <section className="center">
        <div className="filterPanel">
          <div>
            <label>CONDIMENT</label>
            <select onChange={e => setSelectedCondiment(e.target.value)}>
              <option value={''}>All</option>
              {condiments.map(condiment => <option value={condiment} key={condiment}>{condiment}</option>)}
            </select>
          </div>

          <div>
            <label>BRAND</label>
            <select defaultValue="" onChange={e => setSelectedBrand(e.target.value)}>
              <option value={''}>All</option>
              {brands.map(brand => <option value={brand} key={brand}>{brand}</option>)}
            </select>
          </div>

          <div>
            <label>STATE</label>
            <select defaultValue="" onChange={e => setSelectedPacketState(e.target.value)}>
              <option value={''}>All</option>
              {packetStates.map(packetState => <option value={packetState} key={packetState}>{packetState}</option>)}
            </select>
          </div>

          <div>
            <label>ORIENTATION</label>
            <select defaultValue="" onChange={e => setSelectedOrientation(e.target.value)}>
              <option value={''}>All</option>
              {orientations.map(orientation => <option value={orientation} key={orientation}>{orientation}</option>)}
            </select>
          </div>


          <div>
            <label>VIEW</label>
            <select defaultValue="large" onChange={e => setGridSize(e.target.value)}>
              <option value="xs">Extra Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label>SORT</label>
            <select defaultValue="random" onChange={e => setSortOrder(e.target.value)}>
              <option value="tokenID">Default</option>
              <option value="endingSoon">Ending Soon</option>
              <option value="lowestBid">Lowest Bid</option>
              <option value="random">Random</option>
            </select>
          </div>

        </div>
      </section>

      <section className={`thumbnailGrid ${gridSizeClasses[gridSize]}`}>
        {
          sortedData
            .map((d, i) => <div><ThumbnailLocal id={d.id} key={d.id} /></div>)
        }
        {/*
          times(5, i => <div><Thumbnail id={i} key={i} /></div>)
        */}
      </section>

    </div>
  );
}


function Thumbnail({ id }) {
  // const { data, error } = useNFT('0x0550d833EE8f40F8f03D5f3537687358Fe11ba54', '4')
  const { data, error } = useNFT('0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270', '44000115')

  console.log(data, error)
  return (
    <Link to={`/packets/${id}`}>
      <div className="Thumbnail">
        <img src={`./assets/${id}.jpg`} />
        <div className="ThumbnailDescription">
          <div>{tokenData[id].name}</div>
          <div>Current Bid: 0.2 ETH</div>
          <div>Time Remaining: 12:19:57</div>
        </div>
      </div>
    </Link>
  )
}

function ThumbnailLocal({ id }) {
  return (
    <Link to={`/packets/${id}`}>
      <div className="Thumbnail">
        <img src={`./assets/${id}.jpg`} />
        <div className="ThumbnailDescription">
          <div>{tokenData[id].name}</div>
          <div>Current Bid: 0.2 ETH</div>
          <div>Time Remaining: 12:19:57</div>
        </div>
      </div>
    </Link>
  )
}

function times(n, fn) {
  const out = []
  for (let i = 0; i < n; i++) {
    out.push(fn(i))
  }
  return out
}



