// https://eth-ropsten.alchemyapi.io/v2/KCaaXBfzjjCniIaEfWHEqvFErBZN_7ie

require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/JW2ISmKC-hY7LuIEepAJLfvXKOVmEPdw",
			accounts: [
				"286127c966e4774205c971ece55a0baab741df068f95a72431ecf8a167e0854b",
			],
		},
	},
};
