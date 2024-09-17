'use client';

import { useState } from 'react';
import styles from '../../styles/About.module.css';

const AboutPage = () => {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Здесь будет логика отправки данных в MongoDB
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <p className={styles.aboutText}>
          Vazi Center is a multifunctional developing cultural space in Tbilisi.
          Here you can watch a film, listen to a lecture, attend a musical
          evening and even get a consultation from a professional psychologist.
          If you come with children, you can leave them in the playroom, where
          an adult will look after them. Those who wish can drink a cup of
          delicious fresh coffee for free.
        </p>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.formSection}>
          <h2>Ask a question</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={10}
            />
            <textarea
              placeholder='Question'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength={50}
            />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
