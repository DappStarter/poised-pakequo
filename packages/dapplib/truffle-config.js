require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift return mad hole imitate problem slot general'; 
let testAccounts = [
"0x8a0ace521a2d46a0b472ec55c71acaa1a324c1104d1f0a62ab138bbfe4396769",
"0x4faee9b26fd96008de519ac48ae018c24de54388819d5477f0ac3d50fb457e2b",
"0x32bf08f4b698f40166ca8911b927a8dc4b845ae76bf725d7511d62a4b044f1c6",
"0xb93b7f3f47f3b774b9dbe286a5f2dda6d0c6d9708638d391b8d5d46395280605",
"0x19b88cb41ab0a9f83e1974f191982546702b3622655f683145fc3444465c82c0",
"0x37cf16d3d60c989ea79b3d0dee7430991989fc6531dc78f445a346a8ba3f8d85",
"0xd202792db50ca568afdb436ca70d35be0bca2d7fc317a5389d90106fe1f396f1",
"0x7b531ca80aadb525770884435e78f031d8160c2a2ac5af4e0038b8ab33ef49bf",
"0xe11f22d93f5d7953ec4c31f7fa576193824331740ec962db23ddd5c2bc82d1a1",
"0xb57d629167103119080838539d774b8c275fa3701bbe3613e20ebb179cabef4d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

