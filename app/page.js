import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Image src="/images/home-background.jpg" alt="background image" fill />
        <Link
          href="https://github.com/PyonAU"
          target="_blank"
          className={styles.gitHubLink}
        >
          AYAKO GITHUB
        </Link>
    </>
  );
}
