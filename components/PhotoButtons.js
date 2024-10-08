import styles from '../styles/CommonPage.module.css';

const PhotoButtons = ({ setShowPhoto }) => (
  <div className={styles.buttonContainer}>
    <button onClick={() => setShowPhoto(true)} className={styles.photoButton}>
      Show Photo
    </button>
    <button onClick={() => setShowPhoto(false)} className={styles.photoButton}>
      Close Photo
    </button>
  </div>
);

export default PhotoButtons;
