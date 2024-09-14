import React from 'react'
import MainContainer from '../components/MainContainer'
import styles from '../pages/styles/style.module.scss';
import Image from 'next/image'
import Link from 'next/link';
import CircleIcon from '../public/RecomendedPage/CircleIcon.svg'
import RadiusIcon from '../public/RecomendedPage/RadiusIcon.svg'
import Diametericon from '../public/RecomendedPage/Diametericon.svg'
import CanvasIcon from '../public/RecomendedPage/CanvasIcon.svg'

export default function recommended() {

  return (
    <MainContainer titels={'Recomended page'}>
      <div className={styles.wrapperRecomendedPage}>
        <div className={styles.recomendedPageBlock}>
          <div className={styles.recommendedLinkBlock}>
            <Link href="/recommendedCircle" className={styles.recommendedLink}>
              <Image src={CircleIcon} alt='CircleIcon'/>
              <div className={styles.circleIconTitle}>Circle</div>  
            </Link>

            <Link href="/recommendedRadius" className={styles.recommendedLink}>
              <Image src={RadiusIcon} alt='RadiusIcon'/>
              <div className={styles.circleIconTitle}>Radius</div>  
            </Link>

            <Link href="/recommendedDiameter" className={styles.recommendedLink}>
              <Image src={Diametericon} alt='Diametericon'/>
              <div className={styles.circleIconTitle}>Diameter</div>  
            </Link>

            <Link href="/recommendedCanvas" className={styles.recommendedLink}>
              <Image src={CanvasIcon} alt='Diametericon'/>
              <div className={styles.circleIconTitle}>Canvas</div>  
            </Link>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}
