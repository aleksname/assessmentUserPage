import React from 'react'
import MainContainer from '../components/MainContainer'
import styles from '../pages/styles/style.module.scss';
import dogIcon from '../public/quiz/dogIcon.svg'
import Image from 'next/image'
import Link from 'next/link'
import topImage from '../public/MainPage/MainPageTop.png'
import bulbIcon from '../public/quiz/bulbIcon.svg'
import gifEyes from '../public/quiz/gifEyes.gif'

export default function quiz() {
  return (
    <MainContainer titels={'Quiz page '}>
      <div className={styles.wrapper}>
        <div className={styles.topImageContainer}>
          <Image src={topImage} alt='topImage' className={styles.topImage} />
        </div>
        <div className={styles.quizPageBlock}>
          <div className={styles.quizTitleBlock}>
            <div className={styles.quizTitle}>QUIZ TEST</div>
          </div>
          <div className={styles.quizPageSubtitleIconBlock}>
            <Image src={gifEyes}  alt='gifEyes' className={styles.pageSubtitleIcon}/>
            <Image src={bulbIcon} alt='bulbIcon' className={styles.pageSubtitleIcon} />
          </div>
          <div className={styles.quizPageContentBlock}>
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>C</span>
            <span>K</span>
            <div className={styles.quizContentSubTitle}>
              <span>A</span>
              <span>T</span>
              <span>T</span>
              <span>E</span>
              <span>N</span>
              <span>T</span>
              <span>I</span>
              <span>O</span>
              <span>N</span>
            </div>
            
            <div className={styles.quizContentSubTitle2}>
              <span>I</span>
              <span>N</span>
              <pr>  </pr>
              <span>T</span>
              <span>H</span>
              <span>E</span>
              <pr>  </pr>
              <span>L</span>
              <span>E</span>
              <span>S</span>
              <span>S</span>
              <span>O</span>
              <span>N</span>
            </div>
          </div>
          <div className={ styles.quizFooterBlock}>
            <Image src={dogIcon} alt="Dog Image" className={ styles.dogIcon} />
            <Link href={ '#'} className={styles.footerBlock}>
              <div className={styles.quizFooterLinkBlock}>
                <div className={styles.quizFooterLink}>&#10230;</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}
