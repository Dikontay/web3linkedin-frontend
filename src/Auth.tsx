// AuthExampleComponent.jsx
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const AuthExampleComponent = () => {
  const wallet = useWallet();

  if (!wallet.connected) {
    // User is not connected
    return <p>Please connect your wallet.</p>;
  }

  // If the user is connected, you can access the public key like this:
  return (
    <div>
      <p>Wallet is connected!</p>
      <p>Public Key: {wallet.publicKey?.toBase58()}</p>
      {/* You can use the public key to identify the user */}
    </div>
  );
};

export default AuthExampleComponent;
