import React, {useState} from 'react'
import MainContainer from './MainContainer'
import styles from './styles/style.module.scss'
import Image from 'next/image';
import ChildrenIcon from '../public/quiz/childrenIcon.png';

export default function quizPage() {

    const [correct, setCorrect] = useState(1);
    
    const handleClick = (btnCorrect) => {
        console.log(`кнопка ${btnCorrect} натиснута`);
        setCorrect(btnCorrect);
    }

    return (
        <MainContainer titels={'Quiz page'}>
        <div className={styles.wrapper}>
            <div className={styles.quizeTestPageBlock}>
                <div className={styles.testPageTitleBlock}>
                    <div className={`${styles.testTitleEl} ${correct === 1 ? styles.active : styles.unactive} `}>1</div>
                    <div className={`${styles.testTitleEl} ${correct === 1 ? styles.active : styles.unactive} `}>2</div>
                    <div className={`${styles.testTitleEl} ${correct === 1 ? styles.active : styles.unactive} `}>3</div>
                    <div className={`${styles.testTitleEl} ${correct === 1 ? styles.active : styles.unactive} `}>4</div>
                    <div className={`${styles.testTitleEl} ${correct === 1 ? styles.active : styles.unactive} `}>5</div>
                    </div>
                    
                        <div className={styles.testQuestionTitle}>У  ряду назви двох наступних тваринок.</div>
                    <div className={styles.testQuestion}>
                        <Image src={ChildrenIcon} alt='test Question Icon' className={styles.testQuestionImg} />
                    <div className={styles.childrenIconTitle}></div>    
                </div>   
                <div className={styles.quizTestBtnBlocks}>
                    <div className={styles.quizTestBtnBlock}>
                        <button onClick={() => handleClick(1)} className={styles.quizTestBtn1}>1</button>
                        <button onClick={() => handleClick(2)} className={styles.quizTestBtn2}>2</button>
                        <button onClick={() => handleClick(3)} className={styles.quizTestBtn3}>3</button>
                        <button onClick={() => handleClick(4)} className={styles.quizTestBtn4}>4</button>
                    </div>   
                </div>    
            </div>
        </div>
    </MainContainer>
  )
}
