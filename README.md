# Nftopus

This project contains a web3 app and a smart contract for minting NFTS.

## Requirements

- [Node.js](https://nodejs.org/en/download/)

- [IDE](https://code.visualstudio.com/)

## Usage

```bash
git clone <this-repo>
npm install

# terminal 1
npx hardhat node

# terminal 2
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost 

# terminal 3
npm run dev
```
### You need to update the contract address in `components/Home.jsx` 