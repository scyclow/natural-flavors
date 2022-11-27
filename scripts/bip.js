const bip39 = require('bip39')
const fs = require('fs')



function times(t, fn) {
  const out = []
  for (let i = 0; i < t; i++) out.push(fn(i))
  return out
}



const mnemonics = times(1000, () => bip39.generateMnemonic()).join('\n')

fs.writeFileSync('../docs/mnemonics.txt', mnemonics)