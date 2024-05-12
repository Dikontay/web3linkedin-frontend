import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from 'react-router-dom';

const AuthExampleComponent = () => {
  const wallet = useWallet();
  const navigate = useNavigate();

  if (!wallet.connected) {
    return <p>Please connect your wallet.</p>;
  }

 
  navigate('/profile');

  return null;  
};

export default AuthExampleComponent;
