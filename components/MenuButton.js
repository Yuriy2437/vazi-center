'use client';

import { useRouter } from 'next/navigation';
import styles from '../styles/MenuButton.module.css';

const MenuButton = () => {
  const router = useRouter();

  return (
    <button className={styles.button} onClick={() => router.push('/menu')}>
      Enter
    </button>
  );
};

export default MenuButton;
