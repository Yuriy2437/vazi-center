'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const MusicClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const photos = [
    '/images/photo_6.jpg',
    '/images/photo_14.jpg',
    '/images/photo_16.jpg',
  ];

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#51790c' }}
      >
        <p className={styles.aboutText}>
          The Music Club is a space in Vazi where concerts, parties, and theme
          nights are held. You can offer an event according to your musical
          tastes. It could be an evening of songs by your favorite performer or
          composer. Or perhaps an evening of national music: Georgian, Russian,
          Ukrainian, Belorussian etc. You can offer a style.
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
          apiEndpoint='/api/music_club/questions'
          title='Questions about Music Club'
        />
      </div>
    </div>
  );
};

export default MusicClubPage;
