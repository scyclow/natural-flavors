
import './Main.css';

import { useState } from 'react'
import shuffle from 'lodash/shuffle'

import { Link } from 'react-router-dom'

import { gql, useQuery } from '@apollo/client'
import {Helmet} from 'react-helmet'
import localTokenData from './data'
import { prettyNumber, fmt, getTimes, useCountdown } from './utils'

const AUCTION_QUERY = gql`
  query Tokens($contract: String!) {
    Token(where: { address: { _eq: $contract } }){
      tokenId
      auctions(order_by: { expiresAt: desc } limit: 1 where: { status: {_in: ["APPROVED", "IN_PROGRESS"]} }) {
        status
        lastBidAmount
        reservePrice
        expiresAt
        duration
      }
    }
  }
`

const brands = localTokenData.reduce((dict, token) => {
  const val = dict[token.attributes[0].value]
  dict[token.attributes[0].value] = val ? val + 1 : 1
  return dict
}, {})

const packetStates = localTokenData.reduce((dict, token) => {
  const val = dict[token.attributes[2].value]
  dict[token.attributes[2].value] = val ? val + 1 : 1
  return dict
}, {})

const condiments = localTokenData.reduce((dict, token) => {
  const val = dict[token.attributes[1].value]
  dict[token.attributes[1].value] = val ? val + 1 : 1
  return dict
}, {})

const orientations = localTokenData.reduce((dict, token) => {
  const val = dict[token.attributes[3].value]
  dict[token.attributes[3].value] = val ? val + 1 : 1
  return dict
}, {})




const compareLowestBid = (a, b) => {
  if (a.endTime && a.endTime < Date.now()) {
    return 1
  }
  const bBid = b.status === 'APPROVED' ? 0.1001 : Number(b.currentBid || 9999)
  const aBid = a.status === 'APPROVED' ? 0.1001 : Number(a.currentBid || 9999)

  return aBid - bBid
}

const compareHighestBid = (a, b) => {
  if (a.endTime && a.endTime < Date.now()) {
    return 1
  }
  const bBid = b.status === 'APPROVED' ? 0.0999 : Number(b.currentBid || 0)
  const aBid = a.status === 'APPROVED' ? 0.0999 : Number(a.currentBid || 0)

  return bBid - aBid
}

const compareEndingSoon = (a, b) => {
  if (a.endTime && b.endTime) {
    return a.endTime - b.endTime
  }

  if (a.endTime && a.endTime < Date.now()) {
    return 1
  }
  if (a.endTime) {
    return -1
  }
  return compareLowestBid(a, b)
}

const combineData = (localData, auctionData) => {
  return localData.map(l => {
    const matchingAuctionData = auctionData.find(a => a.tokenId === l.tokenId)

    const auction = matchingAuctionData?.auctions?.[0] || {}
    const currentBid = prettyNumber(auction.lastBidAmount)
    const reservePrice = prettyNumber(auction.reservePrice)

    return {
      ...l,
      currentBid,
      reservePrice,
      endTime: auction.expiresAt && new Date(auction.expiresAt).getTime(),
      status: auction.status
    }
  })
}




const defaultGridSize = window.innerWidth < 750 ? 'large' : 'medium'
export default function Main() {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedPacketState, setSelectedPacketState] = useState('')
  const [selectedCondiment, setSelectedCondiment] = useState('')
  const [selectedOrientation, setSelectedOrientation] = useState('')
  const [gridSize, setGridSize] = useState(defaultGridSize)
  const [sortOrder, setSortOrder] = useState('endingSoon')

  const { loading, error, data: apiData } = useQuery(AUCTION_QUERY, {
    variables: {
      contract: window.CONTRACT_ADDR
    },
  })


  // if (loading) return <h1 style={{ marginTop: '3em', textAlign: 'center'}}>Loading...</h1>
  if (error) {
    console.log(JSON.stringify(error))
    return JSON.stringify(error)
  }


  const gridSizeClasses = {
    xs: 'thumbnailGridXS',
    small: 'thumbnailGridSmall',
    medium: 'thumbnailGridMedium',
    large: 'thumbnailGridLarge',
  }


  const filteredData = combineData(localTokenData, apiData?.Token || [])
    .filter(d => {
      if (selectedBrand && d.attributes.find(a => a.trait_type === 'Brand')?.value !== selectedBrand) return false
      if (selectedPacketState && d.attributes.find(a => a.trait_type === 'Packet State')?.value !== selectedPacketState) return false
      if (selectedCondiment && d.attributes.find(a => a.trait_type === 'Condiment')?.value !== selectedCondiment) return false
      if (selectedOrientation && d.attributes.find(a => a.trait_type === 'Orientation')?.value !== selectedOrientation) return false
      return true
    })



  let sortedData = filteredData


  if (sortOrder === 'endingSoon') {
    sortedData = filteredData.sort(compareEndingSoon)
  } else if (sortOrder === 'lowestBid') {
    sortedData = filteredData.sort(compareLowestBid)
  } else if (sortOrder === 'highestBid') {
    sortedData = filteredData.sort(compareHighestBid)
  } else if (sortOrder === 'random') {
    sortedData = shuffle(filteredData)
  }


  const featuredData = sortedData.filter(d => ['IN_PROGRESS', 'APPROVED'].includes(d.status) && !getTimes(d?.endTime)?.e)
  const restData = sortedData.filter(d => !['IN_PROGRESS', 'APPROVED'].includes(d.status) || getTimes(d?.endTime)?.e)

  return (
    <div className="Main">

      <Helmet>
        <meta name="twitter:image" content={'https://steviep.xyz/natural-flavors/assets/0.jpg'} />
        <meta name="og:image" property="og:image" content={'https://steviep.xyz/natural-flavors/assets/0.jpg'}/>
        <meta name="og:image:alt" content="Natural Flavors" />

        <meta name="title" content={'Natural Flavors'} />
        <meta name="og:title" content={'Natural Flavors'} />
        <meta name="twitter:title" content={'Natural Flavors'} />
        <meta property="og:site_name" content="Natural Flavors" />

        <meta name="twitter:description" content={'Natural Flavors: A Photo Series by Steve Pikelny'} />
        <meta name="description" content={'Natural Flavors: A Photo Series by Steve Pikelny'} />
        <meta name="og:description" content={'Natural Flavors: A Photo Series by Steve Pikelny'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={`https://steviep.xyz/natural-flavors`} />
        <meta name="twitter:url" content={`https://steviep.xyz/natural-flavors`} />
        <meta name="keywords" content="natural flavors, natural, flavors, nft, nfts, photo, series, photography, art, ketchup, packet, condiment, condiment packet, trash art, crypto, crypto art, fine art photography, steve, pikelny, steve pikelny, fake internet money" />
        <title>{'Natural Flavors: A Photo Series by Steve Pikelny'}</title>
      </Helmet>
      <Marquee style={{ padding: '0.5em' }} >
        <span className="marqueeChild">CYBER MONDAY FLASH SALE!!!</span>
      </Marquee>

      <header>
        <h1>
          Natural Flavors
        </h1>
        <h2>by <a href="https://steviep.xyz" target="_blank">Steve Pikelny</a></h2>
      </header>

      <MarqueeReverse style={{ padding: '0.5em' }} >
        <span className="marqueeChild">CYBER MONDAY FLASH SALE!!!</span>
      </MarqueeReverse>


      <section className="center">
        <div className="filterPanel">
          <div>
            <label>CONDIMENT</label>
            <select onChange={e => setSelectedCondiment(e.target.value)}>
              <option value={''}>All</option>
              {Object.keys(condiments)
                .map(key => <option value={key} key={key}>{key} ({condiments[key]})</option>)}
            </select>
          </div>

          <div>
            <label>BRAND</label>
            <select defaultValue="" onChange={e => setSelectedBrand(e.target.value)}>
              <option value={''}>All</option>
              {Object.keys(brands)
                .map(key => <option value={key} key={key}>{key} ({brands[key]})</option>)}
            </select>
          </div>

          <div>
            <label>STATE</label>
            <select defaultValue="" onChange={e => setSelectedPacketState(e.target.value)}>
              <option value={''}>All</option>
              {Object.keys(packetStates)
                .map(key => <option value={key} key={key}>{key} ({packetStates[key]})</option>)}
            </select>
          </div>

        {/*
          <div>
            <label>ORIENTATION</label>
            <select defaultValue="" onChange={e => setSelectedOrientation(e.target.value)}>
              <option value={''}>All</option>
              {Object.keys(orientations)
                .map(key => <option value={key} key={key}>{key} ({orientations[key]})</option>)}
            </select>
          </div>


          <div>
            <label>GRID SIZE</label>
            <select defaultValue={defaultGridSize} onChange={e => setGridSize(e.target.value)}>
              <option value="xs">Extra Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label>SORT</label>
            <select defaultValue="endingSoon" onChange={e => setSortOrder(e.target.value)}>
              <option value="tokenID">Token ID</option>
              <option value="endingSoon">Ending Soon</option>
              <option value="lowestBid">Lowest Bid</option>
              <option value="highestBid">Highest Bid</option>
              <option value="random">Highest Bid</option>
            </select>
          </div>
        */}

        </div>
      </section>

      {!!featuredData.length && (<>
        <h2 style={{ textAlign: 'center'}}>Open</h2>
        <section className={`thumbnailGrid ${gridSizeClasses[gridSize]}`}>
          {featuredData.map((d, i) => <div key={`thumbnail-${i}`}><Thumbnail data={d} key={d.tokenId} /></div>) }
        </section>
        <h2 style={{ textAlign: 'center'}}>Collection</h2>
      </>)}
      <section className={`thumbnailGrid ${gridSizeClasses[gridSize]}`}>
        {restData.map((d, i) => <div key={`thumbnail-${i}`}><Thumbnail data={d} key={d.tokenId} /></div>) }
      </section>

      <section className="closingNotes">
        <h2>Five additional tokens will be minted and distributed at the artist's discretion, bringing the total collection size to 50.</h2>
      </section>


      <h2 style={{ textAlign: 'center', wordWrap: 'break-word', padding: '1em'}}>
        <a href={`https://etherscan.io/address/${window.CONTRACT_ADDR}`} target="_blank" rel="nofollow">{window.CONTRACT_ADDR}</a>
      </h2>

    </div>
  );
}



function Thumbnail({ data }) {
  const { hours, minutes, seconds, expired } = useCountdown(data?.endTime)

  if (!data) return 'Loading...'

  const isVertical = data?.attributes?.find(a => a.trait_type === 'Orientation')?.value === 'Vertical'

  let details
  if (data?.status === 'IN_PROGRESS' && expired) {
    details = <div>Sold: {data?.currentBid} ETH</div>
  } else if (data?.status === 'IN_PROGRESS') {
    details = (
      <div>
        <div>Highest Bid: {data?.currentBid} ETH</div>
        <div>Time Left: {fmt(hours)}:{fmt(minutes)}:{fmt(seconds)}</div>
      </div>
    )
  } else if (data?.status === 'APPROVED') {
    details = <div>Reserve: {data?.reservePrice} ETH</div>
  }


  const content = (
    <>
      <img src={`./assets/${data.tokenId}.jpg`} loading="lazy" />
      <div className="ThumbnailDescription">
        ({data.tokenId})
        <div>{data?.name || `Packet #${data.tokenId}`}</div>
        {details}
      </div>
    </>
  )

  if (data.status && !expired) {
    return (
      <div className={`Thumbnail ${isVertical ? 'ThumbnailVertical' : '' }`} style={{display: 'flex', justifyContent: 'center'}}>
        <div>
          <Link to={`/packets/${data.tokenId}`} style={{ textAlign: 'center', textDecoration: 'none' }}>
              {content}
          </Link>
          <a
            href={`${window.BASE_ZORA_URL}/collections/${window.CONTRACT_ADDR}/${data.tokenId}/auction/bid`}
            target="_blank"
            rel="nofollow"
            style={{ textAlign: 'center', display: 'block' }}
            className="thumbnailClickPrompt thumbnailClickPromptBid"
          >
            {'Bid >'}
          </a>
        </div>
      </div>
    )
  } else {
    return (
      <Link to={`/packets/${data.tokenId}`} style={{ textAlign: 'center' }}>
        <div className={`Thumbnail ${isVertical ? 'ThumbnailVertical' : '' }`}>
          {content}
          <div className="thumbnailClickPrompt thumbnailClickPromptView">{'View >'}</div>
        </div>
      </Link>
    )
  }


}

export function Marquee({ children, duration, className, style }) {
  const animationDuration = duration ? duration + 's' : '5s'
  return (
      <div className={`marquee ${className || ''}`} style={style}>
        <div className="marqueeInner" style={{ animationDuration }}>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
        </div>
      </div>
  )
}

export function MarqueeReverse({ children, duration, className, style }) {
  const animationDuration = duration ? duration + 's' : '5s'
  return (
      <div className={`marquee ${className || ''}`} style={style}>
        <div className="marqueeInnerReverse" style={{ animationDuration }}>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
        </div>
      </div>
  )
}


