import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';

import styles from '../styles/componets/Countdown.module.css';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountDown, 
    startCountDown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>
        
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
        disabled
        className={styles.countdownButton}
        >
          Ciclo encerrado!
        </button>
      ) : (
        <>
          { isActive ? (
          <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountDown}
            >
              Abandonar cilco
            </button>
          ) : (
            <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountDown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}      
    </div>
  );
}