import { WalletBalance } from "./WalletBalance";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import OctopusBay from '../artifacts/contracts/Nft.sol/OctopusBay.json';
import { getAccountPath } from "ethers/lib/utils";

// адресът на solididity contract
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);


// крайният потребител
const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, OctopusBay.abi, signer);

export function Home() {

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
      <WalletBalance />

      <h1>Octopus Bay NFT Collection</h1>
      <div className="container">
        <div className="row">
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col-sm">
                <NFTImage tokenId={i} getCount={getCount} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
  
  function NFTImage({ tokenId, getCount }) {
    const contentId = 'QmajsqnX3VXeYAhdJP8VkB2wdmwusGEeMCvumurJJsCPou';
    const metadataURI = `${contentId}/metadata/${tokenId}.json`;
    const imageURI = `images/${tokenId}.png`;
    
      const [isMinted, setIsMinted] = useState(false);
      useEffect(() => {
        getMintedStatus();
      }, [isMinted]);
    
      const getMintedStatus = async () => {
        const result = await contract.isContentOwned(metadataURI);
        console.log("We here", result)
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
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={isMinted ? imageURI : 'images/placeholder.png'}></img>
          <div className="card-body">
            <h5 className="card-title">ID #{tokenId}</h5>
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
  