'use client';

import { useState, useEffect } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const EnglishClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const photos = [
    '/images/photo_15.jpg',
    '/images/photo_17.jpg',
    '/images/photo_18.jpg',
  ];

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#4CAF50' }}
      >
        <p className={styles.aboutText}>
          The Vazi English Club is happy to help you brush up on your English
          skills and take it to the level you’ve always dreamed of - all under
          the guidance of experienced teachers. Among them are both native
          speakers and bilinguals. In a cozy atmosphere, over a cup of coffee,
          we conduct 1.5-hour classes on a whole variety of language-related
          topics and subjects - from Grammar to Phrasal verbs, from the
          Conditionals to Sequence of Tenses, from the Passive voice to Reported
          speech, from speaking to analyzing songs and movies.
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
          apiEndpoint='/api/english_club/questions'
          title='Questions about English Club'
          isAdmin={isAdmin}
        />
      </div>
    </div>
  );
};

export default EnglishClubPage;
