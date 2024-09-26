'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const PsychologyClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const photos = [
    '/images/photo_10.jpg',
    '/images/photo_22.jpg',
    '/images/photo_20.jpg',
  ];

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#790c5e' }}
      >
        <p className={styles.aboutText}>
          The Psychology Club is a space in Vazi where you can listen to
          lectures by certified psychologists. But its main goal is to conduct
          personal and group psychological consultations and trainings.
          Psychologists will help you cope with depression, give qualified
          advice on your family problems, finding the meaning and goals of your
          life.
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
          apiEndpoint='/api/psychology_club/questions'
          title='Questions about Psychology Club'
        />
      </div>
    </div>
  );
};

export default PsychologyClubPage;
