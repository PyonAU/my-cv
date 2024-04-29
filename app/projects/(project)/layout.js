import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './layout.module.css';

const ProjectLayout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backButton}>
          <Link href="/projects" className={styles.backButtonLink}>
            <ArrowBackIosIcon className={styles.backIcon} />
            <div className={styles.text}>Back</div>
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default ProjectLayout;
