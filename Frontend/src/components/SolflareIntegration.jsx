import React, { useEffect, useState } from 'react';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import Solflare from '@solflare-wallet/sdk';

const SolflareIntegration = () => {
  const [wallet, setWallet] = useState(null);
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState(null);
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  useEffect(() => {
    const solflare = new Solflare();
    setWallet(solflare);

    solflare.on('connect', () => {
      setConnected(true);
      setPublicKey(solflare.publicKey.toString());
    });

    solflare.on('disconnect', () => {
      setConnected(false);
      setPublicKey(null);
    });

    return () => {
      solflare.disconnect();
    };
  }, []);

  const connectWallet = async () => {
    try {
      if (!wallet.isConnected) {
        await wallet.connect();
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  const disconnectWallet = () => {
    if (wallet.isConnected) {
      wallet.disconnect();
    }
  };

  return (
    <div>
      {connected ? (
        <div>
          <p>Wallet Connected</p>
          <p>Public Key: {publicKey}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <button  onClick={connectWallet} className="px-5 h-8 rounded-md ">Connect Solflare Wallet</button>
      )}
    </div>
  );
};

export default SolflareIntegration;
