'use client';

import { aboutMeTexts } from '@/lib/text-data';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            background: #d779aa;
          }
        `}
      </style>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>ABOUT ME</h1>
      </div>
      <div className={styles.textContainer}>
        {aboutMeTexts.map((text, index) => <p className={styles.text} key={`text${index}`}>{text}</p>)}
      </div>
    </>
  );
};

export default AboutPage;
