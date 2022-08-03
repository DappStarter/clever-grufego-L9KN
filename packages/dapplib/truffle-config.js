require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet recipe six proud grace derive slot giggle'; 
let testAccounts = [
"0x949aa754bfdc8ee44c0a0cfdb839332412d7c6b73bf263b1c72ddd365741cdac",
"0xc3ffd5dd5f56b216e7f6cf9ce9761f0f921204d2b284a898e2a3b97694489a43",
"0xcbf7604199c607fea934ecda2d10ae4a7a06a6eb552737a0fa3cbb739f9b8d0f",
"0x3f78847d72e72987169e790570294f976999ef35bd36f798113a8813491a74a5",
"0x55e7348b4e0bcb5f88624e658453cf47b920e8f2f413ab811257c380b57fd463",
"0x382bccd52242cd2e6babb46819d10f5da7fed81abd8a53e756733c2bfc6bc29c",
"0xd6467bbc680c5f2f27c3b91bb6a529d75318c8219fe99a23ecf2a471d8b691bf",
"0xacb3871a2d6e4102940340df87e0a3a577284b6c3d07bc6d8ffe4892a61bf05d",
"0xb6a1a39504cb22fa06cdc11fa820ae170b8a9cdbfc1667fa5160d411657703aa",
"0xa50cccebdf84cfd780ca3742a4c4956984f262dd9e44c63b6a5f067b0e7ae004"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

