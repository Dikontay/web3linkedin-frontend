// App.jsx
import React from 'react';
import { WalletContext } from './WalletContext';
import AuthExampleComponent from './Auth';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styles from './App.module.css'; // Import the styles

function App() {
  return (
    <WalletContext>
      <div className={styles.appContainer}>
        <h1 className={styles.heading}>Welcome to web3 linkedin</h1>
        <WalletMultiButton />
        <AuthExampleComponent />
      </div>
    </WalletContext>
  );
}

export default App
