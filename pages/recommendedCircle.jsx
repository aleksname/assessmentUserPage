import React from 'react'
import styles from './styles/style.module.scss'
import Image from 'next/image'
import recomendedCircleIcon from '../public/RecomendedPageCircle/recomendedCircleIcon.png'
import RecomendedContainer from './RecomendedContainer'

export default function recommendedCircle() {
    return (
    <RecomendedContainer>
        <div className={styles.wrapperRecomendedPage}>
                <div className={styles.recomendedPageBlock}>
                    <div className={styles.recomendedCircle}>
                        <Image src={recomendedCircleIcon} alt='recomendedCircleIcon' className={styles.recomendedCircleIcon} />
                    </div>
            </div>       
        </div>
    </RecomendedContainer>
  )
}
