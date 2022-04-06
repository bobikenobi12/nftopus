import { useState } from "react";
import { ethers } from "ethers";
import { Navbar } from "./NavBar";
import "../css/WalletBalance.css";
import "../App.css";
export const WalletBalance = () => {
    const [balance, setBalance] = useState();

    // взимане на баланса на даден wallet и показване на потребителя
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    // показване на баланса всеки път, когато потребителя кликне бутона
    return (
        <>
        <Navbar />
        <div className="wallet-balance">
            <h1 className="wallet-balance__text">Your Balance: {balance}</h1>
            <button className="wallet-balance__button" onClick={getBalance}>Show my balance</button>
        </div>
        </>
    )
}