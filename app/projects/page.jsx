'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projectCards } from '@lib/project-data';
import styles from './project.module.css';

const ProjectsPage = () => {
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            background: #51a45c;
          }
        `}
      </style>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>My Projects</h1>
      </div>
      <div className={styles.outerContainer}>
        {projectCards.map((card) => {
          return (
            <Link
              className={styles.cardContainer}
              key={card.alt}
              href={card.route}
            >
              <Image
                src={card.src}
                width={300}
                height={300}
                alt={card.alt}
                className={styles.image}
              />
              <h2 className={styles.appTitle}>{card.title}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsPage;
