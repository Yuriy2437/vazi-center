'use client';

import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const LectoriumPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // const searchParams = useSearchParams();
  const photos = [
    '/images/photo_8.jpg',
    '/images/photo_9.jpg',
    '/images/photo_21.jpg',
  ];

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#1836e3' }}
      >
        <p className={styles.aboutText}>
          The Lecture Hall (or the Educational Center) at Vazi is another key
          attraction, hosting certified lecturers across a wide range of
          disciplines, including philosophy, theology, history, political
          science, the humanities, family relationships, and natural sciences.
          Each lecture is tailored to meet the specific needs of the audience,
          fostering a discussion-oriented environment. The primary goal of these
          sessions is to promote the intellectual growth and development of
          participants.
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
          apiEndpoint='/api/lectorium/questions'
          title='Questions about Lectorium'
          isAdmin={isAdmin}
        />
      </div>
    </div>
  );
};

export default LectoriumPage;
