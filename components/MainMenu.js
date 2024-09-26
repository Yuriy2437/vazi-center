import Link from 'next/link';
import styles from '../styles/MainMenu.module.css';

const MainMenu = () => {
  return (
    <nav className={styles.mainMenu}>
      <ul>
        <li>
          <Link href='/about'>About us</Link>
        </li>
        <li>
          <Link href='/english_club'>English Club</Link>
        </li>
        <li>
          <Link href='/lectorium'>Lectorium</Link>
        </li>
        <li>
          <Link href='/music_club'>Music Club</Link>
        </li>
        <li>
          <Link href='/psychology_club'>Psychology Club</Link>
        </li>
        <li>
          <Link href='/kids_club'>Kids Club</Link>
        </li>
        <li>
          <Link href='/feedback'>Your feedback and suggestions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
