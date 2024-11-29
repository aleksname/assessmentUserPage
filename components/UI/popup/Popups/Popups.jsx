import React, {useState} from 'react'
import styles from './Popups.module.css'

import Image from 'next/image';
import profileRatingIcon from '../../../../public/profile/profileRatingIcon.svg';
import iconPopupBo from '../../../../public/popup/iconPopupBo.png';
import iconPopupShelly from '../../../../public/popup/iconPopupShelly.png';
import iconPopupDinamit from '../../../../public/popup/iconPopupDinamit.png';
import iconPopupLeon from '../../../../public/popup/iconPopupLeon.png';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export default function Popups() {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(true) 
    const handleClose = () => setOpen(false)
   

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 15,
        width: 450,
        borderRadius: 5,
        // transform: 'rotate(-90deg)',
        
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
             backgroundColor:   '#9ACD32',
        },
    }));
    

  return (
    <div className={styles.popupsModuleContainer} >
        <button onClick={handleClick}>
            <Image src={profileRatingIcon} alt="profileRatingIcon" className={styles.profileRatingIcon} />
        </button>
          <div className={`${styles.popupsContainer} ${open ? styles.visible : styles.hidden}`} >
              <div className={styles.containerBg}>
                  <div className={styles.container}>
                        <div className={styles.close}>
                            <button onClick={handleClose} >&#x2715;</button>
                        </div>
                        <div className={styles.popupsTitle}>
                            <Image src={iconPopupBo} className={styles.titleIcon} alt='iconPopupBo'/>
                        </div>
                      <BorderLinearProgress variant="determinate" value={80} sx={{ mt: 5 }} />
                      <div className={styles.progresBarIconBlock}>
                          <div className={styles.progresBarEl}>
                            <Image src={iconPopupShelly} className={styles.progresBarIcon} alt='iconPopupShelly' />
                            &#x2160; lvl
                          </div>
                          <div className={styles.progresBarEl}>
                            <Image src={iconPopupDinamit} className={styles.progresBarIcon} alt='iconPopupDinamit' />
                            &#x2161; lvl
                          </div>
                          <div className={styles.progresBarEl}>
                            <Image src={iconPopupLeon} className={styles.progresBarIcon} alt='iconPopupLeon' />
                            <div className="">&#x2162; lvl</div>
                          </div>
                    </div>
                  </div>
              </div>
        </div>  
    </div>
  )
}
