'use client';

import styles from './about.module.css';

const AboutPage = () => {
  return (
    <>
      <style global jsx>
        {`
          html,
          body {
            background: #d779aa;
          }
        `}
      </style>
      ;
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>ABOUT ME</h1>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          I have gained valuable experience in the customer service industry,
          working both as airline staff and a corporate travel consultant. These
          roles have honed my skills in providing exceptional service, resolving
          issues efficiently, and maintaining a high level of professionalism.
        </p>
        <p className={styles.text}>
          In response to the challenges posed by the COVID-19 pandemic and my
          subsequent retrenchment, I proactively embraced the opportunity to
          transition into the IT field. Recognizing the growing importance of
          technology, I embarked on a path to acquire relevant skills and
          knowledge. I have successfully completed multiple Udemy courses and
          undertaken various projects using React and Next.js, all under the
          guidance of my dedicated mentor.
        </p>
        <p className={styles.text}>
          As a team player, I am known for my personable and proactive approach.
          I consistently demonstrate a strong work ethic, enthusiasm, and
          punctuality. Thriving under pressure, I remain focused and composed
          while delivering results. My commitment to meeting customer needs
          efficiently is evident in the positive feedback I have consistently
          received from satisfied customers.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
