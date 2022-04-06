import { WalletBalance } from "./WalletBalance";
import { Navbar } from "./NavBar";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import OctopusBay from '../artifacts/contracts/Nft.sol/OctopusBay.json';
import { getAccountPath } from "ethers/lib/utils";
import "../App.css";
import "../css/Collection.css";
// адресът на solididity contract
const contractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

const provider = new ethers.providers.Web3Provider(window.ethereum);


// крайният потребител
const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, OctopusBay.abi, signer);

export const Explore = () => {

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
      <Navbar/>
      <WalletBalance />

      <h1>Octopus Bay NFT Collection</h1>
      <div className="collection">
        <div className="row">
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col">
                <NFTImage tokenId={i} getCount={getCount} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
  
const NFTImage = ({ tokenId, getCount }) => {
    const contentId = 'QmajsqnX3VXeYAhdJP8VkB2wdmwusGEeMCvumurJJsCPou';
    const metadataURI = `${contentId}/metadata/${tokenId}.json`;
    const imageURI = `images/${tokenId}.png`;
    
      const [isMinted, setIsMinted] = useState(false);
      useEffect(() => {
        getMintedStatus();
      }, [isMinted]);
    
      const getMintedStatus = async () => {
        const result = await contract.isContentOwned(metadataURI);
        console.log(result)
        setIsMinted(result);
      };
    
      const mintToken = async () => {
        const connection = contract.connect(signer);
        const addr = connection.address;
        const result = await contract.payToMint(addr, metadataURI, {
          value: ethers.utils.parseEther('0.05'),
        });
    
        await result.wait();
        getMintedStatus();
        getCount();
      };
    
      async function getURI() {
        const uri = await contract.tokenURI(tokenId);
        alert(uri);
      }
      return (
        <div className="collection-item">
          <img className="collection-item-img" src={isMinted ? imageURI : 'images/placeholder.png'}></img>
          <div className="collection-item-body">
            <h5 className="collection-item__title">ID #{tokenId}</h5>
            {!isMinted ? (
              <button className="btn btn-primary" onClick={mintToken}>
                Mint
              </button>
            ) : (
              <button className="btn btn-secondary" onClick={getURI}>
                Taken! Show URI
              </button>
            )}
          </div>
        </div>
      );
    }
  