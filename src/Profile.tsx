import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from './types';
import styles from './Profile.module.css'; 

interface ProfileProps {
  profile: UserProfile;
  onSave: (profile: UserProfile) => void;
}

const Profile: React.FC<ProfileProps> = ({ profile, onSave }) => {
  const wallet = useWallet();
  const navigate = useNavigate();
  const [editableProfile, setEditableProfile] = useState<UserProfile>(profile);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditableProfile({ ...editableProfile, [event.target.name]: event.target.value });
  };

  const onLogout = () => {
    wallet.disconnect();
    navigate('/');
  };

 

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileHeader}>
        <label>
          Avatar URL:
          <input
            type="text"
            name="avatarUrl"
            className={styles.profileInput}
            value={editableProfile.avatarUrl}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.profileBody}>
        <label>
          Username:
          <input
            type="text"
            name="name"
            className={styles.profileInput}
            value={editableProfile.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            className={styles.profileInput}
            value={editableProfile.email}
            onChange={handleChange}
          />
        </label>
        <label>
          About you:
          <textarea
            name="bio"
            className={styles.profileTextarea}
            value={editableProfile.bio}
          />
        </label>
      </div>
      <div className={styles.profileFooter}>
        <button onClick={onLogout} className={styles.profileButton}>Logout</button>
        <button onClick={() => onSave(editableProfile)} className={styles.profileButton}>Save</button>
      </div>
    </div>
  );
};

export default Profile;
