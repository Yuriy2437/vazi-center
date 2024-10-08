'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../../styles/Menu.module.css';

const menuItems = [
  { name: 'About us', path: '/about' },
  { name: 'English Club', path: '/english_club' },
  { name: 'Lectorium', path: '/lectorium' },
  { name: 'Music Club', path: '/music_club' },
  { name: 'Psychology Club', path: '/psychology_club' },
  { name: 'Kids room', path: '/kids_room' },
  { name: 'All feedbacks', path: '/feedback' },
];

export default function Menu() {
  const router = useRouter();

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
              onClick={() => router.push(item.path)}
            >
              {item.name}
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
