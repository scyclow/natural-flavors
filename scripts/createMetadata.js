const fs = require('fs')


const count = {}

const metadata = [
  {
    condiment: 'Ketchup',
    brand: `McDonald's`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `Ketchup`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Hot Sauce',
    brand: `Frank's RedHot`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Sysco/Heinz`,
    packetState: 'Splattered',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Red Gold`,
    packetState: 'Full',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `Hunts`,
    packetState: 'Splattered',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Heinz`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Hot Sauce',
    brand: `Louisiana`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `Heinz`,
    packetState: 'Splattered',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `McDonalds`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },


  {
    condiment: 'Ketchup',
    brand: `Red Gold`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `Fancy Ketchup`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Hot Sauce',
    brand: `Cholula`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Mayonnaise',
    brand: `Chef's Quality`,
    packetState: 'Full',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `McDonald's`,
    packetState: 'Full',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Seafood Sauce',
    brand: `Flavor Fresh`,
    packetState: 'Full',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `Chef's Quality`,
    packetState: 'Splattered',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Grape Jelly',
    brand: `Popeye's`,
    packetState: 'Full',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Hot Sauce',
    brand: `YiPin`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Chef's Quality`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Mayonnaise',
    brand: `Salad Fresh`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Hunts`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Heinz`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Soy Sauce',
    brand: `Yamasa`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `French's`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Heinz`,
    packetState: 'Splattered',
    orientation: 'Vertical',
  },
  {
    condiment: 'Soy Sauce',
    brand: `YiPin`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `McDonald's`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Sugar',
    brand: `Pure Sugar`,
    packetState: 'Full',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Mustard',
    brand: `Salad Fresh`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Heinz`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Ketchup`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Soy Sauce',
    brand: `Yamasa`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Hunts`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Mustard',
    brand: `Flavor Fresh`,
    packetState: 'Full',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `Chef's Quality`,
    packetState: 'Splattered',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `Chef's Quality`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },
  {
    condiment: 'BBQ Sauce',
    brand: `McDonald's`,
    packetState: 'Splattered',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `White Castle`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Heinz`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Heinz`,
    packetState: 'Splattered',
    orientation: 'Vertical',
  },
  {
    condiment: 'Duck Sauce',
    brand: `YiPin`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Hot Sauce',
    brand: `YiPin`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Grape Jelly',
    brand: `Popeye's`,
    packetState: 'Full',
    orientation: 'Horizontal',
  },


  {
    condiment: 'Duck Sauce',
    brand: `YiPin`,
    packetState: 'Splattered',
    orientation: 'Vertical',
  },
  {
    condiment: 'Hot Sauce',
    brand: `Tabasco`,
    packetState: 'Full',
    orientation: 'Vertical',
  },
  {
    condiment: 'Hot Sauce',
    brand: `Popeye's`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `McDonald's`,
    packetState: 'Splattered',
    orientation: 'Horizontal',
  },
  {
    condiment: 'Ketchup',
    brand: `Heinz`,
    packetState: 'Empty',
    orientation: 'Vertical',
  },
  {
    condiment: 'Ketchup',
    brand: `Charleys`,
    packetState: 'Empty',
    orientation: 'Horizontal',
  },

].map((d, i) => {

  if (!count[d.condiment]) {
    count[d.condiment] = 1
  }

  const name = d.condiment + ' #' + count[d.condiment]
  count[d.condiment]++
  return {
    tokenId: String(i),
    name,
    license: 'CC BY-NC 4.0',
    external_url: `https://steviep.xyz/packets/${i}`,
    description: `As you wander along the sidewalk your mind also wanders. You think about your ancestors exploring the forest, foraging for nuts and berries and hunting wild game. But you're looking for something different. Suddenly, something catches your eye. You hurry over to inspect it. Bending over, you think to yourself: "Oh wow, this is a good one!" A confused stranger looks up from their phone and rolls their eyes. They don't understand that this ${d.condiment.toLowerCase()} packet is worth a lot of money on the internet.`,
    attributes: [
      { trait_type: 'Brand', value: d.brand },
      { trait_type: 'Condiment', value: d.condiment },
      { trait_type: 'Packet State', value: d.packetState },
      { trait_type: 'Orientation', value: d.orientation },
    ],
  }
})


metadata.forEach((d, i) => {
  fs.writeFileSync(`../website/public/metadata/${i}.json`, JSON.stringify({
    ...d,
    // image: `ipfs://bafybeicu2zlbhvmzwwoeuzvueoca66aphs5gimkj4mtqm7eefcp6bvx2vq/${i}.jpg`
    image: `https://steviep.xyz/natural-flavors/assets/${i}.jpg`
  }, null, 4))
})


// const dir = '../website/public/assets'
// const files = fs.readdirSync(dir)

// files.forEach((file, i) => fs.rename(
//   dir + '/' + file,
//   dir + '/' + i + '.jpg',
//   err => err && console.error(err)
// ))

