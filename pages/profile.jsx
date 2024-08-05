import React from 'react'
import MainContainer from './MainContainer'
import styles from './styles/style.module.scss'
import  Image  from 'next/image';
import UserIcon from '../public/MainPage/UserIcon.png'
import UserIcons from '../public/profile/userIcons.svg'
import PhoneIcons from '../public/profile/Phone_fill.svg'
import MailIcons from '../public/profile/MailIcons.svg'
import InformationIcon from '../public/profile/informationIcon.svg'
import Link from 'next/link';

export default function profile() {
    return (
    <MainContainer titels={'Profile page'}>
            <div className={styles.wrapper}>
                <div className={styles.profilePageBlock}>
                    <div className={styles.profileInfoBlock}>
                        <Image src={UserIcon} alt={UserIcon} className={ styles.userProfileIcon} />
                    </div>
                    <div className={styles.profileInfoFullName}>Amina Melentieva</div>
                    <div className={styles.profileSetInfoBlock}>
                        <div className={styles.setInfoTitle}>PROFILE</div>
                        <div className={styles.infoContactBlock}>
                            <Image src={UserIcons} alt={UserIcons} className={ styles.contactIcon} />
                            <div className={styles.contactusername}>Username: Amina Melentieva</div>
                        </div>

                        <div className={styles.infoContactBlock}>
                            <Image src={PhoneIcons} alt={PhoneIcons} className={ styles.contactIcon} />
                            <div className={styles.contactusername}>Contact: +38 00 00 00 000</div>
                        </div>

                        <div className={styles.infoContactBlock}>
                            <Image src={MailIcons} alt={MailIcons} className={ styles.contactIcon} />
                            <div className={styles.contactusername}>Email: test@gmail.com</div>
                        </div>
                    </div>
                    <Link href='#'>
                    <div className={styles.profileOtherBlock}>
                        <Image src={InformationIcon} alt={InformationIcon} className={ styles.informationIcon} />
                        <div className={styles.profileOtherInfo}>Help and Feedback</div>
                    </div>
                    </Link>
                </div> 
            </div>
    </MainContainer>
    )
}
