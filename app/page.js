import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MenuButton from '../components/MenuButton';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src='/images/background.jpg'
        alt='Background'
        fill
        className={styles.backgroundImage}
        // style={{
        //   objectFit: 'cover',
        //   objectPosition: 'center',
        // }}
        priority
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Vazi Center</h1>
        <MenuButton />
      </div>
    </div>
  );
}
