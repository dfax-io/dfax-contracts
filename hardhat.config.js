require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-network-helpers");
require('hardhat-abi-exporter');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
    },
    bscTestnet: {
      url: process.env.BSCTESTNET_RPC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    },
    goerli: {
      url: process.env.GOERLI_RPC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    },
    ftmTestnet: {
      url: process.env.FTMTESTNET_RPC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    },
    avalancheFujiTestnet: {
      url: process.env.AVAXTESTNET_RPC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    },
    moonbaseAlpha: {
      url: process.env.MOONBASE_RPC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    },
    optimisticGoerli: {
      url: process.env.OPTIMISTICGOERLI_RPC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    },
    arbitrumGoerli: {
      url: process.env.ARBITRUMGOERLI_RPC_PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      bscTestnet: process.env.BSCSCAN_API_KEY,
      ftmTestnet: process.env.FTMSCAN_API_KEY,
      moonbaseAlpha: process.env.MOONBASE_API_KEY,
      avalancheFujiTestnet: process.env.FUJI_API_KEY,
      optimisticGoerli: process.env.OPTIMISTICGOERLI_API_KEY,
      arbitrumGoerli: process.env.ARBITRUMGOERLI_API_KEY
    }
  },
  abiExporter: [
    {
      path: './abi/json',
      format: "json",
    },
    {
      path: './abi/minimal',
      format: "minimal",
    },
    {
      path: './abi/fullName',
      format: "fullName",
    },
  ]
};
