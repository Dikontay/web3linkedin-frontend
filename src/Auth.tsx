import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from 'react-router-dom';

const AuthExampleComponent = () => {
  const wallet = useWallet();
  const navigate = useNavigate();

  if (!wallet.connected) {
    return <p>Please connect your wallet.</p>;
  }

  // Redirect to the profile page once the wallet is connected
  navigate('/profile');

  return null;  // Or any fallback until the redirect occurs
};

export default AuthExampleComponent;
