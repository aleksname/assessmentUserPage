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
                <a href="https://kahoot.it/?pin=741479&refer_method=link" className={styles.quizeTestLink}>Тиць тут</a>
            </div>
        </div>
    </MainContainer>
  )
}
