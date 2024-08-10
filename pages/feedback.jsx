import React, {useState} from 'react'
import styles from './styles/style.module.scss'
import Link from 'next/link'

export default function feedback() {
   const [correct, setCorrect] = useState(1);
    
    const handleClick = (btnCorrect) => {
        alert('Повідомлення надісланно !')
        console.log(`кнопка ${btnCorrect} натиснута`);
        setCorrect(btnCorrect);
    }
    return (
    <div className={styles.wrapperFeedback}>
        <div className={styles.feedbackPageBlock}>
                <div className={styles.feedbackBlock}>
                    <div className={styles.feedbackTitle}>Feedback Form</div>
                    <form action="" method="post" className={styles.feedbackFormBlock}>
                        <div className={styles.formBlock}>
                            <div className={styles.feedbackFromTitle}>Name:</div>
                            <input type="text" placeholder='Enter name - ' className={styles.feedbackInput} />
                        </div>
                        <div className={styles.formBlock}>
                            <div className={styles.feedbackFromTitle}>Email:</div>
                            <input type="email" placeholder='Enter email - ' className={styles.feedbackInput} />
                        </div>
                        <div className={styles.formBlock}>
                            <div className={styles.feedbackFromTitle}>Message:</div>
                            <textarea placeholder='Enter Message - "When I clicked on the "HOME" button in the navigation menu, it did not redirect me to the home page"' className={styles.feedbackInputMessage} maxLength="1000"></textarea>
                        </div>
                        <Link href='/' className={styles.formSubmit}>
                            <button onClick={() => handleClick(1)} type="Submit" className={styles.formSubmitBtn}>Submit &#10230;</button>
                        </Link>
                    </form>    
                </div>
        </div>    
    </div>
  )
}
