import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/componets/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/GuigaLn.png" alt="Guilherme L. Nallon"/>
      <div>
        <strong>Guilherme L. Nallon</strong>
        <p>
          <img src="icons/level.svg" alt="Icon Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}