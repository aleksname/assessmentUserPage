import React from 'react'
import styles from './styles/style.module.scss'
import RecomendedContainer from './RecomendedContainer'

export default function recommendedCircle() {
  return (
    <RecomendedContainer title={'Circle page'}>
      <div className={styles.wrapperRecomendedPage}>
        <div className={styles.recomendedPageBlock}>
          <div className={styles.recomendedCircle}>
            <div className={styles.recomendedCircleTitleBlock}>
              <h1 className={styles.recomendedCircleTitle}>Діаметр</h1>
            </div>
            <div className={styles.recomendedCircleSubTitleBlock}>
              <p className={styles.recomendedCircleSubTitle}>
                <strong>Діаметр</strong> - це відрізок, який з'єднує дві протилежні точки на колі та проходить через його центр. Уявіть собі коло, як пиріг. Радіус - це шматок пирога від середини до краю. А діаметр - це цілий шматок пирога, який ділить його на дві рівні половинки!
              </p>
            </div>
            <div className={styles.recomendedCircleSubTitleBlock}>
              <p className={styles.recomendedCircleSubTitle}>
                <strong>Прикладом діаметра є</strong> предмети круглої форми, наприклад, монета, годинник, колесо, м'яч тощо.
              </p>
            </div>

            <div className={styles.recomendedCircleTitleBlock}>
              <h1 className={styles.circleTitle}>Вибери де показано на картинці діаметр</h1>
            </div>
            <div className={styles.radiusBlockElement}>
              <div className={styles.circle}></div>
              <div className={styles.circle2}></div>
            </div>
          </div>
        </div>
      </div>
    </RecomendedContainer>
  )
}