import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/componets/ExperienceBar.module.css';

export function ExperienceBar(){
  const { currentExperience, experienceNextLevel } = useContext(ChallengesContext);

  const percertToNextLevel = Math.round(currentExperience * 100) / experienceNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percertToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percertToNextLevel}%` }}>
         {currentExperience} px
        </span>
      </div>
      <span>{experienceNextLevel} xp</span>
    </header>
  );
}