import './Page.css'
import { useParams } from 'react-router-dom'
import tokenData from './data'

export default function Page() {
  const { id } = useParams()

  return (
    <div className="Page">
      <section className="tokenData">
        <div className="photo"><img src={`../assets/${id}.jpg`} /></div>
        <div>Natural Flavors #{id}: Ketchup Packet 1</div>
        <div className="details">
          {JSON.stringify(tokenData[id])}
        </div>

      </section>
    </div>
  )
}