'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import {
  setQuestions,
  setFilteredQuestions,
  setFilter,
} from '../../reducers/feedbackReducer';
import styles from '../../styles/Feedback.module.css';

export default function FeedbackPage() {
  const dispatch = useDispatch();
  const { questions, filteredQuestions, filter } = useSelector(
    (state) => state.feedback
  );
  const [isAdmin, setIsAdmin] = useState(false);
  // const searchParams = useSearchParams();
  const [showFilteredHeaders, setShowFilteredHeaders] = useState(false);

  useEffect(() => {
    // setIsAdmin(searchParams.get('admin') === 'true');
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
    const fetchQuestions = async () => {
      try {
        const collections = [
          'about',
          'english_club',
          'lectorium',
          'music_club',
          'psychology_club',
          'kids_club',
        ];
        const allQuestions = await Promise.all(
          collections.map(async (collection) => {
            const response = await fetch(`/api/${collection}/questions`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.map((q) => ({ ...q, base: collection }));
          })
        );
        dispatch(setQuestions(allQuestions.flat()));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [dispatch]);

  const handleFilterChange = (e) => {
    if (e.key === 'Enter') {
      const newFilter = e.target.value.toLowerCase();
      dispatch(setFilter(newFilter));
      const filtered = questions.filter((q) =>
        q.question.toLowerCase().includes(newFilter.toLowerCase())
      );
      dispatch(setFilteredQuestions(filtered));
      setShowFilteredHeaders(filtered.length > 0);
      e.target.value = '';
    }
  };

  const handleDelete = async (id, base) => {
    if (!isAdmin) return; // Предотвращаем удаление для не-админов
    try {
      const response = await fetch(`/api/${base}/questions/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      dispatch(setQuestions(questions.filter((q) => q._id !== id)));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2>Filter</h2>
        <input
          type='text'
          placeholder='filter'
          onKeyPress={handleFilterChange}
          className={styles.filterInput}
        />
        <h3>Filter of Questions</h3>
        {showFilteredHeaders && (
          <div className={styles.filteredHeader}>
            <span>Base</span>
            <span>Question</span>
          </div>
        )}
        <div className={styles.filteredQuestions}>
          {filteredQuestions.map((q) => (
            <div key={q._id} className={styles.questionItem}>
              <span>{q.base}</span>
              <span>{highlightText(q.question, filter)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2>List of Questions</h2>
        <div className={styles.questionsHeader}>
          <span>Base</span>
          <span>Question</span>
          <span>Action</span>
        </div>
        <div className={styles.questions}>
          {questions.map((q) => (
            <div key={q._id} className={styles.questionItem}>
              <span>{q.base}</span>
              <span>{q.question}</span>
              {isAdmin && (
                <button
                  onClick={() => handleDelete(q._id, q.base)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
