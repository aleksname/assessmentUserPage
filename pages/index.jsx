import styles from '../pages/styles/style.module.scss';
import MainPageTop from '../public/MainPage/MainPageTop.png';
import Image from 'next/image';
import Link from "next/link";

export default function Main() {


  // Якщо користувач не залогінений, показуємо реєстрацію
  return (
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
  );
}
