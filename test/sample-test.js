const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  it("Should mint and transfer an NFT to someone", async function () {
    const OctopusBay = await ethers.getContractFactory("OctopusBay");
    const octopusbay = await OctopusBay.deploy();
    await octopusbay.deployed();

    const recipient = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
    const metadataURI = 'cid/test.png';

    let balance = await octopusbay.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await octopusbay.payToMint(recipient, metadataURI, { value: ethers.utils.parseEther('0.05') });

    await newlyMintedToken.wait();

    balance = await octopusbay.balanceOf(recipient)
    expect(balance).to.equal(1);

    expect(await octopusbay.isContentOwned(metadataURI)).to.equal(true);
    const newlyMintedToken2 = await octopusbay.payToMint(recipient, 'foo', { value: ethers.utils.parseEther('0.05') });
  });
});