// hooks/useQuestions.js
import { useState, useEffect } from 'react';

const useQuestions = (apiEndpoint) => {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(apiEndpoint);
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
      const response = await fetch(apiEndpoint, {
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchQuestions();
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return {
    name,
    setName,
    question,
    setQuestion,
    questions,
    handleSubmit,
    handleDelete,
  };
};

export default useQuestions;
