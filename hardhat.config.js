
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter");

const STUFF = require('./stuff.json')

module.exports = {
  solidity: {
    compilers: [
      {version: "0.8.2"},
    ]
  },
  networks: {
    mumbai: {
      url: STUFF.POLYGON_MUMBAI_URL,
      accounts: [`0x${STUFF.ACCOUNT}`]
    },
    rinkeby: {
      url: STUFF.ETH_RINKEBY_URL,
      accounts: [`0x${STUFF.ACCOUNT}`]
    },
    goerli: {
      url: STUFF.ETH_GOERLI_URL,
      accounts: [`0x${STUFF.ACCOUNT}`]
    }
  },

  gasReporter: {
    currency: 'USD',
    gasPrice: 1000
  }
}