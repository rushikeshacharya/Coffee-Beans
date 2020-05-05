const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Ropsten's id
      gas: 8000000,        // Ropsten has a lower block limit than mainnet
      timeoutBlocks: 400,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false,  // Skip dry run before migrations? (default: false for public nets )
      networkCheckTimeout: 100000
    },
  },
  plugins: ["solidity-coverage"]
};
