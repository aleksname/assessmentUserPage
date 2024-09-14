import React from 'react'
import styles from '../pages/styles/style.module.scss';
import RecomendedContainer from '../components/RecomendedContainer'
import PizzaIcon from '../public/RecomendedPageCircle/PizzaIcon.png'
import Image from 'next/image'

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
                            <p className={styles.recomendedCircleSubTitle}>
                                <strong>Радіус</strong> - це відстань від центру кола до будь-якої точки на колі. Уявіть собі колесо велосипеда: спиця - це радіус. Вона з'єднує центр колеса з ободом колеса.
                            </p>
                        </div>
                         <div className={styles.recomendedCircleSubTitleBlock}>
                            <div className={styles.recomendedCircleSubTitle}>
                                <div className={styles.recomendedCircleParagrah}>
                                    <strong>Колесо велосипеда: </strong>  Спиці колеса – це як радіуси, вони з'єднують центр колеса з ободом.
                                </div>
                                <div className={styles.recomendedCircleParagrah}>
                                    <strong>Годинник:</strong>Стрілки годинника рухаються по колу, і відстань від центру циферблату до кінчика стрілки – це радіус.
                                </div>
                                <div className={styles.recomendedCircleParagrah}>
                                    <strong>Піца:</strong>Коли ми ріжемо піцу, кожен шматочок має форму трикутника, а лінія від центру піци до вершини трикутника – це радіус.
                                </div>
                            </div>
                        </div>

                        <div className={styles.recomendedCircleTitleBlock}>
                            <div className={styles.circleTitle}>Вибери де показанно на картинкі радіус</div>
                        </div>
                        <div className={styles.radiusBlockElement}>
                            <div className={styles.circle}></div>
                            <Image src={PizzaIcon} alt='PizzaIcon' className={styles.radiusElement} />
                            <div className={styles.circle2}></div>
                        </div>
                    </div>
                </div>       
        </div>
    </RecomendedContainer>
  )
}
