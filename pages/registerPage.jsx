import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './registerPage.module.css';
import Image from 'next/image';
import MainPageTop from '../public/MainPage/MainPageTop.png';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const router = useRouter(); // Ініціалізація маршрутизатора

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User registered successfully!');
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        router.push('/loginPage'); // Перенаправлення на сторінку логіну
      } else {
        alert('Failed to register user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.homePageBlock}>
        <div className={styles.homePageImg}>
          <Image src={MainPageTop} alt="Main Page Top Image" className={styles.pageImg} />
        </div>
        <div className={styles.homePageLearnBlock}>
          <div className={styles.title}>Hi, create your account now!</div>
          <div className={styles.inputContainer}>
            <div className={styles.inputEl}>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className={styles.input} 
                placeholder="Your name 😊" 
              />
            </div>
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
            <div className={styles.inputEl}>
              <input 
                type="password" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                className={styles.input} 
                placeholder="Confirm password 🧐" 
              />
            </div>
          </div>
          <div className={styles.submitBlock}>
            <button type="button" className={styles.submit} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );  
}
