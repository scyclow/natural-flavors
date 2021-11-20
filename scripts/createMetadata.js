const fs = require('fs')


for (let i = 0; i < 50; i++) {
  fs.writeFileSync(`./docs/tokens/metadata/${i}.json`, JSON.stringify({
    name: '',
    description: 'Photograph by Steve Pikelny (2021)',
    image: `https://steviep.xyz/prizes/tokns/images/${i}.jpg`,
    external_url: 'https://steviep.xyz'
  }, null, 4))
}