import './Page.css'
import { useParams } from 'react-router-dom'
import tokenData from './data'
import {NFTFullPage} from "@zoralabs/nft-components";
import { Link } from 'react-router-dom'



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
      <header>
        <Link to="/"><h2>{'< Back'}</h2></Link>
        <h2>{`Natural Flavors: ${data.name}`}</h2>
      </header>
      <div className="photo">
        <img src={`../assets/${id}.jpg`} />
      </div>

      <div class="viewButton">
        <NFTFullPage
          contract={window.CONTRACT_ADDR}
          id={id}
        />
      </div>
      <section className="tokenData">
        <div class="viewDetails">
          <NFTFullPage
            contract={window.CONTRACT_ADDR}
            id={id}
          />
        </div>
      </section>
{/*      <section className="tokenData">
        <div className="details">
          {JSON.stringify(tokenData[id])}
        </div>

      </section>*/}
    </div>
  )
}