import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/monthly">Monthly Analytics</Link></li>
          <li><Link href="/yearly">Yearly Analytics</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
