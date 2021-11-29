import './Page.css'
import { useParams } from 'react-router-dom'
import tokenData from './data'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { gql, useQuery } from '@apollo/client'



const TOKEN_QUERY = gql`
  query Tokens($contract: String! $tokenId: String!) {
    Token(where: { address: { _eq: $contract } tokenId: {_eq: $tokenId} }){
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


export default function Page() {
  const { id } = useParams()
  const _data = tokenData.find(d => d.tokenId === id)
  const { loading, error, data: apiData } = useQuery(TOKEN_QUERY, {
    variables: {
      contract: window.CONTRACT_ADDR,
      tokenId: id
    },
  })

  const data = combineData(_data, apiData?.Token?.[0])

  const endTimeSet = !!data?.endTime

  const { h, m, s, e } = getTimes(data?.endTime)
  const [hours, setHours] = useState(endTimeSet ? h : 0)
  const [minutes, setMinutes] = useState(endTimeSet ? m : 0)
  const [seconds, setSeconds] = useState(endTimeSet ? s : 0)
  const [expired, setExpired] = useState(endTimeSet ? e : 0)

  useEffect(() => {
    const interval = setInterval(() => {
      const { h, m, s, e } = getTimes(data?.endTime)

      setHours(h)
      setMinutes(m)
      setSeconds(s)
      setExpired(e)
    }, 1000)

    return () => clearInterval(interval)
  })


  if (!data) return (
    <div>
      <h2>No token with id {id}</h2>
      <Link to="/"><h2>{'< Back'}</h2></Link>
    </div>
  )


  let details
  if (data?.status === 'IN_PROGRESS' && expired) {
    details = <div>Sold: {data?.currentBid} ETH</div>
  } else if (data?.status === 'IN_PROGRESS') {
    details = (
      <section class="auctionDetails">
        <div>
          <h2>Highest Bid: {data?.currentBid} ETH</h2>
          <h2>Time Left: {fmt(hours)}:{fmt(minutes)}:{fmt(seconds)}</h2>
        </div>
        <a
          href={`${window.BASE_ZORA_URL}/collections/${window.CONTRACT_ADDR}/${data.tokenId}/auction/bid`}
          target="_blank"
          rel="nofollow"
          className="bidButton"
        >
          {'BID >'}
        </a>
      </section>
    )
  } else if (data?.status === 'APPROVED') {
    details = (
      <section class="auctionDetails">
        <h2>Reserve: 0.0099 ETH</h2>
        <a
          href={`${window.BASE_ZORA_URL}/collections/${window.CONTRACT_ADDR}/${data.tokenId}/auction/bid`}
          target="_blank"
          rel="nofollow"
          className="bidButton"
        >
          {'BID >'}
        </a>
      </section>
    )
  }


  return (
    <div className="Page">
      <Helmet>
        <meta name="twitter:image" content={`https://steviep.xyz/natural-flavors/assets/${id}.jpg`} />
        <meta name="og:image" property="og:image" content={`https://steviep.xyz/natural-flavors/assets/${id}.jpg`}/>
        <meta name="og:image:alt" content={`Natural Flavors #${id}: ${data.name}`} />

        <meta name="title" content={data.name} />
        <meta name="og:title" content={data.name} />
        <meta name="twitter:title" content={data.name} />
        <meta property="og:site_name" content={`Natural Flavors #${id}: ${data.name}`} />

        <meta name="twitter:description" content={`Natural Flavors #${id}: ${data.name}`} />
        <meta name="description" content={`Natural Flavors #${id}: ${data.name}`} />
        <meta name="og:description" content={`Natural Flavors #${id}: ${data.name}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={`https://steviep.xyz/natural-flavors/packets/${id}`} />
        <meta name="twitter:url" content={`https://steviep.xyz/natural-flavors/packets/${id}`} />
        <meta name="keywords" content="natural flavors, natural, flavors, nft, nfts, photo, series, photography, art, ketchup, packet, condiment, condiment packet, trash art, crypto, crypto art, fine art photography, steve, pikelny, steve pikelny, fake internet money" />
        <title>{`Natural Flavors #${id}: ${data.name}`}</title>
      </Helmet>

      <header>
        <Link to="/"><h2>{'< Back'}</h2></Link>
        <h2>{`Natural Flavors: ${data.name}`}</h2>
      </header>
      <div className="photo">
        <a href={`../assets/${id}.jpg`} target="_blank">
          <img src={`../assets/${id}.jpg`} />
        </a>
      </div>


      {details}

      <section className="tokenData">
        <p className="tokenDescription">{data.description}</p>
      </section>

      <section>
        <div className="dlContainer">
          <dl>
            {data.attributes.map(a =>
              <div key={a.trait_type}>
                <dt>{a.trait_type}:</dt> <dd>{a.value}</dd>
              </div>
            )}
            <div><dt>License:</dt><dd>CC BY-NC 4.0</dd></div>
            <div><dt>Zora:</dt><dd><a href={`${window.BASE_ZORA_URL}/collections/${window.CONTRACT_ADDR}/${id}`} target="_blank" rel="nofollow">View</a></dd></div>
            <div><dt>OpenSea:</dt><dd><a href={`https://opensea.io/assets/${window.CONTRACT_ADDR}/${id}`} target="_blank" rel="nofollow">View</a></dd></div>
            <div><dt>Etherscan:</dt><dd><a href={`https://etherscan.io/token/${window.CONTRACT_ADDR}?a=${id}`} target="_blank" rel="nofollow">View</a></dd></div>
          </dl>
        </div>
      </section>

    </div>
  )
}


const fmt = (n) => {
  const r = Math.floor(n)
  if (r < 10) return '0' + r
  else return '' + r
}

const getTimes = (endTime) => {
  const now = Date.now()
  const diff = ((endTime||0) - now)
  const h = (diff / 86400000) * 24
  const m = (h - Math.floor(h)) * 60
  const s = (m - Math.floor(m)) * 60
  const e = diff < 0  && endTime

  return {
    h: Math.floor(h),
    m: Math.floor(m),
    s: Math.floor(s),
    e
  }
}

const combineData = (localData, apiData) => {
  const auction = apiData?.auctions?.[0] || {}

  const currentBid = auction.lastBidAmount
    ? Number(auction.lastBidAmount.substring(0, auction.lastBidAmount.length - 15)) / 1000
    : null

  return {
    ...localData,
    currentBid,
    endTime: auction.expiresAt && new Date(auction.expiresAt).getTime(),
    status: auction.status
  }
}