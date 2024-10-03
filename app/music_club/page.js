'use client';

import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const MusicClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // const searchParams = useSearchParams();
  const photos = [
    '/images/photo_6.jpg',
    '/images/photo_14.jpg',
    '/images/photo_16.jpg',
  ];

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#51790c' }}
      >
        <p className={styles.aboutText}>
          The Music Club at Vazi is a versatile space for hosting concerts,
          parties, and themed events. Guests are welcome to propose events that
          reflect their musical preferences, whether it’s an evening dedicated
          to the works of a favorite performer or composer, or a celebration of
          national music, such as Georgian, Russian, Ukrainian, or Belarusian,
          or any other. You can also suggest a specific musical style to shape
          the event.
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
          apiEndpoint='/api/music_club/questions'
          title='Questions about Music Club'
          isAdmin={isAdmin}
        />
      </div>
    </div>
  );
};

export default MusicClubPage;
