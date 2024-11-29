import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './loginPage.module.css';
import Image from 'next/image';
import MainPageTop from '../public/MainPage/MainPageTop.png';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log('Submitting:', formData);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        router.push('/'); // Перенаправлення
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.homePageBlock}>
        <div className={styles.homePageImg}>
          <Image src={MainPageTop} alt="Main Page Top Image" className={styles.pageImg} />
        </div>
        <div className={styles.homePageLearnBlock}>
          <div className={styles.title}>Hi, login in your account now!</div>
          <form onSubmit={(e) => e.preventDefault()} className={styles.inputContainer}>
            <div className={styles.inputEl}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your email 📩"
              />
            </div>
            <div className={styles.inputEl}>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your password 🤫"
              />
            </div>
            <div className={styles.submitBlock}>
              <button type="button" className={styles.submit} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
