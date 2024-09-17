'use client';

import { useState, useEffect } from 'react';
import styles from '../../styles/About.module.css';

const AboutPage = () => {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, question }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await response.json();
      setName('');
      setQuestion('');
      fetchQuestions();
    } catch (error) {
      console.error('Error submitting question:', error);
    }
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
              maxLength={25}
              className={styles.nameInput}
            />
            <textarea
              placeholder='Question'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength={150}
            />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className={styles.questionsList}>
          <h2>List of Questions</h2>
          <div className={styles.questionsHeader}>
            <span>Name</span>
            <span>Question</span>
          </div>
          <div className={styles.questionsContent}>
            {Array.isArray(questions) &&
              questions.map((q, index) => (
                <div key={index} className={styles.questionItem}>
                  <span>{q.name}</span>
                  <span>{q.question}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
