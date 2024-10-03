// components/QuestionSection.js
import useQuestions from '../hooks/useQuestions';
import styles from '../styles/QuestionSection.module.css';

const QuestionSection = ({ apiEndpoint, title, isAdmin }) => {
  const {
    name,
    setName,
    question,
    setQuestion,
    questions,
    handleSubmit,
    handleDelete,
  } = useQuestions(apiEndpoint);

  return (
    <div className={styles.questionSection}>
      <h2>{title}</h2>

      {/* Форма для отправки вопроса */}
      <form onSubmit={handleSubmit} className={styles.askQuestionForm}>
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
          className={styles.questionInput}
        />
        <button type='submit' className={styles.sendButton}>
          Send
        </button>
      </form>

      {/* Список вопросов */}
      <div className={styles.questionsList}>
        <h3>List of Questions</h3>
        <div className={styles.questionsHeader}>
          <span>Name</span>
          <span>Question</span>
          <span>Action</span>
        </div>
        <div className={styles.questionsContent}>
          {questions.map((q) => (
            <div key={q._id} className={styles.questionItem}>
              <span>{q.name}</span>
              <span>{q.question}</span>
              {isAdmin && (
                <button
                  onClick={() => handleDelete(q._id)}
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
};

export default QuestionSection;
