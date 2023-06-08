'use client';

import { mySkillsTexts } from '@/lib/text-data.js';
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
        <ul className={styles.lists}>
          {mySkillsTexts.map((list, index) => <li className={styles.list} key={`list${index}`}>{list}</li>)}
        </ul>
      </div>
    </>
  );
};

export default SkillsPage;
