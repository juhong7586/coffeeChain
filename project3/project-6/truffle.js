const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider:() => new HDWalletProvider(mnemonic, 
          "https://rinkeby.infura.io/v3/12da5d60b4d443ae84a1c985ad34411b"),
      network_id: 4, 
      gas: 5500000
    }
  }
};

