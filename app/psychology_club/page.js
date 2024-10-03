'use client';

import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const PsychologyClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // const searchParams = useSearchParams();
  const photos = [
    '/images/photo_10.jpg',
    '/images/photo_22.jpg',
    '/images/photo_20.jpg',
  ];

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#790c5e' }}
      >
        <p className={styles.aboutText}>
          The Psychology Club at Vazi offers a space where certified
          psychologists deliver insightful lectures. However, its primary focus
          is on providing personal and group psychological consultations and
          training sessions. The psychologists are available to help you manage
          depression, offer expert guidance on family-related issues, and assist
          in finding meaning and setting goals in life.
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
            Close Photo
          </button>
        </div>
      </div>
      <div className={styles.rightSection}>
        {showPhoto && <PhotoGallery photos={photos} />}
        <QuestionSection
          apiEndpoint='/api/psychology_club/questions'
          title='Questions about Psychology Club'
          isAdmin={isAdmin}
        />
      </div>
    </div>
  );
};

export default PsychologyClubPage;
