// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletContext } from './WalletContext';
import AuthExampleComponent from './Auth';
import Profile from './Profile'; // Make sure the path is correct
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <WalletContext>
        <Routes>
          <Route path="/" element={
            <div className={styles.appContainer}>
              <h1 className={styles.heading}>Welcome to web3 linkedin</h1>
              <WalletMultiButton />
              <AuthExampleComponent />
            </div>
          } />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </WalletContext>
    </Router>
  );
}

export default App;
