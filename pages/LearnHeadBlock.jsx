import React, { useEffect, useState } from 'react';
import styles from './styles/style.module.scss';
import headCoin from '../public/MainPage/Coin.png';
import Image from 'next/image';
import BackHandIcon from '@mui/icons-material/BackHand';
import Usericon from '../public/profile/profileIcon2.svg';
import { Link } from '@mui/material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';

export default function LearnHeadBlock() {
  const [user, setUser] = useState(null); // Зберігаємо користувача в стані
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (maybeUser) => {
      if (maybeUser) {
        setUser(maybeUser); // Якщо користувач залогінений, зберігаємо його дані
      }
    });

    return () => unsubscribe(); // Чистка підписки
  }, [auth]);

  return (
    <>
      <div className={styles.learnHeadBlock}>
        <div className={styles.headCoinBlock}>
          <Image src={headCoin} alt={headCoin} className={styles.headCoin} />
          <div className={styles.headCoinTitle}>10</div>
        </div>
        <div className={styles.headUserNameBlock}>
          <div className={styles.headUserInfo}>
            <div className={styles.headUserName}>
              <BackHandIcon style={{ color: 'yellow' }} className={styles.headUserNameImg} />
              <pre className="">HI, </pre>        
              {/* Відображаємо ім'я користувача або email, якщо ім'я не встановлено */}
              <div className={styles.userTitle}>{user ? user.displayName || user.email : 'Guest'}</div>
            </div>
            {/* Тут залишаємо статичний текст */}
            <div className={styles.userSubTitle}>MINE_1y_66_04_10_23</div>
          </div>
          <Link href="/profile" className="">
            <Image src={Usericon} className={styles.userIcon} alt={Usericon} />
          </Link>
        </div>
      </div> 
    </>
  );
}
