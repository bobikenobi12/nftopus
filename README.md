# Nftopus

This project contains a web3 app and a smart contract for minting NFTS.

## Usage

```bash
git clone <this-repo>
npm install

# terminal 1
npx hardhat node

# terminal 2
npx hardhat compile
npx hardhat run scripts/sample-script.js --network localhost 

# terminal 3
npm run dev
```
You need to update the contract address in `components/Home.jsx` 
You need to set up a metamask account with one of the private keys