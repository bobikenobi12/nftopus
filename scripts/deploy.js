const hre = require("hardhat");

async function main() {

  const OctopusBay = await hre.ethers.getContractFactory("OctopusBay");
  const octopusBay = await OctopusBay.deploy();

  await octopusBay.deployed();

  console.log("Nft deployed to:", octopusBay.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
