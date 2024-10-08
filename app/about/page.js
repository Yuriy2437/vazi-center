'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import PageLayout from '../../components/PageLayout';
import PhotoButtons from '../../components/PhotoButtons';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import styles from '../../styles/CommonPage.module.css';

const AboutPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const isAdmin = useAdminStatus();

  const photos = [
    '/images/photo_13.jpg',
    '/images/photo_19.jpg',
    '/images/photo_4.jpg',
  ];

  const leftContent = (
    <>
      <p className={styles.aboutText}>
        The Vazi Center is a multi-functional developing cultural space in
        Tbilisi. Here you can watch movies, hear lectures, attend cultural and
        music events, and even get a consultation by a professional
        psychologist. If you have children, we have a playroom carefully watched
        by an adult. You are also welcome to enjoy a complementary cup of coffee
        or tea while here.
      </p>
      <PhotoButtons setShowPhoto={setShowPhoto} />
    </>
  );

  const rightContent = (
    <>
      {showPhoto && <PhotoGallery photos={photos} />}
      <QuestionSection
        apiEndpoint='/api/about/questions'
        title='Questions about Vazi Center'
        isAdmin={isAdmin}
      />
    </>
  );

  return (
    <PageLayout
      leftContent={leftContent}
      rightContent={rightContent}
      backgroundColor='#d331c3'
    />
  );
};

export default AboutPage;
