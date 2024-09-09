import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";
import MainContainer from "./MainContainer";
import styles from './styles/style.module.scss';
import MainPageTop from '../public/MainPage/MainPageTop.png';
import Image from 'next/image';
import LearnHeadBlock from "./LearnHeadBlock";
import learnIcon1 from '../public/MainPage/ExcersiseIcon1.jpg';
import learnIcon2 from '../public/MainPage/QuizIcon.png';
import Link from "next/link";
import RecomendedIcon from '../public/MainPage/recomendedIcon.png';

export default function Main() {
  const [user, setUser] = useState(null); // Зберігаємо користувача в стані
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (maybeUser) => {
      if (maybeUser) {
        setUser(maybeUser); // Якщо користувач залогінений, зберігаємо його дані
      } else {
        router.push("/auth"); // Якщо користувач не залогінений, перенаправляємо на сторінку авторизації
      }
    });

    return () => unsubscribe(); // Чистка підписки
  }, [auth, router]);

  // Показуємо "Loading...", поки чекаємо дані про користувача
  if (user === null) {
    return <>Loading...</>;
  }

  return (
    <>
      <MainContainer titels={"Home Page"}>
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
                <Link href="/excersise" className={styles.linkBlock}>
                  <Image src={learnIcon1} alt={learnIcon1} className={styles.linkBlockImg} />
                  <div className={styles.linkExcersise}>Excersise</div>
                </Link>
                <Link href="/quiz" className={styles.linkBlock}>
                  <Image src={learnIcon2} alt={learnIcon1} className={styles.linkBlockImg} />
                  <div className={styles.linkExcersise}>Quiz</div>
                </Link>
              </div>
              <div className={styles.homeTitle}>Recommended</div>
              <Link href="/recommended" className={styles.recomendedBlock}>
                <Image src={RecomendedIcon} className={styles.recomendedIcon} alt={RecomendedIcon} />
                <div className={styles.recomendedTitle}>Circle radius and diameter</div>
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
