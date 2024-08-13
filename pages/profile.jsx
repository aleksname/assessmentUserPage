import * as React from 'react';
import MainContainer from './MainContainer'
import styles from './styles/style.module.scss'
import Image  from 'next/image';
import InformationIcon from '../public/profile/informationIcon.svg'
import Link from 'next/link';

import profileIcon2 from '../public/profile/profileIcon2.svg'
import ChestIcon from '../public/profile/ChestIcon.svg'

import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import TabsComponentProfile from './TabsComponentProfile';
import Diagrama from './Diagrama';
import profileRatingIcon from '../public/profile/profileRatingIcon.svg'



export default function profile() {

    // let now = new Date();
    // console.log(now.getDay()) отримав день тижня цифрою.
    // console.log(now.getMonth())
    let now = new Date();
    // console.log(now.toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' }));

   

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 15,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
             backgroundColor:   '#9ACD32',
        },
    }));
    
    return (
    <MainContainer titels={'Profile page'}>
            <div className={styles.wrapper}>
                <div className={styles.profilePageBlock}>
                    <div className={styles.profilePageTitleBlock}>
                        <div className={styles.profileTitle}>Today: {(now.toLocaleDateString('EN', { day: 'numeric', month: 'long' }))}</div>
                        <Image src={profileRatingIcon} alt='profileRatingIcon' className={styles.profileRatingIcon} />
                    </div>
                    <div className={styles.profileStatsinfo}>
                        <Image src={profileIcon2} alt='profileIcon2' className={styles.profileIcon} />
                        <div className="">
                            <div className={styles.profileStatTitle}>You’re almost there!</div>
                            <div className={styles.profileStatSubTitle}>Steps left to defeat ⚔️</div>
                            <div className={styles.profileStatSubTitle2}>1.688</div>
                        </div>
                    </div>
                    <div className={styles.profileProgresLineBlock}>
                        <BorderLinearProgress variant="determinate" value={80} />
                        <Image src={ChestIcon} alt='ChestIcon'/>
                    </div>
                    <div className={styles.profileStatSubTitle}>8,312 steps done</div>
                    <div className={styles.profileMetrikaTitle}>Your Steps Progress</div>
                    <TabsComponentProfile />
                    <Diagrama/>
                    <Link href='/feedback'>
                    <div className={styles.profileOtherBlock}>
                        <Image src={InformationIcon} alt={"InformationIcon"} className={ styles.informationIcon} />
                        <div className={styles.profileOtherInfo}>Help and Feedback</div>
                    </div>
                    </Link>
                </div> 
            </div>
    </MainContainer>
    )
}




