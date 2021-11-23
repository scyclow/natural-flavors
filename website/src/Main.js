
import './Main.css';

import { useState, useEffect } from 'react'
import shuffle from 'lodash/shuffle'
import {
  NFTDataContext,
  NFTPreview,
  NFTFullPage,
  PreviewComponents,
} from "@zoralabs/nft-components";
import { useNFT, useNFTIndexerQuery } from '@zoralabs/nft-hooks'
import tokenData from './data'
import { Link } from 'react-router-dom'

import { MediaFetchAgent, Networks } from '@zoralabs/nft-hooks'
// import { gql, useQuery } from '@apollo/client';

// const TOKEN_QUERY = gql`

//   fragment CurrencyShort on Currency {
//     id
//     name
//     symbol
//     decimals
//   }

//   fragment PreviousReserveBid on InactiveReserveAuctionBid {
//     id
//     bidder {
//       id
//     }
//     transactionHash
//     createdAtTimestamp
//     amount
//     bidType
//     bidInactivatedAtTimestamp
//     bidInactivatedAtBlockNumber
//   }

//   fragment CurrentReserveBid on ReserveAuctionBid {
//     bidType
//     amount
//     transactionHash
//     createdAtTimestamp
//     bidder {
//       id
//     }
//   }

//   fragment ReserveAuctionPartial on ReserveAuction {
//     id
//     tokenId
//     tokenContract
//     transactionHash
//     status
//     approved
//     reservePrice
//     firstBidTime
//     token
//     createdAtTimestamp
//     approvedTimestamp
//     curator {
//       id
//     }
//     curatorFeePercentage
//     tokenOwner {
//       id
//     }
//     auctionCurrency {
//       ...CurrencyShort
//     }
//     currentBid {
//       ...CurrentReserveBid
//     }
//     previousBids {
//       ...PreviousReserveBid
//     }
//     duration
//     expectedEndTimestamp
//     finalizedAtTimestamp
//   }


//   query getAuctionByMedia($tokens: [String!]) {
//     reserveAuctions(
//       first: 300
//       where: { token_in: $tokens }
//       orderBy: createdAtTimestamp
//       orderDirection: desc
//     ) {
//       ...ReserveAuctionPartial
//     }
//   }
// `

const brands = Array.from(tokenData.reduce((set, token) => set.add(token.attributes[0].value), new Set()))
const packetStates = Array.from(tokenData.reduce((set, token) => set.add(token.attributes[2].value), new Set()))
const condiments = Array.from(tokenData.reduce((set, token) => set.add(token.attributes[1].value), new Set()))
const orientations = Array.from(tokenData.reduce((set, token) => set.add(token.attributes[3].value), new Set()))

const compareLowestBid = (a, b) => {
  const bBid = b.status === 'RESERVE_AUCTION_PENDING' ? 0.1001 : Number(b.currentBid || 9999)
  const aBid = a.status === 'RESERVE_AUCTION_PENDING' ? 0.1001 : Number(a.currentBid || 9999)

  return aBid - bBid
}

const compareEndingSoon = (a, b) => {
  if (b.endTime && a.endTime) {
    return  Number(a.endTime) - Number(b.endTime)
  }

  if (a.endTime) {
    return -1
  }
  return compareLowestBid(a, b)
}

export default function Main() {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedPacketState, setSelectedPacketState] = useState('')
  const [selectedCondiment, setSelectedCondiment] = useState('')
  const [selectedOrientation, setSelectedOrientation] = useState('')
  const [gridSize, setGridSize] = useState('large')
  const [sortOrder, setSortOrder] = useState('endingSoon')

  // const { loading, error, data } = useQuery(TOKEN_QUERY, {
  //   variables: {
  //     tokens: times(4, id => `${window.CONTRACT_ADDR}-${id}`)
  //   },
  // })

  // if (loading) return 'Loading...'
  // if (error) {
  //   console.log(JSON.stringify(error))
  //   return JSON.stringify(error)
  // }
  // console.log(data)
  // return ''

  const indexerQuery = useNFTIndexerQuery({ collectionAddresses: [window.CONTRACT_ADDR]})

  console.log(indexerQuery)

  const naturalFlavorsData = useNaturalFlavorsData()
  console.log(naturalFlavorsData)



  const gridSizeClasses = {
    xs: 'thumbnailGridXS',
    small: 'thumbnailGridSmall',
    medium: 'thumbnailGridMedium',
    large: 'thumbnailGridLarge',
  }

  const filteredData = naturalFlavorsData.data
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
  }



  return (
    <div className="Main">
      <header>
        <h1>
          Natural Flavors
        </h1>
        <h2>by Steve Pikelny</h2>
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
            <select defaultValue="endingSoon" onChange={e => setSortOrder(e.target.value)}>
              <option value="tokenID">Token ID</option>
              <option value="endingSoon">Ending Soon</option>
              <option value="lowestBid">Lowest Bid</option>
            </select>
          </div>

        </div>
      </section>

      <section className={`thumbnailGrid ${gridSizeClasses[gridSize]}`}>
        {
          sortedData.map((d, i) => <div><Thumbnail data={d} key={d.id} /></div>)
        }
        {/*
          sortedData.map((d, i) => <div><ThumbnailLocal data={d} key={d.id} /></div>)
          times(6, i => <div><Thumbnail id={i} key={i} /></div>)
        */}
      </section>

    </div>
  );
}

const fmt = (n) => {
  const r = Math.floor(n)
  if (r < 10) return '0' + r
  else return '' + r
}
function Thumbnail({ data }) {
  const endTimeSet = !!data?.endTime

  const now = Math.floor(Date.now()/1000)
  const diff = (Number(data?.endTime) - now)
  const h = (diff / 86400) * 24
  const m = (h - Math.floor(h)) * 60
  const s = (m - Math.floor(m)) * 60

  const [hours, setHours] = useState(endTimeSet ? Math.floor(h) : 0)
  const [minutes, setMinutes] = useState(endTimeSet ? Math.floor(m) : 0)
  const [seconds, setSeconds] = useState(endTimeSet ? Math.floor(s) : 0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.floor(Date.now()/1000)
      const diff = (Number(data?.endTime) - now)
      const h = (diff / 86400) * 24
      const m = (h - Math.floor(h)) * 60
      const s = (m - Math.floor(m)) * 60

      setHours(Math.floor(h))
      setMinutes(Math.floor(m))
      setSeconds(Math.floor(s))
    }, 1000)

    return () => clearInterval(interval)
  })

  if (!data) return 'Loading...'

  const isVertical = data?.attributes?.find(a => a.trait_type === 'Orientation')?.value === 'Vertical'

  let details
  if (data?.status === 'RESERVE_AUCTION_ACTIVE') {
    details = (
      <div>
        <div>Current Bid: {data?.currentBid}</div>
        <div>Time Left: {fmt(hours)}:{fmt(minutes)}:{fmt(seconds)}</div>
      </div>
    )
  } else if (data?.status === 'RESERVE_AUCTION_PENDING') {
    details = <div>Reserve: 0.1 ETH</div>
  }



  return (
    <Link to={`/packets/${data.id}`} style={{ textAlign: 'center' }}>
      <div className={`Thumbnail ${isVertical ? 'ThumbnailVertical' : '' }`}>
        <img src={`./assets/${data.id}.jpg`} loading="lazy" />
        <div className="ThumbnailDescription">
          ({data.id})
          <div>{data?.name || `Packet #${data.id}`}</div>
          {details}
        </div>
        <div className="thumbnailClickPrompt">View ></div>
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

function useNaturalFlavorsData() {
  const {data: data0, error: error0} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '0')
  const {data: data1, error: error1} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '1')
  const {data: data2, error: error2} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '2')
  const {data: data3, error: error3} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '3')
  const {data: data4, error: error4} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '4')
  const {data: data5, error: error5} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '5')
  const {data: data6, error: error6} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '6')
  const {data: data7, error: error7} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '7')
  const {data: data8, error: error8} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '8')
  const {data: data9, error: error9} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '9')
  const {data: data10, error: error10} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '10')
  const {data: data11, error: error11} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '11')
  const {data: data12, error: error12} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '12')
  const {data: data13, error: error13} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '13')
  const {data: data14, error: error14} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '14')
  const {data: data15, error: error15} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '15')
  const {data: data16, error: error16} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '16')
  const {data: data17, error: error17} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '17')
  const {data: data18, error: error18} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '18')
  const {data: data19, error: error19} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '19')
  const {data: data20, error: error20} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '20')
  const {data: data21, error: error21} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '21')
  const {data: data22, error: error22} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '22')
  const {data: data23, error: error23} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '23')
  const {data: data24, error: error24} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '24')
  const {data: data25, error: error25} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '25')
  const {data: data26, error: error26} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '26')
  const {data: data27, error: error27} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '27')
  const {data: data28, error: error28} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '28')
  const {data: data29, error: error29} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '29')
  const {data: data30, error: error30} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '30')
  const {data: data31, error: error31} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '31')
  const {data: data32, error: error32} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '32')
  const {data: data33, error: error33} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '33')
  const {data: data34, error: error34} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '34')
  const {data: data35, error: error35} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '35')
  const {data: data36, error: error36} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '36')
  const {data: data37, error: error37} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '37')
  const {data: data38, error: error38} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '38')
  const {data: data39, error: error39} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '39')
  const {data: data40, error: error40} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '40')
  const {data: data41, error: error41} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '41')
  const {data: data42, error: error42} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '42')
  const {data: data43, error: error43} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '43')
  const {data: data44, error: error44} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '44')
  const {data: data45, error: error45} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '45')
  const {data: data46, error: error46} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '46')
  const {data: data47, error: error47} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '47')
  const {data: data48, error: error48} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '48')
  const {data: data49, error: error49} = useNFT('0x9E9D63ff16E2c30e14150E035859c23fcF34db2D', '49')

  const data = [
    data0,
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
    data11,
    data12,
    data13,
    data14,
    data15,
    data16,
    data17,
    data18,
    data19,
    data20,
    data21,
    data22,
    data23,
    data24,
    data25,
    data26,
    data27,
    data28,
    data29,
    data30,
    data31,
    data32,
    data33,
    data34,
    data35,
    data36,
    data37,
    data38,
    data39,
    data40,
    data41,
    data42,
    data43,
    data44,
    data45,
    data46,
    data47,
    data48,
    data49,
  ]
  .map((d, id) => ({
    id,
    currentBid: d?.pricing?.reserve?.currentBid?.pricing?.prettyAmount,
    endTime: d?.pricing?.reserve?.expectedEndTimestamp,
    attributes: d?.openseaInfo?.traits,
    status: d?.pricing?.status,
    name: d?.openseaInfo?.name
  }))
  .filter(d => !!d.attributes)

  return {
    data,
    error: [
      error0,
      error1,
      error2,
      error3,
      error4,
      error5,
      error6,
      error7,
      error8,
      error9,
      error10,
      error11,
      error12,
      error13,
      error14,
      error15,
      error16,
      error17,
      error18,
      error19,
      error20,
      error21,
      error22,
      error23,
      error24,
      error25,
      error26,
      error27,
      error28,
      error29,
      error30,
      error31,
      error32,
      error33,
      error34,
      error35,
      error36,
      error37,
      error38,
      error39,
      error40,
      error41,
      error42,
      error43,
      error44,
      error45,
      error46,
      error47,
      error48,
      error49,
    ].filter(e => !!e)
  }
}

