import React from 'react'
import styles from './styles/style.module.scss'
import RecomendedContainer from './RecomendedContainer'

export default function recommendedCircle() {
   
    return (
        <RecomendedContainer titels={'Circle page'}>
        <div className={styles.wrapperRecomendedPage}>
                <div className={styles.recomendedPageBlock}>
                    <div className={styles.recomendedCircle}>
                        <div className={styles.recomendedCircleTitleBlock}>
                            <h1 className={styles.recomendedCircleTitle}>Радіус</h1>
                        </div>
                        <div className={styles.recomendedCircleSubTitleBlock}>
                            <p className={styles.recomendedCircleSubTitle}><strong>Радіус - </strong></p>
                        </div>
                         <div className={styles.recomendedCircleSubTitleBlock}>
                            <p className={styles.recomendedCircleSubTitle}><strong>Прикладом радіусу є </strong> </p>
                        </div>

                        <div className={styles.recomendedCircleTitleBlock}>
                            <div className={styles.circleTitle}>Вибери де показанно на картинкі радіус</div>
                        </div>

                    </div>
                </div>       
        </div>
    </RecomendedContainer>
  )
}
