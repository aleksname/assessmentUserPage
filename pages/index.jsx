import MainContainer from "./MainContainer";
import styles from './styles/style.module.scss';
import MainPageTop from '../public/MainPage/MainPageTop.png';
import Image from 'next/image';
import LearnHeadBlock from "./LearnHeadBlock";
import learnIcon1 from '../public/MainPage/ExcersiseIcon1.jpg'
import learnIcon2 from '../public/MainPage/QuizIcon.png'
import Link from "next/link";
import RecomendedIcon from '../public/MainPage/recomendedIcon.png'

export default function Main() {
  return ( 
    <>
      <MainContainer titels={"Home Page"} >
        <div className={styles.wrapper}>
        <div className={styles.homePageBlock}>
          <div className={styles.homePageImg}>
            <Image src={MainPageTop} alt="Main Page Top Image" className={styles.pageImg} />
          </div>
          <div className={styles.homePageLearnBlock}>
            <LearnHeadBlock />
            <div className={styles.homeTitle}>Ready to learn?</div>
            <div className={styles.homeSubTitle}>Continue where you left off</div>
            <div className={styles.learnLinkBlock}>
              <Link href="#" className={styles.linkBlock}>
              <Image src={learnIcon1} alt={learnIcon1} className={styles.linkBlockImg} />
                <div className={styles.linkExcersise}>Excersise</div>
              </Link>
              <Link href="#" className={styles.linkBlock}>
                <Image src={learnIcon2} alt={learnIcon1} className={styles.linkBlockImg} />
                <div className={styles.linkExcersise}>Quiz</div>
              </Link>
            </div>
            <div className={styles.homeTitle}>Recommended</div>
            <Link href='#' className={styles.recomendedBlock}>
                <Image src={RecomendedIcon} className={styles.recomendedIcon} alt={ RecomendedIcon} />
              <div className={styles.recomendedTitle}>Circle radius and diameter</div>
            </Link>
          </div>
        </div>
        </div>
      </MainContainer>
    </>
  );
}