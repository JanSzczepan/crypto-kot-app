// https://eth-ropsten.alchemyapi.io/v2/KCaaXBfzjjCniIaEfWHEqvFErBZN_7ie

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KCaaXBfzjjCniIaEfWHEqvFErBZN_7ie',
      accounts: ['00b5e0097e0b76420c50b244050437924534ec666d4fc47a901a0cdad3b4bee2']
    }
  }
}