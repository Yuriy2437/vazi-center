'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const EnglishClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const photos = [
    '/images/photo_15.jpg',
    '/images/photo_17.jpg',
    '/images/photo_18.jpg',
  ];

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#4CAF50' }}
      >
        <p className={styles.aboutText}>
          The English Club is a space in Vazi where you can improve your English
          skills under the guidance of experienced teachers. Among them are both
          native speakers and bilinguals. In a cozy atmosphere, over a cup of
          coffee, we conduct 1.5-hour classes, studying grammar and vocabulary
          of the language. We converse in English, and also watch and discuss
          films in English.
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
          apiEndpoint='/api/english_club/questions'
          title='Questions about English Club'
        />
      </div>
    </div>
  );
};

export default EnglishClubPage;
