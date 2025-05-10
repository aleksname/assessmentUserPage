'use client';
import React, { useEffect, useState } from 'react';
import styles from './ProfileProgress.module.css';

export default function ProfileProgress() {
  const [grades, setGrades] = useState([]);
  const [totalSumAttention, setTotalSumAttention] = useState()
  const [activity_scope, setActivity_scope] = useState()
  const [kahoot_scope, setKahoot_scope] = useState()

    useEffect(() => {
    async function fetchGrades() {
      try {
        const res = await fetch('/api/userGrades'); 
        const resTotal = await fetch('/api/totalPointAttention');
        const resActive = await fetch('api/totalPointActive');
        const resKahoot = await fetch('api/totalPointKahoot');

        const data = await res.json();
        const dataTotal = await resTotal.json();
        const dataActive = await resActive.json();
        const dataKahoot = await resKahoot.json()

        setGrades(data);
        setTotalSumAttention(dataTotal);
        setActivity_scope(dataActive);
        setKahoot_scope(dataKahoot);
      } catch (err) {
        console.error('Error fetching grades:', err);
      }
    }
    fetchGrades();
  }, []);

  return (
    <div className={styles.profileProgressTableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Тема</th>
            <th className={styles.th}>Дата уроку</th>
            <th className={styles.th}>Уважність</th>
            <th className={styles.th}>Активність</th>
            <th className={styles.th}>Кахут</th>
            <th className={styles.th}>Присутній</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>-</td>
              <td>-</td>
              <td className={styles.th}>{grade.attention_score}</td>
              <td className={styles.th}>{grade.activity_score}</td>
              <td className={styles.th}>{grade.kahoot_score}</td>
              <td className={styles.th}>
                <input type="checkbox" checked={grade.is_present} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
              <tr>
                <th className={styles.footer}>Загальна сума балів: </th>
                <th className={styles.footer}></th>
                <th className={styles.footer}>{totalSumAttention}</th>
                <th className={styles.footer}>{activity_scope}</th>
                <th className={styles.footer}>{kahoot_scope}</th>
                <th className={styles.footer}></th>
              </tr>
        </tfoot>
      </table>
    </div>
  );
}
