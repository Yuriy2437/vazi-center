'use client';

import { useState } from 'react';
import QuestionSection from '../../components/QuestionSection';
import PhotoGallery from '../../components/PhotoGallery';
import PageLayout from '../../components/PageLayout';
import PhotoButtons from '../../components/PhotoButtons';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import styles from '../../styles/CommonPage.module.css';

const MusicClubPage = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const isAdmin = useAdminStatus();

  const photos = [
    '/images/photo_6.jpg',
    '/images/photo_14.jpg',
    '/images/photo_16.jpg',
  ];

  const leftContent = (
    <>
      <p className={styles.aboutText}>
        The Music Club at Vazi is a versatile space for hosting concerts,
        parties, and themed events. Guests are welcome to propose events that
        reflect their musical preferences, whether it’s an evening dedicated to
        the works of a favorite performer or composer, or a celebration of
        national music, such as Georgian, Russian, Ukrainian, or Belarusian, or
        any other. You can also suggest a specific musical style to shape the
        event.
      </p>
      <PhotoButtons setShowPhoto={setShowPhoto} />
    </>
  );

  const rightContent = (
    <>
      {showPhoto && <PhotoGallery photos={photos} />}
      <QuestionSection
        apiEndpoint='/api/music_club/questions'
        title='Questions about Music Club'
        isAdmin={isAdmin}
      />
    </>
  );

  return (
    <PageLayout
      leftContent={leftContent}
      rightContent={rightContent}
      backgroundColor='#51790c'
    />
  );
};

export default MusicClubPage;
