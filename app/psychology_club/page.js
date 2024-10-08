'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import PageLayout from '../../components/PageLayout';
import PhotoButtons from '../../components/PhotoButtons';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import styles from '../../styles/CommonPage.module.css';

const PsychologyClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const isAdmin = useAdminStatus();

  const photos = [
    '/images/photo_10.jpg',
    '/images/photo_22.jpg',
    '/images/photo_20.jpg',
  ];

  const leftContent = (
    <>
      <p className={styles.aboutText}>
        The Psychology Club at Vazi offers a space where certified psychologists
        deliver insightful lectures. However, its primary focus is on providing
        personal and group psychological consultations and training sessions.
        The psychologists are available to help you manage depression, offer
        expert guidance on family-related issues, and assist in finding meaning
        and setting goals in life.
      </p>
      <PhotoButtons setShowPhoto={setShowPhoto} />
    </>
  );

  const rightContent = (
    <>
      {showPhoto && <PhotoGallery photos={photos} />}
      <QuestionSection
        apiEndpoint='/api/psychology_club/questions'
        title='Questions about Psychology Club'
        isAdmin={isAdmin}
      />
    </>
  );

  return (
    <PageLayout
      leftContent={leftContent}
      rightContent={rightContent}
      backgroundColor='#790c5e'
    />
  );
};

export default PsychologyClubPage;
