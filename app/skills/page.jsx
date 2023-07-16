'use client';

import { techTexts, customerServiceTexts } from '@/lib/text-data.js';
import styles from './skills.module.css';

const SkillsPage = () => {
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            background: #d36e69;
          }
        `}
      </style>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>MY SKILLS</h1>
      </div>
      <div className={styles.listContainer}>
        <h5 className={styles.contentTitle}>IT Skills</h5>
        <ul className={styles.lists}>
          {techTexts.map((list, index) => (
            <li className={styles.list} key={`list${index}`}>
              {list}
            </li>
          ))}
        </ul>
        <h5 className={styles.contentTitle}>Other Capabilities</h5>
        <ul className={styles.lists}>
          {customerServiceTexts.map((list, index) => (
            <li className={styles.list} key={`list${index}`}>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillsPage;
