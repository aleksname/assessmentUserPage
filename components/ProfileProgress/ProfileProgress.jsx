import React from 'react'
import styles from './ProfileProgress.module.css'

export default function ProfileProgress() {
  return (
    <div className={styles.profileProgressTableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th  className={styles.th} scope='col'>Тема</th>
            <th  className={styles.th} scope='col'>Дата уроку</th>
            <th  className={styles.th} scope='col'>Оцінка за уважність</th>
            <th  className={styles.th} scope='col'>Оцінка за активність</th>
            <th  className={styles.th} scope='col'>Оцінка за кахут</th>
            <th  className={styles.th} scope='col'>Присутній</th>
          </tr>
        </thead>
        <tbody  className={styles.tbody}>
          <tr>
            <th  className={styles.th} scope='row'>1</th>
            <th  className={styles.th} cope='row'>1</th>
            <th  className={styles.th} scope='row'>1</th>
            <th  className={styles.th} scope='row'>1</th>
            <th  className={styles.th} scope='row'>1</th>
            <th  className={styles.th} scope='row'>
              <input type="checkbox" name="" id="" />
            </th>
          </tr>
          <tr>
            <th  className={styles.th} scope='row'>1</th>
            <th  className={styles.th} cope='row'>1</th>
            <th  className={styles.th} scope='row'>1</th>
            <th  className={styles.th} scope='row'>1</th>
            <th  className={styles.th} scope='row'>1</th>
            <th  className={styles.th} scope='row'>
              <input type="checkbox" name="" id="" />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
