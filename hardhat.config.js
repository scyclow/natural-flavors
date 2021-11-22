
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter");

const STUFF = require('../DEV_KEYS/stuff.json')

module.exports = {
  solidity: {
    compilers: [
      {version: "0.8.2"},
    ]
  },
  networks: {
    mumbai: {
      url: STUFF.POLYGON_MUMBAI_URL,
      accounts: [`0x${STUFF.DEV1}`]
    },
    rinkeby: {
      url: STUFF.ETH_RINKEBY_URL,
      accounts: [`0x${STUFF.DEV1}`]
    },
    goerli: {
      url: STUFF.ETH_GOERLI_URL,
      accounts: [`0x${STUFF.DEV1}`]
    }
  },

  gasReporter: {
    currency: 'USD',
    gasPrice: 1000
  }
}