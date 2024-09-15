import Image from 'next/image';
import styles from '../../styles/Menu.module.css';

const menuItems = [
  'About us',
  'English Club',
  'Lectorium',
  'Music Club',
  'Psychology Club',
  'Cafe-bar',
  'Your feedback and suggestions',
];

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Menu</h1>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={styles.menuItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightSection}>
        <Image
          src='/images/page2.jpeg'
          alt='Menu background'
          fill
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
}
