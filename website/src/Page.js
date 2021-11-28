import './Page.css'
import { useParams } from 'react-router-dom'
import tokenData from './data'

import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'





export default function Page() {
  const { id } = useParams()



  const data = tokenData.find(d => d.tokenId === id)
  if (!data) return (
    <div>
      <h2>No token with id {id}</h2>
      <Link to="/"><h2>{'< Back'}</h2></Link>
    </div>
  )

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

      <section className="tokenData">
        <p className="tokenDescription">{data.description}</p>
      </section>

      <section>
        <div className="dlContainer">
          <dl>
            {data.attributes.map(a =>
              <div>
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