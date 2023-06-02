'use client';

import styles from './contact.module.css';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <style global jsx>
        {`
          html,
          body {
            background: #a1c462;
          }
        `}
      </style>
      <p className={styles.container}>
        <h1 className={styles.title}>TO GET IN TOUCH</h1>
      </p>
      <div className={styles.container}>
        <p className={styles.email}>aya@iamserious.com</p>
      </div>
      <div className={styles.container}>
        <Link href="https://www.linkedin.com/in/ayako-bennett" target="_blank">
          <Image
            src="/images/linkedin.png"
            width={30}
            height={30}
            alt="linkedin image"
            className={styles.icons}
          />
        </Link>
        <Link href="https://github.com/PyonAU" target="_blank">
          <Image
            src="/images/github.png"
            width={30}
            height={30}
            alt="github image"
            className={styles.icons}
          />
        </Link>
      </div>
    </>
  );
};

export default ContactPage;
