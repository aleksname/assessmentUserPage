import React from 'react'
import styles from './styles/style.module.scss'
import RecomendedContainer from './RecomendedContainer'
import RecomendedCircleBlock from './recomendedCircleBlock'

export default function recommendedCircle() {
   
    return (
        <RecomendedContainer titels={'Circle page'}>
        <div className={styles.wrapperRecomendedPage}>
                <div className={styles.recomendedPageBlock}>
                    <div className={styles.recomendedCircle}>
                        <div className={styles.recomendedCircleTitleBlock}>
                            <h1 className={styles.recomendedCircleTitle}>Коло</h1>
                        </div>
                        <div className={styles.recomendedCircleSubTitleBlock}>
                            <p className={styles.recomendedCircleSubTitle}><strong>Коло - </strong>це основна геометрична фігура що має в собі фіксовану центральну точку і рівновідаленну криву</p>
                        </div>
                         <div className={styles.recomendedCircleSubTitleBlock}>
                            <p className={styles.recomendedCircleSubTitle}><strong>Прикладом кола </strong>  навколо нас є годинник, шина, сонце, місяць, колесо, м'яч тощо.</p>
                        </div>

                        <div className={styles.recomendedCircleTitleBlock}>
                            <h1 className={styles.circleTitle}>Вибери де показанно на картинкі коло</h1>
                        </div>

                        <RecomendedCircleBlock/>
                    </div>
                </div>       
        </div>
    </RecomendedContainer>
  )
}
