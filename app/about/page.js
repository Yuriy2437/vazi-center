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
          The Vazi Center is a multi-functional developing cultural space in
          Tbilisi. Here you can watch movies, hear lectures, attend cultural and
          music events, and even get a consultation by a professional
          psychologist. If you have children, we have a playroom carefully
          watched by an adult. You are also welcome to enjoy a complementary cup
          of coffee or tea while here.
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
          apiEndpoint='/api/about/questions'
          title='Questions about Vazi Center'
        />
      </div>
    </div>
  );
};

export default AboutPage;
