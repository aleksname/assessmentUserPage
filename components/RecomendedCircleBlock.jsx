import React from 'react'
import styles from '../pages/styles/style.module.scss';

export default function RecomendedCircleBlock() {

    

    function handleClick() {
        alert('Це коло ^-^')
    }
    function handleClick2() {
        alert('Це квадрат ^-^')
    }
    function handleClick3() {
        alert('Це прямокутник ^-^')
    }
  return (
    <div className={styles.recomendedCircleBlock}>
        <div className={styles.recomendedCircleButtonBlock}>
            <button onClick={handleClick} className={styles.recomendedCircleButton}>.</button>
            </div>
                <div className={styles.recomendedCircleButtonBlock}>
                    <button onClick={handleClick2} className={styles.recomendedCircleButtonSquare}>.</button>
                </div>
                <div className={styles.recomendedCircleButtonBlock}>
                <button onClick={handleClick3} className={styles.recomendedCircleButtonRectangle}>.</button>
                </div>
            </div>
    )
}
