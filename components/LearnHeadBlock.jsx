import React, { useEffect, useState } from 'react';
import styles from '../pages/styles/style.module.scss';
import Image from 'next/image';
import Usericon from '../public/profile/profileIcon2.svg';
import { Link } from '@mui/material';



export default function LearnHeadBlock() {

  return (
    <div className={styles.learnHeadBlock}>
      <div className=""></div>
      <div className={styles.headUserNameBlock}>
        <div className={styles.headUserInfo}>
          <div className={styles.headUserName}>
            <pre className="">HI, </pre>
            <div className={styles.userTitle}>name 
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
