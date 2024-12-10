import React from 'react';
import MainContainer from '../components/MainContainer'
import styles from '../pages/styles/style.module.scss'
import MainPageTop from '../public/MainPage/MainPageTop.png';
import Image from 'next/image';
import {excersise} from '../excersiseData'

export default function Excersise() {

 
  return (
    <MainContainer>
      <div className={styles.wrapper}>
        <div className={styles.homePageBlock}>
            <div className={styles.homePageImg}>
              <Image src={MainPageTop} alt="Main Page Top Image" className={styles.pageImg} />
            </div>
          <div className={styles.excerciceContainer}>
            <div className={styles.excerciceTitle}>
              <h1>📖 Homework</h1>
            </div>
            <p className={styles.excerciceSubTitle}>✏️ Prepare for the next lesson</p>
            {excersise.map((el) => (
              <div className={styles.excerciceHomeWorkBlock}>
                <h2 className={styles.excerciceTaskTitle}><span className={styles.excerciceTaskTitleSpan}>{el.task}</span>{el.content}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
