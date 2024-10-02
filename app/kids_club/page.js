'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const KidsClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const photos = [
    '/images/photo_2.jpg',
    '/images/photo_7.jpg',
    '/images/photo_23.jpg',
  ];

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#794a0c' }}
      >
        <p className={styles.aboutText}>
          The Vazi Kids Club serves two key purposes. First, during events, you
          can leave your child in the care of a responsible adult in the
          children room. Second, we offer specialized programs for behavioral
          therapy or speech therapy, where certified professionals work with
          your child to support their development.
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
          apiEndpoint='/api/kids_club/questions'
          title='Questions about Kids Club'
        />
      </div>
    </div>
  );
};

export default KidsClubPage;
