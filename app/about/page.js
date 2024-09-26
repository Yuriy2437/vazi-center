'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import styles from '../../styles/CommonPage.module.css';

const AboutPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const photos = [
    '/images/photo_13.jpg',
    '/images/photo_19.jpg',
    '/images/photo_4.jpg',
  ];

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.leftSection}
        style={{ '--left-section-bg-color': '#d331c3' }}
      >
        <p className={styles.aboutText}>
          Vazi Center is a multifunctional developing cultural space in Tbilisi.
          Here you can watch a film, listen to a lecture, attend a musical
          evening and even get a consultation from a professional psychologist.
          If you come with children, you can leave them in the playroom, where
          an adult will look after them. Those who wish can drink a cup of
          delicious fresh coffee for free.
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
          apiEndpoint='/api/about/questions'
          title='Questions about Vazi Center'
        />
      </div>
    </div>
  );
};

export default AboutPage;
