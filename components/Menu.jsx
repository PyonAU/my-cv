import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = ({ isSlide, handleMenuClick }) => {
  const overlaySlideClass = isSlide ? styles.overlaySlideIn : styles.overlaySlideOut;

  return (
    // menu Overlay
    <div className={`${styles.overlay} ${overlaySlideClass}`}>
    {/* Menu Items */}
    <nav >
      <ul onClick={handleMenuClick} className={styles.navigation}>
        <li className={styles.slide1}>
          <Link href="/" className={styles.links}>Home</Link>
        </li>
        <li className={styles.slide2}>
        <Link href="/about" className={styles.links}>About</Link>
        </li>
        <li className={styles.slide3}>
        <Link href="/skills" className={styles.links}>Skills</Link>
        </li>
        <li className={styles.slide4}>
        <Link href="/projects" className={styles.links}>Projects</Link>
        </li>
        <li className={styles.slide5}>
        <Link href="/contact" className={styles.links}>Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Menu