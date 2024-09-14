import React from 'react'
import styles from './styles/style.module.scss'
import RecomendedContainer from '../components/RecomendedContainer'

export default function recommendedCircle() {
   
    return (
        <RecomendedContainer titels={'Circle page'}>
          <div className={styles.wrapperRecomendedPage}>
            <div className={styles.recomendedPageBlock}>
            <div className={styles.canvasBlock}>
              
              </div>
            </div>       
          </div>
    </RecomendedContainer>
  )
}
