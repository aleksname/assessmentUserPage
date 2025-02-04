import React, { useEffect, useState } from 'react';
import styles from '../pages/styles/style.module.scss';
import Image from 'next/image';
import Usericon from '../public/profile/profileIcon2.svg';
import { Link } from '@mui/material';

export default function LearnHeadBlock() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const userId = localStorage.getItem('userId'); // Отримуємо ID користувача з локального сховища
      if (!userId) {
        console.error('User ID not found in local storage');
        return;
      }

      try {
        const response = await fetch(`/api/getUserById?id=${userId}`);
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className={styles.learnHeadBlock}>
      <div className=""></div>
      <div className={styles.headUserNameBlock}>
        <div className={styles.headUserInfo}>
          <div className={styles.headUserName}>
            <pre>Hi👋  {userName}</pre>
          </div>
        </div>
        <Link href="/profile" className="">
          <Image src={Usericon} className={styles.userIcon} alt="User Icon" />
        </Link>
      </div>
    </div>
  );
}