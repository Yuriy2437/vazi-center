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
          The Kids Club is a space in Vazi that has two purposes. Firstly,
          during the event you can leave your child in the children's room,
          where a responsible adult will watch over him. Secondly, we have
          special programs for psychological correction of the child's behavior
          or speech therapy correction of his speech. In the second case,
          certified specialists work.
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
