import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/PhotoGallery.module.css';

const PhotoGallery = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className={styles.photoOverlay}>
      <button
        className={`${styles.arrowButton} ${styles.leftArrow}`}
        onClick={handlePrevPhoto}
      >
        &lt;
      </button>
      <div className={styles.photoContainer}>
        <Image
          src={photos[currentPhotoIndex]}
          alt='Gallery Photo'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <button
        className={`${styles.arrowButton} ${styles.rightArrow}`}
        onClick={handleNextPhoto}
      >
        &gt;
      </button>
    </div>
  );
};

export default PhotoGallery;
