// pages/index.tsx
"use client"
import { useState, useEffect } from 'react';

// Extend the Window interface to include the ethereum property
declare global {
  interface Window {
    ethereum?: any;
    WorldID?: any; // Add WorldID to the global window object
  }
}
import Web3 from 'web3';
import { Button, Container, Typography } from '@mui/material';

const ScrollBlockchain = () => {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [worldId, setWorldId] = useState<string | null>(null); // State for World ID

  // Scroll Testnet RPC URL (Replace with actual URL from Scroll docs)
  const scrollRpcUrl = 'https://eth-sepolia-public.unifra.io';

  // Initialize Web3 and connect to the Scroll network
  useEffect(() => {
    const initWeb3 = async () => {
      const provider = new Web3.providers.HttpProvider(scrollRpcUrl);
      const web3Instance = new Web3(provider);
      setWeb3(web3Instance);

      // Fetch the latest block number
      const latestBlockNumber = await web3Instance.eth.getBlockNumber();
      setBlockNumber(Number(latestBlockNumber));
    };

    initWeb3();
  }, []);

  // Function to connect MetaMask (for user interactions)
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        // Initialize and authenticate with World ID
        if (window.WorldID) {
          const worldIdClient = new window.WorldID();
          const userWorldId = await worldIdClient.authenticate(accounts[0]);
          setWorldId(userWorldId);
        } else {
          console.error('World ID is not available.');
        }
      } catch (error) {
        console.error('User denied account access or World ID authentication failed.');
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask and try again.');
      window.open('https://metamask.io/download.html', '_blank');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Scroll Blockchain with Web3.js and World ID
      </Typography>

      {blockNumber !== null ? (
        <Typography>Current Block Number: {blockNumber}</Typography>
      ) : (
        <Typography>Loading block number...</Typography>
      )}

      <Button variant="contained" color="primary" onClick={connectWallet}>
        Connect Wallet
      </Button>

      {account && (
        <Typography>Connected Account: {account}</Typography>
      )}

      {worldId && (
        <Typography>World ID: {worldId}</Typography>
      )}
    </Container>
  );
};

export default ScrollBlockchain;