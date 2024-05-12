import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletContext } from './WalletContext';
import AuthExampleComponent from './Auth';
import Profile from './Profile';
import { UserProfile } from './types';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styles from './App.module.css';

const App = () => {
  const [profile, setProfile] = useState<UserProfile>({
    id: 1,
    name: 'Sabina Kassymova',
    email: 'sabina@example.com',
    bio: 'Second-year Software Engineering student at Astana IT University.',
    avatarUrl: 'https://placeimg.com/100/100/people'
  });

  const onSave = (updatedProfile: UserProfile) => {
    console.log('Save logic here', updatedProfile);
    setProfile(updatedProfile);
  };

  return (
    <Router>
      <WalletContext> {}
        <Routes>
          <Route path="/" element={
            <div className={styles.appContainer}>
              <h1 className={styles.heading}>Welcome to web3 LinkedIn</h1>
              <WalletMultiButton />
              <AuthExampleComponent />
            </div>
          } />
          <Route path="/profile" element={<Profile profile={profile} onSave={onSave} />} />
        </Routes>
      </WalletContext>
    </Router>
  );
}

export default App;
