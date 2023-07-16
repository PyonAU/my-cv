import Image from 'next/image';
import styles from './page.module.css';

export default function Loading() {
  return (
    <>
      <div className={styles.loading}>
        <Image width={150} height={150} src="/images/loading.svg" alt="" />
      </div>
    </>
  );
}
