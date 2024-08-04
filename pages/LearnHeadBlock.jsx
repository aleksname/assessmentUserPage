import React from 'react'
import styles from './styles/style.module.scss'
import headCoin from '../public/MainPage/Coin.png'
import Image from 'next/image';
import BackHandIcon from '@mui/icons-material/BackHand';
import Usericon from '../public/MainPage/UserIcon.png'
import { Link } from '@mui/material';
export default function LearnHeadBlock() {
    return (
      <>
        <div className={styles.learnHeadBlock}>
          <div className={styles.headCoinBlock}>
            <Image src={headCoin} alt={headCoin} className={styles.headCoin} />
            <div className={styles.headCoinTitle}>10</div>
          </div>
          <div className={styles.headUserNameBlock}>
            <div className="">
            <div className={styles.headUserName}>
              <BackHandIcon style={{ color: 'yellow' }} className={styles.headUserNameImg} />
                <pre className="">HI, </pre>        
                <div className={styles.userTitle}>Amina Melentieva</div>
            </div>
            <div className={styles.userSubTitle}>MINE_1y_66_04_10_23 </div>
            </div>
            <Link href="/profile" className="">
              <Image src={Usericon} className={styles.userIcon} alt={ Usericon} />
            </Link>
          </div>
        </div> 
      </>
  )
}
