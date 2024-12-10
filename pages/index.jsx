import MainContainer from "../components/MainContainer";
import styles from '../pages/styles/style.module.scss';
import MainPageTop from '../public/MainPage/MainPageTop.png';
import Image from 'next/image';
import LearnHeadBlock from "../components/LearnHeadBlock";
import learnIcon1 from '../public/MainPage/ExcersiseIcon1.jpg';
import learnIcon2 from '../public/MainPage/QuizIcon.png';
import Link from "next/link";
import RecomendedIcon from '../public/MainPage/recomendedIcon.png';

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Main() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated, router]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // Якщо користувач не залогінений, показуємо реєстрацію
  return (
    // <MainContainer titels={"Home Page"}>
      <div className={styles.wrapper}>
        <div className={styles.homePageBlock}>
          <div className={styles.homePageImg}>
            <Image src={MainPageTop} alt="Main Page Top Image" className={styles.pageImg} />
          </div>
          <div className={styles.homePageLearnBlock}>
            <div className={styles.authHomeTitle}>Welcome! Ready to join us?</div>
            <div className={styles.authBlock}>
              <Link href="/registerPage" className={styles.authLink}>
                Create an account
              </Link>
              <span className={styles.orText}>or</span>
              <Link href="/loginPage" className={styles.authLink}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    // </MainContainer>
  );
}
