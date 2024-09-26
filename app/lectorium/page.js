'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const LectoriumPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const photos = [
    '/images/photo_8.jpg',
    '/images/photo_9.jpg',
    '/images/photo_21.jpg',
  ];

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#1836e3' }}
      >
        <p className={styles.aboutText}>
          The Lectorium is a space in Vazi that hosts certified lecturers in
          various disciplines such as philosophy, theology, history, political
          science, other humanities and natural sciences. The lectures are
          tailored to the needs of the audience and take place in a
          discussion-oriented environment. The main goal of the lectures is the
          intellectual development of the audience.
        </p>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setShowPhoto(true)}
            className={styles.photoButton}
          >
            Show Photo
          </button>
          <button
            onClick={() => setShowPhoto(false)}
            className={styles.photoButton}
          >
            Remove Photo
          </button>
        </div>
      </div>
      <div className={styles.rightSection}>
        {showPhoto && <PhotoGallery photos={photos} />}
        <QuestionSection
          apiEndpoint='/api/lectorium/questions'
          title='Questions about Lectorium'
        />
      </div>
    </div>
  );
};

export default LectoriumPage;
