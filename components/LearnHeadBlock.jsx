import React, { useEffect, useState } from 'react';
import styles from '../pages/styles/style.module.scss';
import Image from 'next/image';
import Usericon from '../public/profile/profileIcon2.svg';
import { Link } from '@mui/material';



export default function LearnHeadBlock() {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   fetch('/api/getUsers')
  //     .then(data =>setUser(data))
  // })

 useEffect(() => {
  fetch('/api/getUsers')
    .then(response => {
      if (!response.ok) {
        throw new Error(`error: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => setUser(data)) 
    .catch(err => console.error('error:', err));
}, []);


  return (
    <div className={styles.learnHeadBlock}>
      <div className=""></div>
      <div className={styles.headUserNameBlock}>
        <div className={styles.headUserInfo}>
          <div className={styles.headUserName}>
            <pre className="">HI, </pre>
            <div className={styles.userTitle}>
              {user ? user.name : 'Loading...'}
            </div>

          </div>
        </div>
        <Link href="/profile" className="">
          <Image src={Usericon} className={styles.userIcon} alt="User Icon" />
        </Link>
      </div>
    </div>
  );
}
